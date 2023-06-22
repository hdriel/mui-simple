import React, { useState } from "react";
import PropTypes from "prop-types";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField as MuiTextField, Stack } from "./TextField.styled";
import { ClickAwayListener } from "@mui/material";
import debounce from "lodash/debounce";

function TextField({
  label,
  id,
  name,
  variant,
  onChange,
  onFocus,
  onBlur,
  value,
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
  startCmp,
  endCmp,
  startCmpExternal,
  endCmpExternal,
  cmpSpacing,
  hideStartActionsOnEmpty,
  alignActions,
  alignActionsExternal,
  disabled,
  debounceDelay,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const showActions =
    !hideStartActionsOnEmpty || value || (!value && isFocused);

  const handleOnChange = debounceDelay
    ? debounce(onChange, debounceDelay)
    : onChange;

  const component = (
    <ClickAwayListener onClickAway={() => setIsFocused(false)}>
      <MuiTextField
        fullWidth={fullWidth}
        label={label}
        id={id}
        name={name}
        error={error}
        helperText={helperText}
        onChange={handleOnChange}
        required={required}
        value={value}
        margin={margin}
        focused={focused}
        multiline={multiline}
        maxRows={maxRows}
        rows={rows}
        autoComplete={autoComplete}
        type={type}
        onFocus={onFocusHandler}
        onBlur={onBlur}
        disabled={disabled}
        colorText={colorText}
        colorLabel={colorLabel}
        colorActive={colorActive}
        InputProps={{
          ...props.InputProps,
          readOnly,
          ...(showActions &&
            startCmp && {
              startAdornment: (
                <InputAdornment position="start" sx={{ margin: "auto" }}>
                  {startCmp}
                </InputAdornment>
              ),
            }),
          ...(endCmp && {
            endAdornment: (
              <InputAdornment position="end" sx={{ margin: "auto" }}>
                {endCmp}
              </InputAdornment>
            ),
          }),
          sx: { alignItems: alignActions },
        }}
        InputLabelProps={{ ...props.InputLabelProps }}
        FormHelperTextProps={{ ...props.FormHelperTextProps }}
        variant={variant}
        {...props}
      />
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

TextField.propTypes = {
  debounceDelay: PropTypes.number,
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
  startCmpExternal: undefined,
  endCmp: undefined,
  endCmpExternal: undefined,
  cmpSpacing: 2,
  hideStartActionsOnEmpty: true,
  alignActions: "baseline",
  alignActionsExternal: "baseline",
  disabled: undefined,
  colorText: undefined,
  colorLabel: undefined,
  colorActive: undefined,
};

export default TextField;
