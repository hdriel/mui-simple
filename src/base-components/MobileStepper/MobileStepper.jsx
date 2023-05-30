import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import {
  MobileStepper as MuiMobileStepper,
  Paper,
  Button,
  Typography,
  Box,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
} from "./MobileStepper.styled";

export default function MobileStepper({
  variant,
  steps: _steps,
  stepIndex: activeStep,
  muiColor,
  customColor,
  onNext,
  onBack,
  onSkip,
  onDone,
  stepsIndexSkipped,
  labels,
  direction,
  children,
  ...props
}) {
  const theme = useTheme();
  const isLTR = direction === "ltr";
  const forceFixedDirection = variant === "text";
  console.log("isLTR", isLTR);

  const LABELS = {
    next: labels?.next || "Next",
    back: labels?.back || "Back",
    skip: labels?.skip || "Skip",
    done: labels?.done || "Done",
  };

  const isStepOptional = (index) => steps?.[index]?.optional;
  const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
  const handleNext = () => onNext?.(activeStep);
  const handleBack = () => onBack?.(activeStep);
  const handleSkip = (index) => isStepOptional(index) && onSkip?.(index);

  const steps = useMemo(
    () =>
      _steps?.map((step) => {
        return typeof step === "string"
          ? { label: step, optional: false }
          : {
              ...step,
              muiColor:
                step.muiColor ?? muiColor ?? (step.error ? "error" : undefined),
              customColorValue: step.customColor ?? customColor,
              optional: step.optional
                ? typeof step.optional === "string"
                  ? step.optional
                  : LABELS.optional
                : false,
            };
      }) ?? [],
    [_steps]
  );

  const [backIconProp, nextIconProp] = useMemo(() => {
    debugger;
    if (forceFixedDirection && !isLTR) {
      return [
        { endIcon: <KeyboardArrowRightIcon /> },
        { startIcon: <KeyboardArrowLeftIcon /> },
      ];
    }
    return isLTR
      ? [
          { startIcon: <KeyboardArrowLeftIcon /> },
          { endIcon: <KeyboardArrowRightIcon /> },
        ]
      : [
          {
            startIcon: isLTR ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            ),
          },
          {
            endIcon: isLTR ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            ),
          },
        ];
  }, [isLTR]);

  const nextButton = (
    <Button
      size="small"
      onClick={handleNext}
      disabled={activeStep === steps.length - 1}
      muiColor={muiColor}
      customColor={customColor}
      {...nextIconProp}
    >
      {LABELS.next}
    </Button>
  );

  const backButton = (
    <Button
      size="small"
      onClick={handleBack}
      disabled={activeStep === 0}
      muiColor={muiColor}
      customColor={customColor}
      {...backIconProp}
    >
      {LABELS.back}
    </Button>
  );

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>
          {direction?.toUpperCase() + " " + steps[activeStep]?.label}
        </Typography>
      </Paper>
      <Box
        sx={{
          height: 255,
          maxWidth: 400,
          width: "100%",
          p: 2,
          boxSizing: "border-box",
        }}
      >
        {[].concat(children)[activeStep]}
      </Box>
      <MuiMobileStepper
        forceFixedDirection={forceFixedDirection}
        variant={variant}
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        nextButton={!forceFixedDirection || isLTR ? nextButton : backButton}
        backButton={!forceFixedDirection || isLTR ? backButton : nextButton}
        {...props}
      />
    </Box>
  );
}

MobileStepper.propTypes = {
  variant: PropTypes.oneOf(["text", "dots", "progress"]),
  steps: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        optional: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        muiColor: PropTypes.string,
        customColor: PropTypes.string,
        error: PropTypes.bool,
        icon: PropTypes.node,
      }),
    ])
  ),
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  onDone: PropTypes.func,
  stepsIndexSkipped: PropTypes.arrayOf(PropTypes.number),
  labels: {
    next: PropTypes.string,
    back: PropTypes.string,
    done: PropTypes.string,
    skip: PropTypes.string,
    optional: PropTypes.string,
  },
};

MobileStepper.defaultProps = {
  steps: undefined,
  muiColor: undefined,
  customColor: undefined,
  onNext: undefined,
  onBack: undefined,
  onSkip: undefined,
  onDone: undefined,
  stepsIndexSkipped: undefined,
  labels: undefined,
  variant: "progress",
};
