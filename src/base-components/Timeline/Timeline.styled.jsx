import { styled } from "@mui/material/styles";
import {
  Timeline as MuiTimeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator as MuiTimelineSeparator,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent as MuiTimelineContent,
  TimelineDot as MuiTimelineDot,
  TimelineOppositeContent as MuiTimelineOppositeContent,
} from "@mui/lab";

export const Timeline = MuiTimeline;

export const TimelineItem = styled(MuiTimelineItem)`
  // width: max-content;
`;

export const TimelineSeparator = MuiTimelineSeparator;

export const TimelineConnector = MuiTimelineConnector;

export const TimelineContent = MuiTimelineContent;

export const TimelineDot = styled(MuiTimelineDot, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  background-color: ${(props) => props.customColor};
  &.MuiTimelineDot-outlined {
    background-color: unset;
    border-color: ${(props) => props.customColor};
  }
`;

export const TimelineOppositeContent = MuiTimelineOppositeContent;
