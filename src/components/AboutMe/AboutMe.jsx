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
    <div id="aboutme" className="overflow-x-hidden z-0 bg-azuloscuro dark:bg-celesteclaro font-squada flex flex-row items-stretch justify-center p-12 space-x-8 mq980:flex-col mq980:p-7 mq980:space-x-0">
            <div
              ref={aboutMeRef}
              className="mt-12 w-[50%] p-8 text-center border-2 border-celeste dark:border-azuloscuro rounded-md mq980:w-full mq980:p-5 mq980:mt-0"
            >
                <h1 className="text-5xl text-white dark:text-azuloscuro mq980:text-3xl">{t("aboutme")}</h1>
                <p className="text-celesteclaro text-2xl text-center mt-2 dark:text-azuloscuro mq980:text-xl">
                    {t("aboutmetext")}
                </p>
            </div>
            <div
            ref={resumeRef}
            className="mt-12 flex flex-col w-[50%] space-y-8 mq980:w-full mq980:p-0"
            >
                <div id='studies' className="text-center border-2 border-celeste dark:border-azuloscuro rounded-md p-8 mq980:p-5 mq980:mt-0">
                    <h1 className="text-5xl text-white dark:text-azuloscuro mq980:text-3xl">{t("education")}</h1>
                    <p className="text-celesteclaro text-2xl mt-2 dark:text-azuloscuro mq980:text-xl">
                    {t("educationtext1")}
                    </p>
                </div>
                <div id="resume" className="text-center border-2 border-celeste dark:border-azuloscuro rounded-md p-8 mq980:p-5 mq980:mt-16">
                    <h1 className="text-5xl text-white dark:text-azuloscuro mq980:text-3xl">{t("experience")}</h1>
                    <p className="text-celesteclaro text-2xl mt-2 dark:text-azuloscuro mq980:text-xl">
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

  