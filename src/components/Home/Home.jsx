import homefondo from "../../assets/homefondo.jpg"
import 'boxicons'
import { handleScrollToSection } from "../Utils/handleScrollToSection"

export const Home = ()=>{
    return (
        <div id="home" className="h-screen max-w-screen bg-celeste flex flex-row">
            <div className="h-full w-[30%] border-white relative">
                <img src={homefondo} className="absolute inset-0 w-full h-full object-cover"></img>
                
            </div>
            
            <div className=" w-[70%] flex flex-col items-center justify-center">
            <a className="text-blanco text-[50px] font-bold text-center leading-none max-w-[80%] ">Soluciones integrales en Desarollo Web</a>
            <a className="text-azuloscuro font-semibold text-[30px]">Full Stack Developer</a>
            <button onClick={() => handleScrollToSection('contact')}  className="font-semibold bg-azuloscuro text-celesteclaro py-3 px-6 text-[20px] rounded-[30px] mt-10">Contactame!</button>
            </div>
        </div>
    )
}