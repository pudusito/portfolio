import { useEffect, useRef, useState, Children } from "react";

export default function CardCarousel({ children }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = Children.count(children);

  // Auto-rotación
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [total]);

  // Resetear intervalo si hay interacción
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % total);
    resetInterval();
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + total) % total);
    resetInterval();
  };

  // Funciones para pausar/reanudar la animación al hover
  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => resetInterval();

  return (
    <div className="flex flex-content-row justify-center items-center mt-[2rem]">

      <button onClick={prevCard}
        className="px-6 py-2 rounded hover:bg-indigo-500 transition border-2 border-white items-center">
        <i class="bi bi-chevron-double-left text-white"></i>
      </button>

      <div
        className="flex items-center justify-center
                   sm:w-[640px] sm:h-[400px] 
                   md:w-[768px] md:h-[500px] 
                   lg:w-[1024px] lg:h-[600px] 
                   xl:w-[1280px] xl:h-[1080px]
                   2xl:w-[1920px] 2xl:h-[1080px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Children.toArray(children)[index]}
      </div>

      <button onClick={nextCard}
        className="px-6 py-2 rounded hover:bg-indigo-500 transition border-2 border-white">
        <i class="bi bi-chevron-double-right text-white"></i>
      </button>
    </div>
  );
}
