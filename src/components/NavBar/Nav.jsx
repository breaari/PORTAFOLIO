import React, { useState, useEffect } from 'react';
import { setActiveSection } from '../../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { handleScrollToSection } from '../Utils/handleScrollToSection';

export const Nav = () => {
  const dispatch = useDispatch()
  const activeSection = useSelector(state => state.storage.activeSection);
  console.log("activeSesion:",activeSection)


    // Manejar el evento de desplazamiento para determinar la sección activa
  useEffect(() => {
    function handleScroll() {
      const sections = ['home', 'aboutme', 'expertise', 'resume', 'studies', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      // Itera sobre todos los identificadores de sección y determina cuál está visible en la página
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100; // Ajusta según la altura de tu barra de navegación
          const sectionBottom = sectionTop + section.offsetHeight;

          // Verifica si la sección está visible en la pantalla
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            dispatch(setActiveSection(sectionId)); // Actualiza la sección activa
          }
        }
      });
    }

    // Agrega el evento de desplazamiento al cargar el componente
    window.addEventListener('scroll', handleScroll);

    // Remueve el evento de desplazamiento al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-transparent flex items-center h-[100px] w-full font-[Outfit,_sans-serif] font-bold fixed top-0 z-10">
      <div className='flex w-[450px] justify-center text-[50px] text-celesteclaro'>Ariana Brea</div>
      <div className="flex space-x-5 justify-end items-center mr-[30px] w-full">
        <button onClick={() => handleScrollToSection('home')} className={` px-3 cursor-pointer ${activeSection === 'home' ? 'text-celesteclaro' : 'text-azuloscuro hover:text-celesteclaro'}`}>Home</button>
        <button onClick={() => handleScrollToSection('aboutme')} className={` px-3 cursor-pointer ${activeSection === 'aboutme' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>About me</button>
        <button onClick={() => handleScrollToSection('expertise')} className={` px-3 cursor-pointer ${activeSection === 'expertise' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>Expertise</button>
        <button onClick={() => handleScrollToSection('resume')} className={` px-3 cursor-pointer ${activeSection === 'resume' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>Resume</button>
        <button onClick={() => handleScrollToSection('studies')} className={` px-3 cursor-pointer ${activeSection === 'studies' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>Studies</button>
        <button onClick={() => handleScrollToSection('projects')} className={` px-3 cursor-pointer ${activeSection === 'projects' ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>Projects</button>
        <button onClick={() => handleScrollToSection('contact')} className={` px-5 cursor-pointer py-2  rounded-[20px] ${activeSection === 'contact' ? 'bg-azuloscuro text-celesteclaro' : 'bg-celesteclaro text-azuloscuro hover:bg hover:bg-azuloscuro hover:text-celesteclaro'}`}>Contact</button>
      </div>
    </nav>
  );
}

export default Nav;

