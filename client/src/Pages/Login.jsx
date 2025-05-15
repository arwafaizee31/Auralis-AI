import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext'; // 👈 Import context

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // ✅ Must be inside component
  const { setIsAuthenticated } = useContext(AuthContext); // ✅ Correct hook usage

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/login',
        { email, password },
        { withCredentials: true }
      );
      alert('Login successful!');
      setIsAuthenticated(true);
      navigate('/gen-music');
    } catch (error) {
      alert('Login failed');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-stone-900 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
