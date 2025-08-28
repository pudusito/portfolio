import { useNavigate } from "react-router-dom";
import AnimatedContent from "../components/AnimatedCard";
import GradientText from "../components/TextMain";

export default function Landing() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/About"); // Va a la ruta Home
  };

  return (
    <section className="relative flex items-center justify-center bg-transparent h-full w-full px-4 overflow-auto">
        <div className='fixed top-1/2 left-[5%] transform -translate-y-1/2 max-w-4xl text-center'>
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6"
              >
                Nice to meet you!<br/>
              </GradientText>
              
              <div className="flex justify-center w-full mb-4 sm:mb-6">
                <div className="flex flex-row items-center gap-2 sm:gap-4">
                  <GradientText
                    colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    Im
                  </GradientText>
                  <GradientText 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} 
                    animationSpeed={10}
                    showBorder={false}>
                    @Pudu<i className="bi bi-person-fill-check"></i><br/>
                  </GradientText>
                </div>
              </div>
              
                <GradientText 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-2 mb-6 sm:mb-8" 
                  colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]} 
                  animationSpeed={10}
                  showBorder={false}>
                  technical analyst programmer student
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
    </section>  

  );
}