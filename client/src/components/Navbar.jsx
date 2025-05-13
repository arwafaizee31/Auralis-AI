// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Link component for navigation
import AuthContext from "../context/AuthContext"; // Import the context
import "./Navbar.css";

const Navbar = () => {
  const { authStatus } = useContext(AuthContext); // Use the authStatus from context
  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ul
        style={{ listStyleType: "none", gap: "20px", display: "flex" }}
        className="navbar-list"
      >
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/gen-music"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Generate Music
          </Link>
        </li>
        <li>
          <Link
            to="/sample-music"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Sample Music
          </Link>
        </li>
       
        <li>
          <Link to="/faq" style={{ color: "#fff", textDecoration: "none" }}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/account" style={{ color: "#fff", textDecoration: "none" }}>
            Account
          </Link>
        </li>
        <li>
          <Link to="/blog" style={{ color: "#fff", textDecoration: "none" }}>
            Blog
          </Link>
        </li>
      </ul>
      <ul style={{ listStyleType: "none", gap: "20px" }}>
        {/* <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Log In</Link></li> */}
        {authStatus ? (
          <li>Logout</li>
        ) : (
          <>
            <li>Login</li>
            <li>Register</li>
          </>
        )}
      </ul>
    </nav>
  )
};

export default Navbar;
