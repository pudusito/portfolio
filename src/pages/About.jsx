import { useState } from 'react';
import FadeContent from '../components/FadeContent';
import Cardpresentation from '../sections/Cardpresentacion';
import WhatIdo from '../sections/WhatIdo';
import Cards from '../sections/Cards'

export default function About() {

  const [showMore, setShowMore] = useState(false);
  const moreAbout = () => setShowMore(true);

  return (
    <>
      <section className='relative w-full h-full py-[2rem] bg-white/50'>

          <div className='flex justify-center items-center'>
            <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
              <Cardpresentation/>
            </FadeContent>
          </div>

      </section>

      <section className='bg-white'>
        <WhatIdo/>
      </section>

      {/* Botón para mostrar más */}
      <div className='flex items-center justify-center bg-white'>
        <div className='bg-cyan-400 my-[1rem] '>
          {!showMore && (
            <button onClick={moreAbout} className='px-2 py-2 bg-transparent border-2 rounded-2'>
              More about <br/>
              <i className="bi bi-chevron-double-down"></i>       
            </button>
          )}
          </div>
      </div>

            {/* Secciones adicionales, visibles solo si showMore es true */}
      {showMore && ( 
        <>
          <section className='bg-white/50'>
            <Cards/>
          </section>
        </>
      )}

 
    </>
  );
}
