import React from "react";
import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialIcon as MuiSpeedDialIcon,
} from "@mui/material";
import { styled, css } from "@mui/material/styles";

export const SpeedDialIcon = MuiSpeedDialIcon; // note: styled on MuiSpeedDialIcon will break his flip icon animation!!
export const SpeedDial = styled(
  ({ top, bottom, right, left, ...props }) => (
    <MuiSpeedDial sx={{ top, bottom, right, left }} {...props} />
  ),
  {
    shouldForwardProp: (propName) =>
      !["muiColor", "customColor", "showTooltip"].includes(propName),
  }
)`
  position: absolute;
  & .MuiSpeedDial-actions {
    gap: ${(props) =>
      props.showTooltip && ["right", "left"].includes(props.direction)
        ? "20px"
        : undefined};
  }
  & .MuiSpeedDialAction-staticTooltipLabel {
    ${(props) => {
      switch (props.direction) {
        case "right":
          return css`
            top: 60px;
          `;
        case "left":
          return css`
            bottom: 60px;
          `;
        case "down":
        case "up":
        default:
          return css``;
      }
    }}
`;
export const SpeedDialAction = styled(MuiSpeedDialAction)``;
