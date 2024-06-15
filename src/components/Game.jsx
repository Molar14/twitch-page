import { ThreeDotsIcon } from "../assets/icons"

export default function Game(Name){
    return (
        <div className="p-1 ">
            <div className="cursor-pointer">
            {
                    Name.New ? (
                        <div className="z-10 absolute font-semibold p-1 pl-2 pr-2 rounded-[20px] text-[#EFEFF1] bg-[#1F1F23] text-lg lg:text-base xl:text-sm">
                            New
                        </div>
                    ):(
                        <div>
                            
                        </div>
                    )
                }
                <img src={Name.Image} alt="" className="object-cover" />
            </div>
            <div className="flex flex-row justify-between pt-2 align-middle ">
                <div className=" cursor-pointer w-full">
                <p className="text-md text-white font-semibold cursor-pointer hover:text-[#BF94FF]">
                    {Name.Name}
                </p>
                </div>
                <div className="hover:bg-[#34343B] rounded-md p-1">
                <ThreeDotsIcon />
                </div>
            </div>
            <div>
                <p className="text-xs text-[#474750] font-semibold cursor-pointer">
                    {`${Name.Viewers} espectadores`}
                </p>
            </div>
            <div>
                {
                    Name.Tags ? (
                        Name.Tags.map((tag) =>{
                            return (
                                <span key={`category-${tag}`} className="bg-[#1F1F23] font-semibold p-1 pl-2 pr-2 rounded-[20px] text-[#EFEFF1] cursor-pointer text-xs hover:drop-shadow-lg hover:bg-[#313133]">
                            {tag}
                        </span>
                            )
                        })
                    ):(
                        <div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}