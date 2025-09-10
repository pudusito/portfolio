import { useNavigate } from "react-router-dom";
import AnimatedContent from "../components/AnimatedCard";
import GradientText from "../components/TextMain";

export default function Landing() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/About"); // Va a la ruta Home
  };

  return (
    <>
      <section className="relative flex items-center justify-center bg-transparent h-full w-full px-4 overflow-auto">
          <div className='fixed top-1/2 md:left-[3rem] transform -translate-y-1/2 max-w-4xl text-center '>
              <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.5}>

                <GradientText
                  colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
                  animationSpeed={10}
                  showBorder={false}
                  className="flex flex-column md:flex-row text-[clamp(2rem,5vw,6rem)]"
                >
                   &lt;/&gt;  ¡ Hola Mundo !<br/>
                </GradientText>

                <div className="mt-4 sm:mt-6 lg:mt-8 justify-center items-center">
                <button 
                  onClick={goToHome} 
                  className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 bg-gradient-to-r from-[#40ffa9a4] via-[#4079ffb4] to-[#7725de] hover:scale-105 transition-transform duration-300 border-2 border-black/99 rounded-4 hover:border-cyan-500"
                >
                  <span className="text-center text-sm sm:text-base md:text-lg text-black font-semibold">
                    GO IN<br/> 
                  </span>
                </button>
                </div>
              </AnimatedContent>
          </div>
          <div className="absolute bottom-0 right-0 text-gray-800 text-[1rem] ">
            by Pudu
          </div>
      </section>  
    </>
  );
}

