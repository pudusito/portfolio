import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function CameraDebugger() {
  const { camera } = useThree()
  const elapsedRef = useRef(0)

  useFrame((state, delta) => {
    elapsedRef.current += delta // delta es el tiempo entre frames en segundos

    if (elapsedRef.current >= 3) {
      console.log('Camera position:', camera.position)
      // Opcional:
      // console.log('Camera rotation:', camera.rotation)
      elapsedRef.current = 0 // resetear contador
    }
  })

  return null
}
