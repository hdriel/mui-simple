import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import CircularProgress from "../Progress/CircularProgress/CircularProgress";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
} from "./Button.styled";
import Tooltip from "../Tooltip/Tooltip";
import { useCustomColor } from "../../utils/helpers";

const spinner = <CircularProgress color="inherit" size={15} />;

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
      color,
      disableRipple,
      isLoading,
      loadingIconPosition,
      loadingLabel,
      size,
      icon,
      fullWidth,
      tooltipProps,
      uppercase,
      minWidth,
      sx,
      children,
      ...props
    },
    ref
  ) => {
    const [customColor, muiColor] = useCustomColor(color);

    const onRightClickHandler = (e) => {
      e.preventDefault();
      onRightClick?.(e);
    };

    if (icon || (isLoading && !loadingLabel && !startIcon && !endIcon)) {
      return (
        <Tooltip {...tooltipProps}>
          <MuiIconButton
            ref={ref}
            sx={{ minWidth, color: muiColor ? undefined : customColor, ...sx }}
            color={muiColor}
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
          disableRipple={disableRipple}
          customColor={muiColor ? undefined : customColor}
          color={muiColor}
          size={size}
          fullWidth={fullWidth}
          sx={{
            minWidth,
            ...(!uppercase && { textTransform: "none" }),
            ...sx,
          }}
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
  color: PropTypes.string,
  disableRipple: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingIconPosition: PropTypes.oneOf(["start", "end"]),
  loadingLabel: PropTypes.string,
  disableElevation: PropTypes.bool,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  tooltipProps: PropTypes.object,
  uppercase: PropTypes.bool,
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  color: undefined,
  disableRipple: undefined,
  isLoading: undefined,
  loadingIconPosition: undefined,
  loadingLabel: undefined,
  disableElevation: undefined,
  icon: undefined,
  size: undefined,
  tooltipProps: undefined,
  uppercase: true,
  minWidth: undefined,
};

export default Button;
