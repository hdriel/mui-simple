import React from "react";
import PropTypes from "prop-types";
import { Badge as MuiBadge } from "./Badge.styled";

export default function Badge({ test, ...props }) {
  return <MuiBadge {...props} />;
}

Badge.propTypes = {
  test: PropTypes.string,
};

Badge.defaultProps = {
  test: undefined,
};
