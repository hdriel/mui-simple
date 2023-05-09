import React from "react";
import PropTypes from "prop-types";
import {
  Switch as MuiSwitch,
  SwitchControlled,
  FormHelperText,
} from "./Switch.styled";

const Switch = ({
  label,
  name,
  size,
  color,
  textColor,
  muiColor,
  scale,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  helperText,
  error,
  ...props
}) => {
  return (
    <>
      {label ? (
        <SwitchControlled
          label={label}
          name={name}
          size={size}
          color={color}
          textColor={textColor}
          muiColor={muiColor}
          scale={scale}
          required={required}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          labelPlacement={labelPlacement}
          helperText={helperText}
          {...props}
        />
      ) : (
        <MuiSwitch
          name={name}
          size={size}
          color={color}
          textColor={textColor}
          muiColor={muiColor}
          scale={scale}
          defaultChecked={defaultChecked}
          required={required}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          labelPlacement={labelPlacement}
          helperText={helperText}
          {...props}
        />
      )}
      {helperText ? (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      ) : null}
    </>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.string,
  muiColor: PropTypes.string,
  scale: PropTypes.number,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  helperText: PropTypes.string,
  fontSize: PropTypes.string,
};

Switch.defaultProps = {
  label: undefined,
  size: "medium",
  color: undefined,
  muiColor: undefined,
  scale: undefined,
  checked: undefined,
  defaultChecked: undefined,
  error: undefined,
  required: undefined,
  disabled: undefined,
  labelPlacement: undefined,
  helperText: undefined,
  fontSize: undefined,
};

export default Switch;
