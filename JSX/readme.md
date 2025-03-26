# 🌐 브라우저 로딩 과정 (Browser Rendering Flow)

웹 브라우저는 웹 페이지를 화면에 표시하기 위해 다음과 같은 단계들을 거칩니다.

---

## 1. 파싱 (Parsing)
- 브라우저가 HTML을 읽어 들이며 **DOM Tree**, **CSSOM Tree**를 생성하는 과정

## 2. 스타일 적용 (Style)
- DOM Tree와 CSSOM Tree를 **매칭**하여 **Render Tree**를 구성
- 렌더 트리에는 화면에 표시되는 요소만 포함됨

## 3. 레이아웃 (Layout)
- Render Tree의 노드들을 브라우저 **뷰포트 내 위치와 크기**를 계산함

## 4. 페인트 (Paint)
- 계산된 스타일과 위치를 바탕으로 **픽셀로 그리는 작업**

## 5. 합성 (Compositing)
- 여러 레이어로 나뉜 화면을 **하나로 합성**하여 최종적으로 화면에 표시
- `transform`, `opacity`, `will-change` 등이 있는 요소는 별도 합성 처리됨

---

# 📚 브라우저 렌더링 관련 주요 개념

아래는 브라우저의 로딩 및 렌더링 과정에서 중요한 개념들입니다.

## 🧱 DOM Tree
- HTML 문서를 **트리 형태의 객체 구조**로 만든 것
- 자바스크립트를 통해 접근 및 조작 가능
<p align="left">
  <img src="https://github.com/user-attachments/assets/591bbf4e-8281-4984-b4f4-199ac14860f0" width="600">
</p>

## 🎨 CSSOM Tree
- CSS 스타일을 파싱하여 **스타일 규칙을 트리 형태로 표현**한 구조
- DOM과 결합하여 렌더 트리 생성에 사용됨
<p align="left">
  <img src="https://github.com/user-attachments/assets/21d74b2b-5dd5-44e6-b9ea-8d336f0b97b4" width="600">
</p>

## 🌲 Render Tree
- DOM Tree와 CSSOM Tree를 결합하여 생성
- 화면에 **표시될 요소만 포함**됨 (`display: none` 요소는 제외)
<p align="left">
  <img src="https://github.com/user-attachments/assets/3ec914d4-757a-44d4-ad82-d1dbccc6cc62" width="600">
</p>

## 💡 Virtual DOM
- 메모리에서 관리되는 **가상의 DOM**
- 실제 DOM과 비교하여 **변경된 부분만 업데이트**함 (React 등에서 사용)
<p align="left">
  <img src="https://github.com/user-attachments/assets/e64c5405-6f5f-4ef7-8d52-7e0cb1ab1979" width="600">
</p>


## ⚔️ Real DOM vs Virtual DOM

| 항목 | Real DOM | Virtual DOM |
|------|----------|--------------|
| 정의 | 실제 브라우저의 DOM | 메모리 상의 가상 DOM |
| 업데이트 | 전체 탐색 및 변경 | 변경된 부분만 반영 |
| 속도 | 느림 | 빠름 |
| 사용 예시 | 일반 웹페이지 | React 기반 SPA 등 |

---

# 📦 패키지 매니저 요약

## ✅ Linux / macOS
- `apt`, `yum`, `brew` 등 CLI 패키지 매니저

## ✅ Windows

| 이름 | 설명 |
|------|------|
| **Chocolatey** | `choco` 명령으로 설치/관리 |
| **Scoop** | 윈도우용 CLI 설치기 |
| **Winget** | Microsoft 공식 패키지 매니저 |
| **WingetUI** | 위 3가지 통합 GUI 관리 도구 |

---

# 📦 Node.js 관련 도구

| 도구 | 설명 |
|------|------|
| **npm** | 패키지 설치 및 관리 |
| **npx** | 패키지 실행 도구 (설치 없이 실행 가능) |
| **nvm** | Node.js 버전 전환 도구 |
| **yarn** | Facebook에서 개발한 빠른 패키지 매니저 |

---

# ⚙️ Babel

## ✅ 왜 필요한가?
- 모든 브라우저가 최신 JS(ES6+)를 지원하지 않음 → 구문 변환 필요

## ✅ Babel의 역할

1. **구문 변환 (Transpile)**: 최신 문법 → 구문 호환
2. **폴리필 지원** (`@babel/polyfill`)
   - 오래된 브라우저에서 없는 API 추가
   - Babel은 **컴파일 시**, 폴리필은 **런타임에 실행**
3. **JSX → JS 변환** (React 지원)

---

# 📦 Webpack

- JS, CSS, 이미지 등 파일을 **모듈로 보고 번들링**하는 도구

| 용어 | 설명 |
|------|------|
| **번들링** | 여러 모듈을 하나로 묶는 작업 |
| **모듈** | 기능 단위로 나눈 코드 블록 |

---

# ⚡ Vite vs Webpack

| 항목 | Vite | Webpack |
|------|------|---------|
| 개발 서버 속도 | 빠름 (ESM 기반) | 느림 (번들링 필요) |
| HMR | 즉각 반영 | 느림 |
| 번들링 방식 | 필요할 때만 | 전체 파일 번들링 |
| 설정 | 간단 (`vite.config.js`) | 복잡 (`webpack.config.js`) |
| 프레임워크 지원 | React, Vue, Svelte 등 | 대부분 지원 |

---

# 📁 참고 이미지

> 다음 경로에 이미지 파일을 넣고 연결하세요:  
> `./images/dom-tree.png`, `./images/render-process.png` 등


---


# ⚛️ 리액트 프로젝트 시작하기

## 📦 npm vs npx

### ✅ npm (Node Package Manager)
- Node.js 패키지를 **설치**하고 **관리**하는 패키지 매니저
- `package.json`을 기반으로 프로젝트의 **의존성**을 관리
- **전역(global)** 또는 **로컬(local)** 로 패키지를 설치할 수 있음

### ✅ npx (Node Package Execute)
- **npm 패키지를 실행**하는 도구
- 패키지를 **설치 없이 바로 실행** 가능
- 로컬에 설치된 패키지를 실행할 때도 사용

---

## 🔍 차이점 요약

| 구분 | npm | npx |
|------|-----|-----|
| 역할 | 패키지 관리 | 패키지 실행 |
| 패키지 설치 | 가능 | 불가능 |
| 패키지 관리 | 가능 | 불가능 |
| 패키지 실행 | 로컬 또는 전역 설치된 패키지 실행 | 설치 없이 실행, 특정 버전 실행 가능 |
| 활용 목적 | 프로젝트 내 패키지 설치 및 관리 | 일회성 실행, 특정 버전 실행 등 |

---

## ⚡ Vite란?

- **Vite(비트)**는 빠르고 효율적인 프론트엔드 개발 빌드 도구입니다.
- 기존 Webpack보다 더 **빠른 개발 서버와 빌드 속도**를 제공합니다.
- **React, Vue, Svelte** 등 다양한 프레임워크를 지원합니다.
- Vue.js의 창시자인 **Evan You**가 만든 도구이며,
  최신 웹 프로젝트 개발에 최적화된 **차세대 프론트엔드 빌드 도구**입니다.
- 현재 주요 프론트엔드 프레임워크 커뮤니티(React, Vue, Svelte 등)에서 활발히 사용되고 있습니다.

---

## ⚖️ Vite vs Webpack 비교

| 항목 | Vite | Webpack |
|------|------|---------|
| 개발 서버 속도 | 빠름 (ESM 기반) | 느림 (번들링 필요) |
| HMR(Hot Module Replacement) | 즉각적 반영 | 상대적으로 느림 |
| 번들링 방식 | 필요할 때만 빌드 | 전체 파일 번들링 |
| 설정 파일 | 간단 (`vite.config.js`) | 복잡 (`webpack.config.js`) |
| 사용성 | React, Vue, Svelte 등 지원 | 대부분의 프레임워크 지원 |


---

# 📁 React 프로젝트 기본 구조 요약

---

## 📦 주요 폴더 설명 (간단 요약)

- `node_modules/`: 설치된 라이브러리 (Git에 올리지 않음)
- `public/`: 정적 파일 위치 (예: `index.html`)
- `src/`: 개발자가 작업하는 **React 소스 코드 위치**
- `.gitignore`: Git에 제외할 파일/폴더 정의
- `package.json`: 프로젝트 정보 및 의존성 관리
- `README.md`: 프로젝트 설명 작성용

👉 `src/` 내부에는 일반적으로 `components/`, `pages/`, `assets/`, `styles/`, `hooks/` 등이 포함됩니다.

---

## 📄 핵심 파일

| 파일명 | 위치 | 역할 |
|--------|------|------|
| `index.html` | `public/` | HTML 템플릿. `index.js`가 렌더링한 결과를 표시할 위치 (`<div id="root">`) 포함 |
| `index.js` | `src/` | React 앱의 **진입점**. HTML 템플릿과 JS 컴포넌트를 연결하여 브라우저에 렌더링 |
| `App.js` | `src/` | 실제 **UI를 구성**하는 최상위 컴포넌트. 사용자에게 보여질 화면의 구조와 내용을 정의 |


---

> ✅ **중요! 파일 간 관계 요약**

```text
📁 public
  └── index.html       ← 실제 HTML (root div 존재)
          ▲
          │ ReactDOM이 렌더링
          │
📁 src
  ├── index.js         ← 진입점. App.js를 root에 연결
  │       ▲
  │       │ import
  └── App.js           ← UI 정의 및 최상위 컴포넌트

```

---

# 🧩 JSX (JavaScript XML)

## 📌 JSX란?

- **JavaScript의 문법 확장(Syntax Extension)**
- JavaScript 코드 안에서 HTML과 유사한 태그를 사용할 수 있게 해줌
- React에서 **UI를 선언적으로 작성**할 수 있도록 도와주는 문법
- JSX는 필수는 아니지만, 대부분의 React 프로젝트에서 사용됨
- 작성된 JSX는 **Babel**을 통해 일반 JavaScript 코드로 변환되어 실행됨

---

## ✅ JSX의 특징

- HTML과 JavaScript를 **결합**한 형태
- JavaScript 표현식은 `{}` 안에 작성 가능
- `class` → `className`, `for` → `htmlFor` 로 작성해야 함
- React 요소를 생성하는 데 사용되며, 내부적으로 `React.createElement()`로 변환됨

---

## 📊 JSX vs JSX 미사용 비교

| 항목 | JSX 사용 | JSX 미사용 |
|------|----------|-------------|
| 문법 | HTML과 유사 | JS 함수 호출 형식 |
| 가독성 | 직관적이고 간결함 | 복잡하고 읽기 어려움 |
| 요소 생성 | 태그(`<div>`, `<h1>`) 사용 | `React.createElement()` 사용 |
| 유지보수 | 쉬움 | 어려움 |
| 변환 과정 | Babel이 자동 변환 | 직접 JS로 작성 필요 |

---

## ✅ JSX의 장점

1. **가독성이 좋고 직관적**
2. **코드가 간결하고 유지보수가 쉬움**
3. **JavaScript와 자연스럽게 결합 가능**
4. **조건부 렌더링을 쉽게 구현 가능**
5. **스타일 및 이벤트 핸들링이 쉬움**
6. **Injection 공격 방어 가능** (예: 입력값에 JS 코드 삽입 방지)

---

> 💡 JSX는 React에서 UI를 더 명확하고 효율적으로 구성할 수 있게 도와주는 강력한 도구입니다.

---

# 🧩 JSX 사용법 정리

JSX(JavaScript XML)는 React에서 UI를 선언형으로 작성할 수 있도록 도와주는 JavaScript 문법 확장입니다.  
JavaScript 코드 안에서 HTML과 유사한 태그를 사용할 수 있으며, Babel을 통해 일반 JavaScript로 변환되어 실행됩니다.

---

## ✅ JSX 기본 규칙

- HTML과 JavaScript가 **혼합된 형태**로 작성됨
- 반드시 하나의 **부모 요소로 감싸야** 함
- **빈 태그**는 XML처럼 `/>`로 닫아야 함
- JSX 태그는 **자식 요소를 포함할 수 있음**

---

## ✅ JavaScript 표현식 사용

- JSX 내부에서는 JavaScript 표현식을 **중괄호 `{}`로 감싸서** 사용 가능
- 유효한 JavaScript 표현식이면 모두 사용 가능 (변수, 연산, 함수 등)
- JSX 자체도 JavaScript 표현식이므로 변수에 할당하거나 함수의 리턴값으로 사용할 수 있음

---

## ✅ 조건부 렌더링 & 반복 렌더링

- JSX 내부에서는 **`if`나 `for` 문을 직접 사용할 수 없음**
- 조건부 렌더링에는 **삼항 연산자(`? :`)**를 사용
- 반복 렌더링에는 `map()`과 같은 **배열 메서드**를 사용

---

## ✅ JSX 속성 정의

- 속성에 문자열을 지정할 때는 **따옴표("")**, 표현식을 사용할 때는 **중괄호({})**를 사용
- 일부 속성은 JavaScript 문법을 따름 (예: class → className, for → htmlFor)

---

## ✅ JSX 스타일 지정

- 인라인 스타일은 **객체 형태로 중괄호 두 번**을 사용해 지정
- 스타일 속성은 **카멜 표기법(camelCase)** 으로 작성 (예: `fontSize`, `backgroundColor`)

---

## ✅ JSX 속성 이름 변환

| HTML 속성 | JSX 속성 |
|-----------|-----------|
| `class`   | `className` |
| `for`     | `htmlFor` |
| `tabindex`| `tabIndex` |

---

## ✅ JSX에서 주석 사용

- JSX 내부에서는 `{/* 주석 */}` 형식으로 주석 작성
- 여러 줄 JSX 태그를 사용할 경우, 내부에서 `//` 형식 주석도 사용 가능

---

## 📝 정리

- JSX는 HTML과 유사하지만 **JavaScript와 결합된 표현식 기반 문법**
- 선언형 UI 작성, 조건부 렌더링, 재사용성 등에서 매우 효율적
- JSX는 선택 사항이지만 대부분의 React 프로젝트에서 널리 사용됨

---



