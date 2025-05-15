import React from 'react';
import './Blog.css';
import musicPlayerImg from '../assets/blog1.jpg';
import soundrawSignImg from '../assets/blog2.jpg';
import phoneImg from '../assets/blog3.jpg';

import usecase1 from '../assets/use_case_1.jpg';
import usecase2 from '../assets/use_case_2.jpg';
import usecase3 from '../assets/use_case_3.jpg';


const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Why Choose Auralis for Production?</h2>

      {/* Section 1: Image Left, Text Right */}
      <div className="blog-section">
        <img src={musicPlayerImg} alt="Music player" className="blog-image" />
        <div className="blog-text">
          <h3>FAST AND TRUSTED</h3>
          <h2>Easily Generate High-Quality Songs</h2>
          <p>
            Auralis makes it easy to generate music that perfectly matches your
            vision. Simply select your desired tags and generate tracks with just a few
            clicks. Customize and refine your music effortlessly, even in fast-paced
            learning environments.
          </p>
          <p>
            Auralis is looking to expand the presence,
            trust, and strength of AI Music in the academic field.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="blog-section">
        <div className="blog-text">
          <h3>AVOID COPYRIGHT STRIKES</h3>
          <h2>Ethical AI</h2>
          <p>
            All of our training data is created by our own team ,
            so you can safely use our songs for educational activities without worrying
            about copyright issues or lawsuits.
          </p>
          <p>
            Auralis is looking to expand the presence,
            trust, and strength of AI Music in the academic field.
          </p>
        </div>
        <img src={soundrawSignImg} alt="Soundraw sign" className="blog-image" />
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="blog-section">
        <img src={phoneImg} alt="Phone with music" className="blog-image" />
        <div className="blog-text">
          <h3>WORLDWIDE DISTRIBUTION</h3>
          <h2>Imagine. Create. Use.</h2>
          <p>
            Music made with Auralis is completely royalty-free, allowing you to
            distribute it with your content worldwide freely without any legal concerns.
          </p>
          <p>
            If your material gains traction on platforms like YouTube or others, you can
            monetize it, opening up new opportunities and possibilities for your
            students to explore and grow.
          </p>
        </div>
      </div>

      {/* Use Case Section */}
      <div className="use-case-section">
        <h2 className="use-case-title">Use Cases</h2>
        <div className="use-case-grid">
          <div className="use-case-card">
            <img src={usecase1} alt="Editor" className="use-case-img" />
            <h3 className="use-case-heading">For Music Creators</h3>
            <p className="use-case-desc">
              Instantly generate unique backing tracks, beats, and compositions for your songs.
              Focus on creativity while AI handles the groundwork.
            </p>
          </div>
      
          <div className="use-case-card">
            <img src={usecase2} alt="Group Collaboration" className="use-case-img" />
            <h3 className="use-case-heading">For Teams & Projects</h3>
            <p className="use-case-desc">
              Use AI-generated music in team videos, educational projects, podcasts, and game dev
              without worrying about licensing issues.
            </p>
          </div>
      
          <div className="use-case-card">
            <img src={usecase3} alt="Performer" className="use-case-img" />
            <h3 className="use-case-heading">For Performers</h3>
            <p className="use-case-desc">
              Craft background scores for live performances or create ambient sets for shows,
              rehearsals, and creative demos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
