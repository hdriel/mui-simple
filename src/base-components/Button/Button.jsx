import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "./Button.styled";

const spinner = <CircularProgress muiColor="inherit" size={15} />;

const Button = ({
  variant,
  disabled,
  startIcon,
  endIcon,
  onClick,
  link,
  muiColor,
  color,
  disableRipple,
  isLoading,
  loadingIconPosition,
  loadingLabel,
  size,
  icon,
  children,
  ...props
}) => {
  if (icon || (isLoading && !loadingLabel && !startIcon && !endIcon)) {
    return (
      <MuiIconButton
        color={muiColor}
        customColor={color}
        style={{ color }}
        size={size}
        disableRipple={disableRipple}
        onClick={onClick}
        href={link}
      >
        {isLoading ? spinner : icon}
      </MuiIconButton>
    );
  }

  const startIconCmp = isLoading
    ? loadingIconPosition === "start" && startIcon && spinner
    : startIcon;

  const endIconCmp = isLoading
    ? loadingIconPosition === "end" && endIcon && spinner
    : endIcon;

  const content = isLoading
    ? loadingLabel || (!startIconCmp && !endIconCmp && children) || children
    : children;

  return (
    <MuiButton
      variant={variant}
      disabled={isLoading || disabled}
      startIcon={startIconCmp}
      endIcon={endIconCmp}
      onClick={onClick}
      href={link}
      color={muiColor}
      disableRipple={disableRipple}
      customColor={color}
      size={size}
      {...props}
    >
      {content}
    </MuiButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  link: PropTypes.string,
  muiColor: PropTypes.string,
  color: PropTypes.string,
  disableRipple: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingIconPosition: PropTypes.oneOf(["start", "end"]),
  loadingLabel: PropTypes.string,
  disableElevation: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  variant: undefined, // stay it undefined for supporting ButtonGroup component variant
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  onClick: undefined,
  link: undefined,
  muiColor: undefined,
  color: undefined,
  disableRipple: undefined,
  isLoading: undefined,
  loadingIconPosition: undefined,
  loadingLabel: undefined,
  disableElevation: undefined,
  icon: undefined,
  size: undefined,
};

export default Button;
