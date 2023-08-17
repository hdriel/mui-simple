import type { StepType } from '../../decs';
import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { getCustomColor } from '../../../utils/helpers';
import SVGIcon from '../../SVGIcon/SVGIcon';

interface UseStepperStepsHookProps {
    color: string;
    steps: Array<string | StepType>;
    customStyleProps: Record<string, any>;
    OPTIONAL_LABEL: string | undefined;
}
interface UseStepperStepsHookResponse {
    steps: StepType[];
    icons: any;
    iconListSize: any;
    isCustomStyleUsed: any;
}

export const useStepperSteps = ({
    color,
    steps: _steps,
    customStyleProps,
    OPTIONAL_LABEL,
}: UseStepperStepsHookProps): UseStepperStepsHookResponse => {
    const theme = useTheme();

    const steps = useMemo(
        () =>
            _steps?.map((step: StepType) => {
                const [stepColor] = getCustomColor({ theme, customColor: step?.color });
                const [errorColor] = getCustomColor({
                    theme,
                    customColor: step?.error ? 'error' : step?.error,
                });
                const scolor = stepColor ?? color ?? errorColor;
                const icon = typeof step?.icon === 'string' ? <SVGIcon>{step.icon}</SVGIcon> : step?.icon;

                return typeof step === 'string'
                    ? { label: step, optional: false, icon }
                    : {
                          ...step,
                          color: scolor,
                          icon,
                          optional: step.optional
                              ? typeof step.optional === 'string'
                                  ? step.optional
                                  : OPTIONAL_LABEL
                              : false,
                      };
            }) ?? [],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [_steps]
    );

    const icons = useMemo(
        () =>
            steps
                .map((step: StepType) => step.icon)
                .reduce((obj, icon) => ({ ...obj, [Object.keys(obj).length + 1]: icon }), {}),
        [steps]
    );
    const iconListSize = Object.values(icons).filter(Boolean).length;
    const isCustomStyleUsed = Object.values(customStyleProps ?? {}).filter(Boolean).length;

    return {
        steps,
        icons,
        iconListSize,
        isCustomStyleUsed,
    };
};
