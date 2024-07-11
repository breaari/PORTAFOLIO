import avatar from "../../assets/avatar.png"
import { handleScrollToSection } from "../Utils/handleScrollToSection"
import TypingEffect from "./typingEffect"
import { Right } from "./right"
import { Left } from "./left"
import { useTranslation } from "react-i18next"

export const Home = ()=>{

    const { t } = useTranslation();
    
    return (
        <div id="home" className="h-screen max-w-screen bg-gradient-to-b from-celeste to-azuloscuro dark:from-celeste dark:to-celesteclaro flex flex-row font-squada px-12 pt-12 mq980:flex-col mq980:items-center mq980:justify-center">
            <Right></Right>
            <div className="w-[40%] flex flex-col items-center justify-center mq980:w-full mq980:h-[50%] mq980:justify-end mq980:items-end">
                <div className="h-[500px] w-[500px] mq980:w-[300px] mq980:h-[300px] overflow-hidden">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="h-[500px] w-[500px] mq980:w-[300px] mq980:h-[300px] object-cover"
                    />
                </div>
            </div>
            <div className="w-[60%] flex flex-col items-center justify-center mq980:w-full mq980:h-[50%] mq980:justify-start">
                <h1 className="text-8xl text-blanco dark:text-azuloscuro mq980:text-5xl">ARIANA BREA</h1>
            <h1 className="text-5xl text-celesteclaro text-center leading-none max-w-[80%] dark:text-celeste mq980:text-3xl">
                <TypingEffect text={t('tagline')} speed={50} />
            </h1>
            <a className="text-azuloscuro text-[30px] dark:text-blanco mq980:text-[18px]">[ FULL STACK DEVELOPER ]</a>
            <button onClick={() => handleScrollToSection('contact')}  className="bg-azuloscuro text-celesteclaro py-3 px-6 text-[20px] rounded-[30px] mt-10 hover:scale-95 mq980:text-[18px]">{t('contactbutton')}</button>
            </div>
            <Left></Left>
        </div>
    )
}