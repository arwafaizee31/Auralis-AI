
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import GenerateMusic from './Pages/GenerateMusic';
import SampleMusic from './Pages/SampleMusic';
import FAQ from './Pages/FAQ';
import Account from './Pages/Account';
import About from './Pages/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/main.css'; // Your custom CSS

function App() {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen-music" element={<GenerateMusic />} />
        <Route path="/sample-music" element={<SampleMusic />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>

  );
}

export default App;

