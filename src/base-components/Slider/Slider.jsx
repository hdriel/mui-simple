import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Slider as MuiSlider, SliderLabel, Box, Grid } from "./Slider.styled";

export default function Slider({
  startIcon,
  endIcon,
  label,
  value,
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
  inputCmp,
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
    <Box sx={{ mb: 1 }}>
      <SliderLabel>{label}</SliderLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{startIcon}</Grid>
        <Grid item xs>
          <MuiSlider
            startIcon={startIcon}
            endIcon={endIcon}
            label={label}
            size={size}
            disabled={disabled}
            value={value}
            onChange={onChange}
            valueLabelDisplay={displayValue ?? (disabled ? "on" : "auto")}
            valueLabelFormat={valueLabelFormat}
            marks={marks}
            disableSwap={disableSwap}
            color={muiColor}
            customColor={customColor}
            orientation={orientation}
            track={
              trackBarLinePosition === "none" ? false : trackBarLinePosition
            }
            {...rangeProps}
            step={chooseFromMarksList ? null : rangeProps?.step}
            {...props}
          />
        </Grid>
        <Grid item>{inputCmp ?? endIcon}</Grid>
      </Grid>
    </Box>
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
};

Slider.defaultProps = {
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
