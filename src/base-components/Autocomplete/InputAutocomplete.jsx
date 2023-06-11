import React from "react";
import PropTypes from "prop-types";

import {
  Stack,
  Box,
  Autocomplete as MuiAutocomplete,
} from "./InputAutocomplete.styled";
import TextField from "../TextField/TextField";

export default function InputAutocomplete({
  label,
  id,
  name,
  variant,
  onChange,
  onFocus,
  onBlur,
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
  colorActive,
  startCmpExternal,
  endCmpExternal,
  cmpSpacing,
  hideStartActionsOnEmpty,
  alignActions,
  alignActionsExternal,
  disabled,
  options: _options,
  renderOption,
  ...props
}) {
  const options =
    _options?.map((option) => {
      return typeof option === "string"
        ? { label: option, id: option }
        : { ...option };
    }) ?? [];

  const inputProps = {
    label,
    id,
    name,
    variant,
    onChange,
    onFocus,
    onBlur,
    value,
    startCmp,
    endCmp,
    fullWidth,
    required,
    readOnly,
    type,
    error,
    margin,
    focused,
    helperText,
    colorText,
    colorLabel,
    colorActive,
    cmpSpacing,
    hideStartActionsOnEmpty,
    alignActions,
    alignActionsExternal,
    disabled,
    ...props,
  };

  const component = (
    <MuiAutocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} {...inputProps} />}
      renderOption={
        typeof renderOption === "function"
          ? (props, option) => renderOption(props, option)
          : undefined
      }
    />
  );

  if (startCmpExternal || endCmpExternal) {
    return (
      <Stack
        direction="row"
        spacing={cmpSpacing}
        alignItems={alignActionsExternal}
      >
        {startCmpExternal}
        {component}
        {endCmpExternal}
      </Stack>
    );
  }

  return component;
}

InputAutocomplete.propTypes = {
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
  type: PropTypes.string,
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  rows: PropTypes.number,
  autoComplete: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "standard", "outlined"]),
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  startCmpExternal: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  endCmpExternal: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cmpSpacing: PropTypes.number,
  hideStartActionsOnEmpty: PropTypes.bool,
  alignActions: PropTypes.string,
  alignActionsExternal: PropTypes.string,
  disabled: PropTypes.bool,
  colorText: PropTypes.string,
  colorLabel: PropTypes.string,
  colorActive: PropTypes.string,
};

InputAutocomplete.defaultProps = {
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
  startCmpExternal: undefined,
  endCmp: undefined,
  endCmpExternal: undefined,
  cmpSpacing: 2,
  hideStartActionsOnEmpty: true,
  alignActions: "baseline",
  alignActionsExternal: "center",
  disabled: undefined,
  colorText: undefined,
  colorLabel: undefined,
  colorActive: undefined,
};
