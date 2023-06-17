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
  color,
  icon,
  title,
  subtitle,
  time,
  connector,
  timeWidth,
  titleWidth,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);
  let mt = "-3px";
  if (icon && subtitle) mt = "0";
  if (icon && !subtitle) mt = "8px";

  return (
    <MuiTimelineItem {...props}>
      {
        <TimelineOppositeContent
          sx={{ mx: 0, mt: icon ? "16px" : "3px", minWidth: timeWidth }}
          variant="body2"
          color="text.secondary"
        >
          {time}
        </TimelineOppositeContent>
      }

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

      <TimelineContent sx={{ mt, py: "px", px: 2, minWidth: titleWidth }}>
        {title && (
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        )}

        {subtitle && <Typography component="span">{subtitle}</Typography>}
      </TimelineContent>
    </MuiTimelineItem>
  );
}

TimelineItem.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  time: PropTypes.string,
  timeFormat: PropTypes.string,
  connector: PropTypes.bool,
};

TimelineItem.defaultProps = {
  variant: undefined,
  color: undefined,
  icon: undefined,
  title: undefined,
  subtitle: undefined,
  time: undefined,
  timeFormat: undefined,
  connector: undefined,
};
