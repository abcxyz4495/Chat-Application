import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  children,
  user,
  redirect = "/login",
}) {
  return user ? children ? children : <Outlet /> : <Navigate to={redirect} />;
}
