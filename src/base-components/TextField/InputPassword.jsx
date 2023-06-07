import React, { useState } from "react";
import PropTypes from "prop-types";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import Input from "./TextField";
import Button from "../Button/Button";

export default function InputPassword({ showPasswordAction, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Input
      {...props}
      endCmp={
        showPasswordAction ? (
          <Button
            icon={showPassword ? <VisibilityOff /> : <Visibility />}
            onClick={handleClickShowPassword}
            edge="end"
          />
        ) : undefined
      }
      type={showPassword ? "text" : "password"}
    />
  );
}

InputPassword.propTypes = {
  showPasswordAction: PropTypes.bool,
};
InputPassword.defaultProps = {
  showPasswordAction: true,
};
