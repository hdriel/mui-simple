import React from 'react';
import { Timeline as MuiTimeline } from './Timeline.styled';
import TimelineItem from './TimelineItem';
import { Box } from '@mui/material';
import { useMaxWidth, useSteps } from './Timeline.hooks';

export interface TimeLineStepProps {
    variant?: 'filled' | 'outlined';
    color?: string;
    connectorColor?: string;
    connectorHeight?: number;
    connectorWidth?: number;
    icon?: string | React.ReactNode | React.ReactElement;
    title?: string;
    subtitle?: string;
    time?: string;
    timeFormat?: string;
}

export type TimeLineStepState = string | TimeLineStepProps;

interface TimeLineProps {
    variant?: 'filled' | 'outlined';
    color?: string;
    connectorColor?: string;
    connectorHeight?: string | number;
    connectorWidth?: string | number;
    connectorStyle?: string;
    timeFormat?: string;
    right?: boolean;
    left?: boolean;
    zigzag?: boolean;
    align?: 'right' | 'left' | 'center';
    position?: any;
    steps?: Array<TimeLineStepState>;
}

const Timeline: React.FC<TimeLineProps> = ({
    color,
    connectorColor,
    connectorHeight,
    connectorWidth,
    variant,
    steps: _steps = [] as Array<TimeLineStepState>,
    timeFormat = 'HH:mm',
    right = false,
    left = false,
    zigzag = false,
    position: _position,
    align = 'center',
    ...props
}) => {
    const steps = useSteps({
        steps: _steps,
        variant,
        color,
        connectorColor,
        connectorHeight,
        connectorWidth,
        timeFormat,
    });

    const position = [zigzag && 'alternate', left && 'left', right && 'right', _position || 'right'].find((val) => val);

    const { timeWidth, titleWidth } = useMaxWidth({ steps });

    return (
        <Box sx={{ display: 'flex', border: '1px solid', justifyContent: align }}>
            <MuiTimeline position={position} {...props} sx={{ maxWidth: 'max-content' }}>
                {steps.map((step: TimeLineStepProps, index: number) => (
                    <TimelineItem
                        key={index}
                        {...step}
                        timeWidth={position === 'alternate' ? titleWidth : timeWidth}
                        titleWidth={titleWidth}
                    />
                ))}
            </MuiTimeline>
        </Box>
    );
};

export default Timeline;
