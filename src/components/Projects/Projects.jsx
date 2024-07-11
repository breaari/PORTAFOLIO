// import { useEffect, useRef } from "react";
// import { Fitness } from "./fitness";
// import { Siglo21 } from "./siglo21";
// import { useTranslation } from "react-i18next";

// export const Projects = () => {
//   const { t } = useTranslation();

//   const siglo21Ref = useRef(null);
//   const fitnessRef = useRef(null);

//   useEffect(() => {
//     const siglo21Element = siglo21Ref.current;
//     const fitnessElement = fitnessRef.current;

//     const handleScroll = () => {
//       if (siglo21Element) {
//         if (
//           siglo21Element.getBoundingClientRect().top < window.innerHeight &&
//           siglo21Element.getBoundingClientRect().bottom >= 0
//         ) {
//           siglo21Element.classList.add("animate-enterLeft");
//           siglo21Element.classList.remove("animate-leaveLeft");
//         } else {
//           siglo21Element.classList.add("animate-leaveLeft");
//           siglo21Element.classList.remove("animate-enterLeft");
//         }
//       }
//       if (fitnessElement) {
//         if (
//           fitnessElement.getBoundingClientRect().top < window.innerHeight &&
//           fitnessElement.getBoundingClientRect().bottom >= 0
//         ) {
//           fitnessElement.classList.add("animate-enterRight");
//           fitnessElement.classList.remove("animate-leaveRight");
//         } else {
//           fitnessElement.classList.add("animate-leaveRight");
//           fitnessElement.classList.remove("animate-enterRight");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="projects"
//       className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12"
//     >
//       <h1 className="text-blanco text-5xl text-center mb-12 dark:text-azuloscuro mt-12">
//         {t("projects")}
//       </h1>
//       <div className="flex flex-col items-stretch justify-center px-12 ">
//         <div ref={siglo21Ref} className="w-full mb-8 mq1220:w-[520px]">
//           <Siglo21 />
//         </div>
//         <div ref={fitnessRef} className="w-full">
//           <Fitness />
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useEffect, useRef, useState } from "react";
// import { Fitness } from "./fitness";
// import { Siglo21 } from "./siglo21";
// import { useTranslation } from "react-i18next";

// const Projects = () => {
//   const { t } = useTranslation();

//   const [currentProject, setCurrentProject] = useState(0); // Estado para el proyecto actual

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev === 0 ? 1 : 0)); // Cambia al siguiente proyecto
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev === 1 ? 0 : 1)); // Cambia al proyecto anterior
//   };

//   const siglo21Ref = useRef(null);
//   const fitnessRef = useRef(null);

//   useEffect(() => {
//     const siglo21Element = siglo21Ref.current;
//     const fitnessElement = fitnessRef.current;

//     const handleScroll = () => {
//       if (siglo21Element) {
//         if (
//           siglo21Element.getBoundingClientRect().top < window.innerHeight &&
//           siglo21Element.getBoundingClientRect().bottom >= 0
//         ) {
//           siglo21Element.classList.add("animate-enterLeft");
//           siglo21Element.classList.remove("animate-leaveLeft");
//         } else {
//           siglo21Element.classList.add("animate-leaveLeft");
//           siglo21Element.classList.remove("animate-enterLeft");
//         }
//       }
//       if (fitnessElement) {
//         if (
//           fitnessElement.getBoundingClientRect().top < window.innerHeight &&
//           fitnessElement.getBoundingClientRect().bottom >= 0
//         ) {
//           fitnessElement.classList.add("animate-enterRight");
//           fitnessElement.classList.remove("animate-leaveRight");
//         } else {
//           fitnessElement.classList.add("animate-leaveRight");
//           fitnessElement.classList.remove("animate-enterRight");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="projects"
//       className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12"
//     >
//       <h1 className="text-blanco text-5xl text-center mb-12 dark:text-azuloscuro mt-12">
//         {t("projects")}
//       </h1>
//       <div className="flex flex-col items-stretch justify-center px-12">
//         <div className="w-full mb-8 md:w-[520px] flex items-center relative">
//           {currentProject === 0 && (
//             <Siglo21 ref={siglo21Ref} className="w-full" />
//           )}
//           {currentProject === 1 && (
//             <Fitness ref={fitnessRef} className="w-full" />
//           )}
//           <button
//             className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             }`}
//             onClick={prevProject}
//             disabled={currentProject === 0}
//           >
//             {"<"}
//           </button>
//           <button
//             className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             }`}
//             onClick={nextProject}
//             disabled={currentProject === 1}
//           >
//             {">"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {Siglo21} from "./siglo21";
import {Fitness} from "./fitness";

export const Projects = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === 0 ? 1 : 0));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 1 ? 0 : 1));
  };

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const siglo21Element = document.getElementById("siglo21");
  //     const fitnessElement = document.getElementById("fitness");

  //     if (siglo21Element && fitnessElement) {
  //       const siglo21Rect = siglo21Element.getBoundingClientRect();
  //       const fitnessRect = fitnessElement.getBoundingClientRect();

  //       if (
  //         siglo21Rect.top < window.innerHeight &&
  //         siglo21Rect.bottom >= 0
  //       ) {
  //         siglo21Element.classList.add("animate-enterLeft");
  //         siglo21Element.classList.remove("animate-leaveLeft");
  //       } else {
  //         siglo21Element.classList.add("animate-leaveLeft");
  //         siglo21Element.classList.remove("animate-enterLeft");
  //       }

  //       if (
  //         fitnessRect.top < window.innerHeight &&
  //         fitnessRect.bottom >= 0
  //       ) {
  //         fitnessElement.classList.add("animate-enterRight");
  //         fitnessElement.classList.remove("animate-leaveRight");
  //       } else {
  //         fitnessElement.classList.add("animate-leaveRight");
  //         fitnessElement.classList.remove("animate-enterRight");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      id="projects"
      className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12"
    >
      <h1 className="text-blanco text-5xl text-center mb-12 dark:text-azuloscuro mt-12">
        {t("projects")}
      </h1>
      <div className=" relative flex flex-col items-stretch justify-center px-12">
        <div id="siglo21" ref={siglo21Ref} className={`w-full mb-8 mq1220:w-[520px] ${currentProject === 1 ? "mq1220:hidden" : ""}`}>
  
          <Siglo21 />
        </div>
        <div id="fitness" ref={fitnessRef} className={`w-full mq1220:w-[520px] ${currentProject === 0 ? "mq1220:hidden" : ""}`}>
      
          <Fitness />
        </div>
          <button
            className={`hidden mq1220:block absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
              currentProject === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
            onClick={prevProject}
            disabled={currentProject === 0}
          >
            {"<"}
          </button>
          <button
            className={`hidden mq1220:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
              currentProject === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            }`}
            onClick={nextProject}
            disabled={currentProject === 1}
          >
            {">"}
          </button>
        </div>
      </div>

   );
};

