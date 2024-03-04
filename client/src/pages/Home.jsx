import { IoLockClosedOutline } from "react-icons/io5";
import { ImWhatsapp } from "react-icons/im";
import ChatList from "../components/specific/ChatList";

export default function Home() {
	return (
		<div className="w-full h-full flex border border-slate-200 dark:bg-black2">
			<div className="h-full w-[380px] flex-shrink-0 rounded-tl border border-slate-200 overflow-hidden px-3 pt-3">
				<ChatList />
			</div>
			<div className="flex justify-center items-center w-full h-full relative">
				<div className="flex flex-col justify-center items-center">
					<ImWhatsapp size={70} color="green" />
					<h1 className="text-black text-2xl font-bold py-4">Whatsapp Clone</h1>
					<p className="text-slate-500">
						Send and receive messages without keeping your phone online.
					</p>
					<p className="text-slate-500">
						Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
					</p>
				</div>
				<div className="flex items-center justify-center gap-1 absolute bottom-10 text-slate-500 right-auto">
					<IoLockClosedOutline />
					<p>End-to-end encrypted</p>
				</div>
			</div>
		</div>
	);
}
