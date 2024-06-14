import { ThreeDotsIcon } from "../assets/icons"


export default function NavTag(){
    const categories = [
        "Siguiendo",
        "Explorar"
    ]
    return (
        <div className="flex row gap-2 pl-3">
            {categories.map((category)=>{
                return (
                    <span key={`category-${category}`} className="font-semibold pl-4 pr-4  pb-2 rounded-[20px] text-[#EFEFF1]  hover:text-[#BF94FF] cursor-pointer text-xl hidden md:flex">
                        {category}
                    </span>
                )
            })}
            <div className="hover:bg-[#34343B] pt-1 cursor-pointer rounded-md">
            <ThreeDotsIcon height="1.5rem" width="2rem"/>
            </div>
        </div>
    )
}