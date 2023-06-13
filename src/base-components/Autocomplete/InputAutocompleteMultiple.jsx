import React from "react";
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
  ...props
}) {
  return (
    <MuiAutocomplete
      selectedOption={[].concat(selectedOptions)}
      setSelectedOption={setSelectedOptions}
      multiple
      disableCloseOnSelect
      limitTags={limitTags}
      filterSelectedOptions={filterSelectedOptions}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {renderOption?.(option) ?? option.title}
        </li>
      )}
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
};

InputAutocompleteMultiple.defaultProps = {
  selectedOptions: [],
  setSelectedOptions: undefined,
  filterSelectedOptions: false,
  chipProps: undefined,
  limitTags: undefined,
  renderOption: undefined,
};
