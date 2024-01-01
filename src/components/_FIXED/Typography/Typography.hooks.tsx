import { useMemo } from 'react';

export const getAlign = ({ alignCenter, alignJustify, alignLeft, alignRight, align }): string => {
    switch (true) {
        case alignCenter:
            return 'center';
        case alignJustify:
            return 'justify';
        case alignLeft:
            return 'left';
        case alignRight:
            return 'right';
        default:
            return align || 'inherit';
    }
};

export function useTooltipMessage({ children, tooltip, showTooltipOnEllipsis, isEllipsis }): string {
    return useMemo(() => {
        const [defaultTooltip, childrenTooltip, customTooltip] = [
            children,
            tooltip === undefined || (typeof tooltip === 'boolean' && tooltip) ? children : undefined,
            typeof tooltip === 'string' ? tooltip : undefined,
        ];

        if (tooltip === false || (showTooltipOnEllipsis && !isEllipsis)) {
            return undefined;
        }

        if (showTooltipOnEllipsis && isEllipsis && (tooltip === true || tooltip === undefined)) {
            return customTooltip ?? childrenTooltip;
        }

        const result = customTooltip ?? childrenTooltip ?? defaultTooltip;
        return Array.isArray(result) ? result.join('') : result;
    }, [showTooltipOnEllipsis, isEllipsis, tooltip, children]);
}
