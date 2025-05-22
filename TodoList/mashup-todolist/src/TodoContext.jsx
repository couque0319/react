import React, { createContext, useContext, useReducer, useRef } from 'react';

// 초기 데이터
const initialTodos = [
  { id: 1, text: '프로젝트 생성하기', done: true },
  { id: 2, text: '컴포넌트 스타일링하기', done: true },
  { id: 3, text: 'Context 만들기', done: false },
  { id: 4, text: '기능 구현하기', done: false },
];

// 리듀서
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// Provider 컴포넌트
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 커스텀 Hook: State
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('useTodoState는 TodoProvider 안에서만 사용할 수 있어요!');
  }
  return context;
}

// 커스텀 Hook: Dispatch
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('useTodoDispatch는 TodoProvider 안에서만 사용할 수 있어요!');
  }
  return context;
}

// 커스텀 Hook: NextId
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('useTodoNextId는 TodoProvider 안에서만 사용할 수 있어요!');
  }
  return context;
}
