import React, { useEffect } from 'react';
import { setActiveSections } from '../../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { handleScrollToSection } from '../Utils/handleScrollToSection';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const dispatch = useDispatch();
  const activeSections = useSelector(state => state.global.activeSections);

  const { t } = useTranslation();

  useEffect(() => {
    function handleScroll() {
      const sections = ['home', 'aboutme', 'expertise', 'resume', 'studies', 'projects', 'contact'];
      const scrollPosition = window.scrollY;
      const newActiveSections = [];

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSections.push(sectionId);
          }
        }
      });

      if (JSON.stringify(newActiveSections) !== JSON.stringify(activeSections)) {
        dispatch(setActiveSections(newActiveSections));
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, activeSections]);


  return (
    <nav className="bg-transparent flex items-center h-[100px] w-full font-squada fixed top-0 z-10">
      <div className='flex w-[450px] justify-center text-[50px] text-celesteclaro'>ARIANA BREA</div>
      <div className="flex space-x-5 justify-end items-center mr-[30px] w-full text-[22px]">
        <button onClick={() => handleScrollToSection('home')} className={`px-3 cursor-pointer ${activeSections.includes('home') ? 'text-celesteclaro' : 'text-azuloscuro hover:text-celesteclaro'}`}>{t('home')}</button>
        <button onClick={() => handleScrollToSection('aboutme')} className={`px-3 cursor-pointer ${activeSections.includes('aboutme') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>{t('aboutme')}</button>
        {/* <button onClick={() => handleScrollToSection('resume')} className={`px-3 cursor-pointer ${activeSections.includes('resume') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>{t('history')}</button> */}
        <button onClick={() => handleScrollToSection('expertise')} className={`px-3 cursor-pointer ${activeSections.includes('expertise') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>STACK</button>
        <button onClick={() => handleScrollToSection('projects')} className={`px-3 cursor-pointer ${activeSections.includes('projects') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>{t('projects')}</button>
        <button onClick={() => handleScrollToSection('contact')} className={`px-5 cursor-pointer py-1 rounded-[20px] ${activeSections.includes('contact') ? 'bg-azuloscuro text-celesteclaro' : 'bg-celesteclaro text-azuloscuro hover:bg-azuloscuro hover:text-celesteclaro'}`}>{t('contact')}</button>
      </div>
    </nav>
  );
};