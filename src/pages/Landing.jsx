import { useNavigate } from "react-router-dom";
import GradientText from "../components/TextMain";
import NeonEarth from '../components/neonearth';
import { useGLTF } from '@react-three/drei';

import { useState } from "react";
import Preloader from "../components/preLoader";
import Scene from "./Scene";


export default function Landing() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  const goToHome = () => {
    navigate("/Home"); 
  };

  useGLTF.preload('/assets/glb/neonearth.glb');

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
      <>
        <div className="fixed w-full h-full z-0 pointer-events-none bg-black/99">
          <Scene
            config={{
              stars: { show: true, count: 5000, fade: true, speed: 1 }
            }}
          />
        </div>

        <section className="relative bg-transparent h-full w-full">
          <div className="flex flex-col md:flex-row items-center justify-center h-full w-full gap-8">
            <div className='flex flex-col justify-center items-center text-center z-10 px-4'>
              <GradientText
                colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
                animationSpeed={10}
                showBorder={false}
                className="flex flex-col md:flex-row text-[clamp(2rem,5vw,6rem)] whitespace-nowrap">
                 &lt;/&gt;  ¡ Hello World !<br/>
              </GradientText>
        
              <div className="flex justify-center items-center text-center">
              <button 
                onClick={goToHome} 
                className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 bg-gradient-to-r from-[#40ffa9a4] via-[#4079ffb4] to-[#7725de] hover:scale-105 transition-transform duration-300 border-2 border-black/99 rounded-4 hover:border-cyan-500">
                <span className="text-center text-sm sm:text-base md:text-lg text-black font-semibold">
                  GO IN<br/> 
                </span>
              </button>
              </div>
            </div>
        
            <div className="flex justify-center backdrop-blur-sm bg-[#010a5038] rounded-full">
                <NeonEarth/>
            </div>
            
            <div className="absolute bottom-0 right-0 text-gray-800 text-[1rem]">
              by Pudu
            </div>
            </div>
        </section>  
      </>
      
    )}
    </>
  );
}


