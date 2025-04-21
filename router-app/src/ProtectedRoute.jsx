import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user || user == "null") {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
