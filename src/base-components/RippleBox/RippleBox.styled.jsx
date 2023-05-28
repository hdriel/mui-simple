import React from "react";
import { styled } from "@mui/material/styles";

import { Box as MuiBox } from "@mui/material";

export const Wrapper = styled(({ ...props }) => (
  <MuiBox type="button" {...props} />
))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`;
