import * as React from "react";
import checkIcon from "../../../../../../../static/checkicon.png";
import unCheckIcon from "../../../../../../../static/uncheckicon.png";
import warningIcon from "../../../../../../../static/warningIcon.png";
import {
  Box,
  Checkbox,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CustomTypo from "../../../../../../../components/CustomTypo";
import CustomButton from "../../../../../../../components/CustomButton";
import { useState } from "react";
import { BASE_URL } from "../../../../../../../constants";
import axios from "axios";

function Index({ loadCombo }) {
  const [loadCombo1, setLc1] = useState(loadCombo?.lc1?.value);
  const [loadCombo2, setLc2] = useState(loadCombo?.lc2?.value);
  const [loadCombo3, setLc3] = useState(loadCombo?.lc3?.value);
  const [loadCombo4, setLc4] = useState(loadCombo?.lc4?.value);
  const [loadCombo5, setLc5] = useState(loadCombo?.lc5?.value);

  const [lc1Check, setLc1Check] = useState(loadCombo?.lc1?.is_check);
  const [lc2Check, setLc2Check] = useState(loadCombo?.lc2?.is_check);
  const [lc3Check, setLc3Check] = useState(loadCombo?.lc3?.is_check);
  const [lc4Check, setLc4Check] = useState(loadCombo?.lc4?.is_check);
  const [lc5Check, setLc5Check] = useState(loadCombo?.lc5?.is_check);

  const [isLc1Valid, setIsLc1Valid] = useState(false);
  const [isLc2Valid, setIsLc2Valid] = useState(false);
  const [isLc3Valid, setIsLc3Valid] = useState(false);
  const [isLc4Valid, setIsLc4Valid] = useState(false);
  const [isLc5Valid, setIsLc5Valid] = useState(false);

  const [isLc1Controlling, setIsLc1Controlling] = useState(
    loadCombo?.lc1?.controlling
  );
  const [isLc2Controlling, setIsLc2Controlling] = useState(
    loadCombo?.lc2?.controlling
  );
  const [isLc3Controlling, setIsLc3Controlling] = useState(
    loadCombo?.lc3?.controlling
  );
  const [isLc4Controlling, setIsLc4Controlling] = useState(
    loadCombo?.lc4?.controlling
  );
  const [isLc5Controlling, setIsLc5Controlling] = useState(
    loadCombo?.lc5?.controlling
  );

  React.useEffect(() => {
    setIsLc1Valid(checkLoanCombo(loadCombo1));
    setIsLc2Valid(checkLoanCombo(loadCombo2));
    setIsLc3Valid(checkLoanCombo(loadCombo3));
    setIsLc4Valid(checkLoanCombo(loadCombo4));
    setIsLc5Valid(checkLoanCombo(loadCombo5));
  }, []);

  const [checkAll, setCheckAll] = useState(false);
  const CheckIcon = () => (
    <img src={checkIcon} alt="icon" style={{ width: "20px", height: "20px" }} />
  );

  const UnCheckIcon = () => (
    <img
      src={unCheckIcon}
      alt="icon"
      style={{ width: "20px", height: "20px" }}
    />
  );
  const WarinigIcon = ({ isWarning }) => (
    <>
      {isWarning ? (
        <Box sx={{ width: "1px" }}>
          <img src={warningIcon} alt="icon" style={{ height: "15px" }} />
        </Box>
      ) : (
        <Box sx={{ width: "1px" }}></Box>
      )}
    </>
  );

  const styleFormControl = {
    m: 1,
    mr:3,
    width: "100%",
    borderColor: "#47C5FB",
    ".Mui-focused": {
      border: "2px solid #47C5FB",
    },
  };
  const styleOutlinedInput = (isControlling) => {
    return {
      height: "24px",
      fontSize: "10px",
      width: "full",
      border: isControlling ? "2px solid #47C5FB" : "1px solid #D9D9D9",
      ".Mui-focused": {
        border: "2px solid #47C5FB",
      },
    };
  };
  const styleMiniStack = {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    spacing: "10px",
    // paddingRight: "1px",
  };
  const Title = ({ title }) => (
    <Box sx={{ width: "50px" }}>
      <CustomTypo fontSize={"12px"} fontweight={400}>
        {title}
      </CustomTypo>
    </Box>
  );
  const CustomCheckBox = ({ checked, setChecked, isValid }) => (
    <Stack direction="row" justifyContent={"center"} alignItems={"center"} sx={{marginRight:2}}>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        icon={<UnCheckIcon />}
        checkedIcon={<CheckIcon />}
      />
      <WarinigIcon isWarning={!isValid} />
    </Stack>
  );

  const handleCheckUncheck = () => {
    if (checkAll) {
      setLc1Check(false);
      setLc2Check(false);
      setLc3Check(false);
      setLc4Check(false);
      setLc5Check(false);
    } else {
      setLc1Check(true);
      setLc2Check(true);
      setLc3Check(true);
      setLc4Check(true);
      setLc5Check(true);
    }
    setCheckAll(!checkAll);
  };

  const checkLoadComboApiCaller = async (input_load_combo) => {
    return await axios.get(
      `${BASE_URL}/get-strength?check_load_combo="${input_load_combo}"`
    );
  };

  const checkLoanCombo = async (input_load_combo) => {
    const result = await checkLoadComboApiCaller(input_load_combo);
    return result?.data?.is_valid;
  };

  const checkLoanComboOnBlur = async (input_load_combo, setter) => {
    const result = await checkLoadComboApiCaller(input_load_combo);
    // console.log("is valid: ", result);
    setter(result?.data?.is_valid);
  };
  const ControllingIndorsement = ({ isControlling }) => {
    return isControlling ? (
      <InputAdornment position="end">
        <CustomTypo fontsize={"8px"}>Controlling</CustomTypo>
      </InputAdornment>
    ) : null;
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="flex-end"
        mt={-6}
      >
        <Box onClick={() => handleCheckUncheck()}>
          <CustomButton
            bordercolor={"#D9D9D9"}
            variant="outlined"
            fontSize={"10px"}
          >
            {checkAll && "Uncheck All"}
            {!checkAll && "Check All"}
          </CustomButton>
        </Box>
      </Box>
      <Stack direction={"column"} spacing={-1.5}>
        <Box sx={styleMiniStack}>
          <Title title="LC 1" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo1}
              onChange={(event) => setLc1(event.target.value)}
              onBlur={() => {
                const input_load_combo = loadCombo1;
                checkLoanComboOnBlur(input_load_combo, setIsLc1Valid);
              }}
              sx={styleOutlinedInput(isLc1Controlling)}
              id="filled-adornment-weight"
              endAdornment={
                <ControllingIndorsement isControlling={isLc1Controlling} />
              }
            />
          </FormControl>

          <CustomCheckBox
            checked={lc1Check}
            setChecked={setLc1Check}
            isValid={isLc1Valid}
          />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 2" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo2}
              onChange={(event) => setLc2(event.target.value)}
              onBlur={() => {
                const input_load_combo = loadCombo2;
                checkLoanComboOnBlur(input_load_combo, setIsLc2Valid);
              }}
              sx={styleOutlinedInput(isLc2Controlling)}
              id="filled-adornment-weight"
              endAdornment={
                <ControllingIndorsement isControlling={isLc2Controlling} />
              }
            />
          </FormControl>
          <CustomCheckBox
            checked={lc2Check}
            setChecked={setLc2Check}
            isValid={isLc2Valid}
          />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 3" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo3}
              onChange={(event) => setLc3(event.target.value)}
              onBlur={() => {
                const input_load_combo = loadCombo3;
                checkLoanComboOnBlur(input_load_combo, setIsLc3Valid);
              }}
              sx={styleOutlinedInput(isLc3Controlling)}
              id="filled-adornment-weight"
              endAdornment={
                <ControllingIndorsement isControlling={isLc3Controlling} />
              }
            />
          </FormControl>

          <CustomCheckBox
            checked={lc3Check}
            setChecked={setLc3Check}
            isValid={isLc3Valid}
          />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 4" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo4}
              onChange={(event) => setLc4(event.target.value)}
              onBlur={() => {
                const input_load_combo = loadCombo4;
                checkLoanComboOnBlur(input_load_combo, setIsLc4Valid);
              }}
              sx={styleOutlinedInput(isLc4Controlling)}
              id="filled-adornment-weight"
              endAdornment={
                <ControllingIndorsement isControlling={isLc4Controlling} />
              }
            />
          </FormControl>

          <CustomCheckBox
            checked={lc4Check}
            setChecked={setLc4Check}
            isValid={isLc4Valid}
          />
        </Box>

        <Box sx={styleMiniStack}>
          <Title title="LC 5" />
          <FormControl sx={styleFormControl} variant="outlined">
            <OutlinedInput
              value={loadCombo5}
              onChange={(event) => setLc5(event.target.value)}
              onBlur={() => {
                const input_load_combo = loadCombo5;
                checkLoanComboOnBlur(input_load_combo, setIsLc5Valid);
              }}
              sx={styleOutlinedInput(isLc5Controlling)}
              id="filled-adornment-weight"
              endAdornment={
                <ControllingIndorsement isControlling={isLc5Controlling} />
              }
            />
          </FormControl>
          <CustomCheckBox
            checked={lc5Check}
            setChecked={setLc5Check}
            isValid={isLc5Valid}
          />
        </Box>

      </Stack>
    </div>
  );
}

export default Index;
