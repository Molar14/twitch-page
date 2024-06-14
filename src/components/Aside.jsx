import { ThreeDotsIcon } from "../assets/icons"
import Channel from "./Channel";

export default function Aside(){
    const FollowedChannels = [
        {
            channel: "Vegetta777",
            Game: "Fornite",
            Viewers:"777"
        },
        {
            channel: "ibai",
            Game: "Porno Furro 2",
        },
        {
            channel: "Charly69",
            Game: "Fornite",
        }
    ]
    const RecomendedChannels = [
        {
            channel: "Vegetta777",
            Game: "Fornite",
            Viewers:"777"
        },
        {
            channel: "ibai",
            Game: "Casino",
            Viewers:"6969"
        },
        {
            channel: "Charly69",
            Game: "Fornite",
            Viewers:"6969"
        },
        {
            channel: "Vegetta777",
            Game: "Fornite",
            Viewers:"777"
        },
        {
            channel: "ibai",
            Game: "Porno Furro 2",
            Viewers:"6969"
        },
        {
            channel: "Charly69",
            Game: "Fornite",
            Viewers:"6969"
        }
    ]

    return <section className="bg-[#1F1F23] flex flex-col pt-3 gap-3">
        <div className="flex flex-row justify-between font-semibold text-[#EFEFF1] text-xl pl-2">
            <p>
                Para ti
            </p>
            <ThreeDotsIcon height="1.5rem" width="2rem"/>
        </div>
            <div className="flex flex-row justify-between font-semibold text-[#EFEFF1] text-md align-middle hover:bg-[#34343B] pl-2 pt-2 pb-2 cursor-pointer">
                <p>
                    Canales que sigues
                </p>
                <ThreeDotsIcon height="1.5rem" width="2rem"/>
            </div>
            <section className="flex flex-col">
                {FollowedChannels.map((canal)=> {
                    return (
                        <Channel
                        key={`canal-${canal.channel}`}
                        channel={canal.channel}
                        Game={canal.Game}
                        Viewers={canal.Viewers}
                         />
                    )
                }
                )}
                <p className="text-sm pl-2 text-violet-500 hover:underline cursor-pointer pt-2">
                Mostrar más
                </p>
            </section>
        <div>
        <div className="flex flex-row justify-between font-semibold text-[#EFEFF1] text-md align-middle hover:bg-[#34343B] pl-2 pt-2 pb-2 cursor-pointer">
                <p>
                    Canales Recomendados
                </p>
                <ThreeDotsIcon height="1.5rem" width="2rem"/>
            </div>
            <section className="flex flex-col">
                {RecomendedChannels.map((canal)=> {
                    return (
                        <Channel
                        key={`canal-${canal.channel}`}
                        channel={canal.channel}
                        Game={canal.Game}
                        Viewers={canal.Viewers}
                         />
                    )
                }
                )}
                <p className="text-sm pl-2 text-violet-500 hover:underline cursor-pointer pt-2">
                Mostrar más
                </p>
            </section>
        </div>
    </section>
}