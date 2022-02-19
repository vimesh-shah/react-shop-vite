import React from "react";
import Welcome from "../../shared/components/welcome/Welcome";
import { SignupUser } from "../../shared/services/AuthProvider";
import SingUpForm from "./components/signupform/SignUpForm";
import "./SignUp.css";

const SignUp = () => {
  const handleSignup = (user: SignupUser) => {};

  return (
    <div>
      <div className="signup-container">
        <div className="signup-info">
          <Welcome />
        </div>
        <div className="signup-form">
          <SingUpForm onSignup={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
