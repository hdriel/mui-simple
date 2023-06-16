import React from "react";
import PropTypes from "prop-types";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineOppositeContent,
} from "./Timeline.styled";
import Typography from "../Typography/Typography";
import { useCustomColor } from "../../utils/helpers";

export default function TimelineItem({
  variant,
  color: _color,
  icon,
  title,
  subtitle,
  secondaryTitle,
  connector,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(_color);

  return (
    <MuiTimelineItem {...props}>
      {secondaryTitle && (
        <TimelineOppositeContent color="text.secondary">
          {secondaryTitle}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineDot
          variant={variant}
          color={muiColor}
          customColor={muiColor ? undefined : customColor}
        >
          {icon}
        </TimelineDot>
        {connector && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        {title && (
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        )}
        {subtitle && <Typography>{subtitle}</Typography>}
      </TimelineContent>
    </MuiTimelineItem>
  );
}

TimelineItem.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  connector: PropTypes.bool,
};

TimelineItem.defaultProps = {
  variant: undefined,
  color: undefined,
  icon: undefined,
  title: undefined,
  subtitle: undefined,
  connector: undefined,
};
