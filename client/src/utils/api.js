import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Base API path

// Axios instance with base URL and credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Enables cookie sending for sessions
});

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: 'Login failed' };
  }
};

// Register function
export const registerUser = async (email, password) => {
  try {
    const response = await api.post('/register', { email, password });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: 'Registration failed' };
  }
};

// Check authentication
export const checkAuth = async () => {
  try {
    const response = await api.get('/check-auth');
    return response.data;
  } catch (error) {
    console.error("checkAuth failed:", error);
    return error.response?.data || { message: 'Not authenticated' };
  }
};
