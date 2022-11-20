import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  return auth.authenticate ? (
    <Outlet />
  ) : (
    <Navigate to="/account/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
