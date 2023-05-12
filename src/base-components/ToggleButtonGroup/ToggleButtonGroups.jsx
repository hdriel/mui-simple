import React from "react";
import PropTypes from "prop-types";
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroups as MuiToggleButtonGroups,
} from "./ToggleButtonGroup.styled";

const ToggleButtonGroups = ({
  fullWidth,
  disableRipple,
  children,
  ...props
}) => {
  return <MuiToggleButtonGroups {...props}>{children}</MuiToggleButtonGroups>;
};

ToggleButtonGroups.propTypes = {
  fullWidth: PropTypes.bool,
  disableRipple: PropTypes.bool,
};

ToggleButtonGroups.defaultProps = {
  fullWidth: undefined,
  disableRipple: undefined,
};

export default ToggleButtonGroups;
