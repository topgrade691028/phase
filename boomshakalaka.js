import { Box, Slider, Stack } from "@mui/material";
import { Line, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo, useState } from "react";
import Lights from "../ThreeDTest/lights";
import * as THREE from "three";
function Index() {
  var width = 10;
  const [stemHorizontalBarSpacing, setstemHorizontalBarSpacing] = useState(0.2);
  const [stemHeight, setStemHeight] = useState(2);
  const [stemHorizontalBars, setStemHorizontalBars] = useState(4);
  const [hBarXRightSideAxis, setHBarRightSideXaxis] = useState([]);
  const [hBarXLeftSideAxis, setHBarLeftSideXaxis] = useState([]);
  const [topWidth, setTopWidth] = useState(2);
  const [bottomWidth, setBottomWidth] = useState(2);
  const [stemOffset, setStemOffset] = useState(0);
  const [stemVerticalBars, setStemVerticalBars] = useState(5);
  const [stemVerticalBarsSpacing, setStemVerticalBarsSpacing] = useState(2);

  const stemHorizSpacing = stemHeight / stemHorizontalBars;
  var barRightYxias = 0;
  var barLeftYxias = 0;
  const rectangleVertices = [
    [0, 0, 0], //bottom left
    [stemOffset, stemHeight, 0], //top left
    [stemOffset + topWidth, stemHeight, 0], //top right
    [bottomWidth, 0, 0], // bottom right
  ];
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
  useEffect(() => {
    var heatMapWidth = bottomWidth - topWidth;
    var horizontalBarXAxisSpacing = heatMapWidth / stemHorizontalBars;
    var horizontalBarOffsetoffectSpacing = stemOffset / stemHorizontalBars;
    var hBarRightSideXAxis = [];
    var hBarLeftSideXAxis = [];
    for (var i = 0; i < stemHorizontalBars; i++) {
      var offsetEffect =
        horizontalBarOffsetoffectSpacing * (stemHorizontalBars - i);

      var topWidthEffect = topWidth + horizontalBarXAxisSpacing * i;

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
  }, [topWidth, bottomWidth, stemHorizontalBars, stemOffset]);

  const handleStemBars = (event, newValue) => {
    setStemHorizontalBars(newValue);
  };
  const boxGeometry = new THREE.BoxGeometry(4, 2, 2);

  const sKshape = new THREE.Shape();
  sKshape.moveTo(0, 0);
  sKshape.lineTo(1, 2);
  sKshape.lineTo(2, 2);
  sKshape.lineTo(2, 0);
  sKshape.closePath();

  const extrudeSettingsSk = {
    steps: 1,
    depth: width,
    curveSegments: 0,
  };

  const shearKeyGeometry = new THREE.ExtrudeGeometry(
    sKshape,
    extrudeSettingsSk
  );
  const getNumberArray = (max) => {
    var array = [];
    for (var i = 0; i < max; i++) {
      array.push(i);
    }
    return array;
  };

  return (
    <Stack
      sx={{
        display: "flex",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: window.innerHeight,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Lights />
        <axesHelper args={[5]} />
        {/* <gridHelper /> */}

        <OrbitControls target={[2, 2, 0]} />

        <group scale={[0.3, 0.3, 0.3]}>
          {getNumberArray(stemVerticalBars).map((key) => {
            const updatedZAxis = key * stemVerticalBarsSpacing;
          
            return (
              <Line
                key={key}
                points={rectangleVertices}
                color="blue"
                position={[0, 0, updatedZAxis]}
              />
            );
          })}

          {hBarXRightSideAxis.map((data, key) => {
            barRightYxias = barRightYxias + stemHorizSpacing;
            return (
              <Line
                points={data}
                color="blue"
                position={[0, barRightYxias, 0]}
              />
            );
          })}

          {hBarXLeftSideAxis.map((data, key) => {
            barLeftYxias = barLeftYxias + stemHorizSpacing;
            return (
              <Line
                points={data}
                color="blue"
                position={[0, barLeftYxias, 0]}
              />
            );
          })}

          <mesh position={[0, 0, 0]} geometry={shearKeyGeometry}>
            <meshBasicMaterial color="#D9D9D9" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* <mesh geometry={boxGeometry} position={[2, 1, 1]}>
          <meshBasicMaterial color="#D9D9D9" transparent opacity={0.5} />
        </mesh>

        {baseRectangleVertices.map((data, key) => {
          barRightYxias = barRightYxias + stemHorizSpacing;
          return <Line points={data} color="blue" position={[0, 0, 0]} />;
        })} */}
      </Canvas>
      <span>stem top width{topWidth}</span>

      <Slider
        value={topWidth}
        min={0}
        step={0.2}
        max={2}
        onChange={(event, newValue) => {
          setTopWidth(newValue);
        }}
      />
      <span>stem bottom width{bottomWidth}</span>

      <Slider
        value={bottomWidth}
        min={0}
        step={0.2}
        max={2}
        onChange={(event, newValue) => {
          setBottomWidth(newValue);
        }}
      />
      <span>stem horizontal bars{stemHorizontalBars}</span>
      <Slider
        value={stemHorizontalBars}
        min={0}
        step={1}
        max={18}
        onChange={(event, newValue) => handleStemBars(event, newValue)}
      />
      <span>stem height{stemHeight}</span>
      <Slider
        value={stemHeight}
        min={0}
        step={0.2}
        max={2}
        onChange={(event, newValue) => {
          setStemHeight(newValue);
        }}
      />
      <span>stem offset{stemHeight}</span>
      <Slider
        value={stemOffset}
        min={0}
        step={0.2}
        max={1}
        onChange={(event, newValue) => {
          setStemOffset(newValue);
          // setTopWidth((prevData) => prevData + newValue);
        }}
      />
      <span>vertical bars #{stemVerticalBars}</span>
      <Slider
        value={stemVerticalBars}
        min={0}
        step={1}
        max={24}
        onChange={(event, newValue) => {
          var spacing = width / stemVerticalBars;
          setStemVerticalBarsSpacing(spacing);
          setStemVerticalBars(newValue);
        }}
      />
    </Stack>
  );
}

export default Index;
