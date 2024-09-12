import React from 'react';
import { Timeline as MuiTimeline } from './Timeline.styled';
import TimelineItem from './TimelineItem';
import { Box } from '@mui/material';
import { useMaxWidth, useSteps } from './Timeline.hooks';

interface TimeLineProps {
    variant: 'filled' | 'outlined';
    color: string;
    connectorColor: string;
    connectorHeight: string | number;
    connectorWidth: string | number;
    connectorStyle: string;
    timeFormat: string;
    right: boolean;
    left: boolean;
    zigzag: boolean;
    align: 'right' | 'left' | 'center';
    steps: Array<
        | string
        | {
              variant: 'filled' | 'outlined';
              color: string;
              connectorColor: string;
              icon: string | React.ReactNode | React.ReactElement;
              title: string;
              subtitle: string;
              time: string;
              timeFormat: string;
          }
    >;
}

const Timeline: React.FC<TimeLineProps> = ({
    color,
    connectorColor,
    connectorHeight,
    connectorWidth,
    variant,
    steps: _steps = [],
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
                {steps.map((step, index) => (
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
