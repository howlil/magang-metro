import { Navigate, useLocation } from "react-router-dom";

const checkAuthToken = () => !!localStorage.getItem("authToken");

export function ProtectedRoute({ children }) {
  const location = useLocation();
  if (!checkAuthToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
