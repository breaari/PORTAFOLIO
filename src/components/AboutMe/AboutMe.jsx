import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { InView } from "react-intersection-observer";

export const AboutMe = () => {
  const { t } = useTranslation();

  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const aboutMeElement = aboutMeRef.current;

    const handleScroll = () => {
      if (aboutMeElement) {
        if (
          aboutMeElement.getBoundingClientRect().top < window.innerHeight &&
          aboutMeElement.getBoundingClientRect().bottom >= 0
        ) {
          aboutMeElement.classList.add("animate-enterLeft");
          aboutMeElement.classList.remove("animate-leaveLeft");
        } else {
          aboutMeElement.classList.add("animate-leaveLeft");
          aboutMeElement.classList.remove("animate-enterLeft");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const resumeElement = resumeRef.current;

    const handleScroll = () => {
      if (resumeElement) {
        if (
          resumeElement.getBoundingClientRect().top < window.innerHeight &&
          resumeElement.getBoundingClientRect().bottom >= 0
        ) {
          resumeElement.classList.add("animate-enterRight");
          resumeElement.classList.remove("animate-leaveRight");
        } else {
          resumeElement.classList.add("animate-leaveRight");
          resumeElement.classList.remove("animate-enterRight");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="aboutme" className=" overflow-x-hidden z-0 bg-azuloscuro dark:bg-celesteclaro font-squada flex flex-row items-stretch justify-center p-12 space-x-8">
            <div
            
            ref={aboutMeRef}
            className="mt-12 w-[50%] p-8 text-center border-2 border-celeste dark:border-azuloscuro rounded-md"
            >
                <h1 className="text-5xl text-white dark:text-azuloscuro">{t("aboutme")}</h1>
                <p className="text-celesteclaro text-2xl text-center mt-2 dark:text-azuloscuro">
                    {t("aboutmetext")}
                </p>
            </div>
            <div
            // id="resume"
            ref={resumeRef}
            className=" mt-12 flex flex-col w-[50%] space-y-8"
            >
                <div className="text-center border-2 border-celeste dark:border-azuloscuro rounded-md p-8">
                    <h1 className="text-5xl text-white dark:text-azuloscuro">{t("education")}</h1>
                    <p className="text-celesteclaro text-2xl mt-2 dark:text-azuloscuro">
                    {t("educationtext1")}
                    </p>
                </div>
                <div className="text-center border-2 border-celeste dark:border-azuloscuro rounded-md p-8">
                    <h1 className="text-5xl text-white dark:text-azuloscuro">{t("experience")}</h1>
                    <p className="text-celesteclaro text-2xl mt-2 dark:text-azuloscuro">
                    {t("experiencetext1")}
                    </p>
                    <p className="text-celesteclaro text-2xl text-center mt-2">
                    {t("experiencetext2")}
                    </p>
                </div>
            </div>
    </div>
  );
};

  