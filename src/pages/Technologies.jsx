{/*Technologies page*/}

import * as Icons from "../components/Icons";
import ParticleCard from "../components/ParticleCard";

import { useTranslation } from "react-i18next";

import Divisor from "../components/divisor";

export default function Technologies() {

  const { t } = useTranslation("technologies");

  return (
    <>
      <section className="relative w-full h-full py-12 bg-transparent">
        <div className="flex justify-center items-center">
          <span className="text-[2rem] md:text-[5rem] permanent-marker-regular text-white drop-shadow-lg flex justify-center items-center text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
            {t("title")}
          </span>
        </div>

        <div>
          <Divisor></Divisor>
        </div>

        <div className="flex flex-column md:grid md:grid-cols-2 md:grid-rows-2 md:align-top justify-center items-center gap-3 m-[1rem] pt-[2rem] md:px-[10rem] ">  

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-[100%] h-[100%] p-[1rem] rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[1rem] md:text-[2rem] font-semibold text-white text-center mb-[1rem]"> {t("card1_title")} </span>
              <div className="flex flex-col items-center justify-center text-white">
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <Icons.Windows95Icon/>
                  <Icons.LinuxIcon />
                </div>
              </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-[100%] p-[1rem] py-[2.7rem] rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[1rem] md:text-[2rem]  font-semibold text-white text-center mb-[1rem] "> {t("card2_title")}</span>
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <Icons.PythonIcon/>
                </div>
              <span className="text-[0.8rem] md:text-[1rem] text-center text-white pt-[1rem] pb-[0.5rem] "> {t("card2_subtitle")}</span>
              <div className="flex flex-col md:flex-row gap-1 ">
                <span className="text-[0.8rem] md:text-[1rem] text-white font-semibold border rounded-2">TKINTER</span>
                <span className="text-[0.8rem] md:text-[1rem] text-white font-semibold border rounded-2">PYGAME</span>
              </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-[100%] p-[1rem] py-[2.7rem] h-fit rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[1rem] md:text-[2rem] font-semibold text-white text-center mb-[1rem] "> {t("card3_title")}</span>
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <Icons.JavascriptIcon />
                    <Icons.Html5Icon />
                    <Icons.CssIcon />
                </div>
              <span className="text-[0.8rem] md:text-[1rem] text-center text-white pt-[1rem] pb-[0.5rem] "> {t("card3_subtitle")}</span>
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                <Icons.ViteIcon  />
                <Icons.ReactIcon/>
                <Icons.TailwindIcon />
                <Icons.BootstrapIcon />
                <Icons.ThreejsIcon />
                </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-[100%] h-fit p-[1rem] py-[2rem] rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[1rem] md:text-[2rem] font-semibold text-white text-center mb-[1rem]"> {t("card4_title")}</span>
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <Icons.SqlIcon/> 
                  <Icons.MongodbIcon/>
                  <Icons.SqliteIcon/> 
                  <Icons.WorkbenchIcon/>  
                </div>
              <span className="text-[1rem] md:text-[2rem] text-center text-white pt-[1rem] pb-[0.5rem]"> {t("card4_subtitle")}</span>
                <div className="flex flex-wrap md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <Icons.ExcelIcon/>
                  <Icons.PowerbiIcon/>
                  <Icons.KnimeLogo/>
                </div>
            </div>
          </ParticleCard>

        </div>
      </section>
    </>
  );
}
