import fitness from "../../assets/fitness.jpg"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { useTranslation } from "react-i18next";

export const Fitness = () => {

    const { t } = useTranslation();

    return (
        <div className="bg-azuloscuro rounded-md my-6 flex flex-row justify-center items-center text-center shadow-md border-4 border-azuloscuro ">
            <img src={fitness} className="w-[500px] h-auto objet-cover rounded-tl-md rounded-bl-md"></img>
            <div className="p-6 flex flex-col justify-center  ">
                <h1 className="text-blanco text-3xl">{t('projecttittle2')}</h1> 
                <p className="text-celesteclaro text-2xl mt-4">{t('projecttext2')}</p>
                <div className='flex flex-wrap gap-1 justify-center text-celesteclaro  text-xl mt-4'>
                <div className='flex flex-row items-center py-2 px-4 border-2 border-celesteclaro rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco '>
                    <SiJavascript />
                    <a className='flex items-center justify-center ml-2'>JAVASCRIPT</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco'>
                    <SiHtml5 />
                    <a className='flex items-center justify-center ml-2'>HTML</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco'>
                    <SiReact />
                    <a className='flex items-center justify-center ml-2'>REACT</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco '>
                    <SiNodedotjs />
                    <a className='flex items-center justify-center ml-2 '>NODE.JS</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4  rounded-md shadow-md transition'>
                    <BiLogoPostgresql />
                    <a className='flex items-center justify-center ml-2'>POSTGRESQL</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco '>
                    <SiTailwindcss />
                    <a className='flex items-center justify-center ml-2'>TAILWIND CSS</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco '>
                    <SiRedux />
                    <a className='flex items-center justify-center ml-2'>REDUX</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco '>
                    <SiExpress />
                    <a className='flex items-center justify-center ml-2'>EXPRESS</a>
                </div>
                </div>
            </div>
        </div>
    )
}