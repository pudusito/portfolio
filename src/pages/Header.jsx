import PuduLogo from '/assets/img/pudulogoz.png'
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText';
import StarBorder from '../components/StarBorder';
import { useState } from "react";

import i18n from "../idiom";
import { useTranslation } from "react-i18next";

export default function Header({ refs, onNavClick }) {
  const { homeRef, aboutRef, techRef, workRef, personalProyectsRef, galleryRef } = refs;
  const [open, setOpen] = useState(false);

  const [idiom, setIdiom] = useState("es");

  const toggleLanguage = () => {
    const newLang = idiom === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setIdiom(newLang);
  };

  const { t } = useTranslation("header");

  return (
    <>
    <div className="relative flex items-center justify-between py-2.5 md:py-3 lg:py-3 xl:py-3">
    
      {/* Logo */}
      <div className="flex-shrink-0 items-center object-center w-15 h-15 md:w-25 md:h-25 object-contain backdrop-blur-sm bg-cyan-700/50 hover:bg-cyan-700/90 rounded-full hover:scale-110">
        <Link to="/">
          <img src={PuduLogo} className="scale-100"/>
        </Link>
      </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------- Menu Desktop ------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="fixed items-center justify-center left-[53%] transform -translate-x-1/2 rounded tracking-wide z-50 
                      hidden md:flex md:flex-row md:w-[75%] lg:left-1/2 items-center justify-center">
        <StarBorder
          as="div"
          className="custom-class rounded-lg backdrop-blur-sm"
          color="magenta"
          speed="15s"
        >
          <nav className="flex flex-row items-center justify-center font-monospace no-underline
                          text-[1rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.2rem]
                          md:gap-[0.5rem] lg:gap-[1rem] xl:gap-[2rem]
                          px-[0.1rem]
                          py-[0.1rem]">

            <button  onClick={() => onNavClick(homeRef, "/Home")}
                     className="bg-gray-900 rounded-3 shadow whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                                md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("home")} disabled={false} className="custom-class" />
            </button>

            <button  onClick={() => onNavClick(aboutRef, "/About")}
                     className="bg-gray-900 rounded-3 shadow  whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                                md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("about")} disabled={false} className="custom-class" />
            </button>

            <button onClick={() => onNavClick(techRef, "/Technologies")}
              className="bg-gray-900 rounded-3 shadow whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                         md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("technologies")} disabled={false} className="custom-class" />
            </button>

            <button onClick={() => onNavClick(workRef, "/Work")}
              className="bg-gray-900 rounded-3 shadow whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                        md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("work")} disabled={false} className="custom-class" />
            </button>
            
            <button    onClick={() => onNavClick(personalProyectsRef, "/Personal_Proyects")}
              className="bg-gray-900 rounded-3 shadow whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                        md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("personalProyects")} disabled={false} className="custom-class" />
            </button>

            <button onClick={() => onNavClick(galleryRef, "/Gallery")}
              className="bg-gray-900 rounded-3 shadow whitespace-nowrap hover:bg-cyan-300/40 hover:scale-120
                         md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3">

              <ShinyText text={t("gallery")} disabled={false} className="custom-class" />
            </button>

          </nav>

        </StarBorder>
      </div>


       {/* Botón de idioma */}
      <div onClick={toggleLanguage}
           className="absolute items-center justify-start
                      top-1/2 -translate-y-1/2
                      right-[4rem] sm:right-[10rem] md:right-[0rem] lg:right-[0.4rem] xl:right-[0.4rem] 2xl:right-[0.4rem]
                      w-20 h-10 md:w-10 md:h-9 flex items-center rounded-full p-1 cursor-pointer transition-colors
                      bg-cyan-700/30 hover:bg-cyan-700/90
                      border"
      >
        <div className={`bg-white w-8 h-8 md:w-4 md:h-4 rounded-full transform transition-transform flex items-center justify-center text-xs font-bold
             ${idiom === "en" ? "translate-x-full" : "translate-x-0"}`}>
             {idiom.toUpperCase()}
        </div>

      </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------- Menu Movil --------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="md:hidden flex w-10 h-15 relative z-50  flex-shrink-0">

        {/* Botón hamburguesa */}
        <button
          id="menu"
          name="menumovil"
          onClick={() => setOpen(!open)}
          className="text-indigo-600 hover:text-cyan-500 transition-transform delay-200">

          <svg className="w-10 h-10"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               viewBox="0 0 24 24">

            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>

          </svg>

        </button>

        {open && (
          <div className="h-fit w-[90%] flex flex-col items-end fixed top-[5rem] right-[1rem] rounded-xl 
                          backdrop-blur-md bg-gray-900/80 shadow-lg border border-gray-700 
                          animate-slide-down z-50">
                          
            {/* Botón cerrar */}
            <div className="flex justify-end px-2 pt-2">

              <button onClick={() => setOpen(false)} className="text-gray-300 active:text-red-500 transition">

                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth={2}>

                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>
        
            {/* Navegacion men amburguesa */}
            <ul className="flex flex-col text-[1.5rem] text-gray-100 font-medium divide-gray-700/50 m-[1rem] w-full mt-1 px-6">

              <li onClick={() => { onNavClick(aboutRef, "/About"); setOpen(false); }}
                  className="cursor-pointer px-[2rem] py-2 transition border-y-2 border-gray-800 active:text-green-700 whitespace-nowrap">
                {t("about")}
              </li>

              <li onClick={() => { onNavClick(techRef, "/Technologies"); setOpen(false); }}
                  className="cursor-pointer px-[2rem] py-2 transition border-b-2 border-gray-800 active:text-green-700 whitespace-nowrap">
                {t("technologies")}
              </li>

              <li onClick={() => { onNavClick(workRef, "/Work"); setOpen(false); }}
                  className="cursor-pointer  px-[2rem] py-2 transition border-b-2 border-gray-800 active:text-green-700 whitespace-nowrap">
                {t("work")}
              </li>

              <li onClick={() => { onNavClick(personalProyectsRef, "/Personal_Proyects"); setOpen(false); }}
                  className="cursor-pointer  px-[2rem] py-2 transition border-b-2 border-gray-800 active:text-green-700 whitespace-nowrap">
                {t("personalProyects")}
              </li>

              <li onClick={() => { onNavClick(galleryRef, "/Gallery"); setOpen(false); }}
                  className="cursor-pointer px-[2rem] py-2 transition border-b-2 border-gray-800 active:text-green-700 whitespace-nowrap">
                {t("gallery")}
              </li>

            </ul>

          </div>
        )}


      </div>



    </div>
  </>
  );
}



//  mask-radial-at-center mask-radial-from-50% mask-radial-to-90%
/* //Login BUTTOM
      <div className="md:flex hidden items-center justify-center border-2 shadow mr-5 p-3 rounded-4xl h-12  bg-cyan-600 hover:bg-cyan-500 transition">
        <button className="md:flex items-center gap-2 pr-1 font-semibold">
         <i className="bi bi-person scale-130"></i> Iniciar sesión
        </button>
      </div>

*/
