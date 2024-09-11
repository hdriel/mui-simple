import React from 'react';

import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem as MuiTimelineItem,
    TimelineSeparator,
    TimelineOppositeContent,
} from './Timeline.styled';
import Typography from '../_FIXED/Typography/Typography';
import { useCustomColor } from '../../utils/helpers';

interface TimeLineItemProps {
    variant: 'filled' | 'outlined';
    color: string;
    icon: string | React.ReactNode | React.ReactElement;
    title: string;
    subtitle: string;
    time: string;
    timeFormat: string;
    connector: boolean;
    connectorColor: string;
    connectorHeight: string | number;
    connectorWidth: string | number;
}

const TimelineItem: React.FC<TimeLineItemProps> = ({
    variant,
    color,
    connectorColor,
    connectorHeight,
    connectorWidth,
    icon,
    title,
    subtitle,
    time,
    connector,
    timeWidth,
    titleWidth,
    ...props
}) => {
    const [customColor, muiColor] = useCustomColor(color);
    const [customColorConnector] = useCustomColor(connectorColor);

    let mt = '-3px';
    if (icon && subtitle) mt = '0';
    if (icon && !subtitle) mt = '8px';

    return (
        <MuiTimelineItem {...props}>
            {
                <TimelineOppositeContent
                    sx={{ mx: 0, mt: icon ? '16px' : '3px', minWidth: timeWidth }}
                    variant="body2"
                    color="text.secondary"
                >
                    {time}
                </TimelineOppositeContent>
            }

            <TimelineSeparator>
                <TimelineDot variant={variant} color={muiColor} customColor={muiColor ? undefined : customColor}>
                    {icon}
                </TimelineDot>
                {connector && (
                    <TimelineConnector
                        sx={{
                            bgcolor: customColorConnector,
                            minHeight: connectorHeight,
                            width: connectorWidth,
                            borderRadius: '25px',
                        }}
                    />
                )}
            </TimelineSeparator>

            <TimelineContent
                sx={{
                    mt,
                    py: 'px',
                    px: 2,
                    minWidth: titleWidth,
                }}
            >
                {title && (
                    <Typography variant="h6" component="span">
                        {title}
                    </Typography>
                )}

                {subtitle && <Typography component="span">{subtitle}</Typography>}
            </TimelineContent>
        </MuiTimelineItem>
    );
};

export default TimelineItem;
