import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "./Button.styled";

const spinner = <CircularProgress color="inherit" size={"15px"} />;

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
  iconOnlyCmp,
  children,
  ...props
}) => {
  if (iconOnlyCmp || (isLoading && !loadingLabel && !startIcon && !endIcon)) {
    return (
      <MuiIconButton
        color={muiColor}
        style={{ color: color }}
        size={size}
        disableRipple={disableRipple}
        onClick={onClick}
        href={link}
      >
        {isLoading ? spinner : iconOnlyCmp}
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
  iconOnlyCmp: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  variant: "contained",
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
  iconOnlyCmp: undefined,
  size: undefined,
};

export default Button;
