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
  minDistance = minDistance ?? 0;

  const handleChangeLocking = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    const [fromNewValue, toNewValue] = newValue;

    if (activeThumb === 0) {
      onChangeFromValue(
        event,
        Math.min(fromNewValue, toNewValue - minDistance)
      );
      onChangeToValue(event, toNewValue);
    } else {
      onChangeFromValue(event, fromValue);
      onChangeToValue(event, Math.max(toNewValue, fromValue + minDistance));
    }
  };

  const handleChangeTrailing = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    const [fromNewValue, toNewValue] = newValue;

    const max =
      (Array.isArray(range) ? range[1] : range?.max) ?? props.max ?? 100;

    if (toNewValue - fromNewValue < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(fromNewValue, max - minDistance);
        onChangeFromValue(event, clamped);
        onChangeToValue(event, clamped + minDistance);
      } else {
        const clamped = Math.max(toNewValue, minDistance);
        onChangeFromValue(event, clamped - minDistance);
        onChangeToValue(event, clamped);
      }
    } else {
      onChangeFromValue(event, Math.min(...newValue));
      onChangeToValue(event, Math.max(...newValue));
    }
  };

  const handleChange = (event, newValue) => {
    if (!Array.isArray(newValue)) return;
    onChangeFromValue(event, Math.min(...newValue));
    onChangeToValue(event, Math.max(...newValue));
  };

  const value = [fromValue, toValue];

  return (
    <Slider
      startIcon={startIcon}
      endIcon={endIcon}
      label={label}
      onChange={
        {
          locking: handleChangeLocking,
          trailing: handleChangeTrailing,
        }[disableSwap] ?? handleChange
      }
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
      disableSwap={disableSwap !== undefined}
      {...props}
      value={value}
    />
  );
}

RangeSlider.propTypes = {
  fromValue: PropTypes.number,
  toValue: PropTypes.number,
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
  disableSwap: PropTypes.oneOf(["locking", "trailing"]),
  minDistance: PropTypes.number,
};

RangeSlider.defaultProps = {
  startIcon: undefined,
  endIcon: undefined,
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
  minDistance: 1,
};
