import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const ref = useRef();
  const { scene } = useGLTF('/glb/neonearth.glb');

  // 🌍 Rotación automática
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0002;
      ref.current.rotation.x = THREE.MathUtils.degToRad(28);
      ref.current.rotation.z += 0.0002;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.09}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload('/public/glb/neonearth.glb');

export default function NeonEarth() {
  return (

  <>
    <div className='w-80 h-80 md:w-150 md:h-150 rounded-full overflow-hidden border-2 bg-black/50'>
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        {/* 💡 Luces */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        {/* 🎮 Controles de cámara */}
        <OrbitControls
          enableZoom={false}
          target={[0, 0, 0]} // Siempre orbita alrededor del planeta
          mouseButtons={{
            RIGHT: null,   // Desactiva botón derecho
            MIDDLE: null,  // Desactiva zoom con rueda
            LEFT: 0        // Solo rotación con botón izquierdo
          }}
        />

        {/* 🌍 Planeta */}
        <Model />
      </Canvas>
    </div>
  </>
  );
}
