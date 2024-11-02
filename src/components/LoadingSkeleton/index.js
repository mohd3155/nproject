import React from "react";
import { Skeleton, Stack } from "@mui/material";
import Box from "@mui/material/Box";

function LoadingSkeleton(props) {
  return (
    <Box
      flex={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"start"}
      flexWrap={"wrap"}
      flexDirection={"column"}
    >
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    </Box>
  );
}

export default LoadingSkeleton;
