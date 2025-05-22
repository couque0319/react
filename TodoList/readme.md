

# React - TODO List 앱 구현 요약

## 📦 프로젝트 시작
```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add react-icons styled-components
```

---

## 🧩 컴포넌트 구성

### 1. `TodoTemplate`
- 페이지 레이아웃을 중앙에 배치한 흰색 박스

### 2. `TodoHead`
- 오늘의 날짜, 요일, 남은 할 일 개수 표시

### 3. `TodoList`
- todos 배열을 `map()`을 통해 각 TodoItem 렌더링

### 4. `TodoItem`
- 할 일 항목 표시, 클릭 시 완료 toggle, 삭제 기능 포함

### 5. `TodoCreate`
- 초록 버튼 클릭 → 입력 폼 토글 + 새 항목 추가

---

## 🖌️ 스타일 초기화
`createGlobalStyle`을 사용한 배경 설정
```js
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

---

## ✨ 주요 컴포넌트 예시

### TodoTemplate.jsx
```js
const TodoTemplateBlock = styled.div`...`;
function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
```

### TodoHead.jsx
```js
const todos = useTodoState();
const undoneTasks = todos.filter(todo => !todo.done);
const today = new Date();
const dateString = today.toLocaleDateString('ko-KR', {...});
const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
```

### TodoItem.jsx
```js
function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  ...
}
```

### TodoCreate.jsx
```js
const [open, setOpen] = useState(false);
const [value, setValue] = useState('');
const dispatch = useTodoDispatch();
const nextId = useTodoNextId();

const onSubmit = e => {
  e.preventDefault();
  dispatch({ type: 'CREATE', todo: { id: nextId.current, text: value, done: false } });
  setValue('');
  setOpen(false);
  nextId.current += 1;
};
```

---

## 🔄 Context API 및 상태 관리

### 1. Context 구성
```js
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
```

### 2. Provider 컴포넌트
```js
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
```

### 3. 커스텀 Hook
```js
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('Cannot find TodoProvider');
  return context;
}
```

---

## 🧪 기능 구현
- `TodoHead`: 완료되지 않은 항목 개수 표시
- `TodoList`: todos 배열 map으로 렌더링
- `TodoItem`: dispatch로 toggle, remove 처리
- `TodoCreate`: form 입력 후 dispatch로 생성

---
