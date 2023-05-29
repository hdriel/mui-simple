import React from "react";
import PropTypes from "prop-types";
import { Box } from "./Tabs.styled";

export default function Tab({ props }) {
  return <Box {...props} />;
}

Tab.propTypes = {
  iconPosition: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  label: PropTypes.string,
  value: PropTypes.string,
  open: PropTypes.bool,
  wrapped: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  link: PropTypes.string,
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
};

Tab.defaultProps = {
  iconPosition: undefined,
  label: undefined,
  value: undefined,
  open: undefined,
  wrapped: undefined,
  disabled: undefined,
  disableRipple: undefined,
  icon: undefined,
  link: undefined,
  onClick: undefined,
  tooltip: undefined,
};
