import React from 'react';
import { Link } from 'react-router-dom'; // ✅ This line is required!
import './HeroSection.css';
import backgroundImage from '../assets/herosection_image.jpg';
import AnimatedText from "./AnimatedText";
import '../styles/AnimatedText.css';

const HeroSection = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <AnimatedText text="Welcome to Auralis: The Musical AI" />
        <p>Feel free to explore and generate amazing music through the power of AI!</p>

        {/* ✅ Button with working link */}
        <Link to="/gen-music">
          <button className="hero-button">Generate Music</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
