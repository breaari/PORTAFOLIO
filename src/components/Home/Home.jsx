import avatar from "../../assets/avatar.png"
import 'boxicons'
import { handleScrollToSection } from "../Utils/handleScrollToSection"
import TypingEffect from "./typingEffect"
import { Right } from "./right"
import { Left } from "./left"

export const Home = ()=>{

    
    return (
        <div id="home" className="h-screen max-w-screen bg-gradient-to-b from-celeste to-azuloscuro flex flex-row font-squada px-12 pt-12">
            <Right></Right>
            <div className="w-[40%] flex flex-col items-center justify-center">
            <div className=" h-[400px] w-[400px] overflow-hidden ">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="h-[400px] w-[400px]  object-cover"
                />
            </div>
            </div>
            <div className=" w-[60%] flex flex-col items-center justify-center">
            <h1 className="text-8xl text-blanco">ARIANA BREA
                
            </h1>
            <h1 className="text-5xl text-celesteclaro text-center leading-none max-w-[80%]">
                <TypingEffect text="SOLUCIONES INTEGRALES EN DESARROLLO WEB" speed={50} />
            </h1>
            <a className="text-azuloscuro text-[30px]">[ FULL STACK DEVELOPER ]</a>
            <button onClick={() => handleScrollToSection('contact')}  className="bg-azuloscuro text-blanco py-3 px-6 text-[20px] rounded-[30px] mt-10">CONTACTAME!</button>
            </div>
            <Left></Left>
        </div>
    )
}