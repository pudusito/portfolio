import PresentationCard from "../sections/PresentationCard";

export function Welcome() {
  
  return (
    <>

      <div className="relative w-full h-full bg-transparent">

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
