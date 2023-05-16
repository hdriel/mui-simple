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
  range,
  marks,
  muiColor,
  customColor,
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
            valueLabelDisplay={displayValue}
            marks={marks}
            disableSwap={disableSwap}
            color={muiColor}
            customColor={customColor}
            orientation={orientation}
            {...props}
            {...rangeProps}
          />
        </Grid>
        <Grid item>
          {endIcon}
          {inputCmp}
        </Grid>
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
  disableSwap: PropTypes.bool,
  inputCmp: PropTypes.node,
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
