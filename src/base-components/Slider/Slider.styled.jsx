import {
  Slider as MuiSlider,
  Typography as MuiTypography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export { Grid, Box } from "@mui/material";

export const Slider = styled(MuiSlider, {
  shouldForwardProp: (propName) =>
    !["startIcon", "endIcon", "customColor"].includes(propName),
})``;

export const SliderLabel = styled(({ ...props }) => (
  <MuiTypography gutterBottom {...props} />
))``;
