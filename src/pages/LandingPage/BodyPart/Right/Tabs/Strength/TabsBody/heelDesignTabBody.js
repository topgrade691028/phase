import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function heelDesignTabBody({ tabData }) {
  return (
    <Box>
      <Grid container justifyContent={"space-between"} alignItems={"center"} mb={1}>
        <Grid sm={11.3}>
          <CustomTypo>Moment and Shear Check</CustomTypo>
        </Grid>
        <Grid sm={0.7}>
          <CustomTypo fontsize={"12px"} fontweight={400}>
            DCR
          </CustomTypo>
        </Grid>
      </Grid>
      <OutputComponent
        title={"Longitudinal Mom."}
        value={tabData?.longitudinal}
        sf={0.3}
      />
      <OutputComponent
        title={"Horizontal Moment"}
        value={tabData?.shear}
        sf={0.3}
      />
      <OutputComponent title={"Shear, Vu"} value={tabData?.shear} sf={0.3} />
    </Box>
  );
}

export default heelDesignTabBody;
