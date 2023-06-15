import React from "react";
import PropTypes from "prop-types";
import InputAutocompleteMultiple from "./InputAutocompleteMultiple";
import { useAutoCompleteAsync } from "./InputAutoCompleteAsync";

export default function InputAutoCompleteMultipleAsync(props) {
  const asyncProps = useAutoCompleteAsync(props);
  return <InputAutocompleteMultiple {...props} {...asyncProps} />;
}

InputAutoCompleteMultipleAsync.propTypes = {
  getOptionLabel: PropTypes.func,
  getOptionsPromise: PropTypes.func,
  sleep: PropTypes.number,
  fetchOptionsOnFocus: PropTypes.bool,
};

InputAutoCompleteMultipleAsync.defaultProps = {
  getOptionLabel: undefined,
  getOptionsPromise: undefined,
  sleep: 1e3,
  fetchOptionsOnFocus: undefined,
};
