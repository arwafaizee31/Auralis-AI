
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import GenerateMusic from './Pages/GenerateMusic';
import SampleMusic from './Pages/SampleMusic';
import FAQ from './Pages/FAQ';
import Account from './Pages/Account';
import Blog from './Pages/Blog';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/main.css'; // Your custom CSS

import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <AuthProvider> 
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
        <Route path="/blog" element={<Blog />} />
         {/* ✅ Add these routes */}
  <Route path="/login" element={<LoginForm />} />
  <Route path="/register" element={<RegisterForm />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
    </AuthProvider> 
  );
}

export default App;

