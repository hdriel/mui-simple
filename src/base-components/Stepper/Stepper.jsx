import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Button,
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Box,
} from "./Stepper.styled";

export default function Stepper({
  optionalLabel,
  steps: _steps,
  stepIndex: activeStep,
  stepsBottomLabel,
  muiColor,
  customColor,
  orientation,
  onNext,
  onBack,
  onSkip,
  onDone,
  stepsIndexSkipped,
  allCompletedCmp,
  labels,
  unmountOnExit,
  children,
  ...props
}) {
  const LABELS = {
    next: labels?.next || "Next",
    back: labels?.back || "Back",
    skip: labels?.skip || "Skip",
    done: labels?.done || "Done",
    optional: labels?.optional || "Optional",
  };

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
      }),
    [_steps]
  );

  const isStepOptional = (index) => steps?.[index]?.optional;
  const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
  const handleNext = () => onNext?.(activeStep);
  const handleBack = () => onBack?.(activeStep);
  const handleSkip = (index) => isStepOptional(index) && onSkip?.(index);

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper
        activeStep={activeStep}
        alternativeLabel={stepsBottomLabel}
        orientation={orientation}
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
              {orientation === "vertical" && (
                <StepContent TransitionProps={{ unmountOnExit }}>
                  {[].concat(children)[index]}
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        muiColor={step.muiColor}
                        customColor={step.customColor}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? LABELS.done : LABELS.next}
                      </Button>
                      {index !== 0 && (
                        <Button
                          color="inherit"
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {LABELS.back}
                        </Button>
                      )}
                    </div>
                    <div>
                      {isStepOptional(index) && (
                        <Button
                          onClick={() => handleSkip(index)}
                          muiColor={step.muiColor}
                          customColor={step.customColor}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {LABELS.skip}
                        </Button>
                      )}
                    </div>
                  </Box>
                </StepContent>
              )}
            </Step>
          );
        })}
      </MuiStepper>

      {activeStep === steps?.length ? (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>{allCompletedCmp}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={onDone}>Done</Button>
          </Box>
        </>
      ) : (
        (orientation === undefined || orientation === "horizontal") && (
          <>
            <Box sx={{ mt: 2, mb: 1 }}>{[].concat(children)[activeStep]}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                {LABELS.back}
              </Button>

              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={() => handleSkip(activeStep)}
                  sx={{ mr: 1 }}
                >
                  {LABELS.skip}
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps?.length - 1 ? LABELS.done : LABELS.next}
              </Button>
            </Box>
          </>
        )
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
  stepIndex: PropTypes.number,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  stepsBottomLabel: PropTypes.bool,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  onReset: PropTypes.func,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  onDone: PropTypes.func,
  stepsIndexSkipped: PropTypes.arrayOf(PropTypes.number),
  allCompletedCmp: PropTypes.node,
  unmountOnExit: PropTypes.bool,
  labels: {
    next: PropTypes.string,
    back: PropTypes.string,
    done: PropTypes.string,
    skip: PropTypes.string,
    optional: PropTypes.string,
  },
};

Stepper.defaultProps = {
  steps: undefined,
  stepIndex: undefined,
  stepsBottomLabel: undefined,
  muiColor: undefined,
  customColor: undefined,
  orientation: undefined,
  onReset: undefined,
  onNext: undefined,
  onBack: undefined,
  onSkip: undefined,
  onDone: undefined,
  stepsIndexSkipped: undefined,
  allCompletedCmp: undefined,
  labels: undefined,
  unmountOnExit: true,
};
