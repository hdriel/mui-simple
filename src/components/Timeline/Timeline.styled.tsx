import { styled } from '@mui/material/styles';
import {
    Timeline as MuiTimeline,
    TimelineItem as MuiTimelineItem,
    TimelineSeparator as MuiTimelineSeparator,
    TimelineConnector as MuiTimelineConnector,
    TimelineContent as MuiTimelineContent,
    TimelineDot as MuiTimelineDot,
    TimelineOppositeContent as MuiTimelineOppositeContent,
} from '@mui/lab';

export const Timeline = MuiTimeline;

export const TimelineItem = styled(MuiTimelineItem, {
    shouldForwardProp: (propName: string) => !['timeFormat'].includes(propName as string),
})`
    width: max-content;
`;

export const TimelineSeparator = MuiTimelineSeparator;

export const TimelineConnector = MuiTimelineConnector;

export const TimelineContent = MuiTimelineContent;

export const TimelineDot: any = styled(MuiTimelineDot, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})`
    background-color: ${(props: any) => props.customColor};
    &.MuiTimelineDot-outlined {
        background-color: unset;
        border-color: ${(props: any) => props.customColor};
    }
`;

export const TimelineOppositeContent = MuiTimelineOppositeContent;
