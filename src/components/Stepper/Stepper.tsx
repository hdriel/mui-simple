import React from 'react';
import type { ReactElement } from 'react';
import { Typography, Button, Stepper as MuiStepper, Step, StepLabel, StepContent, Box } from './Stepper.styled';
import { useCustomColor } from '../../utils/helpers';
import type { StepperProps, StepType } from '../decs';
import { useStepperIndexHook, useStepperSteps, useStepperConnector } from './hooks';

const Stepper: React.FC<StepperProps> = (props): ReactElement => {
    const {
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
        NEXT_LABEL,
        BACK_LABEL,
        SKIP_LABEL,
        DONE_LABEL,
        OPTIONAL_LABEL,
        children,
        ...rest
    } = props;
    const [customColor] = useCustomColor(color);

    const { steps, icons, iconListSize, isCustomStyleUsed } = useStepperSteps({
        color,
        steps: _steps,
        customStyleProps,
        OPTIONAL_LABEL,
    });

    const { handleNext, handleSkip, isStepOptional, isStepSkipped, handleBack } = useStepperIndexHook({
        steps,
        activeStep,
        stepsIndexSkipped,
        onSkip,
        onBack,
        onNext,
    });

    const { ConnectorStepIconMemo, QontoStepIconMemo, connector } = useStepperConnector({
        color: customColor,
        customStyleProps,
        isCustomStyleUsed,
        qontoStyle,
        icons,
        iconListSize,
        orientation,
    });

    return (
        <Box sx={{ width: '100%' }}>
            <MuiStepper
                nonLinear={stepsOnlyWithoutComplete}
                activeStep={activeStep}
                alternativeLabel={stepsBottomLabel}
                orientation={orientation ?? undefined}
                connector={connector}
                marginContent={customStyleProps?.marginContent}
                {...rest}
            >
                {steps?.map((step: StepType, index) => (
                    <Step key={index} completed={isStepSkipped(index) ? false : undefined}>
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

                        {orientation === 'vertical' && (
                            <StepContent
                                TransitionProps={{ unmountOnExit }}
                                lineWidth={customStyleProps?.lineWidth}
                                marginContent={customStyleProps?.marginContent}
                                lineColor={
                                    customStyleProps?.lineColor?.includes('gradient')
                                        ? undefined
                                        : customStyleProps?.lineColor
                                }
                            >
                                {[].concat(children)[index]}
                                <Box
                                    sx={{
                                        mb: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            color={step.color}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {NEXT_LABEL}
                                        </Button>
                                        {index !== 0 && (
                                            <Button
                                                color="inherit"
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {BACK_LABEL}
                                            </Button>
                                        )}
                                    </div>
                                    <div>
                                        {isStepOptional(index) && (
                                            <Button
                                                onClick={() => {
                                                    handleSkip(index);
                                                }}
                                                color={step.color}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {SKIP_LABEL}
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
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={onDone}>Done</Button>
                        </Box>
                    </>
                ) : orientation === 'vertical' ? undefined : (
                    <>
                        <Box sx={{ mt: 2, mb: 1 }}>{[].concat(children)[activeStep]}</Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                {BACK_LABEL}
                            </Button>

                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        handleSkip(activeStep);
                                    }}
                                    sx={{ mr: 1 }}
                                >
                                    {SKIP_LABEL}
                                </Button>
                            )}

                            <Button onClick={handleNext}>{NEXT_LABEL}</Button>
                        </Box>
                    </>
                )
            ) : undefined}
        </Box>
    );
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
    NEXT_LABEL: 'Next',
    BACK_LABEL: 'Back',
    SKIP_LABEL: 'Skip',
    DONE_LABEL: 'Done',
    OPTIONAL_LABEL: 'Optional',
};

export type { StepperProps } from '../decs';
export default Stepper;
