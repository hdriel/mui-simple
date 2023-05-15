import React from "react";
import PropTypes from "prop-types";
import { Fab as MuiFab } from "./FloatingActionButton.styled";

export default function Fab({
  disabled,
  disableRipple,
  link,
  size,
  variant,
  customColor,
  muiColor,
  ...props
}) {
  return (
    <MuiFab
      disabled={disabled}
      disableRipple={disableRipple}
      href={link}
      size={size}
      variant={variant}
      customColor={customColor}
      color={muiColor}
      {...props}
    />
  );
}

Fab.propTypes = {
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  link: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["extended", "circular", "round"]),
  customColor: PropTypes.string,
  muiColor: PropTypes.string,
};

Fab.defaultProps = {
  disabled: undefined,
  disableRipple: undefined,
  link: undefined,
  size: undefined,
  variant: undefined,
  customColor: undefined,
  muiColor: undefined,
};
