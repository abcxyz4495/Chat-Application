import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Fallback from "./components/loaders/Fallback";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navbar from "./components/shared/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Status = lazy(() => import("./pages/Status"));
const UserStatus = lazy(() => import("./pages/UserStatus"));
const Call = lazy(() => import("./pages/Call"));

export default function App() {
	return (
		<Suspense fallback={<Fallback />}>
			<Routes>
				<Route path="/login" element={<Login />} />

				<Route element={<ProtectedRoute />}>
					<Route element={<Navbar />}>
						<Route path="/" element={<Home />} />
						<Route path="/chat/:chatId" element={<Chat />} />

						<Route path="/call" element={<Call />} />

						<Route path="/status" element={<Status />} />
						<Route path="/status/:statusId" element={<UserStatus />} />
					</Route>
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
