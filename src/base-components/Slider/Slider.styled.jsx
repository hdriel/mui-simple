import {
  Stack as MuiStack,
  Slider as MuiSlider,
  Typography as MuiTypography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Slider = styled(MuiSlider)``;
export const SliderWrapper = styled(({ ...props }) => (
  <MuiStack spacing={2} direction="row" alignItems="center" {...props} />
))``;

export const SliderLabel = styled(MuiTypography)``;
