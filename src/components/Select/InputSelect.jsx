import React, { useState } from "react";
import PropTypes from "prop-types";
import { ClickAwayListener } from "@mui/material";

import {
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Stack,
  Box,
} from "./InputSelect.styled";
import { getCustomColor } from "../../utils/helpers";
import { useTheme } from "@mui/material/styles";
import { useOptions, useOptionsConverter } from "./InputSelect.hooks";

const emptyObjectRef = [];
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
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const optionsObj = useOptionsConverter({
    options: _convertedOptions ? emptyObjectRef : _options,
    groupBy,
  });

  const options = useOptions({
    placeholder: placeholderOption,
    convertedOptions: _convertedOptions ?? optionsObj,
    checkbox,
    nullable: !selectAll && nullable,
  });

  const menuColor = _colorActive ?? _colorLabel;

  const menuColorText = getCustomColor({ theme, customColor: _colorText });
  const menuColorSelected = getCustomColor(
    { theme, customColor: menuColor },
    { lighten: 0.8 }
  );
  const menuColorHover = getCustomColor(
    { theme, customColor: menuColor },
    { lighten: 0.6 }
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
        colorText={_colorText}
        colorLabel={_colorLabel}
        colorActive={_colorActive}
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
          MenuProps={{
            sx: {
              "&& .MuiMenuItem-root": { color: menuColorText },
              "&& .MuiMenuItem-root:hover": { backgroundColor: menuColorHover },
              "&& .Mui-selected": { backgroundColor: menuColorSelected },
              "&& .Mui-selected:hover": { backgroundColor: menuColorSelected },
            },
          }}
          renderValue={() => {
            const rValue = renderValue?.(value) ?? value;

            return (
              <Box
                className="content-body"
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
          {options.length ? selectAllOption : undefined}
          {options.map((option) =>
            typeof option === "function" ? option({ value, max }) : option
          )}
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
  disabled: PropTypes.bool,
  colorText: PropTypes.string,
  colorLabel: PropTypes.string,
  colorActive: PropTypes.string,
  nullable: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholderOption: PropTypes.string,
  groupBy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
  colorText: undefined,
  colorLabel: undefined,
  colorActive: undefined,
  nullable: undefined,
  placeholderOption: undefined,
  groupBy: undefined, // (option) => option?.label[0].toUpperCase()
};