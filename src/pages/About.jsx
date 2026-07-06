import GradientText from "../components/TextMain";
import PresentationCard from "../sections/PresentationCard";
import { useTranslation } from "react-i18next";

export function Welcome() {

  const { t } = useTranslation("welcome");
  
  return (
    <>

      <div className="relative w-full min-h-screen pt-[5%] bg-transparent">

        <div className="flex flex-col gap-[1rem]">

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

        <PresentationCard />

      </div>

    </>
  );
}

import WhatIdo from '../sections/sec1About';
import MoreAbout from '../sections/sec2About'

export function About() {
  
  return (
    <>

        <WhatIdo />

        <MoreAbout />

    </>
  );
}
