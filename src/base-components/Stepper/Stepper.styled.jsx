import _ from "lodash";
import { styled } from "@mui/material/styles";
import {
  Box as MuiBox,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  Stepper as MuiStepper,
  StepContent as MuiStepContent,
  StepConnector as MuiStepConnector,
  stepConnectorClasses,
} from "@mui/material";

import MuiTypography from "../Typography/Typography";
import MuiButton from "../Button/Button";
import { numberToPx } from "../../utils/helpers";

export const Typography = MuiTypography;

export const Button = MuiButton;

export const Stepper = styled(MuiStepper)`
  &.MuiStepper-root.MuiStepper-vertical.MuiStepper-alternativeLabel {
    gap: 1.5em;
  }
  & .MuiStep-root.MuiStep-vertical.MuiStep-alternativeLabel {
    width: ${(props) => "100%"};
  }
`;

export const Step = MuiStep;

export const StepContent = MuiStepContent;

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

export const ConnectorStepIconRoot = styled("div")(
  ({ theme, ownerState, padding, background, fontSize = 25 }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    fontSize: numberToPx(fontSize),
    padding: numberToPx(padding),
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      ...(background?.includes("gradient")
        ? { backgroundImage: background }
        : { background, backgroundImage: "unset" }),
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      ...(background?.includes("gradient")
        ? { backgroundImage: background }
        : { background, backgroundImage: "unset" }),
    }),
  })
);

export const StepConnector = styled(MuiStepConnector)(
  ({
    theme,
    orientation,
    fontSize,
    background,
    lineColor,
    padding,
    lineWidth = 3,
  }) => {
    const bgColor = lineColor ?? background;
    const bgColorProp = bgColor?.includes("gradient")
      ? { backgroundImage: bgColor }
      : { background: bgColor };

    return {
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: { ...bgColorProp },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: { ...bgColorProp },
      },
      [`& .${stepConnectorClasses.line}`]: {
        ...(orientation === "vertical"
          ? { width: lineWidth }
          : { height: lineWidth }),
        border: 0,
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
      },
    };
  }
);
//  backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
