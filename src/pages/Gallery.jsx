import { useState } from 'react';
import { createPortal } from "react-dom";

import { useTranslation } from "react-i18next";

import Divisor from '../components/divisor';

export default function Gallery() {
  const imagenes = [
    { id: 1, src: "/assets/img/gallery/chillan.jpg", caption: "" },
    { id: 2, src: "/assets/img/gallery/atacama.jpg", caption: "" },
    { id: 3, src: "/assets/img/gallery/montañas.jpg", caption: "" },
    { id: 4, src: "/assets/img/gallery/neonland.jpg", caption: "" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
                                                                                                                                                                               
  const total = imagenes.length;
  const nextImg = () => setIndex((prev) => (prev + 1) % total);
  const prevImg = () => setIndex((prev) => (prev - 1 + total) % total);
  const exitImg = () => setShowModal(false);

  const { t } = useTranslation("gallery");


  return (
    <>
      <section className="relative w-full h-full isolate overflow-hidden bg-transparent pt-[5%]">
        
        <span className="text-[3rem] md:text-[5rem] text-white permanent-marker-regular drop-shadow-lg flex justify-center items-center text-center"
           style={{textShadow: "3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black"}}>
          {t("title")}
        </span>

        <div>
          <Divisor imagen={2}></Divisor>
        </div>

        <div className="grid grid-cols-2 gap-[0.5rem] my-[2rem] md:grid-cols-4 md:my-[5rem] md:px-[5rem] md:gap-[2.5rem] ">
          {imagenes.map((img, i) => (
            <figure key={img.id} className="w-[100%] h-[100%] md:w-[80%] md:h-[80%] flex flex-col items-center justify-center overflow-hidden rounded-2 border-2 border-white">
              <img
                onClick={() => {
                  setIndex(i);
                  setShowModal(true);
                }}
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover cursor-pointer"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Modal renderizado con portal */}
      {showModal && createPortal(
        <div /* onClick={exitImg}  */className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
          <div className="relative flex flex-col items-center" /* onClick={(e) => e.stopPropagation()} */>
            <img src={imagenes[index].src} alt={imagenes[index].caption} className="max-h-[90%] max-w-[90%] object-contain rounded-lg"/>
            <figcaption className="text-white text-lg mt-2 text-center">
              {imagenes[index].caption}
            </figcaption>
          </div>
          {/* botones */}
          <button onClick={prevImg} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
            <i className="bi bi-chevron-double-left text-[2rem] md:text-[4rem] active:text-cyan-600"></i>
          </button>
          <button onClick={nextImg} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
            <i className="bi bi-chevron-double-right text-[2rem] md:text-[4rem] active:text-cyan-600"></i>
          </button>
          <button onClick={exitImg} className="absolute top-0 right-0 text-white z-50 border-2 px-1 py-1 rounded-2 hover:bg-red-500/20">
            <i className="bi bi-x-lg text-[1rem] md:text-[2rem] active:text-red-500"></i>
          </button>
        </div>,
        document.body
        )}
    </>
  );
}
