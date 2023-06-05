import React from "react";
import PropTypes from "prop-types";

import Input from "./TextField";

export default function InputColor({ label, value, customColor, ...props }) {
  return (
    <Input
      label={label}
      value={value}
      customColor={customColor}
      {...props}
      type="color"
    />
  );
}

InputColor.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  customColor: PropTypes.string,
};
InputColor.defaultProps = {
  label: undefined,
  value: undefined,
  customColor: undefined,
};
