import { InputAdornment } from "@mui/material";

const CustomIndornment = ({ title }) => (
  <InputAdornment
    position="start"
    sx={{
      ".css-ycevnx-MuiTypography-root": {
        color: `rgba(0, 0, 0, 1.0)`,
      },
    }}
  >
    {title}
  </InputAdornment>
);

export default CustomIndornment;
