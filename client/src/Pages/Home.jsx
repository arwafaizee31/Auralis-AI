// src/pages/Home.jsx
import React, { useState, useRef } from 'react';

import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import './Home.css';


import home1 from '../assets/home1.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';
import home5 from '../assets/home5.jpg';
import img1 from '../assets/editor.jpg';
import img2 from '../assets/group.jpg';
import img3 from '../assets/performer.jpg';

import usecase1 from '../assets/use_case_1.jpg'
import usecase2 from '../assets/use_case_2.jpg'
import usecase3 from '../assets/use_case_3.jpg'

import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpg';
import sample5 from '../assets/sample5.jpg';
import sample6 from '../assets/sample6.jpg';
import sample7 from '../assets/sample7.jpg';
import sample8 from '../assets/sample8.jpg';
import sample9 from '../assets/sample9.jpg';
import sample10 from '../assets/sample10.jpg';
import sample11 from '../assets/sample11.jpg';
import sample12 from '../assets/sample12.jpg';

import audio1 from '../assets/audio1.mp3';
 import audio2 from '../assets/audio2.mp3';
 import audio3 from '../assets/audio3.mp3';
 import audio4 from '../assets/audio4.mp3';
 import audio5 from '../assets/audio5.mp3';
 import audio6 from '../assets/audio6.mp3';
 import audio7 from '../assets/audio7.mp3';
 import audio8 from '../assets/audio8.mp3';
 import audio9 from '../assets/audio9.mp3';
 import audio10 from '../assets/audio10.mp3';
 import audio11 from '../assets/audio11.mp3';
 import audio12 from '../assets/audio12.mp3';

const Home = () => {
  const images = [
    sample1, sample2, sample3, sample4, sample5, sample6,
    sample7, sample8, sample9, sample10, sample11, sample12,
  ];

   const audios = [
    audio1, audio2, audio3, audio4, audio5, audio6,
    audio7, audio8, audio9, audio10, audio11, audio12,
  ];

  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    if (!audioRefs.current[index]) return;

    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
        audioRefs.current[playingIndex].currentTime = 0;
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <>
      <HeroSection />

      {/* Feature Section */}
      <div className="container">
    
     <div className="feature-text">
  <p className="tagline">AURALIS AI : GENRE MIX</p>
  <h1>Break the Boundaries of Music</h1>
  <p>
    Effortlessly blend genres to generate something new. Break the rules, innovate, 
    and shape the future of music with your unique vision!
  </p>
</div>
    
        <div className="feature-section">
          <div
            className="feature-card card1"
            style={{ backgroundImage: `url(${home1})` }}
          >
            <div className="overlay">
              <h2>Generate more diverse and high-quality music</h2>
            </div>
          </div>

          <div className="feature-card card2"
          style={{ backgroundImage: `url(${home5})` }}>
            <div className="overlay">
              <h2>Mix genres with ease</h2>
            </div>
          </div>

          <div className="feature-card card3"    style={{ backgroundImage: `url(${home4})` }}
          >
            <div className="overlay">
              <h2>Discover one-of-a-kind tracks</h2>
            </div>
          </div>

          <div className="feature-card card4"  style={{ backgroundImage: `url(${home3})` }}>
            <div className="overlay">
              <h2>Customize tracks to perfection</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Music Intro Section */}
      <div className="music-intro">
        <div className="music-intro-text">
          <p className="tagline">MUSIC AT YOUR FINGERTIPS</p>
          <h1>Make Unlimited Music with AI</h1>
          <p className="description">
            Generate unique songs in just a few clicks. Generate unlimited royalty-free
            music to use in your songs, projects and videos. Distribute your music
            anywhere and earn money on the royalties forever.
          </p>
          <button className="generate-button">Start Generating</button>
        </div>

        <div className="music-intro-images">
          <div className="left-img">
            <img src={img1} alt="Editor" />
          </div>

          <div className="right-imgs">
            <div className="right-img2">
              <img src={img2} alt="Group" />
            </div>
            <div className="right-img3">
              <img src={img3} alt="Performer" />
            </div>
          </div>
        </div>
      </div>

      {/* Sample Music Section */}
      <div className="sample-music-section">
        <h2 className="sample-music-title">Sample Music</h2>
        <div className="sample-music-grid">
          {images.map((img, index) => (
            <div key={index} className="sample-card">
              <img src={img} alt={`Sample ${index + 1}`} className="sample-img" />
              <button className="play-button" onClick={() => togglePlay(index)}>
                {playingIndex === index ? '⏸' : '▶'}
              </button>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={audios[index]}
              />
            </div>
          ))}
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

    </>
    
    
  );
};

export default Home;
