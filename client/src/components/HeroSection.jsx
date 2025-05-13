import React from 'react';
import './HeroSection.css';
import backgroundImage from '../assets/herosection_image.jpg'; // ✅ correct path

const HeroSection = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // ✅ inline style
    >
      
      <div className="content">
        <h1>Welcome to Auralis: The Musical AI</h1>
        <p>Feel free to explore and generate amazing music through the power of AI!</p>
          <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
