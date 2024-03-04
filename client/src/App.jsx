import { lazy, Suspense, useMemo } from "react";
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

let user = true;

export default function App() {
	const memoizedHome = useMemo(() => <Home />, []);
	
	return (
		<Suspense fallback={<Fallback />}>
			<Routes>
				<Route element={<ProtectedRoute user={user} />}>
					<Route element={<Navbar />}>
						<Route path="/" element={memoizedHome} />
						<Route
							path="/chat/:chatId"
							element={<Chat home={memoizedHome} />}
						/>

						<Route path="/call" element={<Call />} />

						<Route path="/status" element={<Status />} />
						<Route path="/status/:statusId" element={<UserStatus />} />
					</Route>
				</Route>
				<Route element={<ProtectedRoute user={!user} redirect={"/"} />}>
					<Route path="/login" element={<Login />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
