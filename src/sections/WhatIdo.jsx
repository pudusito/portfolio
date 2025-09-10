import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "../components/Neon.css";

export default function WhatIdo() {
  const whatRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from(whatRef.current, {
      x: -500,
      repeat: 0,
      yoyo: false,
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(skillsRef.current, {
      x: 500,
      repeat: 0,
      yoyo: false,
      duration: 2,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-full py-6 sm:py-8 md:py-12">
        
        {/* Main Title and Description */}
        <div ref={whatRef} className="text-white tracking-wide leading-relaxed text-center px-4 sm:px-6 md:px-8 lg:px-12 mt-[1rem] md:mt-[5rem] ">
          <span className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl underline decoration-dotted decoration-2 sm:decoration-4 md:decoration-6 lg:decoration-8 xl:decoration-10 underline-offset-4 sm:underline-offset-6 md:underline-offset-8 lg:underline-offset-10 block mb-4 sm:mb-6 md:mb-8">
            What & How i Do it?
          </span>
          
          <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 max-w-4xl mx-auto">
            <p className="mb-4 sm:mb-6">
              Convierto ideas en soluciones digitales funcionales y escalables, enfocándome en resultados robustos, seguros y accesibles.
            </p>
            <p>
              Para lograrlo, Aplico metodologías ágiles, diseño modular y principios SOLID, combinando frameworks modernos,
              estructuras optimizadas y automatización de procesos para entregar aplicaciones confiables, eficientes y de alto rendimiento.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center items-stretch mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
          <div ref={skillsRef} className="text-white tracking-wide leading-relaxed border-2 rounded-lg shadow-lg bg-white/5 w-fit text-center">       
            <div className="flex items-center">
              <div className="w-full text-center text-lg sm:text-xl md:text-2xl border-b-2 neon-border py-2 sm:py-3 font-semibold">
                Skills
              </div>
            </div>
            
            <div className="text-sm sm:text-base md:text-lg lg:text-xl p-3 sm:p-4 md:p-6 neon-border space-y-2 px-5">
              <div> Full Stack</div>
              <div> Operative Systems</div>
              <div> DataBases</div>
              <div> Data analysis</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}