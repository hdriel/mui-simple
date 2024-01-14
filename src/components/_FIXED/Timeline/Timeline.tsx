import React from 'react';
import { Timeline as MuiTimeline } from './Timeline.styled';
import TimelineItem from './TimelineItem';
import { Box } from '@mui/material';
import { useMaxWidth, useSteps } from './Timeline.hooks';
import type { TimelineProps } from '../../decs';

const Timeline: React.FC<TimelineProps> = ({
    align,
    border,
    color,
    connectorColor,
    connectorHeight,
    connectorWidth,
    left,
    position: _position,
    right,
    steps: _steps,
    timeFormat,
    variant,
    zigzag,
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
    const { timeWidth, titleWidth } = useMaxWidth({ steps });
    const position = [zigzag && 'alternate', left && 'left', right && 'right', _position || 'right'].find((val) => val);

    return (
        <Box
            sx={{ display: 'flex', border: typeof border === 'boolean' ? '1px solid' : border, justifyContent: align }}
        >
            <MuiTimeline position={position} {...props} sx={{ maxWidth: 'max-content' }}>
                {steps?.map((step, index) => (
                    <TimelineItem
                        key={index}
                        {...step}
                        timeWidth={position === 'alternate' ? titleWidth : timeWidth}
                        position={position}
                        titleWidth={titleWidth}
                    />
                ))}
            </MuiTimeline>
        </Box>
    );
};

Timeline.defaultProps = {
    variant: undefined,
    color: undefined,
    connectorColor: undefined,
    connectorHeight: undefined,
    connectorWidth: undefined,
    timeFormat: 'HH:mm',
    right: false,
    left: false,
    zigzag: false,
    border: undefined,
    steps: [],
    align: 'center',
};

export type { TimelineProps, TimelineItemProps } from '../../decs';
export default Timeline;
