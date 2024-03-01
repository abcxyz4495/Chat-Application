import { TiPinOutline } from "react-icons/ti";

export default function ChatList() {
	return (
		<li className="w-full relative h-16 flex gap-4 items-center hover:bg-slate-100 px-4 rounded-md cursor-pointer">
			<img src="Temp-Img.jpg" alt="" className="w-11 h-11 rounded-full" />
			<div className="flex flex-col">
				<h1 className="font-bold">Name</h1>
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
}
