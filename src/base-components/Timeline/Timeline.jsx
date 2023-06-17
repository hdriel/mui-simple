import React from "react";
import PropTypes from "prop-types";
import { Timeline as MuiTimeline } from "./Timeline.styled";
import TimelineItem from "./TimelineItem";
import { Box } from "@mui/material";
import { useMaxWidth, useSteps } from "./Timeline.hooks";

export default function Timeline({
  color,
  variant,
  steps: _steps,
  timeFormat,
  right,
  left,
  zigzag,
  position: _position,
  ...props
}) {
  const steps = useSteps({ steps: _steps, variant, color, timeFormat });

  const position = [
    zigzag && "alternate",
    left && "left",
    right && "right",
    _position || "right",
  ].find((val) => val);

  const { timeWidth, titleWidth } = useMaxWidth({ steps });

  return (
    <Box sx={{ display: "flex", border: "1px solid" }}>
      <MuiTimeline position={position} {...props}>
        {steps.map((step, index) => (
          <TimelineItem
            key={index}
            {...step}
            timeWidth={position === "alternate" ? titleWidth : timeWidth}
            titleWidth={titleWidth}
          />
        ))}
      </MuiTimeline>
    </Box>
  );
}

Timeline.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  timeFormat: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
  zigzag: PropTypes.bool,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf(["filled", "outlined"]),
      color: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      time: PropTypes.string,
      timeFormat: PropTypes.string,
    })
  ),
};

Timeline.defaultProps = {
  variant: undefined,
  color: undefined,
  timeFormat: "HH:mm",
  right: false,
  left: false,
  zigzag: false,
  steps: [],
};
