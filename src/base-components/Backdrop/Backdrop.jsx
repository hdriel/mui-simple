import React from "react";
import PropTypes from "prop-types";
import { Backdrop as MuiBackdrop } from "./Backdrop.styled";

export default function Backdrop({
  open,
  color,
  onClick,
  invisible,
  ...props
}) {
  return (
    <MuiBackdrop
      color={color}
      open={open}
      onClick={onClick}
      invisible={invisible}
      {...props}
    />
  );
}

Backdrop.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
  color: PropTypes.string,
  invisible: PropTypes.bool,
};

Backdrop.defaultProps = {
  onClick: undefined,
  open: false,
  color: "#fff",
  invisible: undefined,
};
