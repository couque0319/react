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
- 객체 또는 배열이 불필요하게 재생성될 때
- 의존성이 변경되지 않는 한 동일한 값을 유지해야 할 때

#### 사용하지 않아도 되는 경우
- 간단한 연산이거나 최적화할 필요가 없을 때
- 값이 자주 바뀌는 경우 오히려 성능 저하 가능
- useEffect와 혼동하여 잘못 사용하는 경우

#### useMemo() Hook 사용 시 주의 사항
- 과도한 사용: 모든 값을 memoization하려고 하면 오히려 성능 저하를 유발할 수 있습니다. 필요한 경우에만 사용하는 것이 좋습니다.
- 의존성 배열: 의존성 배열을 올바르게 지정하여 불필요한 계산을 방지해야 합니다.
- 순수 함수: 값을 계산하는 함수는 반드시 순수 함수여야 합니다. 즉, 외부 값에 영향을 주거나 외부 값을 변경해서는 안 됩니다.

## useCallback()

- useCallback is a React Hook that lets you cache a function definition between re-renders.
- useCallback() Hook은 함수 메모이제이션을 제공합니다.
- 메모이제이션이란 특정 함수를 호출했을 때, 해당 함수의 인수가 변경되지 않았다면 이전에 계산된 함수를 재사용하는 것을 의미합니다.
- 즉, 컴포넌트가 리렌더링될 때 동일한 함수가 다시 생성되지 않도록 최적화하는 데 사용됩니다.
- useCallback() Hook은 컴포넌트가 다시 렌더링될 때마다 불필요하게 새로운 함수를 생성하는 것을 방지하여 성능을 최적화합니다.

```javascript
const cachedFn = useCallback(fn, dependencies)

const memoizedCallback = useCallback(
  () => {
    // 콜백 로직
  },
  [dependencyArray], // 의존성 배열
);
```

- `useCallback(() => { ... }, [dependencyArray])`: Hook을 호출하여 메모이제이션된 함수를 생성합니다.
  - `() => { ... }`: 함수입니다. 이 함수는 순수 함수여야 하며, 인수로 전달된 값에만 의존해야 합니다.
  - `[dependencyArray]`: 의존성 배열입니다. 이 배열에 포함된 값들이 변경될 때만 함수가 다시 생성됩니다.

※컴포넌트 내에서 정의한 함수를 자식 컴포넌트에 props로 넘겨서 사용하는 경우에 부모 컴포넌트가 다시 랜더링이 되면 매번 자식 컴포넌트도 다시 랜더링이 됩니다. 하지만 useCallback을 사용하면 특정 변수의 값이 변한 경우에만 함수를 다시 정의하게 되므로 함수가 다시 정의되지 않는 경우에는 자식 컴포넌트도 다시 랜더링이 일어나지 않습니다※

### 언제 useCallback()을 사용해야 할까?

#### 사용해야 하는 경우
- 자식 컴포넌트에 함수(props)를 전달할 때
- 이벤트 핸들러 함수가 불필요하게 재생성될 때
- 의존성이 자주 바뀌지 않는 경우

#### 사용하지 않아도 되는 경우
- 단순한 함수는 사용하지 않아도 됨
- useCallback을 과도하게 사용하면 오히려 성능이 저하될 수 있음
- 함수를 자주 생성해도 성능에 큰 영향을 주지 않는 경우

#### useCallback() Hook 사용 시 주의 사항
- 과도한 사용: 모든 함수를 useCallback()으로 감싸는 것은 오히려 성능 저하를 유발할 수 있습니다. 필요한 경우에만 사용하는 것이 좋습니다.
- 의존성 배열: 의존성 배열을 올바르게 지정하여 불필요한 함수 생성을 방지해야 합니다.
- 순수 함수: 함수는 반드시 순수 함수여야 합니다. 즉, 외부 값에 영향을 주거나 외부 값을 변경해서는 안 됩니다.

#### useCallback() Hook의 장점
- 렌더링 성능 최적화: 불필요한 함수 생성을 방지하여 컴포넌트 렌더링 성능을 향상시킵니다.
- 메모리 절약: 함수 재사용을 통해 메모리 사용량을 줄입니다.

## useRef()

- useRef is a React Hook that lets you reference a value that's not needed for rendering.
- Reference란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
- refObject.current : 현재 참고하고 있는 Element
- useRef는 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발하지 않는 변수를 저장하는 데 사용됩니다.
- useRef() Hook은 변경 가능한 ref 객체를 반환합니다.
- 이 객체의 .current 속성을 통해 DOM 요소에 직접 접근하거나, 컴포넌트가 다시 렌더링되어도 유지되는 값을 저장할 수 있습니다.

```javascript
const ref = useRef(initialValue)
```

- initialValue: useRef가 초기화될 때 설정할 값입니다. 이 값은 current 프로퍼티에 저장됩니다.

## Hook의 규칙

1. Hook은 무조건 최상위 레벨에서만 호출해야 한다.
   - Hook은 컴포넌트가 랜더링될 때마다 매번 같은 순서로 호출되어야 합니다.
2. 리액트 함수 콤포넌트에서만 Hook을 호출해야 합니다.

## Custom Hook

- 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수입니다.
- 여러 컴포넌트에서 공통적으로 필요한 로직을 추출하여 코드의 중복을 줄이고, 유지보수를 용이하게 합니다.
- 반복적으로 사용되는 로직을 재사용 가능하도록 추출한 함수입니다.
- React의 기본 Hook(useState, useEffect, useRef 등)을 조합하여 새로운 기능을 만들 수 있습니다.
- use로 시작하는 이름을 사용해야 합니다.
- 내부에서 React의 다른 Hook을 사용할 수 있습니다.
- 컴포넌트가 아닌 일반 함수이므로 렌더링과 관련 없는 로직도 포함할 수 있습니다.
- Custom Hook을 활용하면 React 애플리케이션에서 반복되는 로직을 재사용 가능하게 분리할 수 있습니다.
- 컴포넌트의 복잡도를 줄이고 유지보수를 쉽게 만들기 위해 적극적으로 활용하는 것이 좋습니다!
