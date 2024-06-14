import clsx from "clsx";
import { PuntoRojo } from "../assets/icons";

export default function Channel({channel,Game,Viewers}){
    return (
    <div className="p-2 hover:bg-[#34343B] cursor-pointer align-middle justify-center text-white xl:grid xl:grid-cols-[12%_3fr] xl:gap-2">
        <div className={clsx(`rounded-full`, {'grayscale': !Viewers})}>
            <img src={`https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=${channel}`} alt="" className="rounded-full" height="30px" width="30px"/>
        </div>
        <div className="hidden xl:flex xl:flex-row xl:justify-between ">
        {
                Viewers ? (
                    <div>
                        <p className="text-sm font-bold">
                            {channel}
                        </p>
                        <p className="text-[#88888b] text-xs">
                            {Game}
                        </p>
                    </div>
                ):(
                        <p className="text-sm font-bold">
                            {channel}
                        </p>
                )
            }
        {
                Viewers ? (
                    <div className="flex flex-row justify-center align-middle">
                        <PuntoRojo height="1.5rem" width="2rem"/>
                        <p className="text-sm">
                        {Viewers}
                    </p>
                    </div>
                ):(
                    <p className="text-[#88888b] text-sm ">
                        Desconectado
                    </p>
                )
            }
        </div>
    </div>)
}