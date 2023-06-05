import React from "react";
import Input from "./TextField";

export default function InputSearch(props) {
  return <Input {...props} type="search" />;
}

InputSearch.propTypes = Input.propTypes;
InputSearch.defaultProps = Input.defaultProps;
