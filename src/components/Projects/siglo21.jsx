import { useTranslation } from "react-i18next";
import siglo21 from "../../assets/siglo21.jpg"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { LuCode2 } from "react-icons/lu";
import { LuLink } from "react-icons/lu";
import { useState } from "react";

export const Siglo21 = () => {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(false);
    console.log("hocered:", hovered)
  
    return (
      <div className="relative bg-azuloscuro rounded-md my-6 flex flex-row justify-center items-center text-center shadow-md border-4 border-azuloscuro overflow-hidden">
        <div className="min-w-[500px] h-auto relative">
        <img
          src={siglo21}
          className="w-[500px] h-auto object-cover rounded-tl-md rounded-bl-md transition-opacity duration-300 ease-in-out hover:opacity-40"
          alt="Siglo 21"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        
        <div className={hovered ? "absolute inset-0 flex flex-row justify-center items-center gap-12" : "hidden"}>
         <LuCode2 className= " text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4"/>
         <LuLink className=" text-white text-7xl cursor-pointer border-4 rounded-[50%] p-4"/>
        </div>
        </div>
        
       
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-blanco text-3xl">{t('projecttittle1')}</h1>
          <p className="text-celesteclaro text-2xl">{t('projecttext1')}</p>
          <div className="flex flex-wrap gap-1 justify-center text-celesteclaro text-xl mt-4">
            <div className="flex flex-row items-center py-2 px-4 border-2 border-celesteclaro rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiJavascript />
              <a className="flex items-center justify-center ml-2">JAVASCRIPT</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiHtml5 />
              <a className="flex items-center justify-center ml-2">HTML</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiReact />
              <a className="flex items-center justify-center ml-2">REACT</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiNodedotjs />
              <a className="flex items-center justify-center ml-2 ">NODE.JS</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiTailwindcss />
              <a className="flex items-center justify-center ml-2">TAILWIND CSS</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiRedux />
              <a className="flex items-center justify-center ml-2">REDUX</a>
            </div>
            <div className="flex flex-row items-center border-2 border-celesteclaro py-2 px-4 rounded-md shadow-md transition duration-300 hover:scale-110 hover:text-blanco hover:border-blanco">
              <SiExpress />
              <a className="flex items-center justify-center ml-2">EXPRESS</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  