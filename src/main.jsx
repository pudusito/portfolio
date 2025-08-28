import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'; //defecto
import 'bootstrap-icons/font/bootstrap-icons.css'; //iconos


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//npm create vite@latest . -- --template react

//controlar rutas SPA
// npm install react-router-dom

//tailwind:
// npm install tailwindcss @tailwindcss/vite
// npx jsrepo init https://reactbits.dev/tailwind
// npx jsrepo add Animations/AnimatedContent (para añadir componentes por el nombre, ver en la pagina- grupo/nombre)
// importar tailwind en un archivo css...  @import "tailwindcss";


//bootstrap
// npm install bootstrap
// npm install bootstrap-icons


//three js 
// npm install @react-three/fiber
// npm install @react-three/drei

// opcionales fisicas para objetos
// npm install @react-three/cannon

//controlar animaciones
// npm install gsap
//npm install @gsap/react


//lenis (controla animacion de scroll)
// npm install @studio-freight/lenis
