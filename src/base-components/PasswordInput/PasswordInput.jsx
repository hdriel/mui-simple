import React, { useState } from "react";
import Input from "../Input/Input";
import { IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export default function PasswordInput(props) {
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

PasswordInput.propTypes = Input.propTypes;
PasswordInput.defaultProps = Input.defaultProps;
