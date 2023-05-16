import {
  Slider as MuiSlider,
  Typography as MuiTypography,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export { Grid, Box } from "@mui/material";

export const Slider = styled(MuiSlider, {
  shouldForwardProp: (propName) =>
    !["startIcon", "endIcon", "customColor"].includes(propName),
})`
  & .MuiSlider-track,
  & .MuiSlider-rail,
  & .MuiSlider-thumb {
    color: ${(props) => props.customColor};
  }

  & .MuiSlider-thumb:hover,
  & .Mui-focusVisible {
    box-shadow: ${(props) =>
      props.customColor && `0px 0px 0px 8px ${alpha(props.customColor, 0.16)}`};
  }

  & .MuiSlider-thumb.Mui-active {
    box-shadow: ${(props) =>
      props.customColor &&
      `0px 0px 0px 14px ${alpha(props.customColor, 0.16)}`};
  }
`;

export const SliderLabel = styled(({ ...props }) => (
  <MuiTypography gutterBottom {...props} />
))``;
