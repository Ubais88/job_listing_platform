import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const checkToken = async (token) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/test`,
        token
      );

      const { success, message } = response.data;
        console.log("token verify Successfully", success, " ", message);

    } catch (error) {
      console.log("token Data not matched",error.message);
      // LogoutUser();
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const storeTokenInLS = (serverToken) => {
    console.log(serverToken);
    localStorage.setItem("token", serverToken);
    setToken(localStorage.getItem("token"));
    return;
  };

  // logout functionality
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    return;
  };

  let isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ LogoutUser, isLoggedIn, storeTokenInLS }}>
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
