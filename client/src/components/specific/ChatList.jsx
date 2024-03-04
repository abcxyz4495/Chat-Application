import { useCallback, useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { TiPinOutline } from "react-icons/ti";
import { VscListFilter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function ChatList() {
	const [active, setActive] = useState("");
	
	return (
		<div className="h-full w-full flex space-y-2 flex-col">
			<div className="w-full h-10 flex justify-between space-x-5 items-center px-4 flex-shrink-0">
				<div className="flex space-x-5">
					<h1 className="self-center text-[25px] font-bold">Chats</h1>
				</div>
				<div className="flex">
					<button className="hover:bg-slate-200 px-3 py-2 rounded-lg">
						<HiOutlinePencilAlt size={20} />
					</button>
					<button className="hover:bg-slate-200 px-3 py-2 rounded-lg">
						<VscListFilter size={20} />
					</button>
				</div>
			</div>
			<input
				type="text"
				placeholder="Search or start new chat"
				className="w-[calc(100%-32px)] h-8 px-4 mx-4 border flex-shrink-0 border-slate-200 focus:border-b-green-700 focus:border-b-2 duration-100 outline-none rounded-sm"
			/>
			<div className="w-full h-full overflow-y-scroll">
				<ul className="h-full mt-2">
					<ChatListItem
						chat={"bhavans"}
						name={"Bhavans"}
						active={active}
						setActive={setActive}
					/>
					<ChatListItem
						chat={"goregaon"}
						name={"Goregaon"}
						active={active}
						setActive={setActive}
					/>
				</ul>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
const ChatListItem = ({ chat, name, active, setActive }) => {
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		navigate(`/chat/${chat}`);
		setActive(name);
	}, [chat, name, navigate, setActive]);
	return (
		<li
			className={`w-full relative h-16 my-1 flex gap-4 items-center hover:bg-slate-100 px-4 rounded-md cursor-pointer ${
				active === name && "bg-slate-200"
			}`}
			onClick={handleClick}
		>
			<img src="Temp-Img.jpg" alt="" className="w-11 h-11 rounded-full" />
			<div className="flex flex-col">
				<h1 className="font-bold">{name}</h1>
				<span className="text-slate-500 text-sm">Msg of the person</span>
			</div>
			<div className="flex flex-col absolute right-3 gap-2">
				<div className="text-slate-500 text-sm">44:00</div>
				<div className="text-slate-500 self-end">
					<TiPinOutline className="hidden" />
				</div>
			</div>
		</li>
	);
};
