import React from "react";
import PropTypes from "prop-types";

import { Autocomplete as MuiAutocomplete } from "./InputAutocomplete.styled";
import Chip from "../Chip/Chip";

export default function InputAutocompleteMultiple({
  value,
  multiple,
  filterSelectedOptions,
  chipProps,
  ...props
}) {
  return (
    <MuiAutocomplete
      value={value}
      multiple={multiple}
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
  value: PropTypes.array,
  multiple: PropTypes.bool,
  filterSelectedOptions: PropTypes.bool,
  chipProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

InputAutocompleteMultiple.defaultProps = {
  value: undefined,
  multiple: undefined,
  filterSelectedOptions: true,
  chipProps: undefined,
};
