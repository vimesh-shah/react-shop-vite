import React from "react";
import burgerImg from "../../../images/burger.jpg";
import pizzaImg from "../../../images/pizza.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-info">
      <div className="welcome-header">
        Welcome to world's best
        <br />
        Burger & Pizza Shop
      </div>
      <div className="welcome-image-container">
        <div>
          <img className="welcome-image" alt="Burger" src={pizzaImg} />
        </div>
        <div>
          <img className="welcome-image" alt="Pizza" src={burgerImg} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
