import React from "react";
import PropTypes from "prop-types";
import { Fab as MuiFab } from "./FloatingActionButton.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Fab({
  disabled,
  disableRipple,
  link,
  size,
  variant,
  color,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);

  return (
    <MuiFab
      disabled={disabled}
      disableRipple={disableRipple}
      href={link}
      size={size}
      variant={variant}
      customColor={muiColor ? undefined : customColor}
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
  color: PropTypes.string,
};

Fab.defaultProps = {
  disabled: undefined,
  disableRipple: undefined,
  link: undefined,
  size: undefined,
  variant: undefined,
  color: undefined,
};
