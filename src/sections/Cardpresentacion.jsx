import avatar from '../assets/avatar.jpg'

export default function Cardpresentation() {
  
  return (
    <div className="bg-black/80 text-white tracking-wide rounded-lg border-2 md:border-3 border-black box-content mx-2 md:mx-0 py-3 md:py-4">
      
      {/* Avatar */}
      <div className='flex justify-center mb-2'>
        <span 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-black" 
          style={{textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"}}
        >
          Overview
        </span>
      </div>
      
      <div className="flex justify-center mb-[1rem]">
        <img
          src={avatar}
          alt="Foto de perfil"
          className="w-32 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover border-2 border-black shadow-md rounded-full object-center"
        />
      </div>

      <div className="flex flex-col items-center px-3 md:px-4 space-y-2">
        
        {/* Alias */}
        <span className="text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair">
          <span className='text-xs font-light text-purple-400'>
            [alias]: &nbsp;
          </span>
          @Pudu <i className="bi bi-person-fill-check ml-1"></i>
        </span>
        
        {/* Name */}
        <span className='text-sky-400 text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 border border-sky-500/50 rounded-full flex items-center shadow-sm bg-black/65 cursor-crosshair'>
          <span className="text-xs text-purple-400">
            [Name]:&nbsp;
          </span>
          <span className="truncate max-w-[120px] sm:max-w-none">
            Benjamin Maldonado
          </span>
        </span>
        
        {/* Greeting */}
        <span className="text-base sm:text-lg md:text-xl">
          👋Hi!
        </span>
        
        {/* Job Description */}
        <div className="text-center px-1">
          <p className="text-xs sm:text-sm md:text-base font-mono flex flex-col sm:flex-row items-center justify-center gap-1">
            <span>$ Im:</span>
            <span className='border border-black px-1.5 py-0.5 rounded text-xs break-words'>
              .Técnico Analista Programador \
            </span>
            <span className="mt-0.5 sm:mt-0">in training.</span>
          </p>
        </div>
        
        {/* Description */}
        <div className='text-center max-w-xs sm:max-w-sm md:max-w-md font-light text-xs sm:text-sm leading-snug px-2'>
          <p className="mb-2">
            "I am motivated by the continuous improvement of my skills as a programmer."
          </p>
          <p>
            "I strive to maintain good development practices, to ensure a clean, modular, and maintainable design."
          </p>
        </div>
      </div>
    </div>
  )
}