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
export const StepLabel = MuiStepLabel;
export const Box = styled(MuiBox)``;
