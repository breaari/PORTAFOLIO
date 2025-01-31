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
import { LuCode2 } from "react-icons/lu";
import { LuLink } from "react-icons/lu";
import { useState } from "react";

export const Fitness = () => {

    const { t } = useTranslation();

    const [hovered, setHovered] = useState(false);
    
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    const toggleImage = () => {
      setHovered(!hovered)
    }

    return (
        <div className="bg-azuloscuro dark:bg-transparent rounded-md my-6 flex flex-row mq1220:flex-col justify-center items-center text-center shadow-md border-4 border-azuloscuro ">
            <div className="block mq980:hidden min-w-[500px] h-auto relative mq980:min-w-full bg-azuloscuro">
              <img
                src={fitness}
                className={`dark:border-r-4 dark:border-azuloscuro mq980:w-full w-[500px] mq1220:rounded-bl-none mq1220:rounded-tl-none h-auto object-cover rounded-tl-md rounded-bl-md transition-opacity duration-300 ease-in-out ${hovered ? "opacity-20" : "opacity-100"} `}
                alt="Para vos fitness"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <div 
                className={`absolute inset-0 flex flex-row justify-center items-center gap-12 transition-opacity duration-300 ease-in-out ${hovered ? "opacity-100" : "opacity-0"} z-10 pointer-events-none`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
              <a href="https://github.com/breaari/front-fitness" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                  <LuCode2 className="text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4" />
                </a>
                <a href="https://paravosdistribuidora.com.ar" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                  <LuLink className="text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4" />
                </a>
              </div>
            </div>
            <div className="hidden mq980:block h-auto relative min-w-full bg-azuloscuro">
              <img
                src={fitness}
                className={`dark:border-b-4 dark:border-azuloscuro w-full rounded-bl-none rounded-tl-none h-auto object-cover transition-opacity duration-300 ease-in-out ${hovered ? "opacity-20" : "opacity-100"} `}
                alt="Para vos fitness"
                onClick={toggleImage}
              />
              { hovered && (
                <div 
                  className={`absolute inset-0 flex flex-row justify-center items-center gap-12 transition-opacity duration-300 ease-in-out z-10 pointer-events-none`}
                  onClick={toggleImage}
                >
                <a href="https://github.com/breaari/front-fitness" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                    <LuCode2 className="text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4" />
                  </a>
                  <a href="https://paravosdistribuidora.com.ar" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                    <LuLink className="text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4" />
                  </a>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col justify-center">
                <h1 className="text-blanco text-3xl dark:text-azuloscuro">{t('projecttittle2')}</h1> 
                <p className="text-celesteclaro text-2xl mt-4 mq980:text-xl dark:text-azuloscuro">{t('projecttext2')}</p>
                <div className='flex flex-wrap gap-1 justify-center text-celesteclaro  text-xl mt-4 mq980:text-[16px] dark:text-azuloscuro'>
                <div className='flex flex-row items-center py-2 px-4 mq980:py-1 mq980:px-2 border-2 border-celesteclaro rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiJavascript />
                    <a className='flex items-center justify-center ml-2'>JAVASCRIPT</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiHtml5 />
                    <a className='flex items-center justify-center ml-2'>HTML</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiReact />
                    <a className='flex items-center justify-center ml-2'>REACT</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiNodedotjs />
                    <a className='flex items-center justify-center ml-2 '>NODE.JS</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <BiLogoPostgresql />
                    <a className='flex items-center justify-center ml-2'>POSTGRESQL</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiTailwindcss />
                    <a className='flex items-center justify-center ml-2'>TAILWIND CSS</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiRedux />
                    <a className='flex items-center justify-center ml-2'>REDUX</a>
                </div>
                <div className='flex flex-row items-center border-2 border-celesteclaro py-2 px-4 mq980:py-1 mq980:px-2 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiExpress />
                    <a className='flex items-center justify-center ml-2'>EXPRESS</a>
                </div>
                </div>
            </div>
        </div>
    )
}