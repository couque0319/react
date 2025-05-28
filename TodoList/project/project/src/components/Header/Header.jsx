// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">🎮 GameReview Hub</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <button className="register-button">Register</button>
      </nav>
    </header>
  );
}

export default Header;
