import {
  Box,
  Grid,
  LinearProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const OutputComponent = ({ title, value, sf }) => {
  const theme = useTheme();
  const isMatchXS = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      // spacing={isMatchXS ? 0 : 2}
      mb={"6px"}
    >
      <Grid item sm={4} xs={12}>
        <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
          {title}
        </Typography>
      </Grid>
      
      <Grid item sm={7.3} xs={11.1} pr={1}>
        <Box>
          <LinearProgress
            variant="determinate"
            sx={{
              borderColor: "#D9D9D9",
              borderRadius: "12px",
              backgroundColor: "#D9D9D9",
              "& .MuiLinearProgress-bar": {
                background:
                  parseFloat(value) < parseFloat(sf) ? "#FF6060" : "#94D263",
              },
              transition: "background 0.3s ease-in-out",
            }}
            value={value * 50}
          />
        </Box>
      </Grid>

      <Grid item sm={0.7} xs={0.9} /* sx={{backgroundColor:"red"}} */>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 400, marginBottom: "6px" }}
        >
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OutputComponent;
