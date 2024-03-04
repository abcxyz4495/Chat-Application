import { IoCallOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GrEmoji } from "react-icons/gr";
import { IoMicOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import ChatList from "../components/specific/ChatList";

import { Badge } from "@/components/ui/badge";

export default function Chat() {
	return (
		<div className="w-full h-full flex border border-slate-200 dark:bg-black2">
			<div className="h-full w-[380px] flex-shrink-0 rounded-tl border border-slate-200 overflow-hidden px-3 pt-3">
				<ChatList />
			</div>
			<div className="w-full h-full">
				{/* Chats Navbar */}
				<div className="w-full h-16 px-5 flex justify-between items-center border border-slate-200 sticky top-0 right-0">
					<div className="flex items-center justify-center">
						<img
							src="Temp-Img.jpg"
							alt=""
							className="w-11 h-11 rounded-full bg-black"
						/>
						<div className="flex flex-col px-3">
							<h1 className="font-bold">Name</h1>
							<p className="text-slate-700 text-sm font-semibold">
								Online | Last seen time
							</p>
						</div>
					</div>
					<div className="flex justify-center items-center gap-2">
						<div className="flex justify-center items-center py-1 bg-slate-100 rounded-md border border-slate-200">
							<button className="px-5 py-2">
								<GoDeviceCameraVideo size={20} />
							</button>{" "}
							{"|"}{" "}
							<button className="px-5 py-2">
								<IoCallOutline size={20} />
							</button>
						</div>
						<button className="px-4 py-4 hover:bg-slate-100 rounded-md">
							<VscSearch size={15} />
						</button>
					</div>
				</div>
				{/* Message Area */}
				<div
					className="overflow-y-scroll scroll-smooth h-[calc(100%-8rem)] bg-repeat bg-cover"
					style={{
						backgroundImage: "url('Chat_Back1.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="w-full h-full px-32">
						<div className="w-full h-full flex justify-center items-center flex-col gap-1">
							<Sender message={"Sender"} isGroup={false} />
							<Badge>Badge</Badge>
							<Receiver message={"Receiver"} />
						</div>
					</div>
				</div>
				{/* Input Box */}
				<div className="w-full h-16 px-5 flex justify-between items-center border border-slate-200 sticky bottom-0 right-0">
					<div className="flex gap-1">
						<button className="px-4 py-2 hover:bg-slate-100 rounded-md">
							<GrEmoji size={20} />
						</button>
						<button className="px-4 py-2 hover:bg-slate-100 rounded-md">
							<GoPaperclip size={20} />
						</button>
					</div>
					<input
						type="text"
						placeholder="Type a message"
						className="flex-grow outline-none mx-4"
					/>
					<button className="px-4 py-2 hover:bg-slate-100 rounded-md">
						<IoMicOutline size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
const Sender = ({ message, profile_img, isGroup = false }) => {
	return (
		<div className="relative self-start px-3 py-2 bg-slate-300 rounded-md">
			{isGroup && (
				<div
					className="absolute left-[-40px] top-0 w-8 h-8 bg-cover rounded-full bg-black"
					style={{ backgroundImage: `url(${profile_img})` }}
				></div>
			)}
			{message}
		</div>
	);
};

// eslint-disable-next-line react/prop-types
const Receiver = ({ message }) => {
	return (
		<div className="relative self-end px-3 py-2 bg-slate-300 rounded-md">
			{message}
		</div>
	);
};
