import React from "react";
import { useAuth } from "../../services/AuthProvider";
import NavLink from "../navlink/NavLink";
import "./NavBar.css";

const NavBar = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <nav className="nav-bar">
      <div className="nav-block">
        <div className="nav-logo">🍔 🍕</div>
        <div className="nav-link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
      <div className="nav-block">
        <div className="nav-link">
          {auth?.user && (
            <span className="nav-username">Hi {auth.user.username}</span>
          )}
          {auth?.user !== null ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
