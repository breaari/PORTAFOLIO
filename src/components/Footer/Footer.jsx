import { useTranslation } from "react-i18next";

export const Footer = () => {

    const { t } = useTranslation();

    return ( 
        <div className="bg-azuloscuro dark:bg-celesteclaro font-squada h-[120px] flex justify-center p-12">
            <h1 className="text-celesteclaro dark:text-azuloscuro text-3xl text-center">
            {t('footertext')}</h1>
        </div>
    )
}