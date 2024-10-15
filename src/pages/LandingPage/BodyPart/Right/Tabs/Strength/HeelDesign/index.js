import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeelDesignTabBody from "../TabsBody/heelDesignTabBody";
import CustomTabs from "../CommonFiles/CustomTabs";

function Index({ designOfHeel, controllerValue, controllerSetter }) {
  const [tabData, setTabDSData] = useState();
  useEffect(() => {
    switch (controllerValue) {
      case 0:
        setTabDSData(designOfHeel?.lc_1);
        break;
      case 1:
        setTabDSData(designOfHeel?.lc_2);
        break;
      case 2:
        setTabDSData(designOfHeel?.lc_3);
        break;
      case 3:
        setTabDSData(designOfHeel?.lc_4);
        break;
      case 4:
        setTabDSData(designOfHeel?.lc_5);
        break;
      default:
        setTabDSData(designOfHeel?.lc_1);
        break;
    }
  }, [controllerValue]);
  return (
    <Box>
      <center>
        <CustomTabs value={controllerValue} setValue={controllerSetter} />
      </center>

      <HeelDesignTabBody tabData={tabData} />
    </Box>
  );
}

export default Index;
