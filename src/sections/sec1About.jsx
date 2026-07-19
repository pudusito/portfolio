import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Divisor from '../components/divisor';

import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("sec1about");

  return (
    <>
      <div className="relative w-full h-full py-6 sm:py-8 md:py-12">
        
        {/* Main Title and Description */}
        <div ref={whatRef} className="text-white tracking-wide leading-relaxed text-center px-4 sm:px-6 md:px-8 lg:px-12"
            style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>

          <span className="permanent-marker-regular text-[3rem] md:text-[5rem] text-center drop-shadow-lg">
            {t("title_main")}
          </span>

          <div className='w-full flex justify-center'>
            <Divisor imagen={1}></Divisor>
          </div>
    
          <div className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 max-w-4xl mx-auto">
            <p className="mb-4 sm:mb-6">
              {t("paragraph1")}
            </p>
            <p>
              {t("paragraph2")}
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center items-stretch mt-8">
          <div ref={skillsRef} className="text-white tracking-wide leading-relaxed text-center">       

            <div className="flex flex-col text-nowrap text-sm sm:text-base md:text-lg gap-2">
              <div className="">• {t("skill1")}</div>
              <div className="">• {t("skill2")}</div>
              <div className="">• {t("skill3")}</div>
              <div className="">• {t("skill4")}</div>
              <div className="">• {t("skill5")}</div>
              <div className="">• {t("skill6")}</div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}