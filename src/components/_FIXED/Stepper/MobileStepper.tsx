import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    AutoPlaySwipeableViews,
    Box,
    Button,
    CheckIcon,
    KeyboardArrowLeftIcon,
    KeyboardArrowRightIcon,
    MobileStepper as MuiMobileStepper,
    Paper,
    SwipeableViews,
    Typography,
} from './MobileStepper.styled';
import type { MobileStepperProps } from '../../decs';
import { useStepperIndexHook, useStepperSteps } from './hooks';

const MobileStepper: React.FC<MobileStepperProps> = (props): React.ReactElement => {
    const {
        autoPlay,
        autoPlayInterval,
        BACK_LABEL,
        children,
        color,
        customStyleProps,
        DONE_LABEL,
        height,
        infiniteLoop,
        labels,
        maxWidth,
        NEXT_LABEL,
        onBack,
        onDone,
        onNext,
        onSkip,
        OPTIONAL_LABEL,
        position,
        SKIP_LABEL,
        stepIndex: activeStep,
        steps: _steps,
        stepsIndexSkipped,
        swipeable,
        variant,
        ...rest
    } = props;
    const theme = useTheme();
    const [autoPlayState, setAutoPlayState] = useState(autoPlay);
    const isLTR = theme.direction === undefined || theme.direction.toLocaleLowerCase() === 'ltr';
    const forceFixedDirection = variant === 'text';

    // Todo: assert if this is the correct type to be as the HandleNext/Back param (number)

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
    // const isStepOptional = (index) => steps?.[index]?.optional;
    // const isStepSkipped = (index) => stepsIndexSkipped?.includes(index);
    // const handleSkip = (index) => isStepOptional(index) && onSkip?.(index);
    const maxSteps = steps.length;

    const [backIconProp, nextIconProp] = useMemo(() => {
        if (forceFixedDirection && !isLTR) {
            return [{ endIcon: <KeyboardArrowRightIcon /> }, { startIcon: <KeyboardArrowLeftIcon /> }];
        }
        return isLTR
            ? [{ startIcon: <KeyboardArrowLeftIcon /> }, { endIcon: <KeyboardArrowRightIcon /> }]
            : [
                  { startIcon: isLTR ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon /> },
                  { endIcon: isLTR ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon /> },
              ];
    }, [forceFixedDirection, isLTR]);

    const nextButton =
        activeStep === maxSteps - 1 ? (
            <Button
                size="small"
                onClick={onDone}
                color={color}
                {...nextIconProp}
                sx={{ gap: '8px' }}
                startIcon={nextIconProp.endIcon ? <CheckIcon /> : undefined}
                endIcon={nextIconProp.startIcon ? <CheckIcon /> : undefined}
            >
                {DONE_LABEL}
            </Button>
        ) : (
            <Button
                size="small"
                onClick={() => handleNext(activeStep)}
                disabled={activeStep === maxSteps - 1}
                color={color}
                sx={{ gap: '8px' }}
                {...nextIconProp}
            >
                {NEXT_LABEL}
            </Button>
        );

    const backButton = (
        <Button
            size="small"
            onClick={() => handleBack(activeStep)}
            disabled={activeStep === 0}
            color={color}
            sx={{ gap: '8px' }}
            {...backIconProp}
        >
            {BACK_LABEL}
        </Button>
    );

    useEffect(() => {
        setAutoPlayState(autoPlay);
    }, [autoPlay]);

    return (
        <Box sx={{ maxWidth, flexGrow: 1, position: 'relative' }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep % maxSteps]?.label}</Typography>
            </Paper>

            <Box
                sx={{
                    height,
                    minHeight: height,
                    maxWidth,
                    width: '100%',
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                }}
            >
                {swipeable && autoPlayState && (
                    <AutoPlaySwipeableViews
                        autoplay={autoPlayState}
                        interval={autoPlayInterval}
                        axis={isLTR ? 'x' : 'x-reverse'}
                        enableMouseEvents
                        index={activeStep}
                        onChangeIndex={(step) => {
                            if (step === maxSteps - 1 && !infiniteLoop) {
                                /* Todo: assert if the code change was surely ok, prev code was:
                                setTimeout(() => setAutoPlayState(false), [autoPlayInterval - 10]); */
                                setTimeout(() => setAutoPlayState(false), autoPlayInterval - 10);
                            }
                            handleNext(step - 1);
                        }}
                    >
                        {[].concat(children)}
                    </AutoPlaySwipeableViews>
                )}
                {swipeable && !autoPlayState && (
                    <SwipeableViews
                        axis={isLTR ? 'x' : 'x-reverse'}
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
                {...rest}
            />
        </Box>
    );
};

MobileStepper.defaultProps = {
    autoPlay: undefined,
    autoPlayInterval: undefined,
    BACK_LABEL: 'Back',
    color: undefined,
    DONE_LABEL: 'Done',
    height: 255,
    infiniteLoop: undefined,
    labels: undefined,
    maxWidth: 400,
    NEXT_LABEL: 'Next',
    onBack: undefined,
    onDone: undefined,
    onNext: undefined,
    onSkip: undefined,
    OPTIONAL_LABEL: 'Optional',
    position: 'static',
    SKIP_LABEL: 'Skip',
    steps: undefined,
    stepsIndexSkipped: undefined,
    swipeable: true,
    variant: undefined,
};

export type { MobileStepperProps } from '../../decs';
export default MobileStepper;
