
import FadeContent from '../components/FadeContent';
import GradientText from "../components/TextMain";

import WhatIdo from '../sections/WhatIdo';
import MoreAbout from '../sections/MoreAbout'
import avatar from '../assets/img/avatar.jpg'
export default function About() {


  return (
    <>
      <section className='relative w-full h-full pt-[25%] md:pt-[10%] bg-gradient-to-b from-[#14002e] to-[#000319]'>
        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
        <div className='grid md:grid-cols-[2fr_1fr_2fr] w-full h-full text-white tracking-wide text-center '>

          <GradientText
            colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
            animationSpeed={10}
            showBorder={false}
            className="text-[clamp(2.5rem,5vw,5rem)]">

              WELCOME TO MY <br/>
              PORTFOLIO
          </GradientText>

          <div className='flex flex-col  md:flex-row items-center justify-center md:gap-x-5'>
            <span className="text-[clamp(2rem,5vw,4rem)]  font-black"
                  style={{textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"}}>
              👋 
            </span>
            <span className="text-[2rem] md:text-[4rem] font-black mb-1"
                  style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
              IM
            </span>
          </div>
        
          <div className="flex flex-col items-center justify-end gap-y-4 md:mr-[3rem] border-4 border-white/10 rounded-4 shadow-[4px_4px_10px_#000350,_-4px_-4px_10px_#000350,4px_-4px_10px_#000350,-4px_4px_10px_#000350] bg-black/50 p-[1rem] m-[1rem] ">
            <div className="flex justify-center mb-[1rem]">
              <img src={avatar} alt="Foto de perfil" className="w-32 h-16 md:w-40 md:h-40 object-cover border-2 border-white shadow-md rounded-full object-center"/>
            </div>
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                [Alias]:&nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] ">
                @Pudu<i className="bi bi-person-fill-check"></i><br/>
              </span>
            </span>
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                [Name]:&nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] ">
                Benjamin Maldonado
              </span>
            </span>
            <span className='border border-white px-1.5 py-0.5 rounded text-[clamp(1.2rem,5vw,2rem)]  text-nowrap'>
              .Técnico Analista Programador \
            </span>
            <div className='text-center max-w-xs sm:max-w-sm md:max-w-md font-light text-xs sm:text-sm leading-snug px-2'>
              <p className="mb-2">
                "I am motivated by the continuous improvement of my skills as a programmer."
              </p>
              <p>
                "I strive to maintain good development practices, to ensure a clean, modular, and maintainable design."
              </p>
            </div>
          </div>
        </div>
        </FadeContent>
      </section>

      <section className='bg-gradient-to-b from-[#000319] via-[#002C2E] to-[#000319]'>
        <WhatIdo/>
      </section>

      <section className='bg-[#000319] '>
        <MoreAbout/>
      </section>
    </>
  );
}
