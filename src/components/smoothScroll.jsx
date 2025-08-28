import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"

export default function useSmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,   // velocidad del scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // suavizado
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return lenisRef
}
