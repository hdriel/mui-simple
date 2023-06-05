import React, { useState } from "react";
import Input from "./TextField";
import { IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Input
      {...props}
      endCmp={
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      }
      type={showPassword ? "text" : "password"}
    />
  );
}

InputPassword.propTypes = Input.propTypes;
InputPassword.defaultProps = Input.defaultProps;
