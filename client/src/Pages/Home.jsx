import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      {/* Add more sections like Features, Testimonials, etc. */}
      <Footer />
    </>
  );
};

export default Home;
