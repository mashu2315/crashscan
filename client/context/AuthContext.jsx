// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Check if user is authenticated on mount
//   useEffect(() => {
//     const checkAuth = () => {
//       try {
//         const token = Cookies.get('token');
//         if (token) {
//           setIsLoggedIn(true);
//           // Optionally, fetch user data from an endpoint
//           // You can add getUserDetails call here if needed
//         } else {
//           setIsLoggedIn(false);
//           setUser(null);
//         }
//       } catch (error) {
//         console.error('Auth check error:', error);
//         setIsLoggedIn(false);
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

// const login = (userData) => {
//   setIsLoggedIn(true);
//   setUser(userData);
// };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     Cookies.remove('token');
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, loading, login, logout, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// }

'use client';

import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const token = Cookies.get("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!token);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
