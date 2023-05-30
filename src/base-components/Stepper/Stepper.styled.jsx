import _ from "lodash";
import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  Stepper as MuiStepper,
} from "@mui/material";

import MuiTypography from "../Typography/Typography";
import MuiButton from "../Button/Button";

export const Typography = MuiTypography;

export const Button = MuiButton;

export const Stepper = MuiStepper;
export const Step = MuiStep;
export const StepLabel = styled(MuiStepLabel, {
  shouldForwardProp: (propName) =>
    !["muiColor", "customColor"].includes(propName),
})`
  & .MuiStepIcon-root.Mui-active,
  & .MuiStepIcon-root.Mui-completed,
  & .MuiStepLabel-label.Mui-active {
    color: ${(props) =>
      _.get(props, `theme.palette.${props.muiColor}.main`) ??
      _.get(props, `theme.palette.${props.muiColor}`) ??
      props.customColor};

    .MuiStepIcon-text {
      fill: #ffffff;
    }
  }
`;
export const Box = styled(MuiBox)``;
