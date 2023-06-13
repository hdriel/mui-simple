import React, { useMemo } from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "./InputAutocomplete";
import Chip from "../Chip/Chip";
import Checkbox from "../Checkbox/Checkbox";

export default function InputAutocompleteMultiple({
  selectedOptions,
  setSelectedOptions,
  multiple,
  limitTags,
  filterSelectedOptions,
  chipProps,
  renderOption,
  checkboxStyle,
  getOptionLabel: _getOptionLabel,
  ...props
}) {
  const getOptionLabel = useMemo(
    () =>
      typeof _getOptionLabel === "function"
        ? _getOptionLabel
        : (option) => option[_getOptionLabel] || "",
    [_getOptionLabel]
  );

  return (
    <MuiAutocomplete
      selectedOption={[].concat(selectedOptions)}
      setSelectedOption={setSelectedOptions}
      multiple
      disableCloseOnSelect
      limitTags={limitTags}
      filterSelectedOptions={filterSelectedOptions}
      getOptionLabel={getOptionLabel}
      renderOption={
        checkboxStyle
          ? (props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  style={{ marginRight: 2 }}
                  checked={selected}
                  edge="start"
                />
                {renderOption?.(props, option, { selected }) ??
                  getOptionLabel?.(option) ??
                  option}
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

InputAutocompleteMultiple.propTypes = {
  selectedOptions: PropTypes.arrayOf(PropTypes.any),
  setSelectedOptions: PropTypes.func,
  filterSelectedOptions: PropTypes.bool,
  chipProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  limitTags: PropTypes.number,
  renderOption: PropTypes.func,
  checkboxStyle: PropTypes.bool,
};

InputAutocompleteMultiple.defaultProps = {
  selectedOptions: [],
  setSelectedOptions: undefined,
  filterSelectedOptions: false,
  chipProps: undefined,
  limitTags: undefined,
  renderOption: undefined,
  checkboxStyle: true,
};
