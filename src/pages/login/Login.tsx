import React, { useState } from "react";
import burgerImg from "../../images/burger.jpg";
import pizzaImg from "../../images/pizza.jpg";
import { useAuth, User } from "../../shared/services/AuthProvider";
import LoginForm from "./components/loginform/LoginForm";
import "./Login.css";

const Login = () => {
  const auth = useAuth();
  const [isLoginError, setLoginError] = useState(false);

  const handleLogin = (user: User) => {
    const loginResult = auth?.login(user);
    if (loginResult === false) {
      setLoginError(!loginResult);
    }
  };

  return (
    <div className="login-container">
      <div className="login-info">
        <div className="login-header">
          Welcome to world's best
          <br />
          Burger & Pizza Shop
        </div>
        <div className="login-image-container">
          <div>
            <img className="login-image" alt="Burger" src={pizzaImg} />
          </div>
          <div>
            <img className="login-image" alt="Pizza" src={burgerImg} />
          </div>
        </div>
      </div>
      <div className="login-form">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
