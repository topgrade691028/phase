import {
  Box,
  Button,
  Grid,
  Slider,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  OutlinedInput,
  styled,
  TextField,
  InputAdornment,
  FormControl,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../../../../components/CustomButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slogan from "../../../../../components/Slogan";
import { dispatch } from "../../../../../store";
import {
  getStabilityTabData,
  getStrengthTabData,
} from "../../../../../store/actions/uiActions";
import "./inputStyle.css";
import { useSelector } from "react-redux";
import ThreeDWrapper from "../../../../ThreeD/parent";
import CustomTypo from "../../../../../components/CustomTypo";
import Reinforcement from "./Reinforcement";
import CustomSliderTitle from "../../../../../components/CustomSliderTitle";
import StyledInputBase from "../../../../../components/StyledInputBase";
import CustomIndornment from "../../../../../components/CustomIndornment";
import { sliderStyle } from "./sliderStyle";
const styleValueBox = {
  borderColor: "#D9D9D9",
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  borderRadius: "12px",
  color: "#000",
  width: "100px",
  "&.Mui-disabled": {
    borderColor: "#D9D9D9",
    textTransform: "lowercase",
    whiteSpace: "nowrap",
    borderRadius: "12px",
    color: "#000",
    width: "100px",
  },
};

function Index() {
  const { model } = useSelector((state) => state.uiReducer);
  const stemApiData = model?.dim?.stem;
  const baseApiData = model?.dim?.base;
  const soilApiData = model?.soil_data;
  const reinforcementData = model?.reinforcement;
  const materialApiData = model?.materials;
  const shearKeyApiData = model?.dim?.shear_key;

  const stemHeightInitialValue = stemApiData?.height;
  const stemTopInitialValue = stemApiData?.top;
  const stemBottomInitialValue = stemApiData?.bottom;
  const stemToeOffsetInitialValue = 5;

  const baseTotalLengthInitialValue = baseApiData?.total_length;
  const baseToeLengthInitialValue = baseApiData?.toe_length;
  const baseThicknessInitialValue = baseApiData?.thickness;

  const shareLengthInitialValue = shearKeyApiData?.length;
  const shareDistanceInitialValue = shearKeyApiData?.toe_distance;
  const shareThicknessInitialValue = shearKeyApiData?.height;

  const rightSoilInitValue = soilApiData?.right_el;
  const waterInitValue = soilApiData?.water_el;
  const fcInitValue = model?.materials?.fc_concrete;
  const activeInitValue = soilApiData?.active;
  const steelFyInitValue = materialApiData?.fy_steel;
  const soilUnitWeightInitValue = materialApiData?.soil_unit_weight;
  const pgaInitValue = soilApiData?.pga;
  const leftSoilInitValue = soilApiData?.left_el;
  const passiveInitValue = soilApiData?.passive;
  const seisPressInitValue = soilApiData?.seismic;

  const [isRotated, setIsRotated] = useState(false);
  const [isDimmensionCollapsed, setIsDimmensionCollapsed] = useState(false);
  const [stemHeight, setStemHeight] = useState(stemHeightInitialValue);
  const [stemTop, setStemTop] = useState(stemTopInitialValue);
  const [stemTopOffset, setStemTopOffset] = useState(stemTopInitialValue);
  const [stemBottom, setStemBottom] = useState(stemBottomInitialValue);
  const [stemToeOffset, setStemToeOffset] = useState(stemToeOffsetInitialValue);

  const [baseTotalLength, setBaseTotalLength] = useState(
    baseTotalLengthInitialValue
  );
  const [baseToeLength, setToeBaseLength] = useState(baseToeLengthInitialValue);
  const [baseThickness, setBaseThickness] = useState(baseThicknessInitialValue);

  const [shareLength, setShareLength] = useState(shareLengthInitialValue);
  const [shareDistance, setShareDistance] = useState(shareDistanceInitialValue);
  const [shareThickness, setShareThickness] = useState(
    shareThicknessInitialValue
  );

  const [activePressure, setActivePressure] = useState(activeInitValue);
  const [steelFy, setSteelFy] = useState(steelFyInitValue);
  const [passivePressure, setPassivePressure] = useState(passiveInitValue);
  const [seismicPressure, setSeismicPressure] = useState(seisPressInitValue);
  const [leftEl, setleftEl] = useState(leftSoilInitValue);
  const [rightEl, setRightEl] = useState(rightSoilInitValue);
  const [waterElevation, setWaterElevation] = useState(waterInitValue);
  const [soilUnit, setSoilUnit] = useState(soilUnitWeightInitValue);
  const [pga, setPga] = useState(pgaInitValue);
  const [steelFc, setSteelFc] = useState(fcInitValue);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const downSMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const inputRef = useRef(null);

  const stemVerticalBarsInitValue = reinforcementData?.stem?.vertical_bars;
  const stemVerticalSpacingInitValue =
    reinforcementData?.stem?.vertical_spacing;
  const stemHorizontalBarsInitValue = reinforcementData?.stem?.horiz_bars;
  const stemHorizontalSpacingInitValue = reinforcementData?.stem?.horiz_spacing;

  const heelTraverseBarsInitValue = reinforcementData?.heel?.transverse_bars;
  const heelTraverseSpacingInitValue =
    reinforcementData?.heel?.transverse_spacing;
  const heelHorizontalBarsInitValue = reinforcementData?.heel?.horiz_bars;
  const heelHorizontalSpacingInitValue = reinforcementData?.heel?.horiz_spacing;

  const toeHorizontalBarsInitValue = reinforcementData?.toe?.horiz_bars;
  const toeHorizontalSpacingInitValue = reinforcementData?.toe?.horiz_spacing;
  const skVertikalBarsInitValue = reinforcementData?.shear_key?.vertical_bars;
  const skVerticalSpacingInitValue =
    reinforcementData?.shear_key?.vertical_spacing;
  const sKHorizontalBarsInitValue = reinforcementData?.shear_key?.horiz_bars;
  const skHorizontalSpacingInitValue =
    reinforcementData?.shear_key?.horiz_spacing;

  const [stemVerticalBars, setStemVerticalBars] = useState(
    stemVerticalBarsInitValue
  );
  const [stemVerticalSpacing, setStemVerticalSpacing] = useState(
    stemVerticalSpacingInitValue
  );
  const [stemHorizontalBars, setStemHorizontalBars] = useState(
    stemHorizontalBarsInitValue
  );
  const [stemHorizontalSpacing, setStemHorizontalSpacing] = useState(
    stemHorizontalSpacingInitValue
  );
  const [heelTraverseBars, setHeelTraverseBars] = useState(
    heelTraverseBarsInitValue
  );
  const [heelTraverseSpacing, setHeelTraverseSpacing] = useState(
    heelTraverseSpacingInitValue
  );
  const [heelHorizontalBars, setHeelHorizontalBars] = useState(
    heelHorizontalBarsInitValue
  );
  const [heelHorizontalSpacing, setHeelHorizontalSpacing] = useState(
    heelHorizontalSpacingInitValue
  );
  const [toeHorizontalBars, setToeHorizontalBars] = useState(
    toeHorizontalBarsInitValue
  );
  const [toeHorizontalSpacing, setToeHorizontalSpacing] = useState(
    toeHorizontalSpacingInitValue
  );
  const [skVertikalBars, setskVertikalBars] = useState(skVertikalBarsInitValue);
  const [skVerticalSpacing, setskVerticalSpacing] = useState(
    skVerticalSpacingInitValue
  );
  const [sKHorizontalBars, setsKHorizontalBars] = useState(
    sKHorizontalBarsInitValue
  );
  const [skHorizontalSpacing, setSkHorizontalSpacing] = useState(
    skHorizontalSpacingInitValue
  );

  const handleInputChange = (newValue, initValue, setter) => {
    if (isNaN(newValue)) {
      setter(newValue);
    }
    setter(newValue);
  };
  useEffect(() => {
    var newModel = {
      dim: {
        base: {
          thickness: baseThickness,
          toe_length: baseToeLength,
          total_length: baseTotalLength,
        },
        shear_key: {
          height: shareThickness,
          length: shareLength,
          toe_distance: shareDistance,
        },
        stem: {
          bottom: stemBottom,
          height: stemHeight,
          top: stemTop,
        },
      },
      materials: {
        fc_concrete: steelFc,
        fy_steel: steelFy,
        soil_unit_weight: soilUnit,
      },
      soil_data: {
        active: activePressure,
        left_el: leftEl,
        passive: passivePressure,
        pga: pga,
        right_el: rightEl,
        seismic: seismicPressure,
        water_el: waterElevation,
      },
      reinforcement: {
        heel: {
          horiz_bars: heelHorizontalBars,
          horiz_spacing: heelHorizontalSpacing,
          transverse_bars: heelTraverseBars,
          transverse_spacing: heelTraverseSpacing,
        },
        shear_key: {
          horiz_bars: sKHorizontalBars,
          horiz_spacing: skHorizontalSpacing,
          vertical_bars: skVertikalBars,
          vertical_spacing: skVerticalSpacing,
        },
        stem: {
          horiz_bars: stemHorizontalBars,
          horiz_spacing: stemHorizontalSpacing,
          vertical_bars: stemVerticalBars,
          vertical_spacing: stemVerticalSpacing,
        },
        toe: {
          horiz_bars: 8,
          horiz_spacing: 7,
        },
      },
      info: model.info,
      bearing_capacity: model.bearing_capacity,
      units: model.units,
    };
    // dispatch(setModel(newModel));
    dispatch(getStabilityTabData(newModel));
    dispatch(getStrengthTabData(newModel));
  }, [
    stemHeight,
    stemTop,
    stemBottom,
    baseTotalLength,
    baseToeLength,
    baseThickness,
    shareLength,
    shareDistance,
    shareThickness,
    activePressure,
    steelFy,
    passivePressure,
    seismicPressure,
    leftEl,
    rightEl,
    waterElevation,
    soilUnit,
    pga,
    steelFc,
    heelHorizontalBars,
    heelHorizontalSpacing,
    heelTraverseBars,
    heelTraverseSpacing,
    sKHorizontalBars,
    skHorizontalSpacing,
    skVertikalBars,
    skVerticalSpacing,
    stemHorizontalBars,
    stemHorizontalSpacing,
    stemVerticalBars,
    stemVerticalSpacing,
  ]);

  const handleChange = (event, newValue) => {
    setStemTop(newValue);
  };
  const handleShareDistanceChange = (newValue) => {
    setShareDistance(newValue);
  };

  const aiFixHandler = () => {
    setStemHeight(stemHeightInitialValue);
    setStemTop(stemTopInitialValue);
    setStemBottom(stemBottomInitialValue);
    setBaseTotalLength(baseTotalLengthInitialValue);
    setToeBaseLength(baseToeLengthInitialValue);
    setBaseThickness(baseThicknessInitialValue);
    setShareLength(shareLengthInitialValue);
    setShareDistance(shareDistanceInitialValue);
    setShareThickness(shareThicknessInitialValue);
  };

  return (
    <Stack direction={"column"} spacing={12} sx={{ width: "100%" }}>
      <Stack direction={"row"} alignItems="center" spacing={3}>
        <Typography>LIVE MODEL</Typography>
        <hr style={{ width: 150, border: "1px solid #000" }} />
        {/* <TextField variant="standard" width={12}></TextField> */}
      </Stack>
      {isMatch && <Slogan />}
      <center>
        <div
          style={{
            width: downSMatch ? "271px" : "471px",
            height: downSMatch ? "207px" : "407px",
            // resize: "both",
            overflow: "auto",
            // border:"2px solid #CCC"
          }}
        >
          <ThreeDWrapper
            baseToeLength={baseToeLength}
            stemHeight={stemHeight}
            stemHorizontalSpacing={stemHorizontalSpacing}
            stemTop={stemTop}
            stemTopOffset={stemTopOffset}
            stemBottom={stemBottom}
            baseTotalLength={baseTotalLength}
            baseThickness={baseThickness}
            shearLength={shareLength}
            shearThickness={shareThickness}
            shearDistance={shareDistance}
            stemToeOffset={stemToeOffset}
            stemVerticalBars={stemVerticalBars}
            stemVerticalSpacing={stemVerticalSpacing}
            heelHorizontalBars={heelHorizontalBars}
            toeHorizontalBars={toeHorizontalBars}
            toeHorizontalSpacing={toeHorizontalSpacing}
            sKHorizontalBars={sKHorizontalBars}
            heelTraverseBars={heelTraverseBars}
            stemHorizontalBars={stemHorizontalBars}
            heelTraverseSpacing={heelTraverseSpacing}
            heelHorizontalSpacing={heelHorizontalSpacing}
          />
        </div>
      </center>

      {/* <svg
        width={"85%"}
        height={"80%"}
        viewBox="0 0 510 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M${29.2 * baseToeLength} ${300 - stemHeight * 12.5}H${
            stemTop * 70 + 29.2 * baseToeLength
          }L${stemBottom * 50 + 29.2 * baseToeLength} ${300}H${
            29.2 * baseToeLength
          }L1380Z`}
          fill="#D9D9D9"
        />
        <rect
          x="0"
          y="298"
          width={baseTotalLength * 28.25}
          height={baseThickness * 20}
          fill="#D9D9D9"
        />
        <rect
          x={29.33 * shareDistance}
          y={baseTotalLength == 0 ? 299 : 297 + baseThickness * 20}
          width={shareLength * 35}
          height={shareThickness * 40}
          fill="#D9D9D9"
        />
      </svg> */}
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            onClick={() => {
              setIsDimmensionCollapsed((prev) => !prev);
            }}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
              Dimensions
            </Typography>
            <IconButton aria-label="Example">
              <ExpandMoreIcon
                sx={{
                  color: "#47C5FB",
                  transform: isDimmensionCollapsed
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </IconButton>
          </Stack>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            {/* <Box onClick={() => aiFixHandler()}> */}
            <CustomButton
              txtcolor={"#FFF"}
              backgroundcolor={"#47C5FB"}
              fontSize={12}
              radius={"4px"}
              fontWeight={500}
              // disabled
            >
              Fix with AI
            </CustomButton>
            {/* </Box> */}
          </Stack>
        </Stack>

        <Box sx={{ display: isDimmensionCollapsed && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Stem</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Height"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(stemHeight)}
                    min={0}
                    max={2 * stemHeightInitialValue}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => {
                      setStemHeight(newValue);
                    }}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      min={0}
                      value={stemHeight}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          stemHeightInitialValue,
                          setStemHeight
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                      inputProps={{
                        step: "0.1",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
            {/*stem  Top */}
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Top"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={Number(stemTop)}
                    min={0}
                    max={2 * stemTopInitialValue}
                    step={0.1}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setStemTop(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={stemTop}
                      onChange={(event) => {
                        handleInputChange(
                          parseFloat(event.target.value),
                          stemTopInitialValue,
                          setStemTop
                        );
                        setStemTopOffset(parseFloat(event.target.value));
                      }}
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            {/* stem Bottom */}
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Bottom"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(stemBottom)}
                    min={0}
                    max={2 * stemBottomInitialValue}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setStemBottom(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={stemBottom}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          stemBottomInitialValue,
                          setStemBottom
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Toe offset"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(stemToeOffset)}
                    min={0}
                    max={2 * stemToeOffsetInitialValue}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => {
                      setStemToeOffset(newValue);
                    }}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      min={0}
                      value={stemToeOffset}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          stemToeOffsetInitialValue,
                          setStemToeOffset
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                      inputProps={{
                        step: "0.1",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1} sx={{ display: isDimmensionCollapsed && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Base</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} xs={12}>
                <CustomSliderTitle title={"Total Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={Number(baseTotalLength)}
                    min={stemBottom + baseToeLength}
                    max={2 * baseTotalLengthInitialValue}
                    sx={sliderStyle}
                    step={0.1}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setBaseTotalLength(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(baseTotalLength)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          baseTotalLengthInitialValue,
                          setBaseTotalLength
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Toe Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={Number(baseToeLength)}
                    min={0}
                    max={2 * baseToeLengthInitialValue}
                    sx={sliderStyle}
                    step={0.1}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setToeBaseLength(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(baseToeLength)}
                      onChange={(event) => {
                        handleInputChange(
                          parseFloat(event.target.value),
                          baseToeLengthInitialValue,
                          setToeBaseLength
                        );
                      }}
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Thickness"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    value={Number(baseThickness)}
                    min={0}
                    max={baseThicknessInitialValue * 2}
                    step={0.1}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setBaseThickness(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(baseThickness)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          baseThicknessInitialValue,
                          setBaseThickness
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1} sx={{ display: isDimmensionCollapsed && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
            Shear Key
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Length"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(shareLength)}
                    min={0}
                    max={shareLengthInitialValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareLength(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(shareLength)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          shareLengthInitialValue,
                          setShareLength
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Toe Distance"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(shareDistance)}
                    min={0}
                    max={2 * shareDistanceInitialValue}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareDistance(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(shareDistance)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          shareDistanceInitialValue,
                          setShareDistance
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Thickness"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(shareThickness)}
                    min={0}
                    max={2 * shareThicknessInitialValue}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setShareThickness(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(shareThickness)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          shareThicknessInitialValue,
                          setShareThickness
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          onClick={() => {
            setIsRotated((prev) => !prev);
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
            Advanced
          </Typography>
          <IconButton aria-label="Example">
            <ExpandMoreIcon
              sx={{
                color: "#47C5FB",
                transform: isRotated ? "rotate(-90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </IconButton>
        </Stack>
        <Box mt={1} sx={{ display: isRotated && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Soil</Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Active Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(activePressure)}
                    min={0}
                    max={activeInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setActivePressure(newValue)}
                  />

                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(activePressure)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          activeInitValue,
                          setActivePressure
                        )
                      }
                      endAdornment={<CustomIndornment title={"psf"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Passive Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(passivePressure)}
                    min={0}
                    max={passiveInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setPassivePressure(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(passivePressure)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          passiveInitValue,
                          setPassivePressure
                        )
                      }
                      endAdornment={<CustomIndornment title={"psf"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Seismic Pressure"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(seismicPressure)}
                    min={0}
                    max={seisPressInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSeismicPressure(newValue)}
                  />

                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(seismicPressure)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          seisPressInitValue,
                          setSeismicPressure
                        )
                      }
                      endAdornment={<CustomIndornment title={"psf"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Left soil level"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(leftEl)}
                    min={0}
                    max={leftSoilInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setleftEl(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(leftEl)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          leftSoilInitValue,
                          setleftEl
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Right soil level"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(rightEl)}
                    min={0}
                    max={rightSoilInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setRightEl(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(rightEl)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          rightSoilInitValue,
                          setRightEl
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Water elevation"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(waterElevation)}
                    min={0}
                    max={waterInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setWaterElevation(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(waterElevation)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          waterInitValue,
                          setWaterElevation
                        )
                      }
                      endAdornment={<CustomIndornment title={"ft"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"PGA"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(pga)}
                    min={0}
                    max={pgaInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setPga(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(pga)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          pgaInitValue,
                          setPga
                        )
                      }
                      endAdornment={<CustomIndornment title={""} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box mt={1} sx={{ display: isRotated && "none" }}>
          <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
            Materials
          </Typography>
          <Stack direction={"column"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Concrete f'c"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(steelFc)}
                    min={0}
                    max={fcInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSteelFc(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(steelFc)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          fcInitValue,
                          setSteelFc
                        )
                      }
                      endAdornment={<CustomIndornment title={"psi"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Steel fy"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={Number(steelFy)}
                    min={0}
                    max={steelFyInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    onChange={(event, newValue) => setSteelFy(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={Number(steelFy)}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          steelFyInitValue,
                          setSteelFy
                        )
                      }
                      endAdornment={<CustomIndornment title={"ksi"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}
              mb={0.5}
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <CustomSliderTitle title={"Soil unit weight"} />
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                <Stack direction={"row"} spacing={4} alignItems={"center"}>
                  <Slider
                    step={0.1}
                    value={soilUnit}
                    min={0}
                    max={soilUnitWeightInitValue * 2}
                    sx={sliderStyle}
                    valueLabelDisplay="auto"
                    //
                    onChange={(event, newValue) => setSoilUnit(newValue)}
                  />
                  <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                    <StyledInputBase
                      type="number"
                      value={soilUnit}
                      onChange={(event) =>
                        handleInputChange(
                          parseFloat(event.target.value),
                          soilUnitWeightInitValue,
                          setSoilUnit
                        )
                      }
                      endAdornment={<CustomIndornment title={"pcf"} />}
                    />
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <>
          <Reinforcement
            stemVerticalBars={stemVerticalBars}
            stemVerticalSpacing={stemVerticalSpacing}
            stemHorizontalBars={stemHorizontalBars}
            stemHorizontalSpacing={stemHorizontalSpacing}
            heelTraverseBars={heelTraverseBars}
            heelTraverseSpacing={heelTraverseSpacing}
            heelHorizontalBars={heelHorizontalBars}
            heelHorizontalSpacing={heelHorizontalSpacing}
            toeHorizontalBars={toeHorizontalBars}
            toeHorizontalSpacing={toeHorizontalSpacing}
            skVertikalBars={skVertikalBars}
            skVerticalSpacing={skVerticalSpacing}
            sKHorizontalBars={sKHorizontalBars}
            skHorizontalSpacing={skHorizontalSpacing}
            setStemVerticalBars={setStemVerticalBars}
            setStemVerticalSpacing={setStemVerticalSpacing}
            setStemHorizontalBars={setStemHorizontalBars}
            setStemHorizontalSpacing={setStemHorizontalSpacing}
            setHeelTraverseBars={setHeelTraverseBars}
            setHeelTraverseSpacing={setHeelTraverseSpacing}
            setHeelHorizontalBars={setHeelHorizontalBars}
            setHeelHorizontalSpacing={setHeelHorizontalSpacing}
            setToeHorizontalBars={setToeHorizontalBars}
            setToeHorizontalSpacing={setToeHorizontalSpacing}
            setskVertikalBars={setskVertikalBars}
            setskVerticalSpacing={setskVerticalSpacing}
            setsKHorizontalBars={setsKHorizontalBars}
            setSkHorizontalSpacing={setSkHorizontalSpacing}
            stemVerticalBarsInitValue={stemVerticalBarsInitValue}
            stemVerticalSpacingInitValue={stemVerticalSpacingInitValue}
            stemHorizontalBarsInitValue={stemHorizontalBarsInitValue}
            stemHorizontalSpacingInitValue={stemHorizontalSpacingInitValue}
            heelTraverseBarsInitValue={heelTraverseBarsInitValue}
            heelTraverseSpacingInitValue={heelTraverseSpacingInitValue}
            heelHorizontalBarsInitValue={heelHorizontalBarsInitValue}
            heelHorizontalSpacingInitValue={heelHorizontalSpacingInitValue}
            toeHorizontalBarsInitValue={toeHorizontalBarsInitValue}
            toeHorizontalSpacingInitValue={toeHorizontalSpacingInitValue}
            skVertikalBarsInitValue={skVertikalBarsInitValue}
            skVerticalSpacingInitValue={skVerticalSpacingInitValue}
            sKHorizontalBarsInitValue={sKHorizontalBarsInitValue}
            skHorizontalSpacingInitValue={skHorizontalSpacingInitValue}
          />
        </>
      </Box>
    </Stack>
  );
}

export default Index;
