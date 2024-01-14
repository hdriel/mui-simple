import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { getTextWidth, isValidDateValue } from '../../../utils/helpers';
import type { TimelineProps, TimelineItemProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

export const useMaxWidth = ({
    steps,
}: Pick<TimelineProps, 'steps'>): { titleWidth: string | number; timeWidth: string | number } => {
    const maxTitle = steps
        .map(({ title, subtitle }) => ((title?.length ?? 0) > (subtitle?.length ?? 0) ? title : subtitle || ''))
        .reduce((maxTitle, title) => (maxTitle.length > title.length ? maxTitle : title), '');

    const maxTitleWidth = useMemo(() => {
        const { offsetWidth: itemWidth } = getTextWidth(maxTitle);
        return itemWidth ? itemWidth + 16 * 2 : 0;
    }, [maxTitle]);

    const maxTime = steps
        .map((step) => step.time || '')
        .reduce((maxTitle, time) => (maxTitle.length > time.length ? maxTitle : time), '');

    const maxTimeWidth = useMemo(() => {
        const { offsetWidth: itemWidth } = getTextWidth(maxTime);
        return itemWidth ? itemWidth + 16 * 2 : 0;
    }, [maxTime]);

    return { titleWidth: maxTitleWidth, timeWidth: maxTimeWidth };
};

export const useSteps = ({
    steps: _steps,
    timeFormat,
    variant,
    connectorColor,
    connectorHeight,
    connectorWidth,
    color,
}): TimelineItemProps[] => {
    const steps =
        _steps?.map((step, index, arr) => {
            if (typeof step === 'string') step = { title: step };
            let time = new Date(step.time);
            time = isValidDateValue(time) ? format(time, timeFormat ?? step.timeFormat ?? 'hh:mm a') : step.time;
            const icon = typeof step.icon === 'string' ? <SVGIcon>{step.icon}</SVGIcon> : step.icon;

            return {
                ...step,
                variant: step.variant ?? variant,
                color: step.color ?? color,
                connectorColor: step.connectorColor ?? connectorColor,
                connectorHeight: step.connectorHeight ?? connectorHeight,
                connectorWidth: step.connectorWidth ?? connectorWidth,
                icon,
                title: step.title,
                subtitle: step.subtitle,
                connector: index !== arr.length - 1,
                time,
            };
        }) ?? [];

    return steps;
};
