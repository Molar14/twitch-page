import { ThreeDotsIcon, Corazon, Estrella } from "../assets/icons"
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
        <div className="font-semibold text-[#EFEFF1] text-xl pl-2 hidden xl:flex xl:flex-row xl:justify-between">
            <p>
                Para ti
            </p>
            <ThreeDotsIcon height="1.5rem" width="2rem"/>
        </div>
            <div className="font-semibold text-[#EFEFF1] text-md align-middle hover:bg-[#34343B] pl-2 pt-2 pb-2 cursor-pointer hidden xl:flex xl:flex-row xl:justify-between">
                <p>
                    Canales que sigues
                </p>
                <ThreeDotsIcon height="1.5rem" width="2rem"/>
            </div>
            <section className="flex flex-col">
                <Corazon height="1.5rem" width="2.0rem" className="xl:hidden pl-2"/>
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
                <p className="text-sm pl-2 text-violet-500 hover:underline cursor-pointer pt-2 hidden">
                Mostrar más
                </p>
            </section>
        <div>
        <div className="font-semibold text-[#EFEFF1] text-md align-middle hover:bg-[#34343B] pl-2 pt-2 pb-2 cursor-pointer hidden xl:flex xl:flex-row xl:justify-between ">
                <p>
                    Canales Recomendados
                </p>
                <ThreeDotsIcon height="1.5rem" width="2rem"/>
            </div>
            <section className="flex flex-col justify-center">
                <Estrella height="1.5rem" width="2.0rem" className="xl:hidden pl-2"/>
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
                <p className="text-sm pl-2 text-violet-500 hover:underline cursor-pointer pt-2 hidden">
                Mostrar más
                </p>
            </section>
        </div>
    </section>
}