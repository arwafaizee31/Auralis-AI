// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link component for navigation

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/gen-music" style={{ color: '#fff', textDecoration: 'none' }}>Generate Music</Link></li>
        <li><Link to="/sample-music" style={{ color: '#fff', textDecoration: 'none' }}>Sample Music</Link></li>
        <li><Link to="/favourites" style={{ color: '#fff', textDecoration: 'none' }}>Favourites</Link></li>
        <li><Link to="/downloads" style={{ color: '#fff', textDecoration: 'none' }}>Downloads</Link></li>
        <li><Link to="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</Link></li>
        <li><Link to="/account" style={{ color: '#fff', textDecoration: 'none' }}>Account</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
