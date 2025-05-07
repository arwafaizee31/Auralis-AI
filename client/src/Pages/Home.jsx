import React from 'react';
import './Home.css'; // Import the CSS for the animations

const Home = () => {
  return (
    <div className="home-container">
      <div className="purple-animation"></div>
      <div className="content">
        <h1>Welcome to Auralis: The Musical AI</h1>
        <p>Feel free to explore and generate amazing music through the power of AI!</p>
      </div>
    </div>
  );
};

export default Home;
