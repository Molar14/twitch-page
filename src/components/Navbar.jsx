import Twitch from "../assets/TwitchLogo"
import NavTag from "./NavTag"
import NavButtons from "./NavButtons"

export default function NavBar(){
    return (<nav className="bg-[#18181B] pt-2 flex flex-row justify-between pb-3">
        <div className="flex row">
            <Twitch height="1.8rem" width="3rem" className="cursor-pointer" />
            <NavTag />
        </div>
        <div className="flex items-center justify-center w-1/4">
            <input type="text" placeholder="Search" className="w-full p-2  border-2 border-[#67676B] bg-transparent rounded-md text-sm "/>
        </div>
        <div className="flex row gap-5 pr-2">
            <NavButtons />
            <div className="flex justify-end">
            <img src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Luna" alt="user" className="w-8 h-8 rounded-full"/>
        </div>
        </div>
    </nav>
    )
}