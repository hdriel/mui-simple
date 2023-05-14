import React, { useState } from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip } from "./Chip.styled";

export default function Chip({
  label,
  avatar,
  onClick,
  onDelete,
  link,
  startIcon,
  endIcon,
  muiColor,
  color,
  multiLine,
  size,
  width,
  children,
  ...props
}) {
  const linkProps = link && { href: link, component: "a", clickable: true };
  return (
    <MuiChip
      width={width}
      label={label ?? children}
      onClick={onClick}
      onDelete={onDelete}
      avatar={avatar}
      icon={startIcon}
      customColor={color}
      color={muiColor}
      size={size}
      deleteIcon={endIcon}
      multiLine={multiLine}
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
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  customColor: PropTypes.string,
  muiColor: PropTypes.string,
  multiLine: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
};

Chip.defaultProps = {
  width: undefined,
  label: undefined,
  onClick: undefined,
  onDelete: undefined,
  link: undefined,
  avatar: undefined,
  startIcon: undefined,
  endIcon: undefined,
  customColor: undefined,
  muiColor: undefined,
  multiLine: undefined,
  size: undefined,
};
