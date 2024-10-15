import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Lights from "./lights";
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import * as THREE from "three";
import Polyhedron from "./Polyhedron";

function subdivideRectangle(shape, widthSegments, heightSegments) {
  const points = shape.getPoints();
  const newPoints = [];
  const horizontalSteps = widthSegments + 1;
  const verticalSteps = heightSegments + 1;

  for (let i = 0; i < verticalSteps; i++) {
    const v = i / heightSegments;
    for (let j = 0; j < horizontalSteps; j++) {
      const u = j / widthSegments;
      const index = j + i * horizontalSteps;
      const point = new THREE.Vector2(
        points[0].x * (1 - u) + points[1].x * u,
        points[0].y * (1 - v) + points[3].y * v
      );
      newPoints[index] = point;
    }
  }

  const newShape = new THREE.Shape(newPoints);
  return newShape;
}

function ThreeDTest() {
  const boxGeometry = new THREE.BoxGeometry(3, 3, 3, 1, 4, 7);
  const cubeGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
  const circleGeometry = new THREE.CircleGeometry(5, 32);
  const coneGeometry = new THREE.ConeGeometry(5, 10, 32, true);
  const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 6, 32);
  const polyhedronGeometry = new THREE.DodecahedronGeometry(3, 2);

  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(2, 9);
  shape.lineTo(10, 9);
  shape.lineTo(10, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 4,
    depth: 16,
    bevelEnabled: false,
    // bevelThickness: 1,
    // bevelSize: 1,
    // bevelOffset: 0,
    // bevelSegments: 1,
  };

  const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight,
      }}
    >
      <Canvas camera={{ position: [4, 4, 1.5] }}>
        <Lights />
        <mesh
          position={[0, 1.5, 0]}
          geometry={extrudeGeometry}
          scale={[0.5, 0.5, 0.5]}
          material={
            new THREE.MeshNormalMaterial({
              /* flatShading: true, */ wireframe: true,
            })
          }
          opacity={0.5}
        />
        {/* <Polyhedron
          name="meshBasicMaterial"
          position={[-3, 1, 0]}
          material={
            new THREE.MeshBasicMaterial({ color: "yellow", flatShading: true })
          }
        />
        <Polyhedron
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          material={new THREE.MeshNormalMaterial({ flatShading: true })}
        />
        <Polyhedron
          name="meshPhongMaterial"
          position={[1, 1, 0]}
          material={
            new THREE.MeshPhongMaterial({ color: "lime", flatShading: true })
          }
        />
        <Polyhedron
          name="meshStandardMaterial"
          position={[3, 1, 0]}
          material={
            new THREE.MeshStandardMaterial({
              color: 0xff0033,
              flatShading: true,
            })
          }
        /> */}
        <OrbitControls target={[2, 2, 0]} />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
      </Canvas>
    </Box>
  );
}

export default ThreeDTest;
