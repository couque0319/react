# React Hooks

## useEffect()

- useEffect is a React Hook that lets you synchronize a component with an external system.
- useEffect() Hook은 함수형 컴포넌트 내에서 부수 효과(side effect)를 수행할 수 있도록 해줍니다.
- 부수 효과란 컴포넌트의 주요 기능 외에 추가적으로 실행되는 작업을 의미하며, 데이터 fetching, 구독, DOM 직접 조작, 타이머 설정 등이 대표적입니다.
- 클래스형 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount를 대체합니다.
- useEffect는 두 개의 인자를 받습니다. 첫 번째 인자는 사이드 이펙트를 수행하는 함수이고, 두 번째 인자는 의존성 배열입니다. 의존성 배열은 이펙트가 실행될 조건을 정의합니다.

### useEffect() 개념

| 개념 | 코드 | 설명 |
|------|------|------|
| 처음 한 번만 실행 | `useEffect(() => {...}, [])` | 마운트 시 실행, 언마운트 시 정리 |
| 특정 상태가 변경될 때 실행 | `useEffect(() => {...}, [state])` | state 값이 바뀔 때 실행 |
| 매 렌더링마다 실행 | `useEffect(() => {...})` | 의존성 배열이 없으면 렌더링마다 실행 |
| 언마운트 시 실행 | `useEffect(() => { return () => {...}; }, [])` | 컴포넌트가 제거될 때 실행 |

## useMemo()

- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- useMemo() Hook은 memoization된 값을 반환합니다.
- memoization이란 특정 값을 계산하는 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 값을 재사용하는 것을 의미합니다.
- 즉, useMemo() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요한 계산을 반복하는 것을 방지하여 성능을 최적화합니다.

```javascript
const cachedValue = useMemo(calculateValue, dependencies)

const memoizedValue = useMemo(() => {
  return 계산할 값;
}, [의존성 배열]);
```

- 첫 번째 인자: 계산할 함수 (값을 반환하는 함수)
- 두 번째 인자: 의존성 배열 ([])
- 배열 내 값이 변경될 때만 함수가 실행됨
- 값이 변경되지 않으면 이전 결과를 재사용

### useMemo 추가 설명

- useMemo에 전달된 함수는 렌더링이 일어나는 동안에만 실행이 됩니다.
- 랜더링이 일어날 동안에 실행되어서는 안될 작업을 useMemo에 넣어서는 안됩니다.
- 예를 들어 useEffect에서 실행되어야 할 side effect 함수 중에서 랜더링 동안에 실행되어서는 안되는 것들은 useMemo에 넣으면 안됩니다.
- 의존성 배열을 넣지 않을 경우, 매 랜더링마다 함수가 실행됩니다.

```javascript
const memoizedValue = useMemo(
  ()=> computeExpensiveValue(a, b)
);
```

- 따라서 의존성 배열을 넣지 않을 경우, 아무 의미가 없습니다.
- 의존성 배열이 빈 배열일 경우에는 컴포넌트 마운트 시에만 호출됩니다.

```javascript
const memoizedValue = useMemo(
  () => {
    return computeExpensiveValue(a, b);
  }, []
);
```

- 마운트 시에 값을 변경할 필요가 있을 때 사용합니다.

### useMemo 사용 지침

#### 사용해야 하는 경우
- 연산 비용이 큰 계산을 반복할 때
