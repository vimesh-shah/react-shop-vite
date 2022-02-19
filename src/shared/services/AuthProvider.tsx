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
  age: number | null;
  gender: "male" | "female";
  mobile: string;
}

interface AuthData {
  user: LoginUser | null;
  login: (user: LoginUser) => boolean;
  logout: () => void;
  signup: (user: SignupUser) => void;
}

const AuthContext = React.createContext<AuthData | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [users, setUsers] = useState<SignupUser[]>([]);
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
      const foundUsers = users.filter(
        (x) => x.username === username && x.password === password
      );

      if (foundUsers.length > 0) {
        setUser({ username: foundUsers[0].username, role: "normal" });
        navigate(from, { replace: true });
        return true;
      }

      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const signup = (user: SignupUser) => {
    setUsers((users) => [...users, user]);
    console.log(users);
    setUser({ username: user.username, role: "normal" });
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthData | null => {
  return useContext(AuthContext);
};
