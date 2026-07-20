import SpotlightCard from '../components/Card';
import { useState } from 'react';

import { useTranslation } from "react-i18next";

import Divisor from '../components/divisor';

export default function Personal_Proyects() {
  const [showGame, setShowGame] = useState(false);

  const { t } = useTranslation("personalProyects");

  return (
    <section className="relative w-full h-full bg-transparent p-6 pt-[5%]">

      <span className="text-[2rem] md:text-[4.5rem] text-white permanent-marker-regular drop-shadow-lg flex justify-center items-center text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
        {t("title")}
      </span>

      <div className='w-full flex justify-center'>
        <Divisor imagen={1}></Divisor>
      </div>
      
      <div className="grid gap-5 mt-[2rem] w-full h-full">

        {/* Qh */}
        <SpotlightCard className="custom-spotlight-card neon-border bg-transparent w-[90%] md:w-[50%] justify-self-center" spotlightColor="#008A69">
          <div className="flex flex-col justify-center items-center rounded-4xl">
            <img src="/assets/img/qh.png" className="object-contain rounded-2xl"/>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center m-[1rem]">
              {t("card2_title")}
            </span>
            <button onClick={() => window.location.href = 'https://queensheartgames.com/'}
                    className="mt-auto px-4 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap w-full'>
                {t("card2_button")}
              </span>
            </button>
          </div>
        </SpotlightCard>

        {/* Game */}
        <SpotlightCard className="custom-spotlight-card neon-border bg-transparent w-[90%] md:w-[50%] justify-self-center" spotlightColor="#008A69">
          <div className="flex flex-col items-center rounded-4xl">
            <img src="/assets/img/pudulogoinvader.png" className="object-contain"/>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center m-[1rem]">
              {t("card1_title")}
            </span>
            <button onClick={() => setShowGame(true)}
                    className="mt-auto px-4 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap w-full'>
                {t("card1_button")}
              </span>
            </button>
          </div>
        </SpotlightCard>

        {/* Modal Game */}
        {showGame && (
          <div className="fixed w-[100%] h-[100%] inset-0 bg-black/90 flex flex-col items-center justify-center" style={{ zIndex: 999 }}>
            <div className='relative flex justify-center items-center my-[1rem] '>
            <button className="border-2 bg-red-800/50 active:bg-red-600 text-white px-10 py-2 rounded hover:bg-red-800"
                    onClick={() => setShowGame(false)}>
              <i class="bi bi-x-lg text-white"></i>
            </button>
            </div>
            <div className="relative w-[80%] md:w-[50%] h-[100%] ">
              {/* Juego en iframe */}
              <iframe
                src="/PuduInvaders/Puduevade.html"
                className="w-full h-full rounded-b-lg"
              />
            </div>
          </div>
        )} 


      </div>
    </section>
  );
}
