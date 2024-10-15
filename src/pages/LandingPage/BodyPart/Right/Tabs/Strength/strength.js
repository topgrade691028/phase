import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import LoadCombination from "./LoadCombination";
import StemDesign from "./StemDesign";
import HeelDesign from "./HeelDesign";
import ToeDesign from "./ToeDesign";
import ShearKeyDesign from "./ShearKeyDesign";
import ButtressDesign from "./ButtressDesign";

import { IoIosArrowDown } from "react-icons/io";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomTypo from "../../../../../../components/CustomTypo";
import { useState } from "react";
import { dispatch } from "../../../../../../store";
import { getStrengthTabData } from "../../../../../../store/actions/uiActions";
import { useSelector } from "react-redux";
import isCorrectIcon from "../../../../../../static/ischeckIcon.png";
import isIncorrectIcon from "../../../../../../static/isIncorrectIcon.png";
import CustomButton from "../../../../../../components/CustomButton";

function Strength() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDesignStemExpanded, setIsDesignStemExpanded] = useState(true);
  const [isDesignHeelExpanded, setIsDesignHeelExpanded] = useState(true);
  const [isDesignToeExpanded, setIsDesignToeExpanded] = useState(true);
  const [isDesignShearExpanded, setIsDesignShearExpanded] = useState(true);
  const [isDesignButtressExpanded, setIsDesignButtressExpanded] =
    useState(true);
  const [expandAll, setExpandAll] = useState(false);
  const { stabilityTabData, strengthTabData } = useSelector(
    (state) => state.uiReducer
  );
  const theme = useTheme();
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  const designOfStemControllingInitValue =
    strengthTabData?.results?.design_of_stem?.controlling_case - 1;

  const shearKeyDesignControllingInitValue =
    strengthTabData?.results?.design_of_shear_key?.controlling_case - 1;

  const designOfToeControllingInitValue =
    strengthTabData?.results?.design_of_toe?.controlling_case - 1;

  const heelDesignInitValue =
    strengthTabData?.results?.design_of_heel?.controlling_case - 1;
  const buttressDesignInitValue =
    strengthTabData?.results?.design_of_buttress?.controlling_case - 1;

  const [designOfStemControlling, setDesignOfStemControlling] = useState(
    designOfStemControllingInitValue
  );

  const [shearKeyDesignControlling, setShearKeyDesignControlling] = useState(
    shearKeyDesignControllingInitValue
  );

  const [toeDesignControlling, setToeDesignControlling] = useState(
    designOfToeControllingInitValue
  );
  const [heelDesign, setHeelDesign] = useState(heelDesignInitValue);

  const [buttressDesignControlling, setButtressDesignControlling] = useState(
    buttressDesignInitValue
  );

  const IsCorrectIcon = () => (
    <img
      src={isCorrectIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );
  const IsIncorrectIcon = () => (
    <img
      src={isIncorrectIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );

  React.useEffect(() => {
    dispatch(getStrengthTabData(stabilityTabData));
  }, []);

  React.useEffect(() => {
    const allExpanded =
      isDesignStemExpanded &&
      isDesignHeelExpanded &&
      isDesignToeExpanded &&
      isDesignShearExpanded &&
      isDesignButtressExpanded;

    setExpandAll(allExpanded);
  }, [
    isDesignStemExpanded,
    isDesignHeelExpanded,
    isDesignToeExpanded,
    isDesignShearExpanded,
    isDesignButtressExpanded,
  ]);

  const styleAccordion = {
    ".MuiAccordionSummary-root": { paddingLeft: 0 },
    backgroundColor: "transparent",
    ".MuiAccordionDetails-root": {
      paddingTop: 1,
      paddingX: 0,
    },
    boxShadow: "none",
    ".MuiSvgIconRoot": {
      display: "none",
    },
    borderWidth: `0px `,
    "&:not(:lastChild)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  };

  const styleDropdownIcon = {
    transform: isExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon2 = {
    transform: isDesignStemExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon3 = {
    transform: isDesignHeelExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon4 = {
    transform: isDesignToeExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon5 = {
    transform: isDesignShearExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };

  const styleDropdownIcon6 = {
    transform: isDesignButtressExpanded ? "rotate(0)" : "rotate(-90deg)",
    transition: "0.3s ease-in-out",
  };
  const StyledAccordion = styled((props) => (
    <Accordion elevation={0} square {...props} />
  ))(({ theme }) => ({
    ".MuiSvgIconRoot": {
      display: "none",
    },
    borderWidth: `0px `,
    "&:not(:lastChild)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));
  const handleExpandAll = (event) => {
    event.stopPropagation();
    if (expandAll) {
      setIsDesignStemExpanded(false);
      setIsDesignHeelExpanded(false);
      setIsDesignToeExpanded(false);
      setIsDesignShearExpanded(false);
      setIsDesignButtressExpanded(false);
    } else {
      setIsDesignStemExpanded(true);
      setIsDesignHeelExpanded(true);
      setIsDesignToeExpanded(true);
      setIsDesignShearExpanded(true);
      setIsDesignButtressExpanded(true);
    }
    setExpandAll(!expandAll);
  };

  return (
    <Box>
      <Stack direction={"column"} spacing={"10px"}>
        <CustomTypo>Summary</CustomTypo>
        <Stack direction={"row"} spacing={"7px"}>
          <CustomTypo fontsize={"12px"} fontweight={400}>
            {strengthTabData?.summary?.summary}
          </CustomTypo>
          <Box sx={{ width: 100 }}>
            {strengthTabData?.summary?.check && <IsCorrectIcon />}{" "}
            {strengthTabData?.summary?.check == false && (
              <Stack direction={"row"} spacing={"11px"} sx={{ width: 50 }}>
                <IsIncorrectIcon />
                <CustomTypo fontweight={400}>
                  {strengthTabData?.summary?.issues}
                </CustomTypo>
              </Stack>
            )}
          </Box>
        </Stack>
      </Stack>

      <Accordion
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Load Combinations</CustomTypo>
            <IconButton style={styleDropdownIcon}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.load_combo && (
            <LoadCombination loadCombo={strengthTabData?.load_combo} />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignStemExpanded}
        onChange={() => setIsDesignStemExpanded(!isDesignStemExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            width: "100%",
            ".MuiAccordionSummary-content": {
              margin: 0,
            },
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Stack
              spacing={3}
              ml={isMatchXS ? 5 : 0}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
              >
                Design of Stem
              </Typography>
              <IconButton style={styleDropdownIcon2}>
                <IoIosArrowDown color="#47C5FB" />
              </IconButton>
            </Stack>
            <Stack
              direction={"row"}
              spacing={"6px"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              sx={{ marginRight: -3 }}
            >
              <CustomButton
                bordercolor={"#D9D9D9"}
                variant="outlined"
                fontSize={"10px"}
                onClick={(event) => {
                  event.stopPropagation();
                  setDesignOfStemControlling(designOfStemControllingInitValue);
                  setShearKeyDesignControlling(
                    shearKeyDesignControllingInitValue
                  );
                  setToeDesignControlling(designOfToeControllingInitValue);
                  setHeelDesign(heelDesignInitValue);
                  setButtressDesignControlling(buttressDesignInitValue);
                }}
              >
                Show Controlling
              </CustomButton>
              <CustomButton
                bordercolor={"#D9D9D9"}
                variant="outlined"
                fontSize={"10px"}
                onClick={(event) => handleExpandAll(event)}
              >
                {expandAll ? "Close All" : "Expand All"}
              </CustomButton>
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_stem && (
            <StemDesign
              controllerValue={designOfStemControlling}
              controllerSetter={setDesignOfStemControlling}
              designOfStem={strengthTabData?.results?.design_of_stem}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignHeelExpanded}
        onChange={() => setIsDesignHeelExpanded(!isDesignHeelExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Heel</CustomTypo>
            <IconButton style={styleDropdownIcon3}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_heel && (
            <HeelDesign
              controllerValue={heelDesign}
              controllerSetter={setHeelDesign}
              designOfHeel={strengthTabData?.results?.design_of_heel}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignToeExpanded}
        onChange={() => setIsDesignToeExpanded(!isDesignToeExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Toe</CustomTypo>
            <IconButton style={styleDropdownIcon4}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_toe && (
            <ToeDesign
              controllerValue={toeDesignControlling}
              controllerSetter={setToeDesignControlling}
              designOfToe={strengthTabData?.results?.design_of_toe}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignShearExpanded}
        onChange={() => setIsDesignShearExpanded(!isDesignShearExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Shear Key</CustomTypo>
            <IconButton style={styleDropdownIcon5}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_shear_key && (
            <ShearKeyDesign
              controllerValue={shearKeyDesignControlling}
              controllerSetter={setShearKeyDesignControlling}
              designOfShearKey={strengthTabData?.results?.design_of_shear_key}
            />
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={isDesignButtressExpanded}
        onChange={() => setIsDesignButtressExpanded(!isDesignButtressExpanded)}
        TransitionProps={{ timeout: 300 }}
        sx={styleAccordion}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Stack
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CustomTypo>Design of Buttress</CustomTypo>
            <IconButton style={styleDropdownIcon6}>
              <IoIosArrowDown color="#47C5FB" />
            </IconButton>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {strengthTabData?.results?.design_of_buttress && (
            <ButtressDesign
              controllerValue={buttressDesignControlling}
              controllerSetter={setButtressDesignControlling}
              designOfButtress={strengthTabData?.results?.design_of_buttress}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Strength;
