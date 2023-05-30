import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Button,
  Stepper as MuiStepper,
  Step,
  StepLabel,
  Box,
} from "./Stepper.styled";

export default function Stepper({
  optionalLabel,
  steps: _steps,
  stepIndex: activeStep,
  stepsBottomLabel,
  muiColor,
  customColor,
  onReset,
  onNext,
  onBack,
  onSkip,
  stepsIndexSkipped,
  allCompletedCmp,
  children,
  ...props
}) {
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
                  : optionalLabel
                : false,
            };
      }),
    [_steps]
  );

  const DefaultOptionalCmp = useMemo(
    (props) => (
      <Typography variant="caption" {...props}>
        {optionalLabel}
      </Typography>
    ),
    [optionalLabel]
  );

  const isStepOptional = (index) => steps?.[index]?.optional;
  const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
  const handleNext = () => onNext?.(activeStep);
  const handleBack = () => onBack?.(activeStep);
  const handleSkip = () => isStepOptional(activeStep) && onSkip?.(activeStep);
  const handleReset = () => onReset?.();

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper
        activeStep={activeStep}
        alternativeLabel={stepsBottomLabel}
        {...props}
      >
        {steps?.map((step, index) => {
          return (
            <Step
              key={index}
              completed={isStepSkipped(index) ? false : undefined}
            >
              <StepLabel
                error={step.error}
                // StepIconComponent={step.icon}
                muiColor={step.muiColor}
                customColor={step.customColor}
                optional={
                  isStepOptional(index) ? (
                    <Typography variant="caption">{step.optional}</Typography>
                  ) : undefined
                }
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </MuiStepper>

      {activeStep === steps?.length ? (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>{allCompletedCmp}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>{[].concat(children)[activeStep]}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps?.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

Stepper.propTypes = {
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
  optionalLabel: PropTypes.string,
  stepsBottomLabel: PropTypes.bool,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  onReset: PropTypes.func,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  stepsIndexSkipped: PropTypes.arrayOf(PropTypes.number),
  allCompletedCmp: PropTypes.node,
};

Stepper.defaultProps = {
  steps: undefined,
  optionalLabel: "Optional",
  stepsBottomLabel: undefined,
  muiColor: undefined,
  customColor: undefined,
  onReset: undefined,
  onNext: undefined,
  onBack: undefined,
  onSkip: undefined,
  stepsIndexSkipped: undefined,
  allCompletedCmp: undefined,
};
