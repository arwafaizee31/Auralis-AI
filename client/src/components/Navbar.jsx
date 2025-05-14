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
       
         paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "1rem",
    paddingRight:"1rem",
        backgroundColor:"#340646",
        // color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

         
      }} className="mainNavbar"
    >
    <ul style={{ listStyleType: "none", gap: "20px" }}><li><img src="/primaryLogo2.png" alt="Auralis logo" className="navbarLogo"></img></li></ul>
      <ul
        style={{ listStyleType: "none", gap: "20px", display: "flex" }}
        className="navbar-list"
      >
        <li>
          <Link to="/" style={{ textDecoration: "none" }} className="navbarTitles">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/gen-music"
            style={{  textDecoration: "none" }}
           className="navbarTitles">
            Generate Music
          </Link>
        </li>
        <li>
          <Link
            to="/sample-music"
            style={{  textDecoration: "none" }}
           className="navbarTitles">
            Sample Music
          </Link>
        </li>
       
        <li>
          <Link to="/faq" style={{ textDecoration: "none" }} className="navbarTitles">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/account" style={{ textDecoration: "none" }} className="navbarTitles">
            Account
          </Link>
        </li>
        <li>
          <Link to="/blog" style={{ textDecoration: "none" }} className="navbarTitles">
            Blog
          </Link>
        </li>
      </ul>
      <ul style={{ listStyleType: "none", gap: "20px" }}>
     <li className="navbarTitles">Register </li>
      </ul>
    </nav>
  )
};

export default Navbar;
