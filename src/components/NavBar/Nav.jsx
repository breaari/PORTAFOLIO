import React, { useEffect, useState } from 'react';
import { setActiveSections } from '../../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { handleScrollToSection } from '../Utils/handleScrollToSection';
import { useTranslation } from 'react-i18next';
import { TbMenuDeep } from "react-icons/tb";

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

  const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen )
    }

  const scrollMovile = (prop) => {
    handleScrollToSection(prop)
    if(menuOpen) {
    setMenuOpen(false)
  }
  }


  return (
    <nav className="bg-transparent flex items-center h-[100px] w-full font-squada fixed top-0 z-10 mq980:px-8 mq980:flex-row mq980:justify-between">
      <div onClick={()=> scrollMovile('home')} className='block mq980:hidden flex w-[450px] justify-center text-[50px] text-celesteclaro cursor-pointer'>ARIANA BREA</div>
      <div className="block mq980:hidden flex space-x-5 justify-end items-center mr-[30px] w-full text-[22px]">
        <button onClick={() => handleScrollToSection('home')} className={`px-3 cursor-pointer ${activeSections.includes('home') ? 'text-celesteclaro' : 'text-azuloscuro hover:text-celesteclaro'}`}>{t('home')}</button>
        <button onClick={() => handleScrollToSection('aboutme')} className={`px-3 cursor-pointer ${activeSections.includes('aboutme') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>{t('aboutme')}</button>
        <button onClick={() => handleScrollToSection('expertise')} className={`px-3 cursor-pointer ${activeSections.includes('expertise') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>STACK</button>
        <button onClick={() => handleScrollToSection('projects')} className={`px-3 cursor-pointer ${activeSections.includes('projects') ? 'text-celesteclaro' : 'hover:text-celesteclaro text-azuloscuro'}`}>{t('projects')}</button>
        <button onClick={() => handleScrollToSection('contact')} className={`px-5 cursor-pointer py-1 rounded-[20px] ${activeSections.includes('contact') ? 'bg-azuloscuro text-celesteclaro' : 'bg-celesteclaro text-azuloscuro hover:bg-azuloscuro hover:text-celesteclaro'}`}>{t('contact')}</button>
      </div>
      <div onClick={()=> scrollMovile('home')} className='hidden mq980:block flex w-[450px] justify-center text-[50px] text-celesteclaro'>AB</div>
      <TbMenuDeep className='hidden mq980:block text-celesteclaro z-40 min-w-[50px] min-h-[50px]' onClick={toggleMenuOpen}/>
      { menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-30 flex flex-col text-3xl text-celesteclaro items-center">
          <button onClick={()=> scrollMovile('home')} className="mt-[100px] px-3 cursor-pointer hover:scale-95 py-2">{t('home')}</button>
          <button onClick={()=> scrollMovile('aboutme')} className="px-3 cursor-pointer hover:scale-95 py-2">{t('aboutme')}</button>
          <button onClick={()=> scrollMovile('studies')} className="px-3 cursor-pointer hover:scale-95 py-2">{t('studies')}</button>
          <button onClick={()=> scrollMovile('resume')} className="px-3 cursor-pointer hover:scale-95 py-2">{t('resume')}</button>
          <button onClick={()=> scrollMovile('expertise')} className="px-3 cursor-pointer hover:scale-95 py-2">STACK</button>
          <button onClick={()=> scrollMovile('projects')} className="px-3 cursor-pointer hover:scale-95 py-2">{t('projects')}</button>
          <button onClick={()=> scrollMovile('contact')} className="px-5 cursor-pointer py-1 rounded-[20px] border-celesteclaro border-2 w-[200px] mt-2">{t('contact')}</button>
        </div>
      )}
     
    </nav>
  );
};