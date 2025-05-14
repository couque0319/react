# React Event Handler

## 📚 개요
React에서의 이벤트 핸들러(Event Handler)는 사용자 인터페이스에서 발생하는 이벤트(예: 클릭, 입력 등)에 대한 응답으로 실행되는 함수입니다. React는 DOM 이벤트와는 다른 방식으로 이벤트를 처리하며, `SyntheticEvent`라는 래퍼 객체를 사용합니다.

## 🧩 1. 기본 개념
- **Event**: 사용자가 버튼을 클릭한 것과 같은 사건
- **Event Handler**: 이벤트에 반응하여 실행되는 함수
- **React에서의 이벤트 작성법**:
```jsx
<button onClick={activate}>Activate</button>
```

## ✍️ 2. 기본 이벤트 핸들러 사용법
```jsx
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```
- JSX에서는 camelCase 형식으로 이벤트 속성을 작성

## 🧾 3. 이벤트 객체 사용 (SyntheticEvent)
```jsx
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
```

## 🏛️ 4. 클래스 컴포넌트에서 이벤트 핸들러
바인딩 필수:
```jsx
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("클릭!");
  }
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

클래스 필드 문법 사용 가능:
```jsx
handleClick = () => {
  alert("클릭!");
}
```

## 📤 5. 인자 전달 방법
```jsx
<button onClick={() => handleClick("홍길동")}>클릭</button>
```

클래스 컴포넌트에서는 .bind 사용:
```jsx
<button onClick={this.handleClick.bind(this, "홍길동")}>클릭</button>
```

## 🔁 6. 상태 변경
```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>증가</button>
```

## 🛑 7. 기본 이벤트 방지 (preventDefault)
```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("제출이 방지되었습니다.");
}
```

## 🚫 8. 이벤트 전파 중지 (stopPropagation)
```jsx
function handleChildClick(event) {
  event.stopPropagation();
  alert("자식 클릭!");
}
```

## 🚀 9. 이벤트 핸들러 최적화 (useCallback)
```jsx
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

## 🧪 10. 예제 코드 (클래스 컴포넌트)
```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prev) => ({ isToggleOn: !prev.isToggleOn }));
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "켜짐" : "꺼짐"}</button>;
  }
}
```

## ⚙️ 11. DOM 이벤트 vs React 이벤트
| 항목 | DOM 이벤트 | React 이벤트 |
|------|------------|-------------|
| 등록 방식 | addEventListener | JSX 속성(onClick 등) |
| 이벤트 객체 | Event 객체 (MouseEvent 등) | SyntheticEvent |
| 이벤트 제거 | removeEventListener 필요 | 자동 제거 |
| 전파 방식 | 버블링 | 버블링 |
| 최적화 | 수동 최적화 | useCallback으로 가능 |
| 이벤트 위임 | 수동 설정 | document에서 자동 위임 |

- event.persist()를 통해 SyntheticEvent 풀링 방지 필요
- onClickCapture 사용 시 캡처링 처리 가능

## 🧰 12. 실습 예제
클래스형:
```jsx
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isConfirmed: false };
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm() {
    this.setState((prev) => ({ isConfirmed: !prev.isConfirmed }));
  }
  render() {
    return <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
      {this.state.isConfirmed ? "확인됨" : "확인하기"}
    </button>;
  }
}
```

함수형:
```jsx
function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => setIsConfirmed((prev) => !prev);
  return <button onClick={handleConfirm} disabled={isConfirmed}>
    {isConfirmed ? "확인됨" : "확인하기"}
  </button>;
}
```
