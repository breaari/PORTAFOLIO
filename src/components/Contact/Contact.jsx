import { Formulario } from "./form"
import avatar from "../../assets/avatar2.png"

export const Contact = ()=>{
    return (
        <div id="contact" className="h-screen max-w-screen bg-gradient-to-b from-celeste to-azuloscuro dark:from-celeste dark:to-celesteclaro flex flex-row px-12 pt-12">
            <div className="w-[60%] flex flex-col justify-center items-center">
            <Formulario></Formulario>
            </div> 
           <div className="w-[40%] flex flex-col items-center justify-center">
           <div className=" h-[500px] w-[500px] overflow-hidden ">
            <img src= {avatar} className=" h-[500px] w-[500px] objet-cover"></img>
            </div>
            </div> 
        </div>
    )
}
