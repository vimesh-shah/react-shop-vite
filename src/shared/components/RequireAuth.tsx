import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "../../pages/login/Login";
import { useAuth } from "../services/AuthProvider";

interface RequireAuthProps {
  allowedRoles: string[];
}

const RequireAuth = ({ allowedRoles }: RequireAuthProps) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.user === null) {
    return <Login />;
  }

  let role = auth?.user?.role ?? "";

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
