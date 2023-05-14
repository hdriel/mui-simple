import React from "react";
import PropTypes from "prop-types";
import { LinearProgress as MuiLinearProgress } from "./LinearProgress.styled";

export default function LinearProgress({
  muiColor,
  customColor,
  value,
  valueBuffer,
  showProgress,
  thickness,
  size,
  disableShrink,
  ...props
}) {
  return (
    <MuiLinearProgress
      color={muiColor}
      customColor={customColor}
      variant={
        valueBuffer !== undefined
          ? "buffer"
          : value !== undefined
          ? "determinate"
          : undefined
      }
      value={value}
      valueBuffer={valueBuffer}
      thickness={thickness}
      showProgress={showProgress}
      {...props}
    />
  );
}

LinearProgress.propTypes = {
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  variant: PropTypes.oneOf(["buffer", "query", "determinate", "indeterminate"]),
  value: PropTypes.number,
  valueBuffer: PropTypes.number,
  thickness: PropTypes.number,
  size: PropTypes.number,
  showProgress: PropTypes.bool,
  disableShrink: PropTypes.bool,
};

LinearProgress.defaultProps = {
  muiColor: undefined,
  customColor: undefined,
  variant: undefined,
  value: undefined,
  valueBuffer: undefined,
  thickness: undefined,
  size: undefined,
  showProgress: true,
  disableShrink: undefined,
};
