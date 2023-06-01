import React from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "./Checkbox.styled";

const Checkbox = ({
  label,
  size,
  color,
  textColor,
  muiColor,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  helperText,
  fontSize,
  ...props
}) => {
  return (
    <MuiCheckbox
      label={label}
      size={size}
      color={color}
      textColor={textColor}
      muiColor={muiColor}
      icon={icon}
      checkedIcon={checkedIcon}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelPlacement={labelPlacement}
      helperText={helperText}
      fontSize={fontSize}
      {...props}
    />
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  muiColor: PropTypes.string,
  checked: PropTypes.bool,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  helperText: PropTypes.string,
  fontSize: PropTypes.string,
};

Checkbox.defaultProps = {
  label: undefined,
  size: "medium",
  color: undefined,
  muiColor: undefined,
  checked: undefined,
  icon: undefined,
  checkedIcon: undefined,
  defaultChecked: undefined,
  required: false,
  disabled: false,
  labelPlacement: undefined,
  helperText: undefined,
  fontSize: undefined,
};

export default Checkbox;
