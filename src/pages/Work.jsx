import SpotlightCard from '../components/Card';

import { useTranslation } from "react-i18next";

import Divisor from '../components/divisor';

export default function Work() {

  const { t } = useTranslation("work");

  return (
    <div className="relative flex flex-col items-center justify-content-top h-full w-full pt-[5%]">

      <span className="text-[2rem] md:text-[5rem] text-white permanent-marker-regular drop-shadow-lg flex justify-center items-center text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
        {t("title")}
      </span>

      <div className='w-full flex justify-center'>
        <Divisor imagen={1}></Divisor>
      </div>
      
      <div className="w-full mt-[2rem]  md:w-[30%]">

        {/* Github */}
        <SpotlightCard className="custom-spotlight-card bg-transparent neon-border">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="text-6xl md:text-8xl text-white mt-[1rem]">
              <i className="bi bi-github"></i>
            </div>
            <span className="text-white text-[1rem] md:text-[1.2rem] font-semibold text-center whitespace-nowrap m-[1rem] ">
              {t("card2_title")}
            </span>
            <a href="https://github.com/pudu-dev"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-auto px-1 py-2 border-2 rounded text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110 transition-transform duration-200">
              <span className='text-[0.8rem] md:text-[1rem] whitespace-nowrap'>
                {t("card2_button")}
              </span>
            </a>
          </div>
        </SpotlightCard>

      </div>



    </div>
  );
}
