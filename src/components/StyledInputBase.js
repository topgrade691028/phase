import { OutlinedInput, styled } from "@mui/material";

const StyledInputBase = styled(OutlinedInput)(() => ({
  borderRadius: "12px",
  color: "#000",
  textAlign: "center",
  ".MuiOutlinedInput-input": {
    textAlign: "center",
    padding: "7px 8px",
    width: "50%",
    borderRadius: "40px",
  },
}));

export default StyledInputBase;
