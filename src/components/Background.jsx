import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Background({ moonRef, earthRef, sunRef, blackHoleRef }) {
  const moonGLTF = useGLTF('/src/assets/glb/the_moon.glb');
  const earthGLTF = useGLTF('/src/assets/glb/earth.glb');
  const sunGLTF = useGLTF('/src/assets/glb/mart.glb');
  const blackHoleGLTF = useGLTF('/src/assets/glb/blackhole.glb');

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
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.0001;
      sunRef.current.rotation.x = THREE.MathUtils.degToRad(1);
      sunRef.current.rotation.z += 0.0001;
    }
    if (blackHoleRef.current) {
      blackHoleRef.current.rotation.y += 0.0005;
      blackHoleRef.current.rotation.x = THREE.MathUtils.degToRad(-9);
      blackHoleRef.current.rotation.z += 0.0000;
    }
  });

  return (
    <>
      <primitive object={earthGLTF.scene} ref={earthRef} scale={1.1} position={[15, 0, 0]} />
      <primitive object={moonGLTF.scene} ref={moonRef} scale={0.8} position={[-2.2, 0, 18]} />
      <primitive object={sunGLTF.scene} ref={sunRef} scale={0.030} position={[-8, 0, 20]} />
      <primitive object={blackHoleGLTF.scene} ref={blackHoleRef} scale={5} position={[0, -6, 30]} />
    </>
  );
}

useGLTF.preload('/src/assets/glb/the_moon.glb');
useGLTF.preload('/src/assets/glb/earth.glb');
useGLTF.preload('/src/assets/glb/mart.glb');
useGLTF.preload('/src/assets/glb/blackhole.glb');
