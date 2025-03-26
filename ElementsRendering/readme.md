# ⚛️ React Elements & Rendering

---

## 📌 React Element란?

- React 앱을 구성하는 **가장 작은 단위**
- **JavaScript 객체 형태의 Virtual DOM 요소**
- 실제 DOM에 직접 접근하지 않고, React가 이를 바탕으로 **렌더링 최적화** 수행
- React Element는 HTML 요소와 유사하지만, 실제 DOM은 아님

---

## 🧱 React Element의 구조

- **type**: HTML 태그 이름 또는 React 컴포넌트
- **props**: 속성 값 (예: `id`, `className`, `onClick` 등)
- **children**: 자식 요소들

React는 내부적으로 `React.createElement()` 함수를 통해 이 객체를 생성하고, 이를 기반으로 UI를 그려냄.

---

## 🔒 React Element의 특징

- **불변 객체 (Immutable)**: 한 번 생성된 Element는 수정할 수 없음
- UI를 업데이트하려면 **새로운 Element를 생성**해서 교체해야 함
- React는 기존 Element와 새 Element를 **비교(diffing)**하여 변경된 부분만 업데이트

---

## 🧠 Diffing (변경 감지 알고리즘)

- React는 상태(state)나 속성(props)의 변화가 발생하면 **새로운 Virtual DOM을 생성**
- 새 Virtual DOM과 이전 Virtual DOM을 **비교(Diffing)**하여 어떤 부분이 변경되었는지 판단
- 변경된 부분만 실제 DOM에 **최소한으로 업데이트**하여 성능을 최적화

---

## 🔁 Rendering 과정 요약

1. **초기 렌더링**
   - 앱이 실행되면 컴포넌트가 렌더링되고 Virtual DOM 생성
   - Virtual DOM을 기반으로 실제 DOM 구성

2. **상태 변화**
   - 컴포넌트의 상태(state) 또는 속성(props)이 변경되면 새로운 Virtual DOM 생성

3. **비교 (Diffing)**
   - 이전 Virtual DOM과 새로운 Virtual DOM을 비교하여 변경된 부분 탐지

4. **업데이트**
   - 변경된 부분만 실제 DOM에 반영하여 효율적 렌더링 수행

---

## 🧩 React Element 생성 방식

- **JSX 문법 사용**
  - HTML과 유사한 문법으로 작성
  - **`class`는 `className`으로 작성**
  - JSX 문법은 Babel에 의해 `React.createElement()`로 변환됨

- **React.createElement() 직접 호출**
  - JSX 없이 수동으로 Element 생성 가능

---

## 🧠 React Element vs Component

| 구분              | React Element                          | React Component                            |
|-------------------|-----------------------------------------|--------------------------------------------|
| 정의              | UI의 가장 작은 단위                    | 여러 Element를 포함하는 독립적 UI 블록     |
| 형태              | 변경 불가능한 객체 (immutable)         | 함수 또는 클래스                           |
| 사용 목적         | 화면 구조 표현                         | 로직, 재사용, 상태 관리 등 UI 전체 구성    |
| 재사용성          | 없음                                   | 있음                                       |
| 리렌더링 방식     | 새 Element를 생성하여 교체             | 상태 변화 시 자동 리렌더링                 |

> 🔍 **추가 설명**  
> - **Element는 Component에 의해 생성**되며,  
>   Component는 여러 개의 Element를 조합하여 **하나의 UI 단위**를 구성합니다.  
> - **Element는 UI의 가장 작은 표현 단위**이고,  
>   **Component는 이러한 Element들을 묶어 재사용 가능한 UI 모듈**로 만들어줍니다.  
> - 일반적으로 Element는 **Component 내부에서 사용**되며,  
>   하나의 Component는 **여러 개의 Element를 반환**하여 복잡한 화면을 구성합니다.

---

## 🖥️ ReactDOM과 Root DOM Node

- ReactDOM은 React Element를 **실제 브라우저 DOM에 렌더링**하는 역할을 수행
- React 앱은 일반적으로 하나의 **Root DOM Node**에 렌더링됨
- Root DOM Node는 HTML 파일(`public/index.html`)에 존재하는 **`<div id="root">`** 요소이며,  
  React 앱이 **실제로 브라우저에 표시되는 위치를 지정하는 중요한 요소**

---

## 📌 ReactDOM 렌더링 순서 (React 18 기준)

1. `document.getElementById("root")`로 **Root DOM Node 선택**
2. `ReactDOM.createRoot()`로 **React 앱의 루트 설정**
3. `root.render(<App />)`로 **최상위 컴포넌트(App)를 렌더링**

---

## 📝 예시 흐름

```text
📂 public
└── index.html
     └── <div id="root"></div>  ← Root DOM Node (React 앱 렌더링 위치)

📂 src
├── index.js
│   └── ReactDOM.createRoot(document.getElementById("root"))
│       root.render(<App />)
└── App.js
    └── UI를 구성하는 최상위 컴포넌트
```

<p align="left">
  <img src="https://github.com/user-attachments/assets/ce08b080-13fe-4160-ad15-6a6dd4156ad9" width="600">
</p>  

---

## 🌐 React Frontend Application 구조

React 애플리케이션은 브라우저에서 동작하는 UI를 구성하기 위한 프론트엔드 구조로,  
HTML의 Root DOM Node에 React 요소를 렌더링하고, 상태 변화에 따라 자동으로 화면을 업데이트합니다.

<p align="left">
  <img src="https://github.com/user-attachments/assets/6a5e62e4-3880-4dfd-b4bc-260836c8c7a4" width="600">
</p> 

---

## ⏱️ React로 DOM 변경하기 - 바이너리 시계 예제

---

### 📌 핵심 개념

- 일반적인 DOM 조작은 전체를 다시 그리지만,  
  **React는 Virtual DOM을 사용하여 변경된 부분만 효율적으로 업데이트**합니다.
- 이로 인해 **화면 처리 속도는 빨라지고, 애플리케이션이 부드럽게 작동**하게 됩니다.
- `ReactDOM.render()`를 호출할 때도 **변경된 부분만 실제 DOM에 반영**됩니다.

---

### 💡 바이너리 시계 설명

- 이 예제는 현재 시각을 2진수(Binary) 형태로 시각화하는 React 앱입니다.
- `update()` 함수가 매초 실행되어 시간을 갱신합니다.
- `z2()` 함수는 시, 분, 초를 항상 두 자리로 맞추고,
- 각 자릿수를 `toString(2)`로 이진수로 변환합니다.
- JSX 문법을 통해 화면에 렌더링할 React Element들을 생성하고 배열로 관리한 뒤,
- 최종적으로 `ReactDOM.render()`를 통해 DOM을 업데이트합니다.

---

### 🧪 동작 확인 포인트

- 개발자 도구로 DOM의 변화를 확인하면,  
  전체 DOM이 다시 그려지지 않고 **바뀐 부분만 강조**되며 갱신됨을 볼 수 있습니다.
- 이는 React가 내부적으로 **Diffing 알고리즘**을 사용해 변경된 부분만 업데이트하기 때문입니다.

---

### 💻 예제 코드 (Binary Clock)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
  <style>
    body {
      font-size: 32px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div><div id="disp"></div></div>

  <script type="text/babel">
    // 정기적으로 화면을 변경하게 지정합니다.
    setInterval(update, 1000)

    function update () {
      // 현재 시간을 이진 숫자로 변환합니다. ---- (※1)
      const now = new Date()
      const hh = z2(now.getHours())
      const mm = z2(now.getMinutes())
      const ss = z2(now.getSeconds())
      const binStr = hh + mm + ss

      const style0 = { color: 'brown' }
      const style1 = { color: 'red' }
      const lines = []

      // 이진 숫자를 구성하는 리액트 객체를 lines 배열에 추가합니다. --- (※2)
      for (let i = 0; i < binStr.length; i++) {
        const v = parseInt(binStr.substr(i, 1))
        const bin = "0000" + v.toString(2)
        const bin8 = bin.substr(bin.length - 4, 4)

        for (let j = 0; j < bin8.length; j++) {
          if (bin8[j] === '0') {
            lines.push(<span style={style0}>○</span>)
          } else {
            lines.push(<span style={style1}>●</span>)
          }
        }
        lines.push(<br />)
      }

      // DOM의 내용을 변경합니다. --- (※3)
      const disp = document.getElementById('disp')
      ReactDOM.render(<div>{lines}</div>, disp)
    }

    function z2 (v) {
      v = String("00" + v)
      return v.substr(v.length - 2, 2)
    }
  </script>
</body>
</html>

```

<p align="left">
  <img src="https://github.com/user-attachments/assets/843d56b2-1376-4329-85b2-426bfccbe503" width="600"><br>
  <em>바이너리 시계 실행 모습</em>
</p>


---

> ✅ 이 예제를 통해 React가 실제 DOM 전체를 다시 그리지 않고 필요한 부분만 업데이트한다는 개념을 명확히 이해할 수 있습니다.
