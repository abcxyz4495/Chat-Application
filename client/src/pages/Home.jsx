import { HiOutlinePencilAlt } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
import { VscSearch } from "react-icons/vsc";
import ChatList from "../components/ChatList";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="h-full w-3/12 flex-shrink-0 rounded-tl border border-slate-200 overflow-hidden px-6 py-8">
        <div className="h-full w-full flex space-y-4 flex-col">
          <div className="w-full h-14 flex justify-between space-x-5 items-center px-2">
            <div className="flex space-x-5">
              <img
                src="Temp-Img.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <h1 className="self-center text-[25px]">Chats</h1>
            </div>
            <div className="flex space-x-5">
              <button>
                <HiOutlinePencilAlt size={20} />
              </button>
              <button>
                <SlOptions size={20} />
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-[calc(100%-16px)] h-10 px-4 py-2 mx-2 border border-slate-200 focus:border-b-green-700 focus:border-b-2 duration-100 outline-none rounded-sm"
          />
          <div className="w-full h-[800px]">
            <ul
              className="overflow-y-scroll h-full"
              style={{ scrollbarWidth: "none" }}
            >
              <ChatList />
              <div className="h-10"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
