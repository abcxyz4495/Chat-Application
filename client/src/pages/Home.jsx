import { HiOutlinePencilAlt } from "react-icons/hi";
import { VscListFilter } from "react-icons/vsc";
import ChatList from "../components/ChatList";

export default function Home() {
	return (
		<div className="w-full h-full flex border border-slate-200 dark:">
			<div className="h-full w-[380px] flex-shrink-0 rounded-tl border border-slate-200 overflow-hidden px-3 pt-3">
				<div className="h-full w-full flex space-y-2 flex-col">
					<div className="w-full h-14 flex justify-between space-x-5 items-center px-4 flex-shrink-0">
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
						<ul className="h-full">
							<ChatList />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
