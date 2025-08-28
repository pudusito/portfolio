import CardCarousel from "../components/CardCarousel";
import { useState, useRef, useEffect } from 'react'

export default function Cards() {

  const [showProfile, setShowProfile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const timeoutRef = useRef(null);

  // Función para manejar el hover
  const handleMouseEnter = () => {
    setIsHover(true);
    // Si hay timeout para ocultar, lo cancelamos
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    // Después de 5 segundos, ocultamos el perfil si no hay hover
    timeoutRef.current = setTimeout(() => {
      setShowProfile(false);
    }, 2000);
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (

    <>
      <div className="flex flex-col justify-center items-center">
        <CardCarousel>
          {/* Tarjetas */}
          <div className="text-white flex flex-col justify-center items-center tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-6 rounded-2xl">
            <span className="text-[2rem] font-semibold">
              Education <i className="bi bi-book"></i>
            </span>
            <br />
            <span className="text-[2rem]">My university education was in the city of Chillan in:</span>
            <img src="src/assets/logoinacap.png" alt="inacap" className="object-cover mb-4 rounded bg-white scale-60"/>
            <button onClick={() => setShowProfile(!showProfile)} className="border-2">
              Perfil Profesional
            </button>
          </div>
          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <img src="src/assets/cs50certificado.png" alt="cs50" className="object-cover mb-4 rounded"/>
          </div>

          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-6 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <img src="src/assets/oraclect.png" alt="oracle" className="object-cover mb-4 rounded"/>
          </div>

          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-6 rounded-2xl">
            <span className="text-[2rem]">Experience</span>
            <br />
            <span className="text-[2rem]">...</span>
          </div>

          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-green-950/30 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Games</h2>

            <span className="text-[2rem] text-start">
              [2013-2017] <br/>
              Challenger in league of legends, participating in diferents teams and tournaments during my time as a player.<br/>
              i learn a lot of soft and execution skills there!
            </span>
          </div>


          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-yellow-800/30 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
            <br />
            <span className="text-[2rem]">... </span>
          </div>

          <div className="text-white tracking-wide leading-relaxed text-center border-2 bg-gray-950/50 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">My history</h2>
            <br />
            <h2 className="text-2xl font-bold mb-4">Im 28 years old, Born and raised in Santiago of Chile</h2>
          </div>


          <div className="bg-black/60 text-white tracking-wide leading-relaxed text-center border-2 p-6 rounded-2xl">
            <span className="text-[2rem]">Testimonials</span>
            <br />
            <span className="text-[2rem]">
             ...</span>
          </div>
          
        </CardCarousel>
          {(showProfile || isHover) && (
          <div className="flex flex-col justify-center items-center m-[10rem] ">
            <div className=" bg-white/50 text-black rounded-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <h2 className="text-2xl font-bold mb-4">Perfil Profesional</h2> {/* esto tiene que ser un modal */}
            <p className="text-lg leading-relaxed">
                El Técnico de Nivel Superior en Analista Programador del Centro de Formación Técnica INACAP está capacitado para analizar, diseñar y desarrollar aplicaciones informáticas en diversas plataformas, utilizando metodologías ágiles y buenas prácticas de desarrollo seguro de software. 
                Su formación le permite implementar soluciones tecnológicas, gestionar bases de datos seguras y configurar entornos de trabajo multiplataforma, siempre enfocado en satisfacer las necesidades del usuario y optimizar los procesos de las organizaciones.
                Durante su carrera, adquiere experiencia práctica a través del Aprender Haciendo, desarrollando proyectos de complejidad creciente que integran programación de aplicaciones, diseño de bases de datos, diagramación de componentes de sistemas y preparación de infraestructura tecnológica.
                 Asimismo, fortalece competencias transversales como resolución de problemas, innovación y emprendimiento, ética y ciudadanía, trabajo colaborativo y comunicación, y se forma para mantenerse en constante aprendizaje, adaptándose a las tendencias de la industria tecnológica.
                Este perfil profesional le permite contribuir al desarrollo de proyectos innovadores que impactan positivamente en la transformación digital de empresas y comunidades, brindando soluciones tecnológicas de vanguardia.
                Además, su formación permite la continuidad académica hacia carreras de ingeniería en informática, ciberseguridad o programas de educación continua especializados.
            </p>
            </div> 
         </div> 

          )}

      </div>
    </>
  );
}
