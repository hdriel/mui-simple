import { useState } from 'react';

interface SimpleStepperProps {
    stepIndex?: number;
    onReset?: () => void;
    onNext?: (stepId: number) => void;
    onBack?: (stepId: number) => void;
    onSkip?: (stepId: number) => void;
    stepsIndexSkipped?: number[];
}
export const useSimpleStepper = (): SimpleStepperProps => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipSteps, setSkipSteps] = useState([]);

    return {
        stepIndex: activeStep,
        stepsIndexSkipped: skipSteps,
        onReset: () => {
            setSkipSteps([]);
            setActiveStep(0);
        },
        onNext: (index: number) => {
            setSkipSteps((a) => a.filter((i) => i !== index));
            setActiveStep(index + 1);
        },
        onBack: (index: number) => setActiveStep(index - 1),
        onSkip: (index: number) => {
            setSkipSteps((a) => (a.includes(index) ? a : [...a, index]));
            setActiveStep(index + 1);
        },
    };
};
