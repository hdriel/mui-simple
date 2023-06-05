import React from "react";
import Input from "./TextField";

export default function InputPhone(props) {
  return <Input {...props} type="tel" />;
}

InputPhone.propTypes = Input.propTypes;
InputPhone.defaultProps = Input.defaultProps;
