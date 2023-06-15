import React from "react";
import PropTypes from "prop-types";
import { Timeline as MuiTimeline } from "./Timeline.styled";
import TimelineItem from "./TimelineItem";

export default function Timeline({ position, steps, ...props }) {
  return (
    <MuiTimeline position={position}>
      {steps.map((step) => (
        <TimelineItem {...step} />
      ))}
    </MuiTimeline>
  );
}

Timeline.propTypes = {
  test: PropTypes.string,
};

Timeline.defaultProps = {
  test: undefined,
};
