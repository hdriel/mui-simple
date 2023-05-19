import React from "react";
import PropTypes from "prop-types";
import { MenuList, MenuItem } from "./Menu.styled";

export default function Menu({ test, ...props }) {
  return <div>null</div>;
}

Menu.propTypes = {
  test: PropTypes.string,
};

Menu.defaultProps = {
  test: undefined,
};
