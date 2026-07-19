import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef} from "react";

import Header from "./pages/Header";
import TopFooter from "./pages/TopFooter";
import Footer from "./pages/Footer"
import { About } from "./pages/About";
import { Whoim } from "./pages/Whoim";
import Work from "./pages/Work";
import Personal_Proyects from "./pages/Personal_Proyects";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Scene from "./pages/Scene";
import Landing from "./pages/Landing";
import Background from "./components/Background";

import { Analytics } from "@vercel/analytics/react"




function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoad = location.pathname === "/";

  const homeRef = useRef(null);
  const whoimRef = useRef(null);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const personalProyectsRef = useRef(null);
  const galleryRef = useRef(null);
  const footerRef = useRef(null);

  // Detecta scroll y actualiza la URL
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { path: "/Home", ref: homeRef },
        { path: "/Whoim", ref: whoimRef },
        { path: "/About", ref: aboutRef },
        { path: "/Work", ref: workRef },
        { path: "/Personal_Proyects", ref: personalProyectsRef },
        { path: "/Gallery", ref: galleryRef},
        { path: "/Footer", ref: footerRef},
      ];

      sections.forEach(({ path, ref }) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          if (location.pathname !== path) navigate(path, { replace: true });
        }
      });
    };

    const mainEl = mainRef.current;
    mainEl?.addEventListener("scroll", handleScroll, { passive: true });
    return () => mainEl?.removeEventListener("scroll", handleScroll);
  }, [location.pathname, navigate]);

  // Función para click en header
  const handleNavClick = (ref, path) => {
    const top = ref.current.offsetTop - 60;

    mainRef.current.scrollTo({
      top,
      behavior: "smooth"
    });

    navigate(path, { replace: true });
  };

  return (
    <div className="relative w-dvw h-dvh bg-white">

      {/* Fondo  3D - Canvas unico*/}
      {!isLoad && (
      <div className="fixed w-full h-full z-0 pointer-events-none bg-black/99">
        <Scene config={{
          stars: { show: true, count: 5000, fade: true, speed: 1 }
        }}>
          <Background />
        </Scene>
      </div>
      )}

      {isLoad && (
      <div className="fixed w-full h-full z-50 bg-transparent">
        <Landing/>
      </div>
      )} 


      {/* Header */}
      {!isLoad && (
        <header className="fixed z-50 top-0 w-[100%] overflow-hidden">
            <Header refs={{ homeRef, whoimRef, aboutRef, workRef , personalProyectsRef, galleryRef}} onNavClick={handleNavClick}
            />
        </header>
      )}

      {/* Main */}
      <main ref={mainRef} className="w-full h-full overflow-y-auto" style={{ scrollbarWidth: "auto", scrollbarColor: "#d1d1d1 #2c2c2c" }}>
        {!isLoad  && (
          <>
            <section ref={homeRef} id="home" className="h-[100vh]"><Home /></section>
            <section ref={whoimRef} id="whoim" className="h-[100vh]"><Whoim /></section>
            <section ref={aboutRef} id="about"><About /></section>
            <section ref={workRef} id="work" className="h-[100vh]"><Work /></section>
            <section ref={personalProyectsRef} id="personal_proyects" className="h-[100vh]"><Personal_Proyects /></section>
            <section ref={galleryRef} id="gallery" className="h-[100vh]"><Gallery /></section>
            <section ref={footerRef}><Footer /></section>
          </>
        )}
      </main>

      {/* TopFooter */}
      {!isLoad && (
        <footer className="fixed w-full z-50 bottom-0 left-0 bg-black/1 ">
          <TopFooter mainRef={mainRef}/>
        </footer>
      )}



    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Analytics debug={false} />
      <AppContent />
    </Router>
  );
}
