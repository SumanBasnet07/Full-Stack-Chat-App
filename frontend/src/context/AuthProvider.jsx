import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const jwt = Cookies.get("jwt");
  const localUser = localStorage.getItem("ChatApp");

  // Only parse user from localStorage if it exists
  const [authUser, setAuthUser] = useState(
    localUser ? JSON.parse(localUser) : null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, jwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
