import type { StepType } from '../../../decs';

interface UseStepperIndexHookProps {
    stepsIndexSkipped: number[];
    steps: StepType[];
    onNext: (stepIndex: number) => void;
    onBack: (stepIndex: number) => void;
    onSkip: (stepIndex: number) => void;
    activeStep: number;
}
interface UseStepperIndexHookResponse {
    isStepOptional: (stepperIndex: number) => boolean;
    isStepSkipped: (stepperIndex: number) => boolean;
    handleNext: (forceNextStepperIndexValue?: number) => void;
    handleBack: (forceBackStepperIndexValue?: number) => void;
    handleSkip: (stepperIndex: number) => void;
}

export const useStepperIndexHook = ({
    stepsIndexSkipped,
    steps,
    onNext,
    onBack,
    onSkip,
    activeStep,
}: UseStepperIndexHookProps): UseStepperIndexHookResponse => {
    const isStepOptional = (index: number): boolean | undefined => !!steps?.[index]?.optional;
    const isStepSkipped = (index: number): boolean | undefined => stepsIndexSkipped?.includes(index);
    const handleNext = (forceNextStepperIndexValue: number): void => onNext?.(forceNextStepperIndexValue ?? activeStep);
    const handleBack = (forceBackStepperIndexValue: number): void => onBack?.(forceBackStepperIndexValue ?? activeStep);
    const handleSkip = (index: number): void => {
        if (isStepOptional(index)) onSkip?.(index);
    };

    return {
        isStepOptional,
        isStepSkipped,
        handleNext,
        handleBack,
        handleSkip,
    };
};
