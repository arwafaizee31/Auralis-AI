// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Update with your API URL if different

// Setup Axios instance with credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // This ensures cookies (including CSRF token) are sent with requests
});

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('http://localhost:5000/login', { email, password });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registerUser = async (email, password) => {
    try {
      const response = await api.post('http://localhost:5000/register', { email, password });
      return response.data;  // This is correct for Axios
    } catch (error) {
      return error.response?.data || { error: 'Registration failed' };
    }
  };
  

// Check authentication
export const checkAuth = async () => {
  try {
    const response = await api.get('http://localhost:5000/check-auth');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
