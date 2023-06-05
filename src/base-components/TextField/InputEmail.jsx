import React from "react";
import Input from "./TextField";

export default function InputEmail(props) {
  return <Input {...props} type="email" />;
}

InputEmail.propTypes = Input.propTypes;
InputEmail.defaultProps = Input.defaultProps;
