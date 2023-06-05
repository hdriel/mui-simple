import React from "react";
import Input from "./TextField";

export default function InputNumber(props) {
  return <Input {...props} type="number" />;
}

InputNumber.propTypes = Input.propTypes;
InputNumber.defaultProps = Input.defaultProps;
