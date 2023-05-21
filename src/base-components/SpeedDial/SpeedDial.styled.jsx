import React from "react";
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialIcon as MuiSpeedDialIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const SpeedDial = styled(
  ({ top, bottom, right, left, ...props }) => (
    <MuiSpeedDial sx={{ top, bottom, right, left }} {...props} />
  ),
  {
    shouldForwardProp: (propName) =>
      !["muiColor", "customColor"].includes(propName),
  }
)`
  position: absolute;
`;
export const SpeedDialAction = styled(MuiSpeedDialAction)``;
export const SpeedDialIcon = styled(MuiSpeedDialIcon)``;
