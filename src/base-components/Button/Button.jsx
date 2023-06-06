import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "./Button.styled";
import Tooltip from "../Tooltip/Tooltip";

const spinner = <CircularProgress muiColor="inherit" size={15} />;

const Button = forwardRef(
  (
    {
      variant,
      disabled,
      startIcon,
      endIcon,
      onClick,
      onRightClick,
      link,
      muiColor,
      customColor,
      disableRipple,
      isLoading,
      loadingIconPosition,
      loadingLabel,
      size,
      icon,
      fullWidth,
      tooltipProps,
      children,
      ...props
    },
    ref
  ) => {
    const onRightClickHandler = (e) => {
      e.preventDefault();
      onRightClick?.(e);
    };

    if (icon || (isLoading && !loadingLabel && !startIcon && !endIcon)) {
      return (
        <Tooltip {...tooltipProps}>
          <MuiIconButton
            ref={ref}
            color={muiColor}
            customColor={customColor}
            style={{ color: customColor }}
            size={size}
            disableRipple={disabled ? true : disableRipple}
            onClick={disabled ? undefined : onClick}
            onContextMenu={
              disabled
                ? undefined
                : onRightClick
                ? onRightClickHandler
                : props.onContextMenu
            }
            href={link}
            {...props}
          >
            {isLoading ? spinner : icon}
          </MuiIconButton>
        </Tooltip>
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
      <Tooltip {...tooltipProps}>
        <MuiButton
          ref={ref}
          variant={variant}
          disabled={isLoading || disabled}
          startIcon={startIconCmp}
          endIcon={endIconCmp}
          onClick={onClick}
          onContextMenu={
            onRightClick ? onRightClickHandler : props.onContextMenu
          }
          href={link}
          color={muiColor}
          disableRipple={disableRipple}
          customColor={customColor}
          size={size}
          fullWidth={fullWidth}
          {...props}
        >
          {content}
        </MuiButton>
      </Tooltip>
    );
  }
);

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  onRightClick: PropTypes.func,
  link: PropTypes.string,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  disableRipple: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingIconPosition: PropTypes.oneOf(["start", "end"]),
  loadingLabel: PropTypes.string,
  disableElevation: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  tooltipProps: PropTypes.object,
};

Button.defaultProps = {
  variant: undefined, // stay it undefined for supporting ButtonGroup component variant
  fullWidth: undefined,
  disabled: undefined,
  startIcon: undefined,
  endIcon: undefined,
  onClick: undefined,
  onRightClick: undefined,
  link: undefined,
  muiColor: undefined,
  customColor: undefined,
  disableRipple: undefined,
  isLoading: undefined,
  loadingIconPosition: undefined,
  loadingLabel: undefined,
  disableElevation: undefined,
  icon: undefined,
  size: undefined,
  tooltipProps: undefined,
};

export default Button;
