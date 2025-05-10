// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/gen-music" className="nav-link">Generate Music</Link></li>
        <li><Link to="/sample-music" className="nav-link">Sample Music</Link></li>
        <li><Link to="/faq" className="nav-link">FAQ</Link></li>
        <li><Link to="/account" className="nav-link">Account</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
