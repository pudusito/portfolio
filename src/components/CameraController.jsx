import { useEffect, useRef } from 'react';
import { useThree} from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
//sirve para conectar los modelos 3d al bg con scroll
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
      '/home' : earthRef,
      '/whoim': earthRef,
      '/about': moonRef,
      '/work': sunRef,
      '/personal_proyects': blackHoleRef,
      '/gallery': blackHoleRef,
    };

    const targetRef = routeRef[location.pathname.toLowerCase()];

    if (targetRef?.current) {
      // Obtén posición real del planeta
      targetRef.current.getWorldPosition(targetPosition.current);
    } else {
      // Posiciones fijas como fallback
      const fixedPositions = {
        '/home': new THREE.Vector3(0, 0, 0),
        '/whoim': new THREE.Vector3(0, 0, 8),
        '/about': new THREE.Vector3(0, 0, 12),
        '/work': new THREE.Vector3(0, 0, 22),
        '/personal_proyects': new THREE.Vector3(0, 0, 30),
        '/gallery': new THREE.Vector3(0, 0, 40),
      };
      targetPosition.current.copy(fixedPositions[location.pathname.toLowerCase()] || new THREE.Vector3(0,0,0));
    }

    // Calcula nueva posición de cámara (offset para ver el planeta)
    const offset = new THREE.Vector3(0, 0, 10);
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

  return null;
}
