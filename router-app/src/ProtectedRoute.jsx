import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    // Save the current location to redirect back after login
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
