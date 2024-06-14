import { Corona, Estrella, Corazon } from "../assets/icons"

export default function NavButtons(){
    const icons = [
        <Corona key="corona" height="1.0rem" width="1.0rem"/>,
        <Estrella key="estrella" height="1.0rem" width="1.0rem"/>,
        <Corazon key="corona" height="1.0rem" width="1.0rem"/>
    ]
    return(
    <div className="flex row gap-2 pl-3">
        {icons.map((svg, index)=>{
            return (
                <div key={index} className="p-3 hover:bg-[#34343B] rounded-md">
                    {svg}
                </div>
            )
        })}
        <div className="bg-[#333335] text-xs p-2 justify-center text-white flex flex-row gap-2 rounded-md cursor-pointer hover:drop-shadow-lg hover:bg-[#313133]" >
            <Estrella height="1.0rem" width="1.0rem"/>
            <p>
                Disfruta gratis sin anuncios
            </p>
        </div>
    </div>
    )
}