import { useState, useEffect } from "react";
import "../components/Neon.css";
import { useTranslation } from "react-i18next";

export default function TopFooter({ mainRef }) {

  const { t } = useTranslation("topfooter");

  const [openModal, setOpenModal] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const el = mainRef?.current;
    if (!el) return;

    const onScroll = () => {
      const isTop = el.scrollTop <= 10;

      const isBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 10;

      setAtTop(isTop);
      setAtBottom(isBottom);
    };

    onScroll();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [mainRef]);

  const handleScrollToggle = () => {
    const container = mainRef.current;
    if (!container) return;

    const sections = Array.from(container.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    const center = scrollTop + containerHeight / 2;

    let currentIndex = sections.findIndex((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      return center >= top && center < bottom;
    });

    if (currentIndex === -1) currentIndex = 0;

    const isLast = currentIndex >= sections.length - 1;

    if (isLast) {
      const welcome = document.getElementById("welcome");
      if (welcome) {
        container.scrollTo({
          top: welcome.offsetTop,
          behavior: "smooth",
        });
      }
      return;
    }

    const next = sections[currentIndex + 1];

    container.scrollTo({
      top: next.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full flex flex-row justify-content-between">
        
        {/* Botón Hire Me */}
        <div className="bottom-0 left-0 m-3 text-[clamp(0.8rem,1vw,1rem)]">
          <button
            className="animate-[bounce_10s_infinite] font-semibold bg-gray-950 text-sky-400 hover:bg-sky-400/50 px-1 py-3 border-2 rounded-3 transition duration-300"
            onClick={() => setOpenModal(true)}
          >
            {t("buttonhire")}
          </button>
        </div>

                {/* Botón UP / DOWN */}
        <div className="items-center bg-transparent py-2 px-2 md:mx-4">
          <button
            className="bg-gray-950 text-sky-400 px-2.5 py-1 border-2 rounded hover:bg-sky-400/50 transition duration-300"
            onClick={handleScrollToggle}
            aria-label={atTop ? t("buttonscrolldown") : t("buttonscrollup")}
          >
            <div className="flex flex-col items-center">

              {/* 🔽 SOLO cambia en top / bottom real */}
              {atBottom ? (
                <i className="bi bi-arrow-up text-xl"></i>
              ) : (
                <i className="bi bi-arrow-down text-xl"></i>
              )}

              <span className="text-[clamp(0.8rem,1vw,1rem)] font-semibold">
                {atBottom ? t("buttonscrollup") : t("buttonscrolldown")}
              </span>

            </div>
          </button>
        </div>

      </section>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpenModal(false);
              setShowEmail(false);
            }}
          />

          <div className="relative z-10 w-[90%] max-w-md
                          rounded-xl border neon-border-top
                          bg-gray-900/90 p-6 text-white">

            <button
              onClick={() => {
                setOpenModal(false);
                setShowEmail(false);
              }}
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-[2rem] text-center font-semibold mb-4 whitespace-pre-line">
              {t("modaltitle")}
            </h2>

            <p className="text-[1rem] text-center text-gray-300 mb-4 whitespace-pre-line">
              {t("modaltext")}
            </p>

            <div className="mt-4 flex gap-6 justify-center items-center">

              {/* Email */}
              <div className="relative scale-100 hover:scale-120 lg:scale-150 lg:hover:scale-200 transition-transform ">
                <a
                  href="mailto:benjaminmaldonadobarrales@gmail.com?subject=Contacto%20desde%20portfolio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Correo"
                  onMouseEnter={() => setShowEmail(true)}
                  onMouseLeave={() => setShowEmail(false)}
                  onClick={(e) => {
                    if (window.innerWidth < 768) {
                      e.preventDefault();
                      setShowEmail((prev) => !prev);
                    }
                  }}
                  className="text-sky-400 hover:text-sky-300 text-2xl transition-transform"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>

                {showEmail && (
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                                   whitespace-nowrap rounded-md bg-gray-950 border border-sky-400
                                   px-3 py-1 text-sm text-sky-300 z-50">
                    benjaminmaldonadobarrales@gmail.com
                  </span>
                )}
              </div>

              <a href="https://discord.gg/YujfDbDxzZ"
                 target="_blank"
                 rel="noreferrer"
                 className="text-sky-400 hover:text-sky-300 text-2xl transition-transform">
                <i className="bi bi-discord"></i>
              </a>

              <a href="https://www.linkedin.com/in/pududev/"
                 target="_blank"
                 rel="noreferrer"
                 className="text-sky-400 hover:text-sky-300 text-2xl transition-transform">
                <i className="bi bi-linkedin"></i>
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}