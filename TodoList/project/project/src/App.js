import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트
import Home from './pages/Home/Home';
import GameList from './pages/GameList/GameList';
import GameDetail from './pages/GameDetail/GameDetail';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

// 공통 컴포넌트
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 404 페이지를 위한 라우트 추가 */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </>
  );
};

export default App;
