import React from "react";
import PropTypes from "prop-types";
import InputAutocompleteMultiple from "./InputAutocompleteMultiple";
import { useAutoCompleteAsync } from "./InputAutocompleteAsync";

export default function InputAutocompleteMultipleAsync(props) {
  const asyncProps = useAutoCompleteAsync(props);
  return <InputAutocompleteMultiple {...props} {...asyncProps} />;
}

InputAutocompleteMultipleAsync.propTypes = {
  getOptionLabel: PropTypes.func,
  getOptionsPromise: PropTypes.func,
  sleep: PropTypes.number,
  fetchOptionsOnFocus: PropTypes.bool,
};

InputAutocompleteMultipleAsync.defaultProps = {
  getOptionLabel: undefined,
  getOptionsPromise: undefined,
  sleep: 1e3,
  fetchOptionsOnFocus: undefined,
};
