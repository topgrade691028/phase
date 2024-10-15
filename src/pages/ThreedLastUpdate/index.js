import { Slider, Stack } from "@mui/material";
import { Line } from "@react-three/drei";
import React, { useEffect, useMemo, useState } from "react";
import Lights from "../ThreeDTest/lights";
import * as THREE from "three";
const baseRectangleVertices = [
  //back side
  [
    [0, 0, 0],
    [0, 2, 0],
  ],
  [
    [0, 2, 0],
    [4, 2, 0],
  ],
  [
    [4, 2, 0],
    [4, 0, 0],
  ],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  //left side
  [
    [0, 0, 0],
    [0, 0, 2],
  ],
  [
    [0, 0, 2],
    [0, 2, 2],
  ],
  [
    [0, 2, 2],
    [0, 2, 0],
  ],
  //front side
  [
    [0, 0, 2],
    [4, 0, 2],
  ],
  [
    [0, 2, 2],
    [4, 2, 2],
  ],
  [
    [4, 0, 2],
    [4, 2, 2],
  ],
  //right side
  [
    [4, 2, 0],
    [4, 2, 2],
  ],
  [
    [4, 0, 0],
    [4, 0, 2],
  ],
];
const getLineDiameter = (lineType) => {
  var diameter = 0.5;
  switch (lineType) {
    case 3:
      diameter = 0.375;
      break;

    case 4:
      diameter = 0.5;
      break;
    case 5:
      diameter = 0.625;
      break;
    case 6:
      diameter = 0.75;
      break;
    case 7:
      diameter = 0.875;
      break;
    case 8:
      diameter = 1.0;
      break;
    case 9:
      diameter = 1.128;
      break;
    case 10:
      diameter = 1.27;
      break;
    case 11:
      diameter = 1.41;
      break;
      break;
    case 14:
      diameter = 1.693;
      break;
    case 18:
      diameter = 2.257;
      break;
    default:
      diameter = 1.0;
      break;
  }
  return diameter;
};
function Index(props) {
  const {
    baseToeLength,
    stemHeight,
    stemTop,
    stemTopOffset,
    stemBottom,
    stemHorizontalSpacing,
    baseTotalLength,
    baseThickness,
    shearLength,
    shearThickness,
    stemToeOffset,
    shearDistance,
    toeHorizontalSpacing,
    stemVerticalBars,
    heelTraverseBars,
    heelTraverseSpacing,
    heelHorizontalBars,
    heelHorizontalSpacing,
    toeHorizontalBars,
    sKHorizontalBars,
    stemVerticalSpacing,
    stemHorizontalBars,
  } = props;

  const TO_INCH_FACTOR = 39.3701;
  var clearCover = 3 / TO_INCH_FACTOR;
  var width = 10;

  var stemFromBottom = baseThickness;
  var stemFromLeft = baseToeLength;

  const [hBarXRightSideAxis, setHBarRightSideXaxis] = useState([]);
  const [hBarXLeftSideAxis, setHBarLeftSideXaxis] = useState([]);

  var barRightYxias = 0;
  var barLeftYxias = 0;
  var stemHorizontalSpaceToInch = stemHorizontalSpacing / TO_INCH_FACTOR;
  var stemVerticalSpacingToInch = stemVerticalSpacing / TO_INCH_FACTOR;
  var stemVerticalMax = width / stemVerticalSpacingToInch;

  var heelTraverseSpacingToInch = heelTraverseSpacing / TO_INCH_FACTOR;
  var heelTraverseBarSpacingMax = width / heelTraverseSpacingToInch;

  var heelHorizontalSpacingToInch = heelHorizontalSpacing / TO_INCH_FACTOR;
  var heelHorizontalBarSpacingMax =
    (baseTotalLength - baseToeLength) / heelHorizontalSpacingToInch;

  var toeHorizontalBarSpacingToInch = toeHorizontalSpacing / TO_INCH_FACTOR;
  var toeHorizontalBarSpacingMax =
    baseToeLength / toeHorizontalBarSpacingToInch;
  var stemHorizontalBarsCounter = Math.floor(
    stemHeight / stemHorizontalSpaceToInch
  );
  const rectangleVertices = [
    [0, 0, 0], //bottom left
    [stemToeOffset, stemHeight, 0], //top left
    [stemToeOffset + stemTop, stemHeight, 0], //top right
    [stemBottom, 0, 0], // bottom right
  ];

  const traverseBarVertices = [
    [0, 0, 0],
    [0, baseThickness, 0],
    [baseTotalLength, baseThickness, 0],
    [baseTotalLength, 0, 0],
    [0, 0, 0],
  ];
  useEffect(() => {
    stemHorizontalBarsCounter = Math.floor(
      stemHeight / stemHorizontalSpaceToInch
    );

    stemHorizontalSpaceToInch = stemHorizontalSpacing / TO_INCH_FACTOR;
    var heatMapWidth = stemBottom - stemTop;
    var horizontalBarXAxisSpacing = heatMapWidth / stemHorizontalBarsCounter;
    var horizontalBarOffsetoeffectSpacing =
      stemToeOffset / stemHorizontalBarsCounter;
    var hBarRightSideXAxis = [];
    var hBarLeftSideXAxis = [];
    for (var i = 0; i < stemHorizontalBarsCounter; i++) {
      var offsetEffect =
        horizontalBarOffsetoeffectSpacing * (stemHorizontalBarsCounter - i);

      var topWidthEffect = stemTop + horizontalBarXAxisSpacing * i;

      var xAxis = topWidthEffect + offsetEffect;

      hBarRightSideXAxis.push([
        [xAxis, 0, 0],
        [xAxis, 0, width],
      ]);

      hBarLeftSideXAxis.push([
        [offsetEffect, 0, 0],
        [offsetEffect, 0, width],
      ]);
    }
    hBarRightSideXAxis.reverse();
    hBarLeftSideXAxis.reverse();
    setHBarRightSideXaxis(hBarRightSideXAxis);
    setHBarLeftSideXaxis(hBarLeftSideXAxis);
  }, [
    stemTop,
    stemHeight,
    stemBottom,
    stemHorizontalBars,
    stemToeOffset,
    stemHorizontalSpacing,
  ]);

  const stemShape = new THREE.Shape();
  stemShape.moveTo(0 - clearCover, 0);
  stemShape.lineTo(stemToeOffset - clearCover, stemHeight + clearCover);
  stemShape.lineTo(
    stemToeOffset + stemTop + clearCover,
    stemHeight + clearCover
  );
  stemShape.lineTo(stemBottom + clearCover, 0);
  stemShape.closePath();

  const extrudeSettingsStem = {
    steps: 1,
    depth: width,
    curveSegments: 0,
  };

  const stemGeometry = new THREE.ExtrudeGeometry(
    stemShape,
    extrudeSettingsStem
  );

  const getNumberArray = (max) => {
    var array = [];
    for (var i = 0; i < max; i++) {
      array.push(i);
    }
    return array;
  };

  const baseGeometry = new THREE.BoxGeometry(
    baseTotalLength,
    baseThickness,
    10
  );

  const shearKeyGeometry = new THREE.BoxGeometry(
    shearLength,
    shearThickness,
    width
  );
  return (
    <group scale={[0.195, 0.195, 0.195]}>
      <group>
        {getNumberArray(stemVerticalMax).map((key) => {
          const updatedZAxis = key * (stemVerticalSpacing / TO_INCH_FACTOR);
          return (
            <Line
              key={key}
              points={rectangleVertices}
              color="#8413FF"
              lineWidth={getLineDiameter(stemVerticalBars)}
              position={[
                stemFromLeft,
                stemFromBottom + shearThickness,
                updatedZAxis,
              ]}
            />
          );
        })}

        {hBarXRightSideAxis.map((data, key) => {
          barRightYxias = barRightYxias + stemHorizontalSpaceToInch;
          return (
            <Line
              points={data}
              lineWidth={getLineDiameter(stemHorizontalBars)}
              color="#8413FF"
              position={[
                stemFromLeft,
                stemFromBottom + barRightYxias + shearThickness,
                0,
              ]}
            />
          );
        })}

        {hBarXLeftSideAxis.map((data, key) => {
          barLeftYxias = barLeftYxias + stemHorizontalSpaceToInch;
          return (
            <Line
              points={data}
              lineWidth={getLineDiameter(stemHorizontalBars)}
              color="#8413FF"
              position={[
                stemFromLeft,
                stemFromBottom + barLeftYxias + shearThickness,
                0,
              ]}
            />
          );
        })}

        <mesh
          position={[stemFromLeft, stemFromBottom + shearThickness, 0]}
          geometry={stemGeometry}
        >
          <meshBasicMaterial color="#D9D9D9" transparent opacity={0.8} />
        </mesh>
      </group>

      <group>
        <mesh
          position={[
            baseTotalLength / 2,
            shearThickness + baseThickness / 2,
            width / 2,
          ]}
          geometry={baseGeometry}
        >
          <meshBasicMaterial color="#D9D9D9" transparent opacity={0.8} />
        </mesh>
        {/* toe horizontal bar component */}
        {getNumberArray(toeHorizontalBarSpacingMax).map((key) => {
          const updatedXAxis = key * (toeHorizontalSpacing / TO_INCH_FACTOR);
          return (
            <group>
              <Line
                key={key}
                points={[
                  [0, shearThickness, 0],
                  [0, shearThickness, width],
                ]}
                color="#0DFE0D"
                lineWidth={getLineDiameter(toeHorizontalBars)}
                position={[updatedXAxis, 0, 0]}
              />

              <Line
                key={0 - key}
                points={[
                  [0, shearThickness, 0],
                  [0, shearThickness, width],
                ]}
                color="#0DFE0D"
                lineWidth={getLineDiameter(toeHorizontalBars)}
                position={[updatedXAxis, baseThickness, 0]}
              />
            </group>
          );
        })}

        {/* heel horizontal bar component */}
        {getNumberArray(heelHorizontalBarSpacingMax).map((key) => {
          const updatedXAxis = key * (heelHorizontalSpacing / TO_INCH_FACTOR);
          return (
            <group>
              <Line
                key={key}
                points={[
                  [0, shearThickness, 0],
                  [0, shearThickness, width],
                ]}
                color="#0DFE0D"
                lineWidth={getLineDiameter(heelHorizontalBars)}
                position={[updatedXAxis + baseToeLength, 0, 0]}
              />

              <Line
                key={0 - key}
                points={[
                  [0, shearThickness, 0],
                  [0, shearThickness, width],
                ]}
                color="#0DFE0D"
                lineWidth={getLineDiameter(heelHorizontalBars)}
                position={[updatedXAxis + baseToeLength, baseThickness, 0]}
              />
            </group>
          );
        })}
        {/* base traverse bar commonent*/}
        {getNumberArray(heelTraverseBarSpacingMax).map((key) => {
          const updatedZAxis = key * (heelTraverseSpacing / TO_INCH_FACTOR);
          return (
            <Line
              points={traverseBarVertices}
              color="#E55BA0"
              lineWidth={getLineDiameter(heelTraverseBars)}
              position={[0, shearThickness, updatedZAxis]}
            />
          );
        })}
      </group>

      <group>
        <mesh
          position={[
            shearDistance + shearLength / 2,
            shearThickness / 2,
            width / 2,
          ]}
          geometry={shearKeyGeometry}
        >
          <meshBasicMaterial color="#D9D9D9" transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  );
}

export default Index;
