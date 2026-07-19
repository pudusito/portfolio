import { useState, useEffect , Children } from "react"

import { useTranslation } from "react-i18next";

export default function Cards() {

  const { t } = useTranslation("sec2about");
  
  // Todas las tarjetas
  const cards = [
    // 1. Education
    <div className="w-80 h-50  md:w-full md:h-full flex flex-col justify-center items-center text-center border-2 bg-green-950/30 rounded-2xl p-2 border-white">
      <span className="text-[2rem] font-bold text-white">
        {t("card_education_title")}  <i className="bi bi-book text-red-700"></i>
      </span>
      <br />
      <span className="text-[1.4rem] font-semibold text-white">
        {t("card_education_text")}
      </span>
      <img
        src="/assets/img/logoinacap.png"
        alt="inacap"
        className="object-cover rounded bg-white scale-60"
      />
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="my-2 border-2 border-black shadow-lg shadow-red-900 rounded p-1 bg-red-700"
      >
        <span className="text-[1.2rem] text-white"> {t("card_education_button")} </span>
      </button>
    </div>,


    // 5. Games
    <div className="text-white w-80 h-50 md:w-120 md:h-120 text-center border-2 bg-green-950/30 p-2 rounded-2xl flex flex-col justify-center items-center">
      <span className="text-[2rem] font-bold">{t("card_games_title")}<br /></span>

      <div className="flex justify-center items-center rounded-full w-15 h-15">
        <img src="/assets/img/challengerlogo.png"></img>
      </div>
      <span className="text-[1rem]">
        [2013-2017] <br />
        {t("card_games_text")}
      </span>
    </div>,

  ];
  
  const [showProfile, setShowProfile] = useState(false); //estado para mostrar perfil profesional
  const [index, setIndex] = useState(0); //estado para botones de carrusel
  const [paused, setPaused] = useState(false); // 🔹 Estado para pausar el loop

  const total = Children.count(cards);

  // Lógica del carrusel
  const nextCard = () => setIndex((prev) => (prev + 1) % total);
  const prevCard = () => setIndex((prev) => (prev - 1 + total) % total);
  // Loop Carrusel

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 10000); // cambia cada 4 segundos (ajústalo como quieras)

    return () => clearInterval(interval); // limpiar cuando el componente se desmonte
  }, [total, paused]);



  return (
    <>    
    
      <div className="relative flex flex-col bg-transparent mt-15 mb-30">
        
        {/* Buttons */}
        <div className="flex flex-row w-full h-full justify-center items-center gap-1">

          <button onClick={prevCard}
                  className="px-3 py-1 rounded-2 border-2 border-white hover:bg-indigo-500 transition">
            <i className="bi bi-chevron-double-left text-white"></i>
          </button>

          {/* Tarjeta actual */}
          <div className="flex w-65 lg:w-80 h-80 justify-center items-center">

            <div className="flex w-full items-center justify-center"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
            >
              {cards[index]}
            </div>
          </div>

          <button onClick={nextCard}
                  className="px-3 py-1 rounded-2 border-2 border-white hover:bg-indigo-500 transition">
            <i className="bi bi-chevron-double-right text-white"></i>
          </button>
        </div>

      </div>


      {/* Modal Perfil Profesional */}
      {showProfile && (
        <div className="fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black/80 z-50 overflow-auto">
          <div className=" bg-black/50 text-white w-[90%] h-[65%] md:w-[50%] md:h-[50%] overflow-y-auto text-center border-2 border-white shadow-[4px_4px_10px_#000350,_-4px_-4px_10px_#000350,4px_-4px_10px_#000350,-4px_4px_10px_#000350]"
                style={{ scrollbarWidth: "thin", scrollbarColor: "red"}}>

            <span className="text-[2rem] md:text-[3rem] font-bold ">{t("professional_profile_title")}</span>

            <p className="text-[0.7rem] md:text-[1rem] leading-relaxed font-semibold text-start pt-2 px-4"
                style={{textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"}}>
               {t("professional_profile_text")}
            </p>

            <div className="flex justify-center m-4">

              <div className="flex flex-row gap-3 h-40">
              <img src="/assets/img/oraclect.png"
                className="object-contain w-50 border-2 border-black "
              />
              <img src="/assets/img/titulo.png"
                className="object-contain w-50 border-2 border-black"
              />
              </div>
            </div>

            <button
              onClick={() => setShowProfile(false)}
              className="mb-2 px-4 py-2 rounded bg-red-700 text-white"
            >
              {t("button_close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
