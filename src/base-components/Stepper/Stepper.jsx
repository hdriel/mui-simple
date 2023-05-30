import React from "react";
import PropTypes from "prop-types";
import { Stepper as MuiStepper } from "./Stepper.styled";

export default function Stepper({ test, ...props }) {
  return <MuiStepper {...props} />;
}

Stepper.propTypes = {
  test: PropTypes.string,
};

Stepper.defaultProps = {
  test: undefined,
};
