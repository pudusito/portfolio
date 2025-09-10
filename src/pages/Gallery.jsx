import NeonEarth from '../components/neonearth'
 {/* Home page*/}

function Gallery() {
  return (
    <section className="relative w-full h-full isolate overflow-hidden bg-gradient-to-tr from-[#000319] via-[#000319] to-[#212c80] p-6">
      <span className="text-[3rem] md:text-[5rem] font-serif text-black font-bold drop-shadow-lg flex justify-center items-center underline decoration-dashed underline-offset-8 text-center mt-[2rem] " 
            style={{textShadow: "3px 3px 0 white, -3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white"}}>
          Gallery
      </span>
      <div className="">
        <div className="">     
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 m-[5rem]">

            <div className="w-70 h-60 md:w-90 md:h-80 border-2">
              <img src="/src/assets/img/avatar.jpg" alt="" name=""></img>
            </div>

            <div className="w-70 h-60 md:w-90 md:h-80 border-2">
              <img src="/src/assets/img/avatar.jpg" alt="" name=""></img>
            </div>

            <div className="w-70 h-60 md:w-90 md:h-80 border-2">
              <img src="/src/assets/img/avatar.jpg" alt="" name=""></img>
            </div>

            <div className="w-70 h-60 md:w-90 md:h-80 border-2">
              <img src="/src/assets/img/avatar.jpg" alt="" name=""></img>
            </div>


          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <NeonEarth></NeonEarth>
      </div>
    </section>  

  );
}

export default Gallery;