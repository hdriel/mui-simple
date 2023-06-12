import React, { useMemo } from "react";
import PropTypes from "prop-types";

import {
  Autocomplete as MuiAutocomplete,
  GroupHeader,
  GroupItems,
} from "./InputAutocomplete.styled";
import TextField from "../TextField/TextField";
import { getCustomColor } from "../../utils/helpers";
import useTheme from "@mui/material/styles/useTheme";

export default function InputAutocomplete({
  // inputProps: {
  id,
  name,
  variant,
  onFocus,
  onBlur,
  required,
  margin,
  focused,
  colorText,
  colorLabel,
  colorActive,
  startCmpExternal,
  endCmpExternal,
  cmpSpacing,
  alignActions,
  alignActionsExternal,
  hideStartActionsOnEmpty,
  disabled,
  helperText,
  error,
  // } = {},
  width,
  label,
  onChange,
  value,
  autoComplete,
  options: _options,
  renderOption,
  getOptionLabel,
  groupBy,
  sortBy,
  sortDir,
  freeSolo,
  disablePortal,
  disableClearable,
  disableCloseOnSelect,
  clearOnPressEscape,
  includeInputInList,
  openOnFocus,
  disableListWrap,
  autoHighlight,
  blurOnSelect,
  selectOnFocus,
  readOnly,
  ...props
}) {
  const theme = useTheme();
  const options = useMemo(() => {
    let result = _options?.map((option) => {
      return typeof option === "string"
        ? { label: option, id: option }
        : { ...option };
    });

    if (sortBy)
      result =
        result.sort((a, b) => {
          const optionFieldA =
            typeof sortBy === "function" ? sortBy(a) : a[sortBy];

          const optionFieldB =
            typeof sortBy === "function" ? sortBy(b) : b[sortBy];

          const asc = typeof sortDir === "boolean" ? sortDir : sortDir > 0;
          const [A, B] = asc
            ? [optionFieldA, optionFieldB]
            : [optionFieldB, optionFieldA];

          return typeof optionFieldA === "string" ? A.localeCompare(B) : A - B;
        }) ?? [];

    return result;
  }, [sortBy, sortDir, _options]);

  const color = getCustomColor({
    theme,
    customColor: colorActive ?? colorLabel,
  });

  const inputProps = {
    id,
    name,
    label,
    variant,
    onFocus,
    onBlur,
    fullWidth: true,
    required,
    margin,
    focused,
    colorText,
    colorLabel,
    colorActive,
    startCmpExternal,
    endCmpExternal,
    cmpSpacing,
    alignActions,
    alignActionsExternal,
    hideStartActionsOnEmpty,
    helperText,
    error,
  };

  return (
    <MuiAutocomplete
      disablePortal={disablePortal}
      freeSolo={readOnly || freeSolo}
      disableClearable={disableClearable}
      disableCloseOnSelect={disableCloseOnSelect}
      clearOnEscape={clearOnPressEscape}
      includeInputInList={includeInputInList}
      openOnFocus={openOnFocus}
      disableListWrap={disableListWrap}
      blurOnSelect={blurOnSelect}
      selectOnFocus={selectOnFocus}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete={autoComplete}
      options={options}
      sx={{ width: width }}
      autoHighlight={autoHighlight}
      getOptionLabel={
        typeof getOptionLabel === "string"
          ? (option) => option[getOptionLabel]
          : getOptionLabel
      }
      onChange={onChange}
      renderInput={(params) => <TextField {...params} {...inputProps} />}
      groupBy={
        typeof groupBy === "function" ? groupBy : (option) => option[groupBy]
      }
      renderOption={
        typeof renderOption === "function"
          ? (props, option) => renderOption(props, option)
          : undefined
      }
      getOptionDisabled={(option) => option.disabled}
      renderGroup={
        groupBy
          ? (params) => (
              <li key={params.key}>
                <GroupHeader color={color}>{params.group}</GroupHeader>
                <GroupItems>{params.children}</GroupItems>
              </li>
            )
          : undefined
      }
      {...props}
    />
  );
}

InputAutocomplete.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(["normal", "dense"]),
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

  getOptionLabel: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  groupBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sortBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sortDir: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  autoComplete: PropTypes.bool,
  freeSolo: PropTypes.bool,
  disablePortal: PropTypes.bool,
  disableClearableSolo: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  clearOnPressEscape: PropTypes.bool,
  includeInputInList: PropTypes.bool,
  openOnFocus: PropTypes.bool,
  disableListWrap: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  blurOnSelect: PropTypes.bool,
  selectOnFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
};

InputAutocomplete.defaultProps = {
  id: undefined,
  name: undefined,
  error: undefined,
  required: undefined,
  onChange: undefined,
  focused: undefined,
  value: undefined,
  margin: undefined,
  helperText: undefined,
  variant: "outlined",
  startCmpExternal: undefined,
  endCmpExternal: undefined,
  cmpSpacing: undefined,
  hideStartActionsOnEmpty: undefined,
  alignActionsExternal: "baseline",
  colorText: undefined,
  colorLabel: undefined,
  colorActive: "primary",

  label: undefined,
  getOptionLabel: "label",
  groupBy: undefined,
  sortBy: undefined,
  sortDir: true,
  freeSolo: undefined,
  autoComplete: false,
  disablePortal: true,
  disableClearable: undefined,
  disableCloseOnSelect: true,
  clearOnPressEscape: true,
  includeInputInList: true,
  openOnFocus: true,
  disableListWrap: true,
  autoHighlight: true,
  blurOnSelect: true,
  selectOnFocus: false,
  disabled: undefined,
  readOnly: undefined,
};
