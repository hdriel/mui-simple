import React from "react";
import PropTypes from "prop-types";

import InputSelect from "./InputSelect";

export default function InputMultipleSelect({ value, ...props }) {
  return (
    <InputSelect
      value={[].concat(value).filter(Boolean)}
      multiple
      renderValue={(value) => value.join(", ")}
      {...props}
    />
  );
}

InputMultipleSelect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
};

InputMultipleSelect.defaultProps = {
  value: undefined,
};
