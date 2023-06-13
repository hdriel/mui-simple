import React, { useMemo } from "react";
import PropTypes from "prop-types";

import MuiAutocomplete from "./InputAutocomplete";
import Chip from "../Chip/Chip";
import Checkbox from "../Checkbox/Checkbox";
import { Check as CheckIcon } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function InputAutocompleteMultiple({
  selectedOptions,
  setSelectedOptions,
  limitTags,
  filterSelectedOptions,
  chipProps,
  renderOption,
  checkboxStyle,
  getOptionLabel: _getOptionLabel,
  ...props
}) {
  const multiple = true;

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
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {checkboxStyle && (
            <Checkbox
              style={{ marginRight: 2 }}
              checked={selected}
              edge="start"
            />
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {renderOption?.(props, option, { selected }) ??
              getOptionLabel?.(option) ??
              option}
            {!checkboxStyle && selected && <CheckIcon />}
          </Box>
        </li>
      )}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            {...(typeof chipProps === "function"
              ? chipProps(option)
              : chipProps)}
            label={getOptionLabel?.(option) ?? option.label}
          />
        ));
      }}
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
