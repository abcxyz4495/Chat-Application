import { BsChatText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { GoArchive } from "react-icons/go";

import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export default function Navbar() {
	const [active, isActive] = useState("nav-page", "chat");

	const navigate = useNavigate();

	const handleChats = useCallback(() => {
		isActive("chat");
		navigate("/");
	}, [isActive, navigate]);

	const handleCalls = useCallback(() => {
		isActive("call");
		navigate("/call");
	}, [isActive, navigate]);

	const handleStatus = useCallback(() => {
		isActive("status");
		navigate("/status");
	}, [isActive, navigate]);

	const handleFav = useCallback(() => {
		isActive("fav");
		navigate("/");
	}, [isActive, navigate]);

	const handleArchive = useCallback(() => {
		isActive("archive");
		navigate("/");
	}, [isActive, navigate]);

	return (
		<div className="w-full h-screen relative">
			<div className="asbolute left-0 top-0 w-[50px] h-full flex flex-col justify-between items-center pl-1">
				<div className="flex justify-center items-center flex-col gap-1">
					<div className="px-3 py-2 rounded-lg flex relative mb-4">
						<FaWhatsapp color="green" size={25} className="flex-shrink-0" />
						<span className="absolute right-0 translate-x-16">Whatsapp</span>
					</div>
					<button
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === "chat" &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handleChats}
					>
						<BsChatText size={20} />
					</button>
					<button
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === "call" &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handleCalls}
					>
						<IoCallOutline size={20} />
					</button>
					<button
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === "status" &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handleStatus}
					>
						<BsChatText size={20} />
					</button>
				</div>
				<div className="flex justify-center items-center flex-col gap-1">
					<button
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === "fav" &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handleFav}
					>
						<FaRegStar size={20} />
					</button>
					<button
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === "archive" &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handleArchive}
					>
						<GoArchive size={20} />
					</button>
					<button className="hover:bg-slate-200 px-3 py-2 rounded-lg">
						<IoSettingsOutline size={20} />
					</button>
					<button className="hover:bg-slate-200 px-3 py-2 rounded-lg">
						<RxAvatar size={20} />
					</button>
				</div>
			</div>
			<div className="absolute bottom-0 right-0 h-[calc(100vh-40px)] max-[500px]:h-[calc(100vh-40px)] w-[calc(100vw-50px)] max-[500px]:w-[calc(100vw-30px)] rounded">
				<Outlet />
			</div>
		</div>
	);
}
