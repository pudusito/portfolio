 {/* Header page */}
 import PuduLogo from '../assets/logopudu22.png'
 
 import { Link } from 'react-router-dom';

import ShinyText from '../components/ShinyText';
import StarBorder from '../components/StarBorder';

function Header({refs, onNavClick}) {
  const {aboutRef, techRef, proyectsRef} = refs



  return (
    <div className='flex items-center justify-between mx-3 pt-4 h-full'
    > {/*Logo*/}
      <div className="flex justify-center items-center object-center bg-transparent"> 
          <Link to="/">
          <img src={PuduLogo} className="w-15 h-15 sm:w-17 sm:h-17  xl:w-25 xl:h-25 object-cover bg-black/99 border-2 rounded-full border-transparent hover:scale-110 hover:border-white" 
          alt='Logo'></img>
          </Link>
      </div>

      {/* Navegación */}

      <div className="md:flex hidden items-center justify-center rounded tracking-wide">
        <StarBorder as="div" className="custom-class rounded-lg bg-transparent" color="cyan" speed="5s">
          <nav className="md:flex hidden items-center justify-center gap-3 p-3 font-monospace text-lg no-underline" >
            <button className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50 style={{ textDecoration: 'none' }}"
                    onClick={() => onNavClick(aboutRef, "/About")}>
              <ShinyText text="About" disabled={false} className='custom-class' />
            </button>
            <button className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
                    onClick={() => onNavClick(techRef, "/Techonologies")}>
              <ShinyText text="Techonologies" disabled={false} className='custom-class' />
            </button>

            <button className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50"
                    onClick={() => onNavClick(proyectsRef, "/Proyects")}>
              <ShinyText text="Proyects" disabled={false} className='custom-class' />
            </button>

            <Link to="/Gallery" className="bg-gray-900 px-5 py-2.5 rounded-3 shadow hover:bg-sky-400/50">
              <ShinyText text="Gallery" disabled={false} className='custom-class' />
            </Link>
          </nav>
        </StarBorder>
      </div>
 

      {/* Menú --- para móvil */}
      <div className="md:flex items-center w-15 h-15">
        <button id="menu"
          className="text-indigo-600 hover:text-cyan-500 transition-transform delay-200">
          <svg className="w-15 h-13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  );
}

export default Header;


//  mask-radial-at-center mask-radial-from-50% mask-radial-to-90%


{/* //Login BUTTOM
      <div className="md:flex hidden items-center justify-center border-2 shadow mr-5 p-3 rounded-4xl h-12  bg-cyan-600 hover:bg-cyan-500 transition">
        <button className="md:flex items-center gap-2 pr-1 font-semibold">
         <i className="bi bi-person scale-130"></i> Iniciar sesión
        </button>
      </div>

*/}
