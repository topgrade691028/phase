import React from "react";

import "./style.css"; // Import your custom styles
import { Box, Tab, Tabs } from "@mui/material";

const CustomTabs = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const numTabs = 5;
  const maxWidth = 410;
  const tabWidth = maxWidth / numTabs;

  const styleTabText = {
    fontSize: "16px",
    fontWeight: 700,
    minWidth: "20%",
  
  };
  const styleTabs = {
    backgroundColor: "transparent",
    width: "100%",
    ".MuiTabs-indicator": {
      display:"none",
      // height: "0px",
      // width: "100%",
    },
  };

  return (
    <Box sx={{ marginBottom: "26px", width: "100%", overflow: "none" }}>
      <Box className="indicator-container">
        <Tabs sx={styleTabs} value={value} onChange={handleChange}>
          <Tab label="1" sx={styleTabText} />
          <Tab label=" 2" sx={styleTabText} />
          <Tab label=" 3" sx={styleTabText} />
          <Tab label=" 4" sx={styleTabText} />
          <Tab label=" 5" sx={styleTabText} />
        </Tabs>
        <Box
          className={`indicator ${
            value === 0
              ? "first-tab"
              : value === 1
              ? "second-tab"
              : value === 2
              ? "third-tab"
              : value === 3
              ? "fourth-tab"
              : "fifth-tab"
          }`}
        >
          <span style={{ fontSize: "16px", fontWeight: 700 }}>{`${
            value + 1
          }`}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomTabs;
