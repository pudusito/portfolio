{/* footer page*/}

function Footer({mainRef}) {

  const handleScrollTop = () => {
  mainRef.current?.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  };

  return (
    <section>
      <div className="flex items-center justify-end m-3 bg-transparent">

        <button className="bg-gray-950 text-sky-400 px-2.5 py-1 border-2 rounded hover:bg-sky-400/50 transition duration-300"
                onClick={handleScrollTop}>
          <div className="flex flex-col items-center">
            <i className="bi bi-arrow-up text-xl"></i>
            <span className="text-sm">
              UP</span>
          </div>
        </button>
      </div>
            <div className='fixed bottom-0 left-0 m-3'>
          <button className="bounce-button font-semibold text-lg bg-gray-950 text-sky-400 hover:bg-sky-400/50 px-2.5 py-2 border-2 rounded-3 transition duration-300">
            CONTRATAME
          </button>
        </div>
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
          .bounce-button {
            animation: bounce 3s infinite;
            cursor: pointer;
          }
        `}</style>
    </section>
    
    
  );
}

export default Footer;

