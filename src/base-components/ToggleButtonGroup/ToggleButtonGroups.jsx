import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  ToggleButtonGroups as MuiToggleButtonGroups,
} from "./ToggleButtonGroup.styled";
import ToggleButtonGroup from "./ToggleButtonGroup";

const ToggleButtonGroups = ({
  fullWidth,
  disableRipple,
  children,
  ...props
}) => {
  const groups = []
    .concat(children)
    .filter((child) => child.type.name === ToggleButtonGroup.name)
    .map((child, index, arr) => [
      React.cloneElement(child, { disableRipple }),
      index !== arr.length - 1 ? <Divider /> : null,
    ])
    .filter(Boolean);

  return (
    <MuiToggleButtonGroups fullWidth={fullWidth} {...props}>
      {groups}
    </MuiToggleButtonGroups>
  );
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
