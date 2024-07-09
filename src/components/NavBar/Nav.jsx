import React, { useEffect } from 'react';
import { setActiveSection } from '../../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { handleScrollToSection } from '../Utils/handleScrollToSection';

export const Nav = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector(state => state.storage.activeSection);
  console.log("activeSection:", activeSection);

  useEffect(() => {
    function handleScroll() {
      const sections = ['home', 'aboutme', 'expertise', 'resume', 'studies', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && activeSection !== sectionId) {
            dispatch(setActiveSection(sectionId));
          }
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, activeSection]); // Añadir `activeSection` a las dependencias

  return (
    <nav className="bg-transparent flex items-center h-[100px] w-full font-squada fixed top-0 z-10">
      <div className='flex w-[450px] justify-center text-[50px] text-celesteclaro'>ARIANA BREA</div>
      <div className="flex space-x-5 justify-end items-center mr-[30px] w-full text-[22px]">
        <button onClick={() => handleScrollToSection('home')} className={`px-3 cursor-pointer ${activeSection === 'home' ? 'text-celesteclaro' : 'text-azuloscuro hover:text-celesteclaro'}`}>INICIO</button>
        <button onClick={() => handleScrollToSection('aboutme')} className={`px-3 cursor-pointer ${activeSection === 'aboutme' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>SOBRE MÍ</button>
        <button onClick={() => handleScrollToSection('expertise')} className={`px-3 cursor-pointer ${activeSection === 'expertise' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>STACK</button>
        <button onClick={() => handleScrollToSection('resume')} className={`px-3 cursor-pointer ${activeSection === 'resume' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>HISTORIAL</button>
        {/* <button onClick={() => handleScrollToSection('studies')} className={`px-3 cursor-pointer ${activeSection === 'studies' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>Studies</button> */}
        <button onClick={() => handleScrollToSection('projects')} className={`px-3 cursor-pointer ${activeSection === 'projects' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>PROYECTOS</button>
        <button onClick={() => handleScrollToSection('contact')} className={`px-5 cursor-pointer py-1 rounded-[20px] ${activeSection === 'contact' ? 'bg-azuloscuro text-celesteclaro' : 'bg-celesteclaro text-azuloscuro hover:bg-azuloscuro hover:text-celesteclaro'}`}>CONTACTO</button>
      </div>
    </nav>
  );
};

export default Nav;
