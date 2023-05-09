import React from "react";
import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  variant,
  disabled,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "contained",
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  onClick: undefined,
};

export default Button;
