import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Proyects from "./pages/Proyects";
import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import Scene from "./pages/Scene";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === "/";

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const proyectsRef = useRef(null);
  const galleryRef = useRef(null);

  // Detecta scroll y actualiza la URL
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { path: "/About", ref: aboutRef },
        { path: "/Technologies", ref: techRef },
        { path: "/Proyects", ref: proyectsRef },
        { path: "Gallery", ref: galleryRef},
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
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80
    const top = ref.current.offsetTop - headerHeight;

    mainRef.current.scrollTo({
      top,
      behavior: "smooth"
    });

    navigate(path, { replace: true });
  };

  return (
    <div className="relative w-dvw h-dvh bg-white">

      {/* Fondo */}
      <div className="fixed w-full h-full z-0 pointer-events-none bg-black/99">
        <Scene />
      </div>

      {/* Header */}
      {!isLanding && (
        <header className="relative top-0 w-full overflow-hidden backdrop-blur-sm">
            <Header refs={{ aboutRef, techRef, proyectsRef , galleryRef}} onNavClick={handleNavClick}/>
        </header>
      )}

      {/* Main */}
      <main ref={mainRef} className="fixed w-full h-full overflow-y-auto" style={{ scrollbarWidth: "auto", scrollbarColor: "#d1d1d1 #2c2c2c" }}>
        {isLanding ? (<Landing />) : (
          <>
            <section ref={aboutRef}><About /></section>
            <section ref={techRef}><Technologies /></section>
            <section ref={proyectsRef}><Proyects /></section>
            <section ref={galleryRef}><Gallery /></section>
          </>
        )}
      </main>

      {/* Footer */}
      {!isLanding && (
        <footer className="fixed w-full z-50 bottom-0 left-0 bg-black/1 ">
          <Footer/>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
