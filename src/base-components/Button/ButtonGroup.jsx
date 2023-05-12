import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ButtonGroup as MuiButtonGroup } from "./Button.styled";
import { Divider } from "../ToggleButtonGroup/ToggleButtonGroup.styled";

const ButtonGroup = ({
  variant,
  disabled,
  color,
  muiColor,
  size,
  orientation,
  disableElevation,
  children,
  ...props
}) => {
  const buttons = []
    .concat(children)
    .filter((child) => child.type.name === Button.name)
    .map((child, index, arr) =>
      React.cloneElement(child, {
        key: `B${index}`,
        disabled,
        disableElevation,
      })
    )
    .filter(Boolean);

  return (
    <MuiButtonGroup
      variant={variant}
      disabled={disabled}
      color={muiColor}
      size={size}
      orientation={orientation}
      disableElevation={disableElevation}
    >
      {buttons}
    </MuiButtonGroup>
  );
};

ButtonGroup.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  color: PropTypes.string,
  muiColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  disableElevation: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  variant: "contained",
  disabled: false,
  size: undefined,
  orientation: undefined,
  disableElevation: undefined,
};

export default ButtonGroup;
