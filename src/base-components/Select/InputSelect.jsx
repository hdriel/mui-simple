import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener } from "@mui/material";

import {
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Stack,
  Box,
} from "./InputSelect.styled";
import InputAdornment from "@mui/material/InputAdornment";

export default function InputSelect({
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
  colorText,
  colorLabel,
  colorActive,
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
  noneSelectionLabel,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const options = useMemo(
    () =>
      []
        .concat(_options)
        ?.filter(Boolean)
        .map((option) => {
          return typeof option === "string"
            ? { value: option, label: option }
            : option;
        }),
    [_options]
  );
  const onFocusHandler = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const showActions =
    !hideStartActionsOnEmpty || value || (!value && isFocused);

  const component = (
    <ClickAwayListener onClickAway={() => setIsFocused(false)}>
      <FormControl
        fullWidth={fullWidth}
        variant={variant}
        size={size}
        error={error}
        disabled={disabled}
        required={required}
        colorText={colorText}
        colorLabel={colorLabel}
        colorActive={colorActive}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          {...props}
          id={id}
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocusHandler}
          autoWidth={autoWidth}
          inputProps={{ readOnly }}
          renderValue={() => {
            const rValue = renderValue?.(value) ?? value;

            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 2,
                  }}
                >
                  {showActions && startCmp}
                  {rValue}
                </Box>
                {endCmp}
              </Box>
            );
          }}
        >
          {options?.length && noneSelectionLabel ? (
            <MenuItem value="">
              <em>{noneSelectionLabel}</em>
            </MenuItem>
          ) : undefined}

          {options?.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </ClickAwayListener>
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

InputSelect.propTypes = {
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
  noneSelectionLabel: PropTypes.string,
};

InputSelect.defaultProps = {
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
  colorText: "#0DC0D0",
  colorLabel: "secondary",
  colorActive: "warning",
  noneSelectionLabel: "None",
};
