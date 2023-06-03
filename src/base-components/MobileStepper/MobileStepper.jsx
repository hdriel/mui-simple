import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import {
  MobileStepper as MuiMobileStepper,
  Paper,
  Button,
  Typography,
  Box,
  AutoPlaySwipeableViews,
  SwipeableViews,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  CheckIcon,
} from "./MobileStepper.styled";

export default function MobileStepper({
  variant,
  position,
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
  autoPlay,
  autoPlayInterval,
  infiniteLoop,
  swipeable,
  height,
  maxWidth,
  children,
  ...props
}) {
  const theme = useTheme();
  const [autoPlayState, setAutoPlayState] = useState(autoPlay);
  const isLTR = theme.direction === "ltr";
  const forceFixedDirection = variant === "text";

  const LABELS = {
    next: labels?.next || "Next",
    back: labels?.back || "Back",
    skip: labels?.skip || "Skip",
    done: labels?.done || "Done",
  };

  const handleNext = (step) => onNext?.(step);
  const handleBack = (step) => onBack?.(step);
  // const isStepOptional = (index) => steps?.[index]?.optional;
  // const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
  // const handleSkip = (index) => isStepOptional(index) && onSkip?.(index);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_steps]
  );
  const maxSteps = steps.length;

  const [backIconProp, nextIconProp] = useMemo(() => {
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
  }, [forceFixedDirection, isLTR]);

  const nextButton =
    activeStep === maxSteps - 1 ? (
      <Button
        size="small"
        onClick={onDone}
        muiColor={muiColor}
        customColor={customColor}
        {...nextIconProp}
        startIcon={nextIconProp.endIcon ? <CheckIcon /> : undefined}
        endIcon={nextIconProp.startIcon ? <CheckIcon /> : undefined}
      >
        {LABELS.done}
      </Button>
    ) : (
      <Button
        size="small"
        onClick={() => handleNext(activeStep)}
        disabled={activeStep === maxSteps - 1}
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
      onClick={() => handleBack(activeStep)}
      disabled={activeStep === 0}
      muiColor={muiColor}
      customColor={customColor}
      {...backIconProp}
    >
      {LABELS.back}
    </Button>
  );

  useEffect(() => {
    setAutoPlayState(autoPlay);
  }, [autoPlay]);

  return (
    <Box sx={{ maxWidth, flexGrow: 1, position: "relative" }}>
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
        <Typography>{steps[activeStep % maxSteps]?.label}</Typography>
      </Paper>

      <Box
        sx={{
          height,
          minHeight: height,
          maxWidth,
          width: "100%",
          boxSizing: "border-box",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {swipeable && autoPlayState && (
          <AutoPlaySwipeableViews
            autoplay={autoPlayState}
            interval={autoPlayInterval}
            axis={isLTR ? "x" : "x-reverse"}
            enableMouseEvents
            index={activeStep}
            onChangeIndex={(step) => {
              if (step === maxSteps - 1 && !infiniteLoop) {
                setTimeout(
                  () => setAutoPlayState(false),
                  [autoPlayInterval - 10]
                );
              }
              handleNext(step - 1);
            }}
          >
            {[].concat(children)}
          </AutoPlaySwipeableViews>
        )}
        {swipeable && !autoPlayState && (
          <SwipeableViews
            axis={isLTR ? "x" : "x-reverse"}
            enableMouseEvents
            index={activeStep}
            onChangeIndex={(step) => handleNext(step - 1)}
          >
            {[].concat(children)}
          </SwipeableViews>
        )}
        {!swipeable && [].concat(children)[activeStep % maxSteps]}
      </Box>
      <MuiMobileStepper
        forceFixedDirection={forceFixedDirection}
        variant={variant}
        steps={maxSteps}
        position={position}
        activeStep={activeStep}
        nextButton={!forceFixedDirection || isLTR ? nextButton : backButton}
        backButton={!forceFixedDirection || isLTR ? backButton : nextButton}
        {...props}
      />
    </Box>
  );
}

MobileStepper.propTypes = {
  swipeable: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  infiniteLoop: PropTypes.bool,
  variant: PropTypes.oneOf(["text", "dots", "progress"]),
  position: PropTypes.oneOf(["bottom", "static", "top"]),
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
  labels: PropTypes.shape({
    next: PropTypes.string,
    back: PropTypes.string,
    done: PropTypes.string,
    skip: PropTypes.string,
    optional: PropTypes.string,
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MobileStepper.defaultProps = {
  swipeable: true,
  autoPlay: undefined,
  autoPlayInterval: undefined,
  infiniteLoop: undefined,
  steps: undefined,
  muiColor: undefined,
  customColor: undefined,
  onNext: undefined,
  onBack: undefined,
  onSkip: undefined,
  onDone: undefined,
  stepsIndexSkipped: undefined,
  labels: undefined,
  variant: undefined,
  position: "static",
  height: 255,
  maxWidth: 400,
};
