import React from 'react';
import './HeroSection.css';
import backgroundImage from '../assets/herosection_image.jpg';

const HeroSection = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1 className="typed-text-container">
          <span className="typed-text">Welcome to my website!</span>
        </h1>
        <p>Feel free to explore and generate amazing music through the power of AI!</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
