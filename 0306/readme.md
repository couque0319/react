# **📝 HTML**

## **📌 HTML (Hyper Text Markup Language)**
<p align="center">
  <img src="https://github.com/user-attachments/assets/075e1615-eebf-4c09-9f56-41f80e17a5aa" width="900">
</p>

### **📖 정의**
- 웹 페이지의 **뼈대**를 구성하기 위해 사용하는 **마크업 언어**

### **🔗 Hyper Text**
- **참조(하이퍼링크)** 를 통해 독자가 한 문서에서 다른 문서로 **즉시 접근**할 수 있는 텍스트.

### **🏷️ Markup Language**
- **태그** 등을 이용하여 **문서나 데이터의 구조를 명기**하는 언어.
- 문서가 화면에 **표시되는 형식**을 나타내거나 **논리적인 구조**를 명시하기 위한 규칙들을 정의한 언어의 일종.

### **📂 HTML 문서 구조**
- `head` 와 `body` 로 나누어져 있음.

---

# **🎨 CSS**

## **📌 CSS (Cascading Style Sheet)**

### **📖 정의**
- **🖌 Style sheet 언어**
- HTML 문서에 있는 요소들에 **선택적으로 스타일을 적용**.

## **🎭 SASS**
- ==CSS의 단점을 보완하기 위해 만든 CSS 전처리기==.

### **🎨 스타일 (style)**
- 문서를 **멋지게 장식**하거나 정해진 양식에 맞게 내용을 다듬는 역할.
- 문서 작성 프로그램에서 작성하는 모든 문서는 ==스타일을 적용==함.

### **📑 스타일시트 (stylesheet)**
- 문서의 **스타일을 정의**.
- 화면에 출력하기 위한 **외형적인 모양과 형식**에 관한 **스타일 규칙들의 모임**.
- **스타일시트**에 의해 **웹 문서가 브라우저에 어떻게 보여지는지 결정됨**.

## **🎭 CSS의 역할**
- 웹사이트의 ==레이아웃, 글꼴, 색상== 등의 디자인을 적용하는 언어.
- CSS로 작성된 코드를 **스타일 시트(style sheet)** 라고 부름.
- **현재 CSS3** 버전 사용 중.  
  - 발전 과정: **CSS1 → CSS2 → CSS3 → CSS4(현재 표준화 작업 중)**.

## **🎨 CSS 기능**
- **색상과 배경**
- **텍스트, 폰트**
- **박스 모델(Box Model)**
- **비주얼 포맷 및 효과**
- **리스트, 테이블**
- **사용자 인터페이스(UI) 관련 스타일**

---

# **📜 ECMAScript (JavaScript)**

### **📖 정의**
- 웹페이지에서 ==동적인 부분==을 구현하기 위한 **스크립트 언어**.
- **ECMA International**에서 개발한 **프로토타입 기반**의 프로그래밍 언어.

---

# **🌳 DOM (Document Object Model)**

## **📌 HTML DOM (간단히 DOM)**
- 웹 페이지의 **HTML 문서를 계층적인 구조(트리)** 로 표현하는 **객체 모델**.
- **HTML 태그뿐만 아니라** ==문서(document), 속성(attribute), 텍스트(text)== **등도 포함됨**.
- 각 HTML 태그는 하나의 **DOM 객체(DOM 노드)** 로 변환됨.

## **🎯 DOM의 목적**
- **웹페이지의 요소(HTML 태그) 및 콘텐츠를 동적으로 제어**하기 위해 사용.
- **DOM 객체를 통해 각 태그의 CSS3 스타일 시트 접근 및 변경**.
- **HTML 태그가 포함하는 텍스트, 이미지 등 콘텐츠 수정**.
- ==JavaScript를 활용한 이벤트 처리 및 동적 웹페이지 구현==.

## **🌳 DOM 트리 구조**
- HTML 문서의 **포함 관계(부모-자식 관계)** 에 따라 ==계층적 구조==를 가짐.
- ==최상위 노드는 `document`== 이며, 그 아래로 `<html>`, `<head>`, `<body>` 등이 **자식 요소**로 배치됨.
- **형제 관계**: 같은 부모를 공유하는 요소들.

### **📌 예시**

<p align="center">
  <img src="https://github.com/user-attachments/assets/f8d6bda6-37e8-4c72-92a1-f09d7bf9ef68" width="750" height="500">
</p>


## **🔹 DOM 객체**
- HTML 태그 하나당 **하나의 DOM 객체**가 생성됨.
- **DOM 객체는 DOM 노드(Node)** 라고도 하며, 주요 노드 유형은 다음과 같음:

### **📌 주요 노드 유형**
1. **📄 문서 노드(Document Node)**: `document` 객체.
2. **📦 요소 노드(Element Node)**: `<div>`, `<p>` 같은 HTML 요소.
3. **⚙️ 속성 노드(Attribute Node)**: `id`, `class`, `src` 등의 속성.
4. **📝 텍스트 노드(Text Node)**: HTML 태그 내부의 **텍스트**.

---

# **🖥️ Rendering (렌더링 과정)**
- 실시간으로 웹사이트가 그려지는 과정
1. HTML을 파싱하여 DOM 트리를 만든다.
2. CSS를 파싱하여 CSSOM 트리를 만든다.
3. DOM 과 CSSOM 을 결합하여 렌더링 트리를 만든다.
4. 렌더링 트리에서 각 노드의 크기와 위치를 계산한다.
5. 개별 노드를 화면에 그린다.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d7ddf06f-0179-4dbe-b8fb-9fbcf8223ccb" width="750" height="500">
</p>

---

# **🌍 SPA vs MPA**

## **🚀 SPA (Single Page Application)**
- 한 개(Single)의 Page로 구성된 Application.
- 모든 정적 리소스를 최초 한 번에 다운로드.
- 새로운 페이지 요청 시 필요 데이터만 받아 갱신.
- CSR(Client Side Rendering) 방식으로 렌더링.

<p align="left">
  <img src="https://github.com/user-attachments/assets/682a6916-16e6-4606-9900-e98eb1b3219c" width="500">
</p>

### **✅ 장점**
- 빠른 반응 속도 (새로고침 없이 페이지 업데이트 가능).
- 부드러운 UX 제공.
- 동일한 백엔드 API를 사용할 수 있어 모바일 앱 개발에 유리.

### **❌ 단점**
- 초기 로딩 속도가 느림.
- SEO 최적화가 어려움.
- 보안 취약점 (쿠키 관리, XSS 공격 등).

---

## **🖥️ MPA (Multi Page Application)**
- 여러 개(Multiple)의 Page로 구성된 Application.
- 새로운 페이지를 요청할 때마다 서버에서 정적 리소스를 다운로드.
- SSR(Server Side Rendering) 방식으로 렌더링.

<p align="left">
  <img src="https://github.com/user-attachments/assets/caa81f7c-4bc6-4cac-97a5-55eafb6b855a" width="500">
</p>

### **✅ 장점**
- 첫 페이지 로딩 속도가 빠름.
- SEO 최적화가 용이함.
- 다양한 페이지 추가가 가능하여 유지보수 용이.

### **❌ 단점**
- 페이지 이동 시 전체 페이지를 다시 렌더링해야 함 (깜빡임 현상 발생).
- 페이지 이동 시 불필요한 템플릿도 중복 로딩.
- 개발 복잡도가 증가할 수 있음.

---

# **📊 SPA vs MPA 비교**

| 비교 항목 | SPA | MPA |
|-----------|----------------------------------|----------------------------------|
| 렌더링 방식 | CSR (Client Side Rendering) | SSR (Server Side Rendering) |
| 초기 로딩 속도 | 느림 | 빠름 |
| 페이지 전환 속도 | 빠름 (새로고침 없음) | 느림 (새 페이지 로딩 필요) |
| SEO 최적화 | 어려움 | 용이함 |
| 보안 | 취약할 수 있음 (XSS 등) | 상대적으로 안전함 |
| 개발 복잡도 | 낮음 | 높음 |
---

# 🟢 Node.js

## 📌 정의
- 서버 측에서 자바스크립트를 실행할 수 있게 해주는 **런타임 환경 (Runtime Environment)**  
- 즉, **JavaScript를 브라우저 밖, 서버나 다양한 환경에서 실행**할 수 있도록 해줌

---

## 🧩 Node.js에서의 의미

| 구분 | 설명 |
|------|------|
| **Platform** | Node.js가 실행되는 OS(Windows, Linux) 또는 배포되는 클라우드(AWS, Azure) |
| **Environment** | 로컬 개발 환경(VS Code), 실행 환경(Node.js Runtime), 운영 환경(Production) |
| **Framework** | Express.js (Node.js에서 웹 서버 개발을 쉽게 해주는 프레임워크) |
| **Runtime** | Node.js Runtime (JavaScript를 서버에서 실행할 수 있도록 제공) |

---

## 🌐 일반적인 의미와 비교

| 구분 | 설명 | 예시 |
|------|------|------|
| **Platform** | 소프트웨어가 실행될 수 있는 기반 환경 | 운영체제 (Windows, macOS, Linux), 클라우드 플랫폼 (AWS, Azure), 웹 플랫폼 |
| **Environment** | 특정 소프트웨어가 실행될 수 있도록 구성된 조건 | 개발 환경, 운영 환경, 테스트 환경 |
| **Framework** | 소프트웨어 개발을 위한 뼈대 또는 기반 구조 | 웹 프레임워크 (React, Angular, Vue.js), 모바일 프레임워크 (React Native, Flutter) |
| **Runtime** | 프로그램이 실행되는 동안 필요한 환경 | JRE, .NET Framework, Node.js |

---

## 🧠 JavaScript Runtime Environment

### 📌 Node.js는 OS 수준의 플랫폼이 아니다
- 플랫폼(Platform)은 일반적으로 **하드웨어나 운영체제 수준**에서 실행 환경을 제공
- 반면 Node.js는 **다양한 OS에서 실행 가능한 JavaScript 실행 환경**을 제공
- Node.js는 OS를 대체하지 않고, **OS 위에서 동작하는 환경(Environment)**에 가까움

### 📌 Node.js는 특정 기능을 강제하지 않는다
- 일반적인 플랫폼은 개발자에게 특정한 개발 방식이나 구조를 강제함  
  (예: .NET, Spring, Django 등)
- Node.js는 **개발 방식을 강요하지 않고 실행 환경만 제공**
- Node.js는 **서버, CLI 도구 등 다양한 용도로 활용 가능**
- 즉, **웹 프레임워크가 아니며**, 특정 아키텍처를 강요하지 않음

---

## 🔄 기존 Runtime Environment 개념과의 유사성

| 항목 | JRE (Java Runtime Environment) | Node.js |
|------|-------------------------------|---------|
| 목적 | Java 애플리케이션 실행 환경 제공 | JavaScript 실행 환경 제공 |
| 위치 | OS 위에서 동작 | OS 위에서 동작 |
| 특징 | 개발 방식 자체는 강제하지 않음 | 특정 개발 방식 강요하지 않음 |
| 엔진 | JVM (Java Virtual Machine) | V8 JavaScript Engine |

- Node.js는 **JavaScript 코드 실행을 위한 런타임 환경(Run-time Environment)** 으로 설계됨
- Java의 **JRE** 와 매우 유사한 구조와 목적을 가짐
- **V8 엔진** 기반에서 실행되며 다양한 운영체제 위에서 동작

---

## ✅ 요약

- Node.js는 **운영체제(OS)** 나 **프레임워크**가 아님
- **JavaScript 코드 실행을 위한 런타임 환경 (Run-time Environment)**
- 따라서, 플랫폼(Platform)보다는 **Environment**라는 표현이 더 적절
- **JavaScript를 서버 및 다양한 환경에서 실행**할 수 있도록 만들어진 환경

> 💬 “Node.js는 JavaScript 실행을 위한 범용 런타임 환경이다!”
