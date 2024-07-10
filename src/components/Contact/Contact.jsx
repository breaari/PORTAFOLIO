import { Formulario } from "./form"
import avatar from "../../assets/avatar2.png"

export const Contact = ()=>{
    return (
        <div id="contact" className="z-0 px-16 pt-12 min-h-screen bg-gradient-to-b from-celeste to-azuloscuro dark:from-celeste dark:to-celesteclaro flex flex-row items-center justify-center">
            <div className="w-[60%] flex justify-center">
            <Formulario></Formulario>
            </div> 
           <div className="w-[40%]">
            <img src= {avatar} className=" h-[500px] w-[500px]"></img>
            </div> 
        </div>
    )
}
