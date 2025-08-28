import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';

export default function CameraController({ moonRef, earthRef, sunRef, blackHoleRef }) {
  const { camera } = useThree();
  const location = useLocation();
  const targetPosition = useRef(new THREE.Vector3());
  const lookAtPosition = useRef(new THREE.Vector3());
  const animTween = useRef(null);

  // Obtiene la posición actual del planeta según la ruta
  useEffect(() => {
    // Mapea rutas a refs y fallback a posición fija
    const routeRef = {
      '/': earthRef,
      '/about': moonRef,
      '/technologies': sunRef,
      '/proyects': blackHoleRef,
      '/gallery': blackHoleRef,
    };

    const targetRef = routeRef[location.pathname.toLowerCase()];

    if (targetRef?.current) {
      // Obtén posición real del planeta
      targetRef.current.getWorldPosition(targetPosition.current);
    } else {
      // Posiciones fijas como fallback
      const fixedPositions = {
        '/': new THREE.Vector3(10, 0, 1),
        '/about': new THREE.Vector3(0, 0, 10),
        '/technologies': new THREE.Vector3(0, 0, 20),
        '/proyects': new THREE.Vector3(0, 0, 30),
        '/gallery': new THREE.Vector3(0, 0, 30),
      };
      targetPosition.current.copy(fixedPositions[location.pathname.toLowerCase()] || new THREE.Vector3(0,0,0));
    }

    // Calcula nueva posición de cámara (offset para ver el planeta)
    const offset = new THREE.Vector3(0, 0, 11);
    const newCameraPos = targetPosition.current.clone().add(offset);

    // Cancela animación previa si existe
    if (animTween.current) animTween.current.kill();

    // Anima la posición de la cámara
    animTween.current = gsap.to(camera.position, {
      duration: 2,
      x: newCameraPos.x,
      y: newCameraPos.y,
      z: newCameraPos.z,
      ease: 'power1.inOut',
    });

    // Guarda a dónde debe mirar la cámara
    lookAtPosition.current.copy(targetPosition.current);

  }, [location.pathname, moonRef, earthRef, sunRef, blackHoleRef, camera.position]);

  // Actualiza la orientación de la cámara en cada frame para mirar el planeta
  useFrame(() => {
    camera.lookAt(lookAtPosition.current);
  });

  return null;
}
