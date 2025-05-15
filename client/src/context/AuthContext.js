// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkAuth } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      const data = await checkAuth();
      if (data.message === 'User is authenticated') {
        setIsAuthenticated(true);
      }
    };
    check();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
