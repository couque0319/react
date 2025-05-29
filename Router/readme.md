
# 📘 React Router 정리

## 📌 목차

1. [라우팅 개념](#1-라우팅-routing-개념)
2. [프로젝트 설정](#2-프로젝트-설정)
3. [기본 페이지 컴포넌트 생성](#3-기본-페이지-컴포넌트-생성)
4. [라우트 설정](#4-라우트-설정)
5. [Link 컴포넌트](#5-link-컴포넌트)
6. [URL 파라미터](#6-url-파라미터)
7. [쿼리스트링](#7-쿼리스트링)
8. [중첩 라우트](#8-중첩-라우트)
9. [공통 레이아웃 적용](#9-공통-레이아웃-적용)
10. [404 NotFound 페이지](#10-404-notfound-페이지)
11. [Navigate 컴포넌트](#11-navigate-컴포넌트)
12. [참고 자료](#12-참고-자료)

---

## 1. 라우팅 (Routing) 개념

- 사용자가 입력한 **URL**에 따라 특정 **컴포넌트(페이지)**를 보여주는 기능
- SPA(Single Page Application)에서 실제 페이지 이동 없이 브라우저 주소만 바꾸고, 필요한 부분만 갱신

---

## 2. 프로젝트 설정

### 프로젝트 생성 및 라이브러리 설치

```bash
npx create-react-app router-tutorial
cd router-tutorial
npm install react-router-dom
```

### index.js 설정

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 3. 기본 페이지 컴포넌트 생성

### pages/Home.js

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>홈</h1>
    <p>가장 먼저 보여지는 페이지입니다.</p>
    <Link to="/about">소개</Link>
  </div>
);

export default Home;
```

### pages/About.js

```jsx
import React from 'react';

const About = () => (
  <div>
    <h1>소개</h1>
    <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
  </div>
);

export default About;
```

---

## 4. 라우트 설정

### App.js

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default App;
```

---

## 5. Link 컴포넌트

Link는 HTML의 a 태그와 유사하지만, 페이지를 새로 고치지 않고 이동합니다.

```jsx
<Link to="/about">소개</Link>
```

---

## 6. URL 파라미터

### pages/Profile.js

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  tealighting: { name: '김다빈', description: '보안에 관심있는 학생' },
  dew: { name: '이이슬', description: 'DB에 관심있는 학생' },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

### App.js 라우트 추가

```jsx
<Route path="/profiles/:username" element={<Profile />} />
```

---

## 7. 쿼리스트링

### About.js 예시

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [params, setParams] = useSearchParams();
  const detail = params.get('detail');
  const mode = params.get('mode');

  return (
    <div>
      <h1>소개</h1>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={() => setParams({ detail: detail !== 'true', mode })}>
        Toggle Detail
      </button>
      <button onClick={() => setParams({ detail, mode: parseInt(mode || 0) + 1 })}>
        Increase Mode
      </button>
    </div>
  );
};

export default About;
```

---

## 8. 중첩 라우트

### pages/Articles.js

```jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Articles = () => (
  <div>
    <h2>게시글 목록</h2>
    <Outlet />
    <ul>
      <li><NavLink to="/articles/1">게시글 1</NavLink></li>
      <li><NavLink to="/articles/2">게시글 2</NavLink></li>
    </ul>
  </div>
);

export default Articles;
```

### pages/Article.js

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  return <h3>게시글 ID: {id}</h3>;
};

export default Article;
```

### App.js 중첩 라우트 설정

```jsx
<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>
```

---

## 9. 공통 레이아웃 적용

### pages/Layout.js

```jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <header>
        <button onClick={() => navigate(-1)}>뒤로</button>
        <button onClick={() => navigate('/articles')}>게시글 목록</button>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
```

### App.js 레이아웃 적용

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="profiles/:username" element={<Profile />} />
</Route>
```

---

## 10. 404 NotFound 페이지

### pages/NotFound.js

```jsx
const NotFound = () => (
  <div style={{ textAlign: 'center', fontSize: '2rem' }}>
    404 - Page Not Found
  </div>
);

export default NotFound;
```

### App.js 404 라우트 추가

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 11. Navigate 컴포넌트

### 리다이렉션 예시 - pages/MyPage.js

```jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;
  
  return isLoggedIn ? (
    <div>마이페이지</div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default MyPage;
```

### pages/Login.js

```jsx
const Login = () => <div>로그인 페이지</div>;

export default Login;
```

### App.js 추가 라우트

```jsx
<Route path="/login" element={<Login />} />
<Route path="/mypage" element={<MyPage />} />
```

---

## 12. 참고 자료

- [React Router 공식 문서](https://reactrouter.com/)
- [React Router v6 마이그레이션 가이드](https://reactrouter.com/en/main/upgrading/v5)

---

## 📝 주요 개념 정리

### Hook 정리
- `useParams()`: URL 파라미터 값 추출
- `useSearchParams()`: 쿼리스트링 관리
- `useNavigate()`: 프로그래밍 방식 네비게이션

### 컴포넌트 정리
- `<Link>`: 선언적 네비게이션
- `<NavLink>`: 활성 상태를 관리하는 링크
- `<Navigate>`: 조건부 리다이렉션
- `<Outlet>`: 중첩 라우트의 자식 컴포넌트 렌더링

### 라우트 패턴
- `/path`: 정적 경로
- `/path/:param`: 동적 파라미터
- `/path/*`: 와일드카드
- `index`: 기본 자식 라우트
