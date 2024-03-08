import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/redux/auth/authSlice";

export default function ProtectedRoute() {
	const token = useSelector(selectCurrentToken);
	console.log("Token", token);
	const location = useLocation();
	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}
