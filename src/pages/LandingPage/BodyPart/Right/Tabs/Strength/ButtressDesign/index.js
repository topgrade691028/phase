import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtressDesignTabBody from "../TabsBody/ButtressDesignTabBody";
import CustomTabs from "../CommonFiles/CustomTabs";

function Index({ designOfButtress, controllerValue, controllerSetter }) {
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (controllerValue) {
      case 0:
        setTabDSData(designOfButtress?.lc_1);
        break;
      case 1:
        setTabDSData(designOfButtress?.lc_2);
        break;
      case 2:
        setTabDSData(designOfButtress?.lc_3);
        break;
      case 3:
        setTabDSData(designOfButtress?.lc_4);
        break;
      case 4:
        setTabDSData(designOfButtress?.lc_5);
        break;
      default:
        setTabDSData(designOfButtress?.lc_1);
        break;
    }
  }, [controllerValue]);

  return (
    <Box>
      <center>
        <CustomTabs value={controllerValue} setValue={controllerSetter} />
      </center>
      <ButtressDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
