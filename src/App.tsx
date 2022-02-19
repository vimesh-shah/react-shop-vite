import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/signup/SignUp";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import NavBar from "./shared/components/navbar/NavBar";
import RequireAuth from "./shared/components/RequireAuth";
import { AuthProvider } from "./shared/services/AuthProvider";

const App = () => {
  return (
    <BrowserRouter basename="/react-shop-vite">
      <AuthProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route element={<RequireAuth allowedRoles={["admin", "normal"]} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="unauthorized" element={<Unauthorized />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
