{/*Technologies page*/}

import * as Icons from "../components/Icons";
import ParticleCard from "../components/ParticleCard";

export default function Technologies() {
  return (
    <>
      <section className="relative w-full h-full py-12 bg-gradient-to-b from-[#000319] via-[#1b0031] to-[#000319]">
        <div className="flex justify-center items-center">
          <span className="text-[3rem] md:text-[5rem] font-serif text-black font-bold drop-shadow-lg flex justify-center items-center underline underline-offset-8 text-center"
           style={{textShadow: "3px 3px 0 white, -3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white"}}>
            My Arsenals
          </span>
        </div>


        <div className="flex flex-wrap justify-center items-center gap-4">  

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-72 h-fit p-6 rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[2rem] font-semibold text-white mb-4 text-center"> Operating Systems</span>
              <div className="text-7xl flex flex-col items-center justify-center text-white">
                <div className="flex flex-row gap-3">
                  <Icons.Windows95Icon/>
                  <Icons.LinuxIcon />
                </div>
              </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-72 p-6 h-fit rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[2rem] font-semibold text-white text-center ">PY Stack</span>
                <div className="grid grid-cols-1  grid-rows-1 p-[1rem] gap-2 ">
                    <Icons.PythonIcon/>
                </div>
              <span className="text-[1.3rem] text-center text-white pt-[1rem] ">Frameworks and librarys</span>
              <div className="grid grid-cols-2 grid-rows-1 p-[1rem] gap-3 ">
                <span className="text-[1rem] text-white font-semibold border rounded-2 p-1">TKINTER</span>
                <span className="text-[1rem] text-white font-semibold border rounded-2 p-1">PYGAME</span>
              </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-72 p-6 h-fit rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[2rem] font-semibold text-white text-center">JS Stack</span>
                <div className="grid grid-cols-3  grid-rows-1 p-[1rem] gap-2">
                    <Icons.JavascriptIcon />
                    <Icons.Html5Icon />
                    <Icons.CssIcon />
                </div>
              <span className="text-[1.3rem] text-center text-white pt-[1rem] ">Frameworks and librarys</span>
              <div className="grid grid-cols-3 grid-rows-2 p-[1rem] gap-2 ">
                    <Icons.ViteIcon  />
                    <Icons.ReactIcon/>
                    <Icons.TailwindIcon />
                    <Icons.BootstrapIcon />
                    <Icons.ThreejsIcon />
              </div>
            </div>
          </ParticleCard>

          <ParticleCard>
            <div className="flex flex-col items-center justify-top w-72 h-fit p-6 rounded-2xl border-4 border-purple-950/25 bg-gradient-to-br from-gray-800/80 to-gray-900/60 shadow-lg transition-transform hover:border-cyan-700">
              <span className="text-[2rem] font-semibold text-white mb-4 text-center">Databases</span>
                <div className="grid grid-cols-2 grid-rows-3 gap-x-[1rem] ">
                  <div className="col-start-1 row-start-1"><Icons.SqlIcon/> </div>
                  <div className="col-start-2 row-start-1"><Icons.MongodbIcon/></div>
                  <div className="col-start-1 row-start-2"><Icons.SqliteIcon/> </div>
                  <div className="col-start-1 row-start-3"><Icons.WorkbenchIcon/>  </div>
                </div>
              <span className="text-[1.5rem] text-center mt-[1rem] text-white ">Data analysis</span>
                <div className="grid grid-cols-3 gap-3">
                  <Icons.ExcelIcon/>
                  <Icons.PowerbiIcon/>
                  <Icons.KnimeLogo/>
                </div>
            </div>
          </ParticleCard>

        </div>
      </section>
    </>
  );
}
