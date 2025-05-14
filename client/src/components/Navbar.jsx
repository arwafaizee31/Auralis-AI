// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { authStatus } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mainNavbar">
      <div className="navbarContainer">
       <div className="navbarLeft">
        <img src="/primaryLogo2.png" alt="Auralis logo" className="navbarLogo" />
</div>
       

        {/* Menu items */}
        <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
          <li><Link to="/" className="navbarTitles">Home</Link></li>
          <li><Link to="/gen-music" className="navbarTitles">Generate Music</Link></li>
          <li><Link to="/sample-music" className="navbarTitles">Sample Music</Link></li>
          <li><Link to="/faq" className="navbarTitles">FAQ</Link></li>
          <li><Link to="/account" className="navbarTitles">Account</Link></li>
          <li><Link to="/blog" className="navbarTitles">Blog</Link></li>
          <li className="navbarTitles registerButton">Register</li>
          </ul>
           <div className="navbarRight">
           
          
          
           {/* Toggle button for small screens */}
        <button className="menuToggle" onClick={toggleMenu}>
          ☰
        </button>
          </div>


      </div>
    </nav>
  );
};

export default Navbar;
