import React from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "./InputAutocomplete";
import Chip from "../Chip/Chip";

export default function InputAutocompleteMultiple({
  selectedOptions,
  setSelectedOptions,
  multiple,
  filterSelectedOptions,
  chipProps,
  ...props
}) {
  return (
    <MuiAutocomplete
      selectedOption={selectedOptions}
      setSelectedOption={setSelectedOptions}
      multiple
      filterSelectedOptions={filterSelectedOptions}
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
};

InputAutocompleteMultiple.defaultProps = {
  selectedOptions: [],
  setSelectedOptions: undefined,
  filterSelectedOptions: true,
  chipProps: undefined,
};
