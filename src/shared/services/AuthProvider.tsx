import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface User {
  username: string;
  password?: string;
  role?: string;
}

interface AuthData {
  user: User | null;
  login: (user: User) => boolean;
  logout: () => void;
}

const AuthContext = React.createContext<AuthData | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.pathname === "/login" ? "/" : location.pathname;

  const login = ({ username, password }: User) => {
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
