import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem('token'))

  const storeTokenInLS = (serverToken) => {
    console.log(serverToken);
    localStorage.setItem("token", serverToken);
    setToken(localStorage.getItem('token'))
    return
  }; 

  // logout functionality
  const LogoutUser = () => {
    setToken('')
    return localStorage.removeItem('token')
  };

  let isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ LogoutUser , isLoggedIn , storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
