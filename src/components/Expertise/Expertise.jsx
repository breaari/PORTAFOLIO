import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const Expertise = ()=>{
    return (
        <div id="expertise" className="z-0 bg-gradient-to-t from-celeste to-azuloscuro flex flex-col p-12 font-squada">
           <a className="text-5xl flex items-center justify-center py-10 text-blanco">TECNOLOGÍAS</a>
           <div className='flex flex-wrap gap-4 justify-center text-celesteclaro text-3xl'>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiJavascript />
                    <a className='flex items-center justify-center ml-2'>JAVASCRIPT</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiHtml5 />
                    <a className='flex items-center justify-center ml-2'>HTML</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiCss3 />
                    <a className='flex items-center justify-center ml-2'>CSS</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiReact />
                    <a className='flex items-center justify-center ml-2'>REACT</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiNodedotjs />
                    <a className='flex items-center justify-center ml-2 '>NODE.JS</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <BiLogoPostgresql />
                    <a className='flex items-center justify-center ml-2'>POSTGRESQL</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiTailwindcss />
                    <a className='flex items-center justify-center ml-2'>TAILWIND CSS</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiRedux />
                    <a className='flex items-center justify-center ml-2'>REDUX</a>
                </div>
                <div className='flex flex-row items-center bg-azuloscuro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco'>
                    <SiExpress />
                    <a className='flex items-center justify-center ml-2'>EXPRESS</a>
                </div>
            </div>
        </div>
    )
}