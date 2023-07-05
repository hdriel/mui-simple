import { useState } from 'react';

export const useSimpleStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipSteps, setSkipSteps] = useState([]);

    return {
        stepIndex: activeStep,
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
        stepsIndexSkipped: skipSteps,
    };
};
