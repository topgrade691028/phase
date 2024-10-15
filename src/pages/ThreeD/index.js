import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Box } from "@mui/material";
export default function ThreeDRotation(props) {
  const {
    baseToeLength,
    stemHeight,
    stemTop,
    stemTopOffset,
    stemBottom,
    baseTotalLength,
    baseThickness,
    shearLength,
    shearThickness,
    stemToeOffset,
    shearDistance,
    stemVerticalBars,
    heelTraverseBars,
    heelHorizontalBars,
    toeHorizontalBars,
    sKHorizontalBars,
    stemVerticalSpacing,
  } = props;


  const shape = new THREE.Shape();

  shape.moveTo(-2, -5);
  shape.lineTo(stemBottom * 2, -5);
  shape.lineTo(-1.6 - -0.5 * stemToeOffset + stemTop, stemHeight - 5); //
  shape.lineTo(-1.6 - -0.5 * stemToeOffset, stemHeight - 5);

  shape.closePath();
  const extrudeSettings = {
    steps: stemVerticalBars,
    depth: 3.3,
  };

  const stemGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const baseGeometry = new THREE.BoxGeometry(
    baseTotalLength,
    baseThickness,
    1,
    1,
    heelTraverseBars,
    heelHorizontalBars
  );

  const sKshape = new THREE.Shape();
  sKshape.moveTo(-0.5, -shearThickness + 0.5);
  sKshape.lineTo(shearLength - 0.5, -shearThickness + 0.5);
  sKshape.lineTo(shearLength - 0.5, 0.5);
  sKshape.lineTo(-0.5, 0.5);
  sKshape.closePath();

  const extrudeSettingsSk = {
    steps: sKHorizontalBars,
    depth: 1,
    curveSegments: 5,
  };

  const shearKeyGeometry = new THREE.ExtrudeGeometry(
    sKshape,
    extrudeSettingsSk
  );
  const generateTrapeziumGeometry = (topWidth, bottomWidth, height, widthSegments, heightSegments) => {
    const geometry = new THREE.BufferGeometry();

    // Vertices
    const vertices = [];
    for (let y = 0; y <= heightSegments; y++) {
      const yPos = (y / heightSegments) * height;
      const width = topWidth + ((bottomWidth - topWidth) * yPos) / height;
      
      for (let x = 0; x <= widthSegments; x++) {
        const xPos = (x / widthSegments) * width * 0.5;
        vertices.push(xPos, yPos, 0);
      }
    }
    
    // Indices
    const indices = [];
    for (let y = 0; y < heightSegments; y++) {
      for (let x = 0; x < widthSegments; x++) {
        const a = x + y * (widthSegments + 1);
        const b = x + (y + 1) * (widthSegments + 1);
        const c = (x + 1) + (y + 1) * (widthSegments + 1);
        const d = (x + 1) + y * (widthSegments + 1);
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    return geometry;
  };

  // var geometry = new THREE.CylinderGeometry(2, 4, 4, 4, 10);
  return (
    <group
      rotation={[-0.1, 0.5, 0]}
      scale={[0.6, 0.6, 0.6]}
      position={[2.8, 1, 0]}
    >
      <mesh
        position={[
          1.233 * baseToeLength - 7.4,
          (baseThickness - 1) * 0.5,
          -0.5,
        ]}
        // geometry={generateTrapeziumGeometry(8, 4, 10, 20, 10)}
        geometry={stemGeometry}
        scale={[0.3, 0.3, 0.3]}
      >
        <meshBasicMaterial color="#D9D9D9" wireframe />
      </mesh>

      <mesh position={[baseTotalLength / 2 - 8, -2, 0]} geometry={baseGeometry}>
        <meshBasicMaterial color="#D9D9D9" wireframe />
      </mesh>

      <mesh
        position={[
          1.233 * shearDistance - 7.5,
          -0.5 * baseThickness - 2.5,
          -0.5,
        ]}
        geometry={shearKeyGeometry}
      >
        <meshBasicMaterial color="#D9D9D9" wireframe />
      </mesh>
    </group>
  );
}


// I need to create a 3D model which is trapezium of top width 4 and bottom width 8, with each faces has width and height segments. implement it in threejs and react three


{
  /*
  
     useEffect(() => {
     console.log("stemBottom : ", stemBottom);
   }, [stemBottom]);

   useFrame((_, delta) => {
     ref.current.rotation.y += 0.5 * delta;
   });

  <group>
        <mesh position={[0, -2, 0]}>
          <boxGeometry
            args={[baseTotalLength / 2, baseThickness, 1, 1, 4, 4]}
          />
          <meshBasicMaterial color="#D9D9D9" wireframe />
        </mesh>
        <mesh position={[baseTotalLength / 2, -2, 0]}>
          <boxGeometry
            args={[baseTotalLength / 2, baseThickness, 1, 1, 8, 8]}
          />
          <meshBasicMaterial color="#D9D9D9" wireframe />
        </mesh>
      </group> */
}
