import React, { useMemo } from "react";
import PropTypes from "prop-types";

import useTheme from "@mui/material/styles/useTheme";
import { createFilterOptions } from "@mui/material";
import {
  Autocomplete as MuiAutocomplete,
  GroupHeader,
  GroupItems,
  renderHighlightOptionCB,
} from "./InputAutocomplete.styled";

import TextField from "../TextField/TextField";
import { getCustomColor } from "../../utils/helpers";
import Chip from "../Chip/Chip";

export default function InputAutocomplete({
  // inputProps: {
  id,
  name,
  placeholder,
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
  endCmp,
  cmpSpacing,
  alignActions,
  alignActionsExternal,
  hideStartActionsOnEmpty,
  disabled,
  helperText,
  error,
  // } = {},
  width,
  size,
  label,
  onChange,
  selectedOption,
  setSelectedOption,
  autoComplete,
  options: _options,
  renderOption,
  raiseSelectedToTop,
  getOptionLabel: _getOptionLabel,
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
  highlightField,
  highlightSearchResults,
  filterSelectedOptions,
  multiple,
  chipProps,
  filterOptions: _filterOptions,
  sx,
  ...props
}) {
  const theme = useTheme();
  const options = useMemo(() => {
    let result = _options?.map((option) => {
      return typeof option === "string"
        ? { label: option, id: option }
        : { ...option };
    });

    if (sortBy || raiseSelectedToTop) {
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

          const selectedComparator = +b.selected - +a.selected;
          if (raiseSelectedToTop && selectedComparator !== 0) {
            return selectedComparator;
          }

          return typeof optionFieldA === "string" ? A.localeCompare(B) : A - B;
        }) ?? [];
    }

    return result;
  }, [sortBy, sortDir, _options, raiseSelectedToTop]);

  const color = getCustomColor({
    theme,
    customColor: colorActive ?? colorLabel,
  });

  const getOptionLabel = useMemo(
    () =>
      typeof _getOptionLabel === "function"
        ? _getOptionLabel
        : (option) => option[_getOptionLabel] || "",
    [_getOptionLabel]
  );

  const filterOptions = useMemo(() => {
    return typeof _filterOptions === "function"
      ? _filterOptions
      : Object.keys(_filterOptions ?? {}).length
      ? createFilterOptions({
          ignoreAccents: _filterOptions.ignoreAccents,
          ignoreCase: _filterOptions.ignoreCase,
          limit: _filterOptions.limitResultOptions,
          matchFrom: _filterOptions.matchFrom,
          stringify: _filterOptions.stringify ?? getOptionLabel,
          trim: _filterOptions.trim,
        })
      : undefined;
  }, [_filterOptions, getOptionLabel]);

  const inputProps = {
    id,
    name,
    placeholder,
    label,
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
    helperText,
    error,
    endCmp,
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
      size={size}
      sx={{ ...sx, width }}
      autoHighlight={autoHighlight}
      getOptionLabel={getOptionLabel}
      filterSelectedOptions={filterSelectedOptions}
      multiple={multiple}
      value={selectedOption}
      onChange={setSelectedOption}
      filterOptions={filterOptions}
      isOptionEqualToValue={
        getOptionLabel
          ? (option, value) =>
              getOptionLabel?.(option) === getOptionLabel?.(value)
          : undefined
      }
      renderInput={(params) => (
        <TextField {...params} {...inputProps} fullWidth />
      )}
      groupBy={
        typeof groupBy === "function" ? groupBy : (option) => option[groupBy]
      }
      renderOption={
        typeof renderOption === "function"
          ? (props, option, ...args) => renderOption(props, option, ...args)
          : highlightSearchResults
          ? renderHighlightOptionCB(highlightField ?? getOptionLabel)
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
      renderTags={
        multiple
          ? (value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  {...(typeof chipProps === "function"
                    ? chipProps(option)
                    : chipProps)}
                />
              ))
          : undefined
      }
      {...props}
    />
  );
}

InputAutocomplete.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  required: PropTypes.bool,
  focused: PropTypes.bool,
  margin: PropTypes.oneOf(["normal", "dense"]),
  helperText: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.any])
  ),
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

  renderOption: PropTypes.func,
  filterOptions: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      ignoreAccents: PropTypes.bool,
      ignoreCase: PropTypes.bool,
      limitResultOptions: PropTypes.number,
      matchFrom: PropTypes.oneOf(["any", "start"]),
      stringify: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      trim: PropTypes.bool,
    }),
  ]),
  size: PropTypes.oneOf(["small", "medium"]),
  getOptionLabel: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  groupBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sortBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sortDir: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  selectedOption: PropTypes.any,
  setSelectedOption: PropTypes.func,
  autoComplete: PropTypes.bool,
  freeSolo: PropTypes.bool,
  raiseSelectedToTop: PropTypes.number,
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
  highlightSearchResults: PropTypes.bool,
  highlightField: PropTypes.string,
  multiple: PropTypes.bool,
  filterSelectedOptions: PropTypes.bool,
  chipProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

InputAutocomplete.defaultProps = {
  id: undefined,
  name: undefined,
  placeholder: undefined,
  error: undefined,
  required: undefined,
  onChange: undefined,
  focused: undefined,
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
  size: undefined,

  options: [],
  label: undefined,
  filterOptions: undefined,
  getOptionLabel: "label",
  groupBy: undefined,
  sortBy: undefined,
  sortDir: true,
  freeSolo: undefined,
  autoComplete: true,
  selectedOption: undefined,
  setSelectedOption: undefined,
  raiseSelectedToTop: undefined,
  disablePortal: undefined,
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
  highlightSearchResults: true,
  highlightField: undefined,
  multiple: undefined,
  filterSelectedOptions: true,
  chipProps: undefined,
};