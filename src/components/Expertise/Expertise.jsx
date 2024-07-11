import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export const Expertise = ()=>{

    const { t } = useTranslation();

    const expertiseRef = useRef(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const expertiseElement = expertiseRef.current;

    const handleScroll = () => {
      if (expertiseElement) {
        const rect = expertiseElement.getBoundingClientRect();
        const currentScrollY = window.scrollY;

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          if (currentScrollY > previousScrollY.current) {
            expertiseElement.classList.add("animate-enterIn");
            expertiseElement.classList.remove("animate-leaveOut",);
          } else {
            expertiseElement.classList.add("animate-enterIn");
            expertiseElement.classList.remove("animate-leaveOut",);
          }
        } else {
          if (currentScrollY > previousScrollY.current) {
            expertiseElement.classList.add("animate-leaveOut");
            expertiseElement.classList.remove("animate-enterIn");
          } else {
            expertiseElement.classList.add("animate-leaveOut");
            expertiseElement.classList.remove("animate-enterIn");
          }
        }
        previousScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return (
        <div className="z-0 bg-azuloscuro dark:bg-celesteclaro flex flex-col p-12 font-squada mq980:p-7">
            <div id="expertise" ref={expertiseRef} >
           <a className="text-5xl flex items-center justify-center py-10 text-blanco dark:text-azuloscuro mt-12 mq980:mt-0 mq980:text-3xl mq980:py-6" >{t('technologies')}</a>
           <div className='flex flex-wrap gap-4 justify-center text-celesteclaro text-3xl dark:text-azuloscuro mq980:text-xl'>
                <div className='flex flex-row items-center py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco  border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiJavascript />
                    <a className='flex items-center justify-center ml-2'>JAVASCRIPT</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4 rounded-md border-2 border-celesteclaro hover:border-blanco shadow-md transition duration-300 hover:scale-110 hover:text-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiHtml5 />
                    <a className='flex items-center justify-center ml-2'>HTML</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco  border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiCss3 />
                    <a className='flex items-center justify-center ml-2'>CSS</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco  border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiReact />
                    <a className='flex items-center justify-center ml-2'>REACT</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiNodedotjs />
                    <a className='flex items-center justify-center ml-2 '>NODE.JS</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <BiLogoPostgresql />
                    <a className='flex items-center justify-center ml-2'>POSTGRESQL</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4  rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiTailwindcss />
                    <a className='flex items-center justify-center ml-2'>TAILWIND CSS</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiRedux />
                    <a className='flex items-center justify-center ml-2'>REDUX</a>
                </div>
                <div className='flex flex-row items-center py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco border-2 border-celesteclaro hover:border-blanco dark:border-azuloscuro dark:hover:text-azuloscuro'>
                    <SiExpress />
                    <a className='flex items-center justify-center ml-2'>EXPRESS</a>
                </div>
            </div>
            </div>
        </div>
    )
}