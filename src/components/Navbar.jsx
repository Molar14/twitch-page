import Twitch from "../assets/TwitchLogo"
import NavTag from "./NavTag"
import NavButtons from "./NavButtons"
import { Bateria, Corazon, Estrella } from "../assets/icons"

export default function NavBar(){
    return (<nav className="bg-[#18181B] pt-2 flex flex-row justify-between pb-3">
        <div className="flex row">
            <Twitch height="1.8rem" width="3rem" className="cursor-pointer" />
            <div className="p-2 hover:bg-[#34343B] rounded-md md:hidden">
                    <Corazon />
                </div>
                <div className="p-2 hover:bg-[#34343B] rounded-md md:hidden">
                    <Estrella />
                </div>
            <NavTag />
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center w-1/4">
            <input type="text" placeholder="Search" className="w-full p-2  border-2 border-[#67676B] bg-transparent rounded-md text-sm "/>
        </div>
        <div className="flex row gap-5 pr-2">
            <NavButtons />
            <div className="bg-[#333335] text-xs p-2 justify-center text-white rounded-md cursor-pointer hover:drop-shadow-lg hover:bg-[#313133] hidden xl:flex xl:flex-row xl:gap-2 " >
            <Bateria height="1.0rem" width="1.0rem"/>
            <p>
                Disfruta gratis sin anuncios
            </p>
        </div>
            <div className="flex justify-end">
            <img src="https://api.dicebear.com/8.x/notionists-neutral/svg?seed=Luna" alt="user" className="w-8 h-8 rounded-full"/>
        </div>
        </div>
    </nav>
    )
}