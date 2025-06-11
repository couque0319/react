
# React Lists & Keys, Forms

## 1. Lists & Keys

### 개요
- 배열 형태의 데이터를 사용하여 여러 개의 컴포넌트를 효율적으로 렌더링
- 각 컴포넌트를 고유하게 식별하기 위해 키(key)라는 특별한 속성을 사용

### map() 함수

#### 기본 개념
- 배열(Array)의 각 요소를 변환하여 새로운 배열을 생성하는 JavaScript의 배열 메서드
- 원본 배열을 변경하지 않고, 새로운 배열을 반환
- React에서 리스트를 동적으로 렌더링할 때 필수적으로 사용

#### 문법
```javascript
array.map(callbackFunction(currentValue, index, array), thisArg);
```

**매개변수 설명:**
- `array`: map() 함수를 호출하는 원본 배열
- `callbackFunction`: 각 요소에 대해 실행할 함수
  - `currentValue`: 현재 처리 중인 배열 요소
  - `index` (선택사항): 현재 처리 중인 요소의 인덱스
  - `array` (선택사항): map() 함수를 호출한 원본 배열
- `thisArg` (선택사항): callbackFunction 내부에서 this로 사용할 값

#### map() 함수 예시

**기본 사용법**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

**객체 배열 처리**
```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']
```

**인덱스 사용**
```javascript
const numbers = [10, 20, 30];
const indexedNumbers = numbers.map((num, index) => `${index}: ${num}`);
console.log(indexedNumbers); // ['0: 10', '1: 20', '2: 30']
```

**React에서의 사용**
```javascript
const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Keys의 중요성

#### 키(Key)란?
- 각 객체나 아이템을 구분할 수 있는 고유한 값
- React에서 아이템들을 구분하기 위한 고유한 문자열
- React가 어떤 항목이 변경, 추가, 제거되었는지 식별하는 데 사용
- 리스트를 효율적으로 업데이트할 수 있게 함

#### 키 사용 방법

**비추천: 인덱스를 key로 사용**
```javascript
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li> // index를 key로 사용 (비추천)
      ))}
    </ul>
  );
}
```

**추천: 고유한 ID를 key로 사용**
```javascript
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li> // ID를 key로 사용 (추천)
      ))}
    </ul>
  );
}
```

### 실습 예제: AttendanceBook

```javascript
import React from "react";

const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Jeff" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
```

## 2. Forms

### 개요
- 사용자의 입력을 처리하고 데이터를 서버로 전송하는 데 사용
- React의 상태 관리 및 이벤트 처리 기능을 활용하여 강력하고 유연하게 작동

### Form 구성 요소
- `<form>` 태그: Form 전체를 감싸는 태그
- `<input>`, `<textarea>`, `<select>` 등의 입력 요소
- `onChange` 이벤트 핸들러: 입력 요소의 값이 변경될 때 호출
- `onSubmit` 이벤트 핸들러: Form이 제출될 때 호출
- 상태(State): 입력 요소의 값을 저장하고 관리하는 변수

### Form 작동 방식
1. 초기 상태 설정: 각 입력 요소의 초기값을 상태로 설정
2. 입력 요소 렌더링: 상태를 기반으로 입력 요소를 렌더링
3. onChange 이벤트 처리: 사용자가 입력할 때마다 상태 업데이트
4. onSubmit 이벤트 처리: Form 제출 시 데이터 처리
5. 상태 업데이트 및 렌더링: 서버 응답에 따라 UI 업데이트

### Controlled Components vs HTML Form

**HTML Form (기본)**
```html
<form>
  <label>
    이름:
    <input type="text" name="name" />
  </label>
  <button type="submit">제출</button>
</form>
```

**Controlled Component (React)**
```javascript
function NameForm(props) {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    alert('입력한 이름 : ' + value);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```

### 기본 Form 사용법

```javascript
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    alert(`입력된 이름: ${name}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

### TextArea 사용

```javascript
function RequestForm(props) {
  const [value, setValue] = useState('요청사항을 입력하세요:');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    alert('입력한 요청사항: ' + value);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

### Select 태그 사용

```javascript
function FruitSelect(props) {
  const [value, setValue] = useState('grape');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    alert('선택한 과일: ' + value);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요:
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 공통 사용 패턴

```javascript
// input 태그
<input type="text" value={value} onChange={handleChange} />

// textarea 태그
<textarea value={value} onChange={handleChange} />

// select 태그
<select value={value} onChange={handleChange}>
  <option value="apple">사과</option>
  ...
</select>
```

### Multiple Inputs 처리

**여러 개의 state 사용**
```javascript
function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);
  
  const handleSubmit = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={(event) => {
            setHaveBreakfast(event.target.checked);
          }} 
        />
      </label>
      <br/>
      <label>
        방문객 수:
        <input
          type="number"
          value={numberOfGuest}
          onChange={(event) => {
            setNumberOfGuest(event.target.value);
          }} 
        />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

**객체 상태 사용 (효율적)**
```javascript
import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("입력된 데이터:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        이메일: 
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
```

### 고급 Form 요소들

```javascript
import { useState } from "react";

function AdvancedForm() {
  const [form, setForm] = useState({
    username: "",
    gender: "male",
    agree: false,
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 데이터:", form);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input 
          type="text" 
          name="username"
          value={form.username} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        성별:
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </label>
      <br />
      <label>
        동의: 
        <input 
          type="checkbox" 
          name="agree"
          checked={form.agree} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
```

### 비제어 컴포넌트 (Uncontrolled Component)

```javascript
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력된 값: ${inputRef.current.value}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">제출</button>
    </form>
  );
}
```

### 실습 예제: SignUp

```javascript
import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  
  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
```

## 핵심 포인트

### Lists & Keys
- `map()` 함수를 사용하여 배열을 JSX 요소로 변환
- 각 리스트 아이템에는 고유한 `key` 속성이 필요
- 가능하면 인덱스보다는 고유한 ID를 key로 사용

### Forms
- Controlled Components를 사용하여 Form 상태 관리
- `useState`를 사용하여 입력값 상태 관리
- `event.preventDefault()`로 기본 제출 동작 방지
- 여러 입력 필드는 객체 상태로 효율적으로 관리 가능
