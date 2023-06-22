import React from "react";
import PropTypes from "prop-types";
import { Divider } from "./TEMPLATE.styled";

export default function TEMPLATE({ test, ...props }) {
  return (
    <div>
      Hello <Divider />
    </div>
  );
}

TEMPLATE.propTypes = {
  test: PropTypes.string,
};

TEMPLATE.defaultProps = {
  test: undefined,
};
