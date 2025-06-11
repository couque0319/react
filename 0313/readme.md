# React & Create React App 가이드

## 📚 목차
- [npm vs npx](#npm-vs-npx)
- [Vite vs Webpack](#vite-vs-webpack)
- [리액트 프로젝트 생성](#리액트-프로젝트-생성)
- [JSX (JavaScript XML)](#jsx-javascript-xml)
- [JSX 사용법](#jsx-사용법)
- [실습: JSX 코드 작성](#실습-jsx-코드-작성)

## npm vs npx

### npm (Node Package Manager)
- Node.js 패키지를 설치, 관리하는 패키지 매니저
- package.json을 기반으로 프로젝트의 의존성을 관리
- 전역(global) 또는 로컬(local)로 패키지 설치 가능

### npx (Node Package Execute)
- npm 패키지를 실행하는 도구
- 패키지를 설치 없이 바로 실행 가능
- 프로젝트에 로컬로 설치된 패키지 실행 시에도 사용

| 구분 | npm | npx |
|------|-----|-----|
| 역할 | 패키지 관리 | 패키지 실행 |
| 패키지 설치 | 가능 | 불가능 |
| 패키지 관리 | 가능 | 불가능 |
| 패키지 실행 | 로컬/전역 설치된 패키지 | 설치 없이 실행, 특정 버전 실행 |
| 활용 목적 | 패키지 설치 및 관리 | 일회성 패키지 실행 |
| 사용 예제 | `npm install axios` | `npx create-react-app my-app` |

> **핵심**: npm은 패키지 관리용, npx는 패키지 실행용!

## Vite vs Webpack

### Vite
- 빠르고 효율적인 프론트엔드 개발 빌드 도구
- Webpack보다 빠른 개발 서버와 빌드 속도 제공
- React, Vue, Svelte 등 다양한 프레임워크 지원
- Vue.js 창시자 Evan You가 개발

| 구분 | Vite | Webpack |
|------|------|---------|
| 개발 서버 속도 | 빠름 (ESM 기반) | 느림 (번들링 필요) |
| HMR 지원 | 즉각적 반영 | 상대적으로 느림 |
| 번들링 방식 | 필요할 때만 빌드 | 전체 파일 번들링 |
| 설정 파일 | 간단 (vite.config.js) | 복잡 (webpack.config.js) |
| 사용성 | React, Vue, Svelte 등 | 대부분 프레임워크 지원 |

## 리액트 프로젝트 생성

### Vite 사용 (권장)
```bash
# Vite 프로젝트 생성
npm create vite@latest my-react-app1 --template react

# 프로젝트 폴더로 이동
cd my-react-app1

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### Create React App (CRA) 사용
```bash
# CRA로 프로젝트 생성
npx create-react-app my-react-app2

# 추가 패키지 설치 (필요시)
npm install web-vitals

# 프로젝트 폴더로 이동 및 실행
cd my-react-app2
npm start
```

### VS Code에서 시작하기
1. VS Code 실행
2. 폴더 생성 및 열기
3. 터미널 열기 (`Ctrl + ~`)
4. 프로젝트 생성 명령어 실행

```bash
# npm 사용 강제 옵션
npx create-react-app my-react-app3 --use-npm
cd my-react-app3
npm start
```

## JSX (JavaScript XML)

### JSX란?
> JavaScript XML - JavaScript 코드 안에서 HTML과 유사한 문법을 사용할 수 있도록 만든 문법 확장

- HTML과 JavaScript를 결합한 문법
- Babel을 이용해 JavaScript로 변환
- React 요소를 생성하는 데 사용
- JavaScript 표현식을 `{}`로 감싸서 사용 가능

### JSX 변환 예제
```jsx
// JSX 코드
const element = <h1>Hello, JSX!</h1>;

// Babel 변환 후 JavaScript
const element = React.createElement("h1", null, "Hello, JSX!");
```

### JSX vs 일반 JavaScript 비교

#### JSX 사용
```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

#### JSX 미사용
```javascript
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, JSX!"),
    React.createElement("p", null, "This is a JSX example.")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
```

| 비교 항목 | JSX 사용 | JSX 미사용 |
|-----------|----------|------------|
| 문법 | HTML과 유사 | JavaScript 함수 호출 형식 |
| 가독성 | 직관적이고 간결 | 복잡하고 가독성 낮음 |
| 요소 생성 방식 | 태그 사용 | React.createElement() 호출 |
| 유지보수 | 쉬움 | 어려움 (중첩 구조 복잡) |
| 변환 과정 | Babel이 JavaScript로 변환 | 직접 JavaScript 코드 작성 |

## JSX의 장점

### 1. 가독성과 직관성
```jsx
// JSX - 직관적
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>JSX를 사용하면 가독성이 좋아집니다.</p>
    </div>
  );
}

// JavaScript - 복잡
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, React!"),
    React.createElement("p", null, "JSX를 사용하면 가독성이 좋아집니다.")
  );
}
```

### 2. 간결하고 유지보수 용이
```jsx
// JSX - 간결
function List() {
  return (
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
    </ul>
  );
}

// JavaScript - 장황
function List() {
  return React.createElement(
    "ul",
    null,
    React.createElement("li", null, "React"),
    React.createElement("li", null, "Vue"),
    React.createElement("li", null, "Angular")
  );
}
```

### 3. JavaScript와 자연스러운 결합
```jsx
const name = "React";

// JSX
function Greeting() {
  return <h1>Hello, {name}!</h1>;
}

// JavaScript
function Greeting() {
  return React.createElement("h1", null, `Hello, ${name}!`);
}
```

### 4. 조건부 렌더링
```jsx
// JSX - 직관적
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}

// JavaScript
function Greeting({ isLoggedIn }) {
  return React.createElement(
    "h1",
    null,
    isLoggedIn ? "Welcome back!" : "Please log in"
  );
}
```

### 5. 스타일 및 이벤트 핸들링
```jsx
const buttonStyle = { backgroundColor: "blue", color: "white" };

// JSX
function Button() {
  return <button style={buttonStyle}>Click me</button>;
}

// JavaScript
function Button() {
  return React.createElement("button", { style: buttonStyle }, "Click me");
}
```

## JSX 사용법

### 1. 기본 구조
JSX는 **반드시 하나의 부모 요소로 감싸야** 합니다.

```jsx
// ✅ 올바른 방법 - div로 감싸기
function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </div>
  );
}

// ✅ 올바른 방법 - Fragment 사용
function App() {
  return (
    <>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </>
  );
}

// ❌ 잘못된 방법 - 여러 요소를 감싸지 않음
function App() {
  return (
    <h1>Hello, JSX!</h1>
    <p>React에서 JSX를 사용합니다.</p> // 에러 발생
  );
}
```

### 2. JavaScript 표현식
JSX 내부에서 JavaScript 표현식을 `{}`로 감싸서 사용합니다.

```jsx
// 변수 사용
const name = "React";
function App() {
  return <h1>Hello, {name}!</h1>;
}

// 계산식 사용
function App() {
  return <p>2 + 3 = {2 + 3}</p>;
}

// 함수 호출
function getGreeting(name) {
  return `Hello, ${name}!`;
}

function App() {
  return <h1>{getGreeting("React")}</h1>;
}
```

### 3. 속성(Props) 사용
```jsx
// 문자열 속성
const imgUrl = "https://via.placeholder.com/150";
function App() {
  return <img src={imgUrl} alt="Sample Image" />;
}

// 클래스 설정 (className 사용)
function App() {
  return <h1 className="title">Hello, JSX!</h1>;
}

// 스타일 객체 사용
const styleObj = { color: "blue", fontSize: "20px" };
function App() {
  return <h1 style={styleObj}>Styled Text</h1>;
}
```

### 4. 조건부 렌더링
```jsx
// 삼항 연산자
function App({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}

// && 연산자
function App({ isAdmin }) {
  return (
    <div>
      <h1>Hello, User!</h1>
      {isAdmin && <p>관리자 권한이 있습니다.</p>}
    </div>
  );
}
```

### 5. 반복문 (배열과 map())
JSX에서는 for문을 직접 사용할 수 없고, `map()` 메서드를 사용합니다.

```jsx
const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> // key 속성 필수!
      ))}
    </ul>
  );
}
```

> ⚠️ **중요**: `key` 속성을 반드시 추가해야 React가 효율적으로 렌더링할 수 있습니다.

### 6. 이벤트 처리
```jsx
// 클릭 이벤트
function App() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  
  return <button onClick={handleClick}>Click Me</button>;
}

// 입력 이벤트
function App() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  
  return <input type="text" onChange={handleChange} />;
}
```

### 프로젝트 설정
1. VS Code 실행
2. 터미널 열기 (`Ctrl + ~`)
3. 프로젝트 생성 및 이동
```bash
npx create-react-app react-app-ex01 --use-npm
cd react-app-ex01
```

### 파일 구조 생성
4. `src` 폴더에 `chapter_03` 폴더 생성
5. `chapter_03` 폴더에 파일들 생성

### Book.jsx
```jsx
import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  );
}

export default Book;
```

### Library.jsx
```jsx
import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
```

### index.js 수정
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

reportWebVitals();
```

### 실행
```bash
npm start
```

## 📝 요약

- **JSX**는 React에서 UI를 직관적으로 작성할 수 있게 해주는 JavaScript 확장 문법
- JSX 내부에서 `{}`를 사용하여 JavaScript 표현식 활용 가능
- 조건부 렌더링, 반복 렌더링, 이벤트 처리 등이 편리
- HTML과 유사하지만 `className`, `style={}` 등 JavaScript 규칙을 따름
- **Vite**가 CRA보다 빠른 빌드 속도를 제공하여 최근 더 선호됨
- **npx**는 패키지 실행용, **npm**은 패키지 관리용으로 구분하여 사용

---
