import React from "react";
import PropTypes from "prop-types";
import { LinearProgress as MuiLinearProgress } from "./Progress.styled";

export default function LinearProgress({ test, ...props }) {
  return <MuiLinearProgress {...props} />;
}

LinearProgress.propTypes = {
  test: PropTypes.string,
};

LinearProgress.defaultProps = {
  test: undefined,
};
