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
  children,
  ...props
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const steps = useMemo(
    () =>
      _steps?.map((step) => {
        return typeof step === "string"
          ? { label: step, optional: false }
          : step;
      }),
    [_steps]
  );

  const optionalCmp = useMemo(
    () => <Typography variant="caption">{optionalLabel}</Typography>,
    [optionalLabel]
  );

  const isStepOptional = (index) => steps[index]?.optional;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  debugger;
  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper activeStep={activeStep} {...props}>
        {steps?.map((step, index) => {
          return (
            <Step
              key={index}
              completed={isStepSkipped(index) ? false : undefined}
            >
              <StepLabel
                optional={isStepOptional(index) ? optionalCmp : undefined}
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </MuiStepper>

      {activeStep === steps?.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          {children}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
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
        optional: PropTypes.bool,
      }),
    ])
  ),
  optionalLabel: PropTypes.string,
};

Stepper.defaultProps = {
  steps: undefined,
  optionalLabel: "Optional",
};
