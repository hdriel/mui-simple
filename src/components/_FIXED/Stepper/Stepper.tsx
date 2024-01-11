import React from 'react';
import type { ReactElement } from 'react';
import {
    ActionButton,
    ActionContainer,
    Button,
    Container,
    ContentContainer,
    FullSpaceBox,
    Step,
    StepContent,
    StepLabel,
    Stepper as MuiStepper,
    Typography,
    VerticalActionContainer,
} from './Stepper.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { StepperProps, StepType } from '../../decs';
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
}): ReactElement | React.ReactNode => {
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
    allCompletedCmp: undefined,
    BACK_LABEL: 'Back',
    color: undefined,
    customStyleProps: undefined,
    DONE_LABEL: 'Done',
    NEXT_LABEL: 'Next',
    onBack: undefined,
    onDone: undefined,
    onNext: undefined,
    onReset: undefined,
    onSkip: undefined,
    OPTIONAL_LABEL: 'Optional',
    orientation: undefined,
    qontoStyle: undefined,
    SKIP_LABEL: 'Skip',
    stepIndex: undefined,
    steps: undefined,
    stepsBottomLabel: undefined,
    stepsIndexSkipped: undefined,
    stepsOnlyWithoutComplete: undefined,
    unmountOnExit: true,
};

export type { StepperProps } from '../../decs';
export default Stepper;
