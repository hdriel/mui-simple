import React from "react";
import PropTypes from "prop-types";
import { CircularProgress as MuiCircularProgress } from "./CircularProgress.styled";

export default function CircularProgress({
  muiColor,
  customColor,
  value,
  showProgress,
  thickness,
  size,
  disableShrink,
  ...props
}) {
  return (
    <MuiCircularProgress
      color={muiColor}
      customColor={customColor}
      variant={value ? "determinate" : undefined}
      value={value}
      thickness={thickness}
      size={size}
      showProgress={showProgress}
      disableShrink={disableShrink}
      {...props}
    />
  );
}

CircularProgress.propTypes = {
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  variant: PropTypes.oneOf(["determinate", "indeterminate"]),
  value: PropTypes.number,
  thickness: PropTypes.number,
  size: PropTypes.number,
  showProgress: PropTypes.bool,
  disableShrink: PropTypes.bool,
};

CircularProgress.defaultProps = {
  muiColor: undefined,
  customColor: undefined,
  variant: undefined,
  value: undefined,
  thickness: undefined,
  size: undefined,
  showProgress: true,
  disableShrink: undefined,
};
