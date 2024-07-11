// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import {Siglo21} from "./siglo21";
// import {Fitness} from "./fitness";

// export const Projects = () => {
//   const { t } = useTranslation();
//   const [currentProject, setCurrentProject] = useState(0);

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev === 0 ? 1 : 0));
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev === 1 ? 0 : 1));
//   };

//   const siglo21Ref = useRef(null);
//   const fitnessRef = useRef(null);

//   useEffect(() => {
//     const siglo21Element = siglo21Ref.current;
//     const fitnessElement = fitnessRef.current;

//     const handleScroll = () => {
//       if (window.innerWidth < 980) {
//         return; 
//       }
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
//       className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12 mq980:p-7"
//     >
//       <h1 className="text-blanco text-5xl text-center my-12 dark:text-azuloscuro mq980:mt-0 mq980:mb-7 mq980:text-3xl">
//         {t("projects")}
//       </h1>
//         <div className="overflow-x-hidden relative flex flex-col items-stretch justify-center px-12 mq980:px-0 mq980:w-full">

//         <div className="relative w-full flex flex-col items-center justify-center">
//           <button
//             className={`hidden mq1220:block absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             } z-10`}
//             onClick={prevProject}
//             disabled={currentProject === 0}
//           >
//             {"<"}
//           </button>
//           <div className="relative w-full mq1220:w-[520px] mq980:w-[100%] mq980:h-[800px] overflow-hidden">
//             <div
//               id="siglo21"
//               className={`absolute top-0 left-0 w-full h-screen transition-all duration-1000 transform ${
//                 currentProject === 1 ? "opacity-0 -translate-x-[-100%]" : "opacity-100 translate-x-0"
//               }`}
//             >
//               <Siglo21 />
//             </div>
//             <div
//               id="fitness"
//               className={`absolute top-0 left-0 w-full transition-all duration-1000 transform ${
//                 currentProject === 0 ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
//               }`}
//             >
//               <Fitness />
//             </div>
//           </div>
//           <button
//             className={`hidden mq1220:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             } z-10`}
//             onClick={nextProject}
//             disabled={currentProject === 1}
//           >
//             {">"}
//           </button>
//     </div>
//         </div>
//       </div>

//    );
// };

// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Siglo21 } from "./siglo21";
// import { Fitness } from "./fitness";

// export const Projects = () => {
//   const { t } = useTranslation();
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev === 0 ? 1 : 0));
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev === 1 ? 0 : 1));
//   };

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsSmallScreen(window.innerWidth < 980);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   const siglo21Ref = useRef(null);
//   const fitnessRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerWidth < 980) {
//         return;
//       }

//       const siglo21Element = siglo21Ref.current;
//       const fitnessElement = fitnessRef.current;

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
//       className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12 mq980:p-7"
//     >
//       <h1 className="text-blanco text-5xl text-center my-12 dark:text-azuloscuro mq980:mt-0 mq980:mb-7 mq980:text-3xl">
//         {t("projects")}
//       </h1>
//       <div className="overflow-x-hidden relative flex flex-col items-stretch justify-center px-12 mq980:px-0 mq980:w-full">
//         <div className="relative w-full flex flex-col items-center justify-center">
//           <button
//             className={`hidden mq1220:block absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             } z-10`}
//             onClick={prevProject}
//             disabled={currentProject === 0}
//           >
//             {"<"}
//           </button>
//           <div className="relative w-full mq1220:w-[520px] mq980:w-[100%] mq980:h-[800px] overflow-hidden">
//             <div
//               id="siglo21"
//               ref={siglo21Ref}
//               className={`${
//                 isSmallScreen
//                   ? "absolute top-0 left-0 w-full h-full transition-all duration-2000 transform"
//                   : "relative w-full"
//               } ${
//                 currentProject === 1
//                   ? isSmallScreen
//                     ? "opacity-0 -translate-x-full"
//                     : "hidden"
//                   : isSmallScreen
//                   ? "opacity-100 translate-x-0"
//                   : "block"
//               }`}
//             >
//               <Siglo21 />
//             </div>
//             <div
//               id="fitness"
//               ref={fitnessRef}
//               className={`${
//                 isSmallScreen
//                   ? "absolute top-0 left-0 w-full h-full transition-all duration-2000 transform"
//                   : "relative w-full"
//               } ${
//                 currentProject === 0 ? 
//                     isSmallScreen ? "opacity-0 -translate-x-full" : "hidden"
//                   : isSmallScreen ? "opacity-100 translate-x-0" : "block"
//               }`}
//             >
//               <Fitness />
//             </div>
//           </div>
//           <button
//             className={`hidden mq1220:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
//               currentProject === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
//             } z-10`}
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

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Siglo21 } from "./siglo21";
import { Fitness } from "./fitness";

export const Projects = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === 0 ? 1 : 0));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 1 ? 0 : 1));
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 980);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const siglo21Ref = useRef(null);
  const fitnessRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 980) {
        return;
      }

      const siglo21Element = siglo21Ref.current;
      const fitnessElement = fitnessRef.current;

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
      className="overflow-x-hidden z-0 min-h-screen bg-gradient-to-t from-celeste to-azuloscuro dark:to-celesteclaro flex flex-col items-center justify-center font-squada p-12 mq980:p-7"
    >
      <h1 className="text-blanco text-5xl text-center my-12 dark:text-azuloscuro mq980:mt-0 mq980:mb-7 mq980:text-3xl">
        {t("projects")}
      </h1>
      <div className="overflow-x-hidden relative flex flex-col items-stretch justify-center px-12 mq980:px-0 mq980:w-full">
        <div className="relative w-full flex flex-col items-center justify-center">
          <button
            className={`hidden mq980:block absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
              currentProject === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            } z-10`}
            onClick={prevProject}
            disabled={currentProject === 0}
          >
            {"<"}
          </button>
          <div className="relative w-full mq1220:w-[520px] mq980:w-[100%] mq980:h-[800px] overflow-hidden">
            <div
              id="siglo21"
              ref={siglo21Ref}
              className={`${
                isSmallScreen
                  ? "absolute top-0 left-0 w-full h-full transition-all duration-2000 transform"
                  : "relative w-full"
              } ${
                isSmallScreen 
                  ? currentProject === 1 ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                  : "block"
              }`}
            >
              <Siglo21 />
            </div>
            <div
              id="fitness"
              ref={fitnessRef}
              className={`${
                isSmallScreen
                  ? "absolute top-0 left-0 w-full h-full transition-all duration-2000 transform"
                  : "relative w-full"
              } ${
                isSmallScreen 
                  ? currentProject === 0 ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                  : "block"
              }`}
            >
              <Fitness />
            </div>
          </div>
          <button
            className={`hidden mq980:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl ${
              currentProject === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
            } z-10`}
            onClick={nextProject}
            disabled={currentProject === 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
