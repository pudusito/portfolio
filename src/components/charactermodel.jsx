import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Modelchar() {
  const ref = useRef();
  const { scene } = useGLTF('/assets/glb/halcon_milenario.glb');

  // movimiento automatico
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.1}
      position={[-150, 0, 0]}
      rotation={[0, 800, 0]}
    />
  );
}

useGLTF.preload('/assets/glb/halcon_milenario.glb');

export default function CharModel() {
  return (

  <>
    <div className='w-full h-full overflow-hidden'>
      <Canvas camera={{ position: [-100, 100, 200], fov: 60 }}>
        {/* 💡 Luces */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        {/*  Planeta */}
        <Modelchar />
      </Canvas>
    </div>
  </>
  );
}
