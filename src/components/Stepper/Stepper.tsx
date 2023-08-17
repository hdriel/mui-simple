import React from 'react';
import type { ReactElement } from 'react';
import {
    Typography,
    Button,
    Stepper as MuiStepper,
    Step,
    StepLabel,
    StepContent,
    Box,
    ActionContainer,
    ActionButton,
    Container,
    VerticalActionContainer,
    ContentContainer,
    FullSpaceBox,
} from './Stepper.styled';
import { useCustomColor } from '../../utils/helpers';
import type { StepperProps, StepType } from '../decs';
import { useStepperIndexHook, useStepperSteps, useStepperConnector } from './hooks';

const Stepper: React.FC<StepperProps> = ({
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
}): ReactElement => {
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
        <Container>
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
                                <ActionContainer>
                                    <div>
                                        <ActionButton variant="contained" onClick={handleNext} color={step.color}>
                                            {NEXT_LABEL}
                                        </ActionButton>
                                        {index !== 0 && (
                                            <ActionButton color="inherit" disabled={index === 0} onClick={handleBack}>
                                                {BACK_LABEL}
                                            </ActionButton>
                                        )}
                                    </div>
                                    <div>
                                        {isStepOptional(index) && (
                                            <ActionButton onClick={() => handleSkip(index)} color={step.color}>
                                                {SKIP_LABEL}
                                            </ActionButton>
                                        )}
                                    </div>
                                </ActionContainer>
                            </StepContent>
                        )}
                    </Step>
                ))}
            </MuiStepper>

            {steps?.length ? (
                activeStep === steps?.length ? (
                    <>
                        <ContentContainer>{allCompletedCmp}</ContentContainer>
                        <VerticalActionContainer>
                            <FullSpaceBox />
                            <Button onClick={onDone}>{DONE_LABEL}</Button>
                        </VerticalActionContainer>
                    </>
                ) : orientation === 'vertical' ? undefined : (
                    <>
                        <ContentContainer>{[].concat(children)[activeStep]}</ContentContainer>

                        <VerticalActionContainer>
                            <ActionButton color="inherit" onClick={handleBack} disabled={activeStep === 0}>
                                {BACK_LABEL}
                            </ActionButton>

                            <FullSpaceBox />

                            {isStepOptional(activeStep) && (
                                <ActionButton color="inherit" onClick={() => handleSkip(activeStep)}>
                                    {SKIP_LABEL}
                                </ActionButton>
                            )}

                            <ActionButton onClick={handleNext}>{NEXT_LABEL}</ActionButton>
                        </VerticalActionContainer>
                    </>
                )
            ) : undefined}
        </Container>
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
