import type { StepType } from '../../decs';

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
    handleNext: () => void;
    handleBack: () => void;
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
    const handleNext = (): void => onNext?.(activeStep);
    const handleBack = (): void => onBack?.(activeStep);
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
