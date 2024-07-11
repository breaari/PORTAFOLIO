import { Formulario } from "./form"
import avatar from "../../assets/avatar2.png"
import { useEffect, useRef } from "react";

export const Contact = ()=>{

    const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      const formElement = formRef.current;

      if (window.innerWidth < 980) {

        if (formElement) {
          if (
            formElement.getBoundingClientRect().top < window.innerHeight &&
            formElement.getBoundingClientRect().bottom >= 0
          ) {
            formElement.classList.add("animate-enterRight");
            formElement.classList.remove("animate-leaveRight");
          } else {
            formElement.classList.add("animate-leaveRight");
            formElement.classList.remove("animate-enterRight");
          }
        }

        return
  

      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div id="contact" className="h-screen max-w-screen bg-gradient-to-b from-celeste to-azuloscuro dark:from-celeste dark:to-celesteclaro flex flex-row px-12 pt-12 mq980:flex-col mq980:px-7 mq980:pt-7 mq980:items-center">
            <div ref={formRef} className="w-[60%] flex flex-col justify-center items-center mq980:w-[100%] mq400:w-[100%] mq980:h-[50%] mq980:justify-end">
            <Formulario></Formulario>
            </div> 
           <div className="w-[40%] flex flex-col items-center justify-center mq980:w-full mq980:h-[50%] mq980:justify-center">
           <div className=" h-[500px] w-[500px] overflow-hidden mq980:w-[300px] mq980:h-[300px]">
            <img src= {avatar} className=" h-[500px] w-[500px] objet-cover mq980:w-[300px] mq980:h-[300px]"></img>
            </div>
            </div> 
        </div>
    )
}
