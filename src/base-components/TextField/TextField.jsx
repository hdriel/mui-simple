import React from "react";
import PropTypes from "prop-types";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField as MuiTextField } from "./TextField.styled";
import { getCustomColor } from "../../utils/helpers";
import { useTheme } from "@mui/material/styles";

function TextField({
  label,
  id,
  name,
  variant,
  onChange,
  value,
  startCmp,
  endCmp,
  fullWidth,
  required,
  readOnly,
  type,
  multiline,
  maxRows,
  rows,
  autoComplete,
  error,
  margin,
  focused,
  helperText,
  colorText,
  colorLabel,
  activeColor,
  ...props
}) {
  return (
    <MuiTextField
      fullWidth={fullWidth}
      label={label}
      id={id}
      name={name}
      error={error}
      helperText={helperText}
      onChange={onChange}
      required={required}
      value={value}
      margin={margin}
      focused={focused}
      multiline={multiline}
      maxRows={maxRows}
      rows={rows}
      autoComplete={autoComplete}
      type={type}
      colorText={colorText}
      colorLabel={colorLabel}
      activeColor={activeColor}
      InputProps={{
        ...props.InputProps,
        readOnly,
        ...(startCmp && {
          startAdornment: (
            <InputAdornment position="start">{startCmp}</InputAdornment>
          ),
        }),
        ...(endCmp && {
          endAdornment: (
            <InputAdornment position="end">{endCmp}</InputAdornment>
          ),
        }),
      }}
      InputLabelProps={{ ...props.InputLabelProps }}
      FormHelperTextProps={{ ...props.FormHelperTextProps }}
      variant={variant}
      {...props}
    />
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(["normal", "dense"]),
  type: PropTypes.oneOf(["text", "number", "password"]),
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  rows: PropTypes.number,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "standard", "outlined"]),
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

TextField.defaultProps = {
  label: undefined,
  id: undefined,
  name: undefined,
  fullWidth: true,
  error: undefined,
  required: undefined,
  readOnly: undefined,
  onChange: undefined,
  focused: undefined,
  value: undefined,
  type: "text",
  margin: undefined,
  multiline: undefined,
  maxRows: undefined,
  rows: undefined,
  autoComplete: "off",
  helperText: undefined,
  variant: "outlined",
  startCmp: undefined,
  endCmp: undefined,
};

export default TextField;
