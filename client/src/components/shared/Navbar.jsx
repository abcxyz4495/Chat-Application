import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute bottom-0 right-0 h-[calc(100vh-50px)] max-[500px]:h-[calc(100vh-30px)] w-[calc(100vw-50px)] max-[500px]:w-[calc(100vw-30px)] rounded">
        <Outlet />
      </div>
    </div>
  );
}
