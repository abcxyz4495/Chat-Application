import { BsChatText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GoArchive } from "react-icons/go";
// import { RxAvatar } from "react-icons/rx";

import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
	const [active, isActive] = useState("nav-page", "chat");

	const navigate = useNavigate();

	const handleChats = useCallback(() => {
		isActive("Chats");
		navigate("/");
	}, [isActive, navigate]);

	const handleCalls = useCallback(() => {
		isActive("Calls");
		navigate("/call");
	}, [isActive, navigate]);

	const handleStatus = useCallback(() => {
		isActive("Status");
		navigate("/status");
	}, [isActive, navigate]);

	const handleFav = useCallback(() => {
		isActive("Starred Messages");
		navigate("/");
	}, [isActive, navigate]);

	const handleArchive = useCallback(() => {
		isActive("Archived Chats");
		navigate("/");
	}, [isActive, navigate]);

	const handleSetting = useCallback(() => {}, []);
	const handleProfile = useCallback(() => {}, []);

	return (
		<div className="w-full h-screen relative">
			<div className="asbolute left-0 top-0 w-[50px] h-full flex flex-col justify-between items-center pl-1">
				<div className="flex justify-center items-center flex-col gap-1">
					<div className="px-3 py-2 rounded-lg flex relative mb-4">
						<FaWhatsapp color="green" size={25} className="flex-shrink-0" />
						<span className="absolute right-0 translate-x-16">Whatsapp</span>
					</div>

					<Navigator active={active} handler={handleChats} content={"Chats"}>
						<BsChatText size={20} />
					</Navigator>
					<Navigator active={active} handler={handleCalls} content={"Calls"}>
						<IoCallOutline size={20} />
					</Navigator>
					<Navigator active={active} handler={handleStatus} content={"Status"}>
						<BsChatText size={20} />
					</Navigator>
				</div>

				<div className="flex justify-center items-center flex-col gap-1">
					<Navigator
						active={active}
						handler={handleFav}
						content={"Starred Messages"}
					>
						<FaRegStar size={20} />
					</Navigator>
					<Navigator
						active={active}
						handler={handleArchive}
						content={"Archived Chats"}
					>
						<GoArchive size={20} />
					</Navigator>

					<Navigator handler={handleSetting} content={"Settings"}>
						<IoSettingsOutline size={20} />
					</Navigator>

					<Navigator handler={handleProfile} content={"Profile"}>
						<img src="Temp-Img.jpg" />
					</Navigator>
				</div>
			</div>
			<div className="absolute bottom-0 right-0 h-[calc(100vh-40px)] max-[500px]:h-[calc(100vh-40px)] w-[calc(100vw-50px)] max-[500px]:w-[calc(100vw-30px)] rounded">
				<Outlet />
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
const Navigator = ({ active = undefined, handler, content, children }) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<div
						className={`hover:bg-slate-200 px-3 py-2 rounded-lg ${
							active === content &&
							"pl-[0.5rem] border-l-[4px] border-l-green-600 bg-slate-300"
						} `}
						onClick={handler}
					>
						{children}
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
