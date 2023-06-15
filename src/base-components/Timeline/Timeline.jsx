import React from "react";
import PropTypes from "prop-types";
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "./Timeline.styled";

export default function Timeline({ test, ...props }) {
  return <MuiTimeline></MuiTimeline>;
}

Timeline.propTypes = {
  test: PropTypes.string,
};

Timeline.defaultProps = {
  test: undefined,
};
