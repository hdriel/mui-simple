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
  let mt = "-3px";
  if (icon && subtitle) mt = "0";
  if (icon && !subtitle) mt = "8px";

  return (
    <MuiTimelineItem {...props}>
      {secondaryTitle && (
        <TimelineOppositeContent
          sx={{ mx: 0, mt: icon ? "16px" : "3px" }}
          variant="body2"
          color="text.secondary"
        >
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
      <TimelineContent sx={{ mt, py: "px", px: 2 }}>
        {title && (
          <Typography variant="h6" component="span" tooltip={false}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography component="span" tooltip={false}>
            {subtitle}
          </Typography>
        )}
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
