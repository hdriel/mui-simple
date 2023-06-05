import React from "react";
import Input from "./TextField";

export default function InputSelect(props) {
  return <Input {...props} type="text" />;
}

InputSelect.propTypes = Input.propTypes;
InputSelect.defaultProps = Input.defaultProps;
