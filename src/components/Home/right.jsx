import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { BiSolidVolumeMute } from "react-icons/bi";
import { BiSolidVolumeFull } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toggleTheme } from "../../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import music from "../../assets/music.mp3"

export const Right = () => {

    const theme = useSelector(state => state.global.theme);
    const dispatch = useDispatch()

    const { t, i18n } = useTranslation();
    const [esEn, setEsEn] = useState(i18n.language === 'es');
    const [muteVolume, setMuteVolume] = useState(false)
    const audioRef = useRef(null)

    const toggleEsEn = () => {
        const newLang = esEn ? 'en' : 'es';
        i18n.changeLanguage(newLang);
        setEsEn(!esEn);
    };

    const toggleDarkLight = () => {
        dispatch(toggleTheme());
    };

    useEffect(() => {
        if (theme === "dark") {
            console.log('Adding light mode');
            document.documentElement.classList.add('dark');
        } else {
            console.log('Removing light mode');
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleMuteVolume = () => {
        if (muteVolume) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setMuteVolume(!muteVolume);
    };

    return (
        <div className="bg-azuloscuro text-blanco top-[50%] right-0 absolute rounded-tl-md rounded-bl-md  px-3 py-5 text-3xl space-y-2">
        
        { esEn ? 
            <p onClick={toggleEsEn} className="cursor-pointer">ES</p> 
            : 
            <p onClick={toggleEsEn} className="cursor-pointer leading-0">EN</p> 
            
        }
        {theme === 'dark' ? (
             <FaSun onClick={toggleDarkLight} className="cursor-pointer"/>
        ) : (
            <IoMdMoon onClick={toggleDarkLight} className="cursor-pointer" />
            
        )}
        { muteVolume ? <BiSolidVolumeFull onClick={toggleMuteVolume} className="cursor-pointer"/> : <BiSolidVolumeMute onClick={toggleMuteVolume} className="cursor-pointer"/> }
        <audio ref={audioRef} src={music} loop />
        
        </div>
    )
}