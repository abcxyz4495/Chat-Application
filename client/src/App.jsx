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

let user = true;

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/status/:statusId" element={<Status />} />
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
