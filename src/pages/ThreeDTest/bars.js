import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VaryingRectangle = () => {
  const geometry = new THREE.BoxGeometry(3, 3, 3);

  const light = new THREE.PointLight(0xff0000, 1, 100);
  light.position.set(50, 50, 50);

  useFrame(() => {});

  return (
    <mesh geometry={geometry} scale={[0.5, 0.5, 0.5]} >
      <meshBasicMaterial
        color="#A3A3A3"
        // wireframe
        transparent={true} // Enable transparency
        opacity={0.5}
      />
    </mesh>
  );
};

export default VaryingRectangle;
