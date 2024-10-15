import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTabs from "../CommonFiles/CustomTabs";
import StemDesignTabBody from "../TabsBody/stemDesignTabBody";

function Index({ designOfStem, controllerValue, controllerSetter }) {
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (controllerValue) {
      case 0:
        setTabDSData(designOfStem?.lc_1);
        break;
      case 1:
        setTabDSData(designOfStem?.lc_2);
        break;
      case 2:
        setTabDSData(designOfStem?.lc_3);
        break;
      case 3:
        setTabDSData(designOfStem?.lc_4);
        break;
      case 4:
        setTabDSData(designOfStem?.lc_5);
        break;
      default:
        setTabDSData(designOfStem?.lc_1);
        break;
    }
  }, [controllerValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <center>
        <CustomTabs value={controllerValue} setValue={controllerSetter} />
      </center>

      <StemDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
