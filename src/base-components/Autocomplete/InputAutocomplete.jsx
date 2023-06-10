import React from "react";
import PropTypes from "prop-types";

import {
  Stack,
  Box,
  Autocomplete as MuiAutocomplete,
} from "./InputAutocomplete.styled";

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
  autoComplete,
  error,
  margin,
  focused,
  size,
  helperText,
  colorText: _colorText,
  colorLabel: _colorLabel,
  colorActive: _colorActive,
  startCmpExternal,
  endCmpExternal,
  cmpSpacing,
  hideStartActionsOnEmpty,
  alignActions,
  alignActionsExternal,
  autoWidth,
  disabled,
  renderValue,
  options: _options,
  convertedOptions: _convertedOptions,
  placeholderOption,
  nullable,
  groupBy,
  checkbox,
  max,
  selectAll,
  selectAllOption,
  ...props
}) {
  const component = <MuiAutocomplete />;

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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    ),
  ]),
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(["normal", "dense"]),
  size: PropTypes.oneOf(["medium", "small"]),
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
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        disabled: PropTypes.bool,
        chipProps: PropTypes.object,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]),
      }),
    ])
  ),
  autoWidth: PropTypes.bool,
  renderValue: PropTypes.func,
  disabled: PropTypes.func,
  colorText: PropTypes.string,
  colorLabel: PropTypes.string,
  colorActive: PropTypes.string,
  nullable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholderOption: PropTypes.string,
  groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  margin: undefined,
  autoComplete: "off",
  helperText: undefined,
  variant: "outlined",
  size: "medium",
  startCmp: undefined,
  startCmpExternal: undefined,
  endCmp: undefined,
  endCmpExternal: undefined,
  cmpSpacing: 2,
  hideStartActionsOnEmpty: true,
  alignActions: "baseline",
  alignActionsExternal: "baseline",
  options: undefined,
  autoWidth: undefined,
  renderValue: undefined,
  colorText: undefined,
  colorLabel: undefined,
  colorActive: undefined,
  nullable: undefined,
  placeholderOption: undefined,
  groupBy: undefined, // (option) => option?.label[0].toUpperCase()
};
