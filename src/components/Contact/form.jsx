import { useTranslation } from "react-i18next";

export const Formulario = () => {

    const { t } = useTranslation();

    return (
        <div className="w-[80%] border-celesteclaro dark:border-azuloscuro border-2 rounded-md py-8 px-12  flex flex-col justify-center font-squada">
            <h1 className="text-5xl text-white text-center dark:text-azuloscuro">{t('contacttittle')}</h1>
            <form className="flex flex-col text-3xl text-celesteclaro dark:text-azuloscuro items-center ">
            <label className="flex flex-col mt-4 w-full">{t('name')}
                <input className="border-b-2 bg-transparent  border-celesteclaro dark:border-azuloscuro outline-none mt-2"></input>
            </label>
            <label className="flex flex-col mt-4  w-full">EMAIL:
                <input className="border-b-2 bg-transparent border-celesteclaro dark:border-azuloscuro outline-none mt-2"></input>
            </label >
            <label className="flex flex-col my-4 w-full">{t('message')}
                <input className="border-b-2 bg-transparent border-celesteclaro dark:border-azuloscuro outline-none mt-2"></input>
            </label>
            <button className="bg-celesteclaro dark:bg-azuloscuro dark:text-celesteclaro rounded-md py-1 w-[150px] mt-4 text-azuloscuro">{t('sendbutton')}</button>
            </form>
        </div>
        
    )
}