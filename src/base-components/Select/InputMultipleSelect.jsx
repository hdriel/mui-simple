import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

import InputSelect from "./InputSelect";
import Chip from "../Chip/Chip";

const renderValuesAsChips = (selected) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    {selected.map((value) => (
      <Chip key={value} label={value} {...selected.chipProps} />
    ))}
  </Box>
);

export default function InputMultipleSelect({
  value,
  chips,
  renderValue,
  ...props
}) {
  return (
    <InputSelect
      value={[].concat(value).filter(Boolean)}
      multiple
      renderValue={chips ? renderValuesAsChips : renderValue}
      checkbox
      {...props}
    />
  );
}

InputMultipleSelect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
  renderValue: PropTypes.func,
  chips: PropTypes.bool,
};

InputMultipleSelect.defaultProps = {
  value: undefined,
  renderValue: (value) => value.join(", "),
  chips: true,
};
