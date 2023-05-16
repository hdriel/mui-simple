import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";

export default function RangeSlider({
  fromValue,
  toValue,
  onChangeFromValue,
  onChangeToValue,
  startIcon,
  endIcon,
  label,
  onChange,
  disabled,
  size,
  displayValue,
  valueLabelFormat,
  range,
  marks,
  muiColor,
  customColor,
  chooseFromMarksList,
  trackBarLinePosition,
  orientation,
  disableSwap,
  minDistance,
  inputCmp,
  ...props
}) {
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      onChangeFromValue(Math.min(newValue[0], toValue - minDistance));
      onChangeToValue(toValue);
    } else {
      onChangeFromValue(fromValue);
      onChangeToValue(Math.max(newValue[1], fromValue + minDistance));
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Slider
      startIcon={startIcon}
      endIcon={endIcon}
      label={label}
      value={[fromValue, toValue]}
      onChange={onChange}
      disabled={disabled}
      size={size}
      displayValue={displayValue}
      valueLabelFormat={valueLabelFormat}
      range={range}
      marks={marks}
      muiColor={muiColor}
      customColor={customColor}
      chooseFromMarksList={chooseFromMarksList}
      trackBarLinePosition={trackBarLinePosition}
      orientation={orientation}
      inputCmp={inputCmp}
      valueLabelDisplay={displayValue ?? (disabled ? "on" : "auto")}
      color={muiColor}
      track={trackBarLinePosition === "none" ? false : trackBarLinePosition}
      disableSwap={disableSwap}
      {...props}
    />
  );
}

RangeSlider.propTypes = {
  fromValue: PropTypes.arrayOf(PropTypes.number),
  onChangeFromValue: PropTypes.func,
  onChangeToValue: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.string,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["small", "medium"]),
  displayValue: PropTypes.oneOf(["auto", "off", "on"]),
  valueLabelFormat: PropTypes.func,
  disableSwap: PropTypes.bool,
  chooseFromMarksList: PropTypes.bool,
  inputCmp: PropTypes.node,
  trackBarLinePosition: PropTypes.oneOf(["none", "inverted", "normal"]),
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
  minDistance: PropTypes.number,
};

RangeSlider.defaultProps = {
  startIcon: undefined,
  endIcon: undefined,
  value: undefined,
  label: undefined,
  muiColor: undefined,
  customColor: undefined,
  onChange: undefined,
  valueLabelFormat: undefined,
  disabled: undefined,
  orientation: undefined,
  size: undefined,
  trackBarLinePosition: undefined,
  displayValue: undefined,
  disableSwap: undefined,
  inputCmp: undefined,
  marks: undefined,
  range: undefined,
};
