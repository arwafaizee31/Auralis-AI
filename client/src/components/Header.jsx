import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/assets/images/logo.png" alt="Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <a href="/login" className="btn btn-primary">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
