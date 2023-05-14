import React from "react";
import PropTypes from "prop-types";
import { Backdrop as MuiBackdrop } from "./Backdrop.styled";

export default function Backdrop({ open, color, onClick, ...props }) {
  return <MuiBackdrop color={color} open={open} onClick={onClick} {...props} />;
}

Backdrop.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
  color: PropTypes.string,
};

Backdrop.defaultProps = {
  onClick: undefined,
  open: undefined,
  color: "#fff",
};
