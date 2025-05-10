// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { checkAuth } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const check = async () => {
      const data = await checkAuth();
      if (data.message === 'User is authenticated') {
        setAuthStatus(true);
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
