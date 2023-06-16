import React from "react";
import PropTypes from "prop-types";
import { Timeline as MuiTimeline } from "./Timeline.styled";
import TimelineItem from "./TimelineItem";

export default function Timeline({
  color,
  variant,
  position,
  steps: _steps,
  useZigZagStyle,
  ...props
}) {
  const steps =
    _steps?.map((step, index, arr) => {
      if (typeof step === "string") {
        step = { title: step };
      }

      return {
        variant: step.variant ?? variant,
        color: step.color ?? color,
        icon: step.icon,
        title: step.title,
        subtitle: step.subtitle,
        connector: index !== arr.length - 1,
      };
    }) ?? [];

  return (
    <MuiTimeline position={useZigZagStyle ? "alternate" : position} {...props}>
      {steps.map((step) => (
        <TimelineItem {...step} />
      ))}
    </MuiTimeline>
  );
}

Timeline.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.string,
  useZigZagStyle: PropTypes.bool,
};

Timeline.defaultProps = {
  variant: undefined,
  color: undefined,
  useZigZagStyle: undefined,
};
