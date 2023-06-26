import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip } from "./Chip.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Chip({
  label,
  avatar,
  onClick,
  onDelete,
  link,
  startIcon,
  endIcon,
  color,
  textColor: _textColor,
  multiLine,
  size,
  width,
  breadCrumbsStyle,
  rounded,
  disabled,
  minWidth,
  children,
  sx,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);
  const [textColor] = useCustomColor(_textColor);

  const linkProps = link && { href: link, component: "a", clickable: true };
  return (
    <MuiChip
      width={width}
      label={label ?? children}
      onClick={onClick}
      onDelete={onDelete}
      avatar={avatar}
      icon={startIcon}
      customColor={muiColor ? undefined : customColor}
      textColor={muiColor ? undefined : textColor}
      color={muiColor}
      size={size}
      disabled={disabled}
      deleteIcon={endIcon}
      multiLine={multiLine}
      breadCrumbsStyle={breadCrumbsStyle}
      rounded={rounded}
      sx={{ ...sx, minWidth }}
      {...linkProps}
      {...props}
    />
  );
}

Chip.propTypes = {
  width: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  link: PropTypes.string,
  avatar: PropTypes.node,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.string,
  multiLine: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  breadCrumbsStyle: PropTypes.bool,
  rounded: PropTypes.bool,
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chip.defaultProps = {
  width: undefined,
  label: undefined,
  onClick: undefined,
  onDelete: undefined,
  link: undefined,
  avatar: undefined,
  disabled: undefined,
  startIcon: undefined,
  endIcon: undefined,
  color: undefined,
  multiLine: undefined,
  size: undefined,
  breadCrumbsStyle: undefined,
  rounded: true,
  minWidth: undefined,
};
