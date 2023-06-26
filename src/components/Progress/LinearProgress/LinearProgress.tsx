import React from "react";
import PropTypes from "prop-types";
import { LinearProgress as MuiLinearProgress } from "./LinearProgress.styled";
import { useCustomColor } from "../../../utils/helpers";

export default function LinearProgress({
  value,
  valueBuffer,
  showProgress,
  thickness,
  size,
  disableShrink,
  color,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);

  return (
    <MuiLinearProgress
      color={muiColor}
      customColor={muiColor ? undefined : customColor}
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
  color: PropTypes.string,
  variant: PropTypes.oneOf(["buffer", "query", "determinate", "indeterminate"]),
  value: PropTypes.number,
  valueBuffer: PropTypes.number,
  thickness: PropTypes.number,
  size: PropTypes.number,
  showProgress: PropTypes.bool,
  disableShrink: PropTypes.bool,
};

LinearProgress.defaultProps = {
  color: undefined,
  variant: undefined,
  value: undefined,
  valueBuffer: undefined,
  thickness: undefined,
  size: undefined,
  showProgress: true,
  disableShrink: undefined,
};
