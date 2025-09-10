

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react'

import CameraController from './CameraController';
import CameraDebugger from './CameraDebugger'


function Background({ moonRef, earthRef}) {
  const moonGLTF = useGLTF('/glb/the_moon.glb');
  const earthGLTF = useGLTF('/glb/earth.glb');

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.0003;
      moonRef.current.rotation.x = THREE.MathUtils.degToRad(10);
      moonRef.current.rotation.z += 0.0003;
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0002;
      earthRef.current.rotation.x = THREE.MathUtils.degToRad(28);
      earthRef.current.rotation.z += 0.0002;
    }

  });

  return (
    <>
      <primitive object={earthGLTF.scene} ref={earthRef} scale={1.1} position={[15, 0, 0]} />
      <primitive object={moonGLTF.scene} ref={moonRef} scale={0.8} position={[-2.2, 0, 18]} />
    </>
  );
}

useGLTF.preload('/public/glb/the_moon.glb');
useGLTF.preload('/public/glb/earth.glb');



export default function Scene() {
 
  const moonRef = useRef();
  const earthRef = useRef();

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Stars />
      <Background
        moonRef={moonRef}
        earthRef={earthRef}>
      </Background>
      <CameraController />
      <CameraDebugger/>
    </Canvas>
  );
}
