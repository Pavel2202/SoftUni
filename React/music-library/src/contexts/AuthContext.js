import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const intialAuthState = {
  _id: "",
  email: "",
  accessToken: "",
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", intialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const register = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(intialAuthState);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated: user.email }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authState = useContext(AuthContext);

  return authState;
};
