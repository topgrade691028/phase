import {
  Box,
  FormControl,
  Grid,
  IconButton,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomTypo from "../../../../../components/CustomTypo";
import CustomSliderTitle from "../../../../../components/CustomSliderTitle";
import StyledInputBase from "../../../../../components/StyledInputBase";
import CustomIndornment from "../../../../../components/CustomIndornment";
import { sliderStyle } from "./sliderStyle";
function Reinforcement(props) {
  const {
    stemVerticalBars,
    stemVerticalSpacing,
    stemHorizontalBars,
    stemHorizontalSpacing,
    heelTraverseBars,
    heelTraverseSpacing,
    heelHorizontalBars,
    heelHorizontalSpacing,
    toeHorizontalBars,
    toeHorizontalSpacing,
    skVertikalBars,
    skVerticalSpacing,
    sKHorizontalBars,
    skHorizontalSpacing,
    setStemVerticalBars,
    setStemVerticalSpacing,
    setStemHorizontalBars,
    setStemHorizontalSpacing,
    setHeelTraverseBars,
    setHeelTraverseSpacing,
    setHeelHorizontalBars,
    setHeelHorizontalSpacing,
    setToeHorizontalBars,
    setToeHorizontalSpacing,
    setskVertikalBars,
    setskVerticalSpacing,
    setsKHorizontalBars,
    setSkHorizontalSpacing,
    stemVerticalBarsInitValue,
    stemVerticalSpacingInitValue,
    stemHorizontalBarsInitValue,
    stemHorizontalSpacingInitValue,
    heelTraverseBarsInitValue,
    heelTraverseSpacingInitValue,
    heelHorizontalBarsInitValue,
    heelHorizontalSpacingInitValue,
    toeHorizontalBarsInitValue,
    toeHorizontalSpacingInitValue,
    skVertikalBarsInitValue,
    skVerticalSpacingInitValue,
    sKHorizontalBarsInitValue,
    skHorizontalSpacingInitValue,
  } = props;
  const [isRotated, setIsRotated] = useState(false);
  //   const [stemVerticalBars, setStemVerticalBars] = useState();
  //   const [stemVerticalSpacing, setStemVerticalSpacing] = useState();
  //   const [stemHorizontalBars, setStemHorizontalBars] = useState();
  //   const [stemHorizontalSpacing, setStemHorizontalSpacing] = useState();
  //   const [heelTraverseBars, setHeelTraverseBars] = useState();
  //   const [heelTraverseSpacing, setHeelTraverseSpacing] = useState();
  //   const [heelHorizontalBars, setHeelHorizontalBars] = useState();
  //   const [heelHorizontalSpacing, setHeelHorizontalSpacing] = useState();
  //   const [toeHorizontalBars, setToeHorizontalBars] = useState();
  //   const [toeHorizontalSpacing, setToeHorizontalSpacing] = useState();
  //   const [skVertikalBars, setskVertikalBars] = useState();
  //   const [skVerticalSpacing, setskVerticalSpacing] = useState();
  //   const [sKHorizontalBars, setsKHorizontalBars] = useState();
  //   const [skHorizontalSpacing, setSkHorizontalSpacing] = useState();

  const marks = [
    { value: 0 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 14 },
    { value: 18 },
  ];
  const handleInputChange = (newValue, initValue, setter) => {
    if (isNaN(newValue)) {
      setter(newValue);
    }
    setter(newValue);
  };
  return (
    <>
      {/* Reinforcement */}
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
          Reinforcement
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
        <CustomTypo sx={{ fontweight: 700, fontsize: "14px" }}>Stem</CustomTypo>
        <Stack direction={"column"}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
            mb={0.5}
          >
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <CustomSliderTitle title={"Vertical Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  value={Number(stemVerticalBars)}
                  min={0}
                  max={18}
                  step={null}
                  marks={marks}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setStemVerticalBars(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={Number(stemVerticalBars)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        stemVerticalBarsInitValue,
                        setStemVerticalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Vertical Spacing"} />
            </Grid>

            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(stemVerticalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setStemVerticalSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(stemVerticalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        stemVerticalSpacingInitValue,
                        setStemVerticalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
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
              <CustomSliderTitle title={"Horizontal Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={stemHorizontalBars}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  //
                  onChange={(event, newValue) =>
                    setStemHorizontalBars(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={stemHorizontalBars}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        stemHorizontalBarsInitValue,
                        setStemHorizontalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Horiz. Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(stemHorizontalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setStemHorizontalSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(stemHorizontalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        stemHorizontalSpacingInitValue,
                        setStemHorizontalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Box mt={1} sx={{ display: isRotated && "none" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Heel</Typography>
        <Stack direction={"column"}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
            mb={0.5}
          >
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <CustomSliderTitle title={"Traverse Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={Number(heelTraverseBars)}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setHeelTraverseBars(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={Number(heelTraverseBars)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        heelTraverseBarsInitValue,
                        setHeelTraverseBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Traverse Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(heelTraverseSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setHeelTraverseSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(heelTraverseSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        heelTraverseSpacingInitValue,
                        setHeelTraverseSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
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
              <CustomSliderTitle title={"Horizontal Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={heelHorizontalBars}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  //
                  onChange={(event, newValue) =>
                    setHeelHorizontalBars(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={heelHorizontalBars}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        heelHorizontalBarsInitValue,
                        setHeelHorizontalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Horiz. Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(heelHorizontalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setHeelHorizontalSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(heelHorizontalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        heelHorizontalSpacingInitValue,
                        setHeelHorizontalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Box mt={1} sx={{ display: isRotated && "none" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 14 }}>Toe</Typography>
        <Stack direction={"column"}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
            mb={0.5}
          >
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <CustomSliderTitle title={"Horizontal Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={toeHorizontalBars}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  //
                  onChange={(event, newValue) => setToeHorizontalBars(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={toeHorizontalBars}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        toeHorizontalBarsInitValue,
                        setToeHorizontalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Horiz. Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(toeHorizontalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setToeHorizontalSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(toeHorizontalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        toeHorizontalSpacingInitValue,
                        setToeHorizontalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box mt={1} sx={{ display: isRotated && "none" }}>
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
              <CustomSliderTitle title={"Vertical Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={Number(skVertikalBars)}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setskVertikalBars(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    sx={{ paddingLeft: "30px" }}
                    value={Number(skVertikalBars)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        skVertikalBarsInitValue,
                        setskVertikalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Vertical Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(skVerticalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) => setskVerticalSpacing(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(skVerticalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        skVerticalSpacingInitValue,
                        setskVerticalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
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
              <CustomSliderTitle title={"Horizontal Bars"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={null}
                  marks={marks}
                  value={sKHorizontalBars}
                  min={0}
                  max={18}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  //
                  onChange={(event, newValue) => setsKHorizontalBars(newValue)}
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    sx={{ paddingLeft: "30px" }}
                    type="number"
                    value={sKHorizontalBars}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        sKHorizontalBarsInitValue,
                        setsKHorizontalBars
                      )
                    }
                    startAdornment={<CustomIndornment title={"#"} />}
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
              <CustomSliderTitle title={"Horiz. Spacing"} />
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Slider
                  step={0.1}
                  value={Number(skHorizontalSpacing)}
                  min={0}
                  max={24}
                  sx={sliderStyle}
                  valueLabelDisplay="auto"
                  onChange={(event, newValue) =>
                    setSkHorizontalSpacing(newValue)
                  }
                />
                <FormControl sx={{ m: 1, width: 190 }} variant="outlined">
                  <StyledInputBase
                    type="number"
                    value={Number(skHorizontalSpacing)}
                    onChange={(event) =>
                      handleInputChange(
                        parseFloat(event.target.value),
                        skHorizontalSpacingInitValue,
                        setSkHorizontalSpacing
                      )
                    }
                    endAdornment={<CustomIndornment title={"in"} />}
                  />
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

export default Reinforcement;
