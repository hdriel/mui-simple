import React from "react";
import PropTypes from "prop-types";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineOppositeContent,
} from "./Timeline.styled";
import Typography from "../Typography/Typography";

export default function TimelineItem({
  variant,
  color,
  icon,
  title,
  subtitle,
  ...props
}) {
  return (
    <TimelineItem {...props}>
      <TimelineOppositeContent color="text.secondary">
        09:30 am
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant={variant} color={color}>
          {icon}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {title && (
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        )}
        {subtitle && <Typography>{subtitle}</Typography>}
      </TimelineContent>
    </TimelineItem>
  );
}

TimelineItem.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

TimelineItem.defaultProps = {
  variant: undefined,
  color: undefined,
  icon: undefined,
  title: undefined,
  subtitle: undefined,
};
