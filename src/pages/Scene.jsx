
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react'


import Background from '../components/Background';
import CameraController from '../components/CameraController';
import CameraDebugger from '../components/CameraDebugger'

export default function Scene() {
 
  const moonRef = useRef();
  const earthRef = useRef();
  const sunRef = useRef();
  const blackHoleRef = useRef();
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Stars />
      <Background
        moonRef={moonRef}
        earthRef={earthRef}
        sunRef={sunRef}
        blackHoleRef={blackHoleRef}>
      </Background>
      <CameraController />
      <CameraDebugger/>
    </Canvas>
  );
}
