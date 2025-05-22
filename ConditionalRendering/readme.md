

# React - Conditional Rendering

## 개요
조건부 렌더링은 **특정 조건에 따라 UI를 변경**하는 React의 핵심 기능입니다. 
사용자의 입력, 데이터 상태에 따라 콘텐츠를 동적으로 제어할 수 있습니다.

---

## Truthy와 Falsy
자바스크립트에서는 조건문에서 Boolean이 아닌 값도 `true` 또는 `false`처럼 작동합니다.

- Falsy 값: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
- Truthy 값: `"hello"`, `" "`, `3.14`, `-100`, `Infinity`, `[]`, `{}`, `function(){}`

```js
if (0) {
  console.log("참입니다!");
} else {
  console.log("거짓입니다!"); // 실행
}
```

---

## Truthy, Falsy 활용 예

```js
// OR (||)
console.log(false || "안녕"); // "안녕"

// AND (&&)
console.log(true && "안녕"); // "안녕"

// Null 병합 (??)
let user;
console.log(user ?? "기본 사용자"); // "기본 사용자"
```

---

## 엘리먼트 변수 (Element Variables)

JSX를 변수로 저장하여 조건부 렌더링에 활용:

```jsx
const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
return <div>{greeting}</div>;
```

```jsx
const itemList = items.map((item, index) => <li key={index}>{item}</li>);
```

---

## 인라인 조건 (Inline Condition)

### 삼항 연산자
```jsx
let message = isLoggedIn ? "환영합니다!" : "로그인이 필요합니다.";
```

### && 연산자
```jsx
isLoggedIn && console.log("로그인 성공!");
```

### || 연산자
```jsx
let username = inputName || "Guest";
```

---

## 조건부 렌더링 방식

### 삼항 연산자
```jsx
<h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>
```

### 논리 연산자 &&

```jsx
{hasMessage && <p>새로운 메시지가 도착했습니다.</p>}
```

### if문 + 컴포넌트 분기
```jsx
return isLoggedIn ? <Welcome /> : <PleaseLogin />;
```

### 즉시 실행 함수 (IIFE)
```jsx
{(() => {
  if (!user) return <p>사용자 정보 없음</p>;
  return <p>사용자: {user.name}</p>;
})()}
```

### switch 문
```jsx
switch (status) {
  case "success": return <p>성공</p>;
  case "error": return <p>오류</p>;
  case "loading": return <p>로딩 중</p>;
  default: return <p>알 수 없음</p>;
}
```

---

## 상태 변경 + 조건부 렌더링

```jsx
const [isVisible, setIsVisible] = useState(false);
{isVisible && <p>이 메시지가 보입니다!</p>}
```

---

## 실습 예제

### 1. 버튼 클릭시 메시지 변경

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
<h1>{isLoggedIn ? '환영합니다!' : '로그인 해주세요.'}</h1>
<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
  {isLoggedIn ? '로그아웃' : '로그인'}
</button>
```

### 2. 함수로 조건 분리

```jsx
const renderContent = () => {
  if (isLoggedIn) return <h1>환영합니다!</h1>;
  return <h1>로그인 해주세요.</h1>;
};
```

### 3. Toolbar 컴포넌트로 분리

```jsx
<Toolbar
  isLoggedIn={isLoggedIn}
  onClickLogin={onClickLogin}
  onClickLogout={onClickLogout}
/>
```

---
