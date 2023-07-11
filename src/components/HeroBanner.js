import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
      }}
    >
      <Typography fontWeight="600" fontSize="26px" color="#ff2625">
        Fitness Club
      </Typography>
    </Box>
  );
};

export default HeroBanner;
