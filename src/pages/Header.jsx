import PuduLogo from '../assets/img/pudulogoz.png'
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText';
import StarBorder from '../components/StarBorder';
import { useState } from "react";

export default function Header({ refs, onNavClick }) {
  const { aboutRef, techRef, proyectsRef, galleryRef } = refs;
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between mx-3 py-2">
      {/* Logo */}
      <div className="flex-shrink-0 items-center object-center w-15 h-15 md:w-25 md:h-25 object-contain backdrop-blur-sm bg-cyan-700/30 hover:bg-cyan-700/90 rounded-full border-2 border-transparent hover:border-white  hover:scale-110">
        <Link to="/">
          <img
            src={PuduLogo}
            className=""
            alt="Logo"
          />
        </Link>
      </div>
      

      {/* Navegación Desktop */}
      <div className="hidden md:flex fixed left-1/2 transform -translate-x-1/2 rounded tracking-wide z-50">
        <StarBorder
          as="div"
          className="custom-class rounded-lg backdrop-blur-sm"
          color="magenta"
          speed="15s"
        >
          <nav className="flex items-center justify-center gap-3 font-monospace text-lg no-underline">
            <button
              className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
              onClick={() => onNavClick(aboutRef, "/About")}
            >
              <ShinyText text="About" disabled={false} className="custom-class" />
            </button>

            <button
              className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
              onClick={() => onNavClick(techRef, "/Technologies")}
            >
              <ShinyText text="Technologies" disabled={false} className="custom-class" />
            </button>

            <button
              className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
              onClick={() => onNavClick(proyectsRef, "/Proyects")}
            >
              <ShinyText text="Proyects" disabled={false} className="custom-class" />
            </button>

            <button
              className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
              onClick={() => onNavClick(galleryRef, "/Gallery")}
            >
              <ShinyText text="Gallery" disabled={false} className="custom-class" />
            </button>
          </nav>
        </StarBorder>
      </div>

      {/* Menú Móvil */}
      <div className="md:hidden flex w-15 h-15 relative z-50  flex-shrink-0">
        {/* Botón hamburguesa */}
        <button
          id="menu"
          name="menumovil"
          onClick={() => setOpen(!open)}
          className="text-indigo-600 hover:text-cyan-500 transition-transform delay-200"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {open && (
        <div className="fixed top-[4rem] right-[1rem] bg-white border-2 rounded-2">
          {/* Botón cerrar */}
          <div className="grid grid-cols-1 justify-self-end border-l-2 border-b-2">
            <button onClick={() => setOpen(false)}className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Opciones */}
          <ul className="grid grid-cols-1 grid-rows-4 text-gray-800 font-medium items-center justify-center text-center px-3 space-y-5 m-0">
            <li onClick={() => { onNavClick(aboutRef, "/About"); setOpen(false); }} className="cursor-pointer hover:text-cyan-500 border-b-2">
              About
            </li>
            <li onClick={() => { onNavClick(techRef, "/Technologies"); setOpen(false); }} className="cursor-pointer hover:text-cyan-500 border-b-2">
              Technologies
            </li>
            <li onClick={() => { onNavClick(proyectsRef, "/Proyects"); setOpen(false); }} className="cursor-pointer hover:text-cyan-500 border-b-2">
              Proyects
            </li>
            <li onClick={() => { onNavClick(galleryRef, "/Gallery"); setOpen(false); }} className="cursor-pointer hover:text-cyan-500 border-b-2">
              Gallery
            </li>
          </ul>

          </div>
        )}


      </div>
    </div>
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
