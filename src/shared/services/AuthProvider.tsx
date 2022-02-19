import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface LoginUser {
  username: string;
  password?: string;
  role?: string;
}

export interface SignupUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  age: number;
  gender: "male" | "female";
  mobile: string;
}

interface AuthData {
  user: LoginUser | null;
  login: (user: LoginUser) => boolean;
  logout: () => void;
}

const AuthContext = React.createContext<AuthData | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<LoginUser | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.pathname === "/login" ? "/" : location.pathname;

  const login = ({ username, password }: LoginUser) => {
    if (username === "vimesh" && password === "123") {
      setUser({ username, role: "admin" });
      navigate(from, { replace: true });
      return true;
    } else if (username === "disha" && password === "123") {
      setUser({ username, role: "normal" });
      navigate(from, { replace: true });
      return true;
    } else {
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthData | null => {
  return useContext(AuthContext);
};
