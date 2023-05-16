import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ButtonGroup as MuiButtonGroup } from "./Button.styled";

const ButtonGroup = ({
  variant,
  disabled,
  customColor,
  muiColor,
  size,
  orientation,
  disableElevation,
  disableRipple,
  fullWidth,
  children,
  ...props
}) => {
  const buttons = []
    .concat(children ?? [])
    .filter((child) => child.type.name === Button.name)
    .map((child, index, arr) => {
      return React.cloneElement(child, {
        key: `B${index}`,
        disableElevation,
        ...{ customColor: child.props.customColor ?? customColor },
      });
    })
    .filter(Boolean);

  return (
    <MuiButtonGroup
      variant={variant}
      disabled={disabled}
      color={muiColor}
      customColor={customColor}
      size={size}
      orientation={orientation}
      disableElevation={disableElevation}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      {...props}
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
  disableRipple: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  variant: undefined,
  disabled: false,
  customColor: undefined,
  muiColor: undefined,
  size: undefined,
  orientation: undefined,
  disableElevation: undefined,
  disableRipple: undefined,
  fullWidth: undefined,
};

export default ButtonGroup;
