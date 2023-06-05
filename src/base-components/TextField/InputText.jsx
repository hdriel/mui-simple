import React from "react";
import Input from "./TextField";

export default function InputText(props) {
  return <Input {...props} type="text" />;
}

InputText.propTypes = Input.propTypes;
InputText.defaultProps = Input.defaultProps;
