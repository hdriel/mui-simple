import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Slider as MuiSlider,
  SliderWrapper,
  SliderLabel,
} from "./Slider.styled";

export default function Slider({
  startIcon,
  endIcon,
  label,
  value,
  onChange,
  disabled,
  size,
  displayValue,
  range,
  marks,
  muiColor,
  customColor,
  orientation,
  disableSwap,
  ...props
}) {
  const rangeProps = useMemo(() => {
    if (!range) return undefined;
    if (Array.isArray(range)) {
      const [min, max, step, marks] = range; // default min = 0, max = 100, marks = false
      return { min, max, step, marks };
    } else {
      const { min, max, step, marks } = range ?? {}; // default min = 0, max = 100, marks = false
      return { min, max, step, marks };
    }
  }, [range]);

  return (
    <SliderWrapper sx={{ mb: 1 }}>
      {label && <SliderLabel>{label}</SliderLabel>}
      {startIcon}
      <MuiSlider
        size={size}
        disabled={disabled}
        value={value}
        onChange={onChange}
        valueLabelDisplay={displayValue}
        marks={marks}
        disableSwap={disableSwap}
        color={muiColor}
        customColor={customColor}
        orientation={orientation}
        {...rangeProps}
      />
      {endIcon}
    </SliderWrapper>
  );
}

Slider.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  label: PropTypes.string,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["small", "medium"]),
  displayValue: PropTypes.oneOf(["auto", "off", "on"]),
  disableSwap: PropTypes.bool,
  marks: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.number })
    ),
  ]),
  range: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      marks: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.arrayOf(
          PropTypes.shape({ label: PropTypes.string, value: PropTypes.number })
        ),
      ]),
    }),
  ]),
};

Slider.defaultProps = {
  startIcon: undefined,
  endIcon: undefined,
  value: undefined,
  onChange: undefined,
  disabled: undefined,
  size: undefined,
  valueLabelDisplay: "auto",
  range: undefined,
};
