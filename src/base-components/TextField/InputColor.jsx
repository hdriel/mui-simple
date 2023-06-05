import React from "react";
import Input from "./TextField";

export default function InputColor(props) {
  return <Input {...props} type="color" />;
}

InputColor.propTypes = Input.propTypes;
InputColor.defaultProps = Input.defaultProps;
