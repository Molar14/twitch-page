import { Corona, Estrella, Corazon, Lupa, Bateria } from "../assets/icons"
import clsx from "clsx"

export default function NavButtons(){
    const icons = [
        <Corona key="corona" height="1.0rem" width="1.0rem"/>,
        <Estrella key="estrella" height="1.0rem" width="1.0rem"/>,
        <Corazon key="corona" height="1.0rem" width="1.0rem"/>,
        <Bateria key="corona" height="1.0rem" width="1.0rem"/>,
        <Lupa key="corona" height="1.0rem" width="1.0rem"/>
    ]
    return(
    <div className="flex row gap-2 pl-3">
        {icons.map((svg, index)=>{
            return (
                <div key={index} className={clsx('p-3 hover:bg-[#34343B] rounded-md', {'xl:hidden': index==3}, {'lg:hidden': index==4})}>
                    {svg}
                </div>
            )
        })}
        
    </div>
    )
}
