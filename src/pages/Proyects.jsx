import SpotlightCard from '../components/ProyectCard';
import { useState } from 'react';

export default function Proyects() {
  const [showGame, setShowGame] = useState(false);

  return (
    <section className="relative w-full h-full isolate overflow-hidden bg-gradient-to-br from-[#000319] via-[#000319] to-[#212c80] p-6 ">
      <span
        className="text-[3rem] md:text-[5rem] font-serif text-black font-bold drop-shadow-lg flex justify-center items-center underline decoration-dashed underline-offset-8 text-center"
        style={{
          textShadow:
            "3px 3px 0 white, -3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white",
        }}
      >
        Proyects
      </span>

      <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 mt-[2rem] ">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex flex-col items-center justify-center w-full h-full border-2 rounded-b-4xl">
            <img
              src="/src/assets/img/pudulogoinvader.png"
              alt="PuduGame"
              name="pudugame"
            />
            <span className="text-white text-[1rem] font-semibold m-2">
              JS VANILLA MINIGAME
            </span>
            <button
              className="px-4 py-2 border-2 rounded-2 text-white border-black bg-green-700/50 hover:bg-green-700 hover:scale-110"
              onClick={() => setShowGame(true)}
            >
              Play
            </button>
          </div>
        </SpotlightCard>
      </div>

      {/* 🔹 Modal */}
      {showGame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[850px] h-[650px] relative">
            {/* Botón cerrar */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
              onClick={() => setShowGame(false)}
            >
              ✖
            </button>

            {/* Juego en iframe */}
            <iframe
              src="/PuduInvaders/Puduevade.html"
              width="100%"
              height="100%"
              className="rounded-b-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
