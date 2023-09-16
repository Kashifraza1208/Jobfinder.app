import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  return (
    loading === false &&
    (isAuthenticated ? <Outlet /> : <Navigate to="/login" />)
  );
};

export default PrivateRoute;
