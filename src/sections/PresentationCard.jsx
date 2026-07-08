import FadeContent from '../components/FadeContent';
import avatar from '/assets/img/avatar.jpg'
import "../components/Neon.css";
import ParticleCard from "../components/ParticleCard"

import { useTranslation } from "react-i18next";

export default function PresentationCard() {

  const { t } = useTranslation("about");
  
  return (
    <>
      {/* Presentation Card */}
      <section className='relative w-full h-full pt-[5%] bg-transparent flex justify-center align-center'>

        {/* marco contenedor */}
        <div className='flex flex-col justify-center items-center w-fit h-full text-white tracking-wide text-center'>
          
          <ParticleCard>
          {/* neon border*/}
          <div className="flex flex-col items-center justify-end gap-y-4  p-[1rem] m-[1rem] md:mr-[3rem] border-transparent rounded-4 
                          bg-[#0040c92f] neon-border ">
            
            {/* title */}
            <div className='flex flex-col  md:flex-row items-center justify-center md:gap-x-5'>
              <span className="text-[2rem] md:text-[4rem] font-black mb-1 permanent-marker-regular"
                    style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
                {t("im")}
              </span>
            </div>

            {/* img */}
            <div className="flex justify-center mb-[1rem]">
              <img src={avatar} alt="Foto de perfil" className="w-32 h-16 md:w-40 md:h-40 object-cover border-2 border-white shadow-md rounded-full object-center"/>
            </div>
            
            {/* nickname */}
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                {t("tag")} &nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] ">
                @Pudu<i className="bi bi-person-fill-check"></i><br/>
              </span>
            </span>

            {/* name */}
            <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
              <span className="text-[clamp(1rem,5vw,1.5rem)]  text-purple-400">
                {t("tag1")}&nbsp;
              </span>
              <span className="text-[clamp(1rem,5vw,1.5rem)] text-nowrap">
                Benjamin Maldonado
              </span>
            </span>

            {/* carreer */}
            <div className='border border-white px-1.5 py-0.5 rounded text-[clamp(1.2rem,5vw,2rem)] text-nowrap'>
              <span>{t("title")}</span><br />
              <span>{t("title2")}</span><br />
              <span>{t("title3")}</span>
            </div>

            {/* description */}
            <div className='text-center max-w-xs sm:max-w-sm md:max-w-md font-light text-xs sm:text-sm leading-snug px-2'>
              <p className="mb-2">
               {t("paragraph1")}
              </p>
              <p>
                {t("paragraph2")}
              </p>
            </div>

          </div>
          </ParticleCard>
        </div>

        {/* animation close */}
      </section>
    </>
  );
}
