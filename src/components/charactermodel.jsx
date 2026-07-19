import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Trail} from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Modelchar() {
  const ref = useRef();
  const { scene } = useGLTF('/assets/glb/halcon_milenario.glb');

    // reinicia la posicion al cargar home
  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(-170, 40, 100);
      ref.current.rotation.set(0, 800, 0);
    }
  }, [scene]);

  // movimiento automatico
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x += 0.5;
      ref.current.position.y += -0.1;
      ref.current.position.z += -0.2;
      ref.current.rotation.y += -0.0001;
      ref.current.rotation.z += 0.0001;

    }
  });
  

  return (
    <Trail
      width={500}
      length={30}
      color="cyan"
      attenuation={(t) => t * t}
    >
      <primitive
        ref={ref}
        object={scene}
        scale={0.1}
        position={[-170, 40, 100]}
        rotation={[0, 800, 0]}
      />
    </Trail>
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
        <pointLight position={[-50, 50, 50]} intensity={2} color="#66ccff"/>

        {/*  Halcon */}
        <Modelchar />

        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.5}
            luminanceSmoothing={1}
          />
        </EffectComposer>

      </Canvas>
    </div>
  </>
  );
}
