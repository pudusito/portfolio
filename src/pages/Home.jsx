import ModelChar from '../components/charactermodel'
import GradientText from "../components/TextMain";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {

  const { t } = useTranslation("welcome");

  /* reinicia la animacion del model al cargar home */
  const location = useLocation();
  const [modelKey, setModelKey] = useState(0);
  
  useEffect(() => {
    if (location.pathname === "/Home") {
      setModelKey((prev) => prev + 1);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Header */}
      <div className="relative top-0 bg-gradient-to-b from-[#14002e] to-[#000319] w-full h-[5rem] md:h-[8rem] neon-border-bottom "/>

      {/* Welcome Section */}
      <section className="relative w-full h-[88vh] bg-transparent flex items-center justify-center ">

        <div className="absolute w-fit h-fit text-center">

          <span
            className="text-[clamp(2rem,5vw,4rem)] font-black text-center"
            style={{
              textShadow:
                "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
            }}
          >
            👋
          </span>
          
          <GradientText
            colors={["#40ffaa", "#40b0ff", "#4079ff", "#8a00ff", "#b34fff"]}
            animationSpeed={10}
            showBorder={false}
            className="text-[clamp(2.5rem,5vw,5rem)] p-[1rem] permanent-marker-regular text-center"
          >
            {t("welcome")}
          </GradientText>
          
        </div>

        <ModelChar key={modelKey} />

      </section>
    </>
  );
}