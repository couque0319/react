
# ⚛️ React Component와 State 정리 (전체)

## 📌 Component란?

- **재사용 가능한 UI 단위**, 웹 페이지를 구성하는 블록
- HTML, CSS, JavaScript, 상태(State), 속성(Props)을 포함한 **독립적 코드 블록**
- 페이지 전체는 컴포넌트 조합으로 구성
- **컴포넌트 이름은 반드시 대문자로 시작**해야 함

### ✅ Component의 특징
- `Props`를 입력받아 `React Element`를 출력
- **자바스크립트 함수처럼 작동**하여 엘리먼트를 반환
- 컴포넌트는 **계층적으로 구성 가능** (컴포넌트 안에 또 다른 컴포넌트)
- **재사용 가능성 높음** → 코드량 감소, 유지보수 효율 증가

> 🧩 UI 구성 퍼즐 조각처럼 컴포넌트를 조합하여 전체 페이지를 만들 수 있음

---

## 📦 Props (속성)

- **Component의 입력 값** (Property → 줄여서 Prop → 복수형으로 Props)
- 상위 컴포넌트가 하위 컴포넌트에 값 전달 (단방향)
- **읽기 전용 (Read-only)** → 자식 컴포넌트에서 수정 불가
- 다양한 타입 전달 가능: 문자열, 숫자, 객체, 컴포넌트 등

### 🔹 Props의 활용
1. JSX에서는 `{}`로 감싸 다양한 값 전달
2. 기본값 설정: `defaultProps`
3. 필수값 설정: `isRequired`
4. 불리언 값은 속성명만 작성해도 true로 전달
5. `props.children`을 활용해 컴포넌트 내부 컨텐츠 삽입
6. JSX를 사용하지 않는 경우 `React.createElement()` 사용 가능

---

## ⚙️ Component 사용법 (구조)

1. Component는 마치 **붕어빵 틀** → Props는 속 재료 → Element는 출력된 결과
2. 같은 컴포넌트라도 **다른 Props**로 다양한 결과 생성 가능
3. **컴포넌트는 함수처럼 작동**, HTML 요소 반환
4. 여러 개의 Element를 반환하여 UI 구성

---

## 🔗 Component vs Element

| 구분 | React Element | React Component |
|------|----------------|-------------------|
| 정의 | UI의 가장 작은 단위 | 여러 개의 Element를 포함한 블록 |
| 형태 | 불변 객체 | 함수 또는 클래스 |
| 사용법 | `<h1>Hello</h1>` | `function App() { return <h1>Hello</h1>; }` |
| 재사용성 | ❌ 불가능 | ✅ 가능 |
| 리렌더링 | 새 Element 필요 | 상태에 따라 자동 업데이트 |

> ✅ **Element는 Component에 의해 생성되고, Component는 Element들을 조합하여 UI를 구성합니다.**
> **Element는 UI의 가장 작은 단위이고, Component는 이들을 묶어 재사용 가능한 모듈입니다.**

---

## 🧱 Component Composition & Extraction

### 🧩 Component Composition
- **여러 컴포넌트를 조합**하여 복잡한 UI 구성
- 마치 레고 블록을 조립하듯 사용

### ✂️ Component Extraction
- 기존 컴포넌트에서 UI/로직을 분리해 **새 컴포넌트 생성**
- 코드 **재사용성 향상**, **유지보수 효율 증가**

---

## 💾 State (상태)

- **컴포넌트 내부에서 변경 가능한 데이터**를 관리
- 값이 변경되면 컴포넌트는 **자동으로 재렌더링**됨
- React Component의 **동적 데이터 표현**을 위한 객체
- `useState()` (함수형), `this.setState()` (클래스형)으로 변경 가능

### ✅ State의 특징
- 일반 변수와 다르게 **값이 변하면 UI 자동 반영**
- 컴포넌트 내부에서 정의 및 사용
- 사용자 이벤트나 내부 로직에 따라 변경 가능

### 🚫 일반 변수와의 차이
- 일반 변수는 변경되어도 UI 변경되지 않음
- State는 변경 시 **UI 자동 업데이트**됨 → 리액티브한 웹 구현 가능

---

## 🔄 Props vs State

| 항목 | Props | State |
|------|-------|-------|
| 정의 | 부모 → 자식으로 전달되는 값 | 컴포넌트 내부에서 정의되는 변경 가능한 값 |
| 수정 가능 | ❌ 불가 (읽기 전용) | ✅ 가능 |
| 흐름 | 외부 → 내부 | 내부 전용 |
| 변경 시 렌더링 | ❌ | ✅ 자동 렌더링 |

---

## ♻️ State가 필요한 이유

- UI에 **동적 반응이 필요한 경우** 사용
- 변수는 변경 시 렌더링되지 않지만, state는 자동 반영됨

---

## 📆 Component Lifecycle (컴포넌트 생명주기)

- React 컴포넌트는 다음과 같은 생명 주기를 가짐:
  1. **Mount (생성)**: DOM에 처음 렌더링
  2. **Update (업데이트)**: props/state 변경 시 재렌더링
  3. **Unmount (제거)**: DOM에서 제거될 때

- 클래스형: 생명주기 메서드(`componentDidMount`, `componentWillUnmount` 등)
- 함수형: `useEffect()`로 동일한 기능 구현 가능

> 🎯 **State와 Props의 이해는 React 개발의 핵심입니다.** 이를 통해 컴포넌트의 동작과 데이터 흐름을 정밀하게 제어할 수 있습니다.

# ⚛️ React Component와 State 정리 (전체)

## 📌 Component란?

- **재사용 가능한 UI 단위**, 웹 페이지를 구성하는 블록
- HTML, CSS, JavaScript, 상태(State), 속성(Props)을 포함한 **독립적 코드 블록**
- 페이지 전체는 컴포넌트 조합으로 구성
- **컴포넌트 이름은 반드시 대문자로 시작**해야 함

### ✅ Component의 특징
- `Props`를 입력받아 `React Element`를 출력
- **자바스크립트 함수처럼 작동**하여 엘리먼트를 반환
- 컴포넌트는 **계층적으로 구성 가능** (컴포넌트 안에 또 다른 컴포넌트)
- **재사용 가능성 높음** → 코드량 감소, 유지보수 효율 증가

> 🧩 UI 구성 퍼즐 조각처럼 컴포넌트를 조합하여 전체 페이지를 만들 수 있음

---

## 📦 Props (속성)

- **Component의 입력 값** (Property → 줄여서 Prop → 복수형으로 Props)
- 상위 컴포넌트가 하위 컴포넌트에 값 전달 (단방향)
- **읽기 전용 (Read-only)** → 자식 컴포넌트에서 수정 불가
- 다양한 타입 전달 가능: 문자열, 숫자, 객체, 컴포넌트 등

### 🔹 Props의 활용
1. JSX에서는 `{}`로 감싸 다양한 값 전달
2. 기본값 설정: `defaultProps`
3. 필수값 설정: `isRequired`
4. 불리언 값은 속성명만 작성해도 true로 전달
5. `props.children`을 활용해 컴포넌트 내부 컨텐츠 삽입
6. JSX를 사용하지 않는 경우 `React.createElement()` 사용 가능

---

## ⚙️ Component 사용법 (구조)

1. Component는 마치 **붕어빵 틀** → Props는 속 재료 → Element는 출력된 결과
2. 같은 컴포넌트라도 **다른 Props**로 다양한 결과 생성 가능
3. **컴포넌트는 함수처럼 작동**, HTML 요소 반환
4. 여러 개의 Element를 반환하여 UI 구성

---

## 🔗 Component vs Element

| 구분 | React Element | React Component |
|------|----------------|-------------------|
| 정의 | UI의 가장 작은 단위 | 여러 개의 Element를 포함한 블록 |
| 형태 | 불변 객체 | 함수 또는 클래스 |
| 사용법 | `<h1>Hello</h1>` | `function App() { return <h1>Hello</h1>; }` |
| 재사용성 | ❌ 불가능 | ✅ 가능 |
| 리렌더링 | 새 Element 필요 | 상태에 따라 자동 업데이트 |

> ✅ **Element는 Component에 의해 생성되고, Component는 Element들을 조합하여 UI를 구성합니다.**
> **Element는 UI의 가장 작은 단위이고, Component는 이들을 묶어 재사용 가능한 모듈입니다.**

---

## 🧱 Component Composition & Extraction

### 🧩 Component Composition
- **여러 컴포넌트를 조합**하여 복잡한 UI 구성
- 마치 레고 블록을 조립하듯 사용

### ✂️ Component Extraction
- 기존 컴포넌트에서 UI/로직을 분리해 **새 컴포넌트 생성**
- 코드 **재사용성 향상**, **유지보수 효율 증가**

---

## 💾 State (상태)

- **컴포넌트 내부에서 변경 가능한 데이터**를 관리
- 값이 변경되면 컴포넌트는 **자동으로 재렌더링**됨
- React Component의 **동적 데이터 표현**을 위한 객체
- `useState()` (함수형), `this.setState()` (클래스형)으로 변경 가능

### ✅ State의 특징
- 일반 변수와 다르게 **값이 변하면 UI 자동 반영**
- 컴포넌트 내부에서 정의 및 사용
- 사용자 이벤트나 내부 로직에 따라 변경 가능

### 🚫 일반 변수와의 차이
- 일반 변수는 변경되어도 UI 변경되지 않음
- State는 변경 시 **UI 자동 업데이트**됨 → 리액티브한 웹 구현 가능

---

## 🔄 Props vs State

| 항목 | Props | State |
|------|-------|-------|
| 정의 | 부모 → 자식으로 전달되는 값 | 컴포넌트 내부에서 정의되는 변경 가능한 값 |
| 수정 가능 | ❌ 불가 (읽기 전용) | ✅ 가능 |
| 흐름 | 외부 → 내부 | 내부 전용 |
| 변경 시 렌더링 | ❌ | ✅ 자동 렌더링 |

---

## ♻️ State가 필요한 이유

- UI에 **동적 반응이 필요한 경우** 사용
- 변수는 변경 시 렌더링되지 않지만, state는 자동 반영됨

---

## 📆 Component Lifecycle (컴포넌트 생명주기)

- React 컴포넌트는 다음과 같은 생명 주기를 가짐:
  1. **Mount (생성)**: DOM에 처음 렌더링
  2. **Update (업데이트)**: props/state 변경 시 재렌더링
  3. **Unmount (제거)**: DOM에서 제거될 때

- 클래스형: 생명주기 메서드(`componentDidMount`, `componentWillUnmount` 등)
- 함수형: `useEffect()`로 동일한 기능 구현 가능

> 🎯 **State와 Props의 이해는 React 개발의 핵심입니다.** 이를 통해 컴포넌트의 동작과 데이터 흐름을 정밀하게 제어할 수 있습니다.

