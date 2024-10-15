import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTabs from "../CommonFiles/CustomTabs";
import ShearKeyDesignTabBody from "../TabsBody/shearKeyDesignTabBody";

function Index({ designOfShearKey, controllerSetter, controllerValue }) {
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (controllerValue) {
      case 0:
        setTabDSData(designOfShearKey?.lc_1);
        break;
      case 1:
        setTabDSData(designOfShearKey?.lc_2);
        break;
      case 2:
        setTabDSData(designOfShearKey?.lc_3);
        break;
      case 3:
        setTabDSData(designOfShearKey?.lc_4);
        break;
      case 4:
        setTabDSData(designOfShearKey?.lc_5);
        break;
      default:
        setTabDSData(designOfShearKey?.lc_1);
        break;
    }
  }, [controllerValue]);

  return (
    <Box>
      <center>
        <CustomTabs value={controllerValue} setValue={controllerSetter} />
      </center>
      <ShearKeyDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
