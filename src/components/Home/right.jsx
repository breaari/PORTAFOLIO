import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { BiSolidVolumeMute } from "react-icons/bi";
import { BiSolidVolumeFull } from "react-icons/bi";
import { useState } from "react";

export const Right = () => {

    const [esEn, setEsEn] = useState(false)
    const [darkLight, setDarkLight] = useState(false)
    const [muteVolume, setMuteVolume] = useState(false)

    const toggleEsEn = () => {
        setEsEn(!esEn)
    }
    const toggleDarkLight = () => {
        setDarkLight(!darkLight)
    }
    const toggleMuteVolume = () => {
        setMuteVolume(!muteVolume)
    }

    return (
        <div className="bg-azuloscuro text-blanco top-[50%] right-0 absolute rounded-tl-md rounded-bl-md  px-3 py-5 text-[25px] space-y-2">
        
        { esEn ? 
            <p onClick={toggleEsEn} className="cursor-pointer leading-0">EN</p> 
            : 
            <p onClick={toggleEsEn} className="cursor-pointer">ES</p> 
        }
        { darkLight ? <FaSun onClick={toggleDarkLight}/> : <IoMdMoon onClick={toggleDarkLight} /> }
        { muteVolume ? <BiSolidVolumeFull onClick={toggleMuteVolume}/> : <BiSolidVolumeMute onClick={toggleMuteVolume}/> }
        
        </div>
    )
}