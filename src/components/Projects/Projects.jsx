import { useEffect, useRef } from "react";
import { Fitness } from "./fitness";
import { Siglo21 } from "./siglo21";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const siglo21Ref = useRef(null);
  const fitnessRef = useRef(null);

  useEffect(() => {
    const siglo21Element = siglo21Ref.current;
    const fitnessElement = fitnessRef.current;

    const handleScroll = () => {
      if (siglo21Element) {
        if (
          siglo21Element.getBoundingClientRect().top < window.innerHeight &&
          siglo21Element.getBoundingClientRect().bottom >= 0
        ) {
          siglo21Element.classList.add("animate-enterLeft");
          siglo21Element.classList.remove("animate-leaveLeft");
        } else {
          siglo21Element.classList.add("animate-leaveLeft");
          siglo21Element.classList.remove("animate-enterLeft");
        }
      }
      if (fitnessElement) {
        if (
          fitnessElement.getBoundingClientRect().top < window.innerHeight &&
          fitnessElement.getBoundingClientRect().bottom >= 0
        ) {
          fitnessElement.classList.add("animate-enterRight");
          fitnessElement.classList.remove("animate-leaveRight");
        } else {
          fitnessElement.classList.add("animate-leaveRight");
          fitnessElement.classList.remove("animate-enterRight");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="projects"
      className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12 pb-24"
    >
      <h1 className="text-blanco text-5xl text-center mb-12 dark:text-azuloscuro mt-12">
        {t("projects")}
      </h1>
      <div className="flex flex-col items-stretch justify-center px-12">
        <div ref={siglo21Ref} className="w-full mb-8">
          <Siglo21 />
        </div>
        <div ref={fitnessRef} className="w-full">
          <Fitness />
        </div>
      </div>
    </div>
  );
};
