// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkAuth } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const data = await checkAuth();
        if (data?.message === 'User is authenticated') {
          setAuthStatus(true);
        } else {
          setAuthStatus(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setAuthStatus(false);
      }
    };
    check();
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
