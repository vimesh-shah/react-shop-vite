import React, { useState } from "react";
import Welcome from "../../shared/components/welcome/Welcome";
import { LoginUser, useAuth } from "../../shared/services/AuthProvider";
import LoginForm from "./components/loginform/LoginForm";
import "./Login.css";

const Login = () => {
  const auth = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = (user: LoginUser) => {
    const loginResult = auth?.login(user);
    if (loginResult === false) {
      setErrorMessage("Username or Password may be wrong.");
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div className="login-container">
      <div className="login-info">
        <Welcome />
      </div>
      <div className="login-form">
        <LoginForm onLogin={handleLogin} errorMessage={errorMessage!} />
      </div>
    </div>
  );
};

export default Login;
