import React from "react";
import PropTypes from "prop-types";
import { Search as SearchIcon } from "@mui/icons-material";

import Input from "./TextField";
import Button from "../Button/Button";

export default function InputSearch({
  value,
  label,
  placeholder,
  searchIcon,
  ...props
}) {
  return (
    <Input
      {...props}
      value={value}
      placeholder={placeholder}
      label={label}
      startCmp={searchIcon ? <Button icon={<SearchIcon />} /> : undefined}
      type="search"
    />
  );
}

InputSearch.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  searchIcon: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputSearch.defaultProps = {
  label: undefined,
  value: undefined,
  searchIcon: true,
  placeholder: "search...",
};
