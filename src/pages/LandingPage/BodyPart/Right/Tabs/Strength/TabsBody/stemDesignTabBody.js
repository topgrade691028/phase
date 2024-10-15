import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CustomTypo from "../../../../../../../components/CustomTypo";
import OutputComponent from "../../../../../../../components/OutputComponent";

function StemDesignTabBody({ tabData }) {
  return (
    <Stack direction={"column"} spacing={2}>
      <Box>
        <Grid container justifyContent={"space-between"} alignItems={"center"} mb={1}>
          <Grid sm={11.3}>
            <CustomTypo>Horizontal Moment</CustomTypo>
          </Grid>
          <Grid sm={0.7}>
            <CustomTypo fontsize={"12px"} fontweight={400}>
              DCR
            </CustomTypo>
          </Grid>
        </Grid>
        <OutputComponent
          title={"Max Positive, +Mu"}
          value={tabData?.horizontal_moment?.max_positive}
          sf={0.3}
        />
        <OutputComponent
          title={"Max Negative, -Mu"}
          value={tabData?.horizontal_moment?.max_negative}
          sf={0.3}
        />
        <OutputComponent
          title={"Shear, Vu"}
          value={tabData?.horizontal_moment?.shear}
          sf={0.3}
        />
      </Box>
      <Box>
        <CustomTypo>Vertical Moment</CustomTypo>
        <OutputComponent
          title={"Max Positive, +Mu"}
          value={tabData?.vertical_moment?.max_positive}
          sf={1}
        />
        <OutputComponent
          title={"Max Negative, -Mu"}
          value={tabData?.vertical_moment?.max_negative}
          sf={1.3}
        />
        <OutputComponent
          title={"Shear, Vu"}
          value={tabData?.vertical_moment?.shear}
          sf={1.3}
        />
      </Box>
      <Box>
        <OutputComponent
          title={"Shear Friction"}
          value={tabData?.shear_friction}
          sf={1.3}
        />
      </Box>
    </Stack>
  );
}

export default StemDesignTabBody;
