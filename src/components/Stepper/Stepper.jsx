import React, { useMemo, cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";

import {
  Typography,
  Button,
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Box,
  StepConnector,
  ConnectorStepIconRoot,
  QontoStepIconRoot,
  QontoConnector,
} from "./Stepper.styled";
import { getCustomColor, useCustomColor } from "../../utils/helpers";
import { useTheme } from "@mui/material/styles";

export default function Stepper({
  optionalLabel,
  steps: _steps,
  stepIndex: activeStep,
  stepsBottomLabel,
  color,
  orientation,
  onNext,
  onBack,
  onSkip,
  onDone,
  stepsIndexSkipped,
  allCompletedCmp,
  labels,
  stepsOnlyWithoutComplete,
  unmountOnExit,
  qontoStyle,
  customStyleProps,
  children,
  ...props
}) {
  const theme = useTheme();
  const [customColor] = useCustomColor(color);

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
        const [stepColor] = getCustomColor({ theme, customColor: step?.color });
        const [errorColor] = getCustomColor({
          theme,
          customColor: step?.error === true ? "error" : step?.error,
        });
        const scolor = stepColor ?? color ?? errorColor;

        return typeof step === "string"
          ? { label: step, optional: false }
          : {
              ...step,
              color: scolor,
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

  const icons = useMemo(
    () =>
      steps
        .map((step) => step.icon)
        .reduce(
          (obj, icon) => ({ ...obj, [Object.keys(obj).length + 1]: icon }),
          {}
        ),
    [steps]
  );
  const iconListSize = Object.values(icons).filter(Boolean).length;
  const isCustomStyleUsed = Object.values(customStyleProps ?? {}).filter(
    Boolean
  ).length;

  const ConnectorStepIconMemo = useMemo(() => {
    return !qontoStyle && (iconListSize || isCustomStyleUsed)
      ? function ConnectorStepIcon({ icon, active, completed, className }) {
          return (
            <ConnectorStepIconRoot
              ownerState={{ completed, active }}
              className={className}
              background={customStyleProps?.background}
              fontSize={customStyleProps?.fontSize}
              padding={customStyleProps?.padding}
            >
              {icons?.[String(icon)] ?? icon}
            </ConnectorStepIconRoot>
          );
        }
      : undefined;
  }, [
    icons,
    iconListSize,
    qontoStyle,
    isCustomStyleUsed,
    customStyleProps?.background,
    customStyleProps?.fontSize,
    customStyleProps?.padding,
  ]);

  const QontoStepIconMemo = useMemo(() => {
    return qontoStyle
      ? function ConnectorStepIcon({ icon, active, completed, className }) {
          const dotIcon = isValidElement(customStyleProps?.dotIcon) ? (
            cloneElement(customStyleProps.dotIcon, {})
          ) : (
            <div className="QontoStepIcon-circle" color={color} />
          );

          const checkIcon = isValidElement(customStyleProps?.checkIcon) ? (
            cloneElement(customStyleProps.checkIcon, {
              className: "QontoStepIcon-completedIcon",
            })
          ) : (
            <CheckIcon
              className="QontoStepIcon-completedIcon"
              sx={{ fontSize: customStyleProps?.fontSize ?? "22px" }}
            />
          );

          return (
            <QontoStepIconRoot
              ownerState={{ active }}
              className={className}
              background={customStyleProps?.background}
              padding={customStyleProps?.padding}
              fontSize={customStyleProps?.fontSize}
              color={customColor}
            >
              {completed ? checkIcon : customStyleProps?.dotIcon ?? dotIcon}
            </QontoStepIconRoot>
          );
        }
      : undefined;
  }, [
    qontoStyle,
    customStyleProps?.background,
    customStyleProps?.padding,
    customStyleProps?.fontSize,
    customStyleProps?.dotIcon,
    customStyleProps?.checkIcon,
    customColor,
    color,
  ]);

  const isStepOptional = (index) => steps?.[index]?.optional;
  const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
  const handleNext = () => onNext?.(activeStep);
  const handleBack = () => onBack?.(activeStep);
  const handleSkip = (index) => isStepOptional(index) && onSkip?.(index);

  const connector = qontoStyle ? (
    <QontoConnector
      orientation={orientation ?? ""}
      color={customColor}
      {...customStyleProps}
    />
  ) : iconListSize || isCustomStyleUsed ? (
    <StepConnector
      orientation={orientation ?? ""}
      color={customColor}
      {...customStyleProps}
    />
  ) : undefined;

  return (
    <Box sx={{ width: "100%" }}>
      <MuiStepper
        nonLinear={stepsOnlyWithoutComplete}
        activeStep={activeStep}
        alternativeLabel={stepsBottomLabel}
        orientation={orientation ?? undefined}
        connector={connector}
        marginContent={customStyleProps?.marginContent}
        {...props}
      >
        {steps?.map((step, index) => (
          <Step
            key={index}
            completed={isStepSkipped(index) ? false : undefined}
          >
            <StepLabel
              error={step.error}
              StepIconComponent={QontoStepIconMemo || ConnectorStepIconMemo}
              color={step.color}
              optional={
                isStepOptional(index) ? (
                  <Typography variant="caption">{step.optional}</Typography>
                ) : undefined
              }
            >
              {step.label}
            </StepLabel>

            {orientation === "vertical" && (
              <StepContent
                TransitionProps={{ unmountOnExit }}
                lineWidth={customStyleProps?.lineWidth}
                marginContent={customStyleProps?.marginContent}
                lineColor={
                  customStyleProps?.lineColor?.includes("gradient")
                    ? undefined
                    : customStyleProps?.lineColor
                }
              >
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
                      color={step.color}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {LABELS.next}
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
                        color={step.color}
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
        ))}
      </MuiStepper>

      {steps?.length ? (
        activeStep === steps?.length ? (
          <>
            <Box sx={{ mt: 2, mb: 1 }}>{allCompletedCmp}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={onDone}>Done</Button>
            </Box>
          </>
        ) : orientation === "vertical" ? undefined : (
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

              <Button onClick={handleNext}>{LABELS.next}</Button>
            </Box>
          </>
        )
      ) : undefined}
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
        color: PropTypes.string,
        error: PropTypes.bool,
        icon: PropTypes.node,
      }),
    ])
  ),
  stepIndex: PropTypes.number,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  stepsOnlyWithoutComplete: PropTypes.bool,
  stepsBottomLabel: PropTypes.bool,
  color: PropTypes.string,
  onReset: PropTypes.func,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  onDone: PropTypes.func,
  stepsIndexSkipped: PropTypes.arrayOf(PropTypes.number),
  allCompletedCmp: PropTypes.node,
  unmountOnExit: PropTypes.bool,
  labels: PropTypes.shape({
    next: PropTypes.string,
    back: PropTypes.string,
    done: PropTypes.string,
    skip: PropTypes.string,
    optional: PropTypes.string,
  }),
  qontoStyle: PropTypes.bool,
  customStyleProps: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    background: PropTypes.string,
    lineColor: PropTypes.string,
    padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    lineWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    checkIcon: PropTypes.node,
    dotIcon: PropTypes.node,
  }),
};

Stepper.defaultProps = {
  steps: undefined,
  stepsOnlyWithoutComplete: undefined,
  stepIndex: undefined,
  stepsBottomLabel: undefined,
  color: undefined,
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
  qontoStyle: undefined,
  customStyleProps: undefined,
};
