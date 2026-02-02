"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    username: null,
  });

  // Fetch auth status once (on app load or refresh)
  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const res = await fetch("/api/auth/status");
        const data = await res.json();
        setAuth({
          isLoggedIn: data.isLoggedIn,
          username: data.username,
        });
      } catch (err) {
        console.error("Auth fetch error:", err);
      }
    };
    fetchAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
