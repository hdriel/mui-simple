import {
  SpeedDial as MuiSpeedDial,
  SpeedDialAction as MuiSpeedDialAction,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const SpeedDial = styled(({ top, bottom, right, left, ...props }) => (
  <MuiSpeedDial sx={{ top, bottom, right, left }} {...props} />
))`
  position: absolute;
`;
export const SpeedDialAction = styled(MuiSpeedDialAction)``;
