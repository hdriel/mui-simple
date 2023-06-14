import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  Slider as MuiSlider,
  AirbnbThumbComponent,
  ValueLabelComponent,
  SliderLabel,
  Box,
  Grid,
} from "./Slider.styled";
import { SLIDER_STYLES } from "./Slider.consts";
import { useCustomColor } from "../../utils/helpers";

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
  color,
  chooseFromMarksList,
  trackBarLinePosition,
  orientation,
  inputCmp,
  sliderStyle,
  removePadding,
  disablePadding,
  ...props
}) {
  let [customColor, muiColor] = useCustomColor(color);
  let [track] = useCustomColor(color?.track);
  let [thumb] = useCustomColor(color?.thumb);
  customColor = customColor || { track, thumb };

  const rangeProps = useMemo(() => {
    if (!range) return undefined;
    if (Array.isArray(range)) {
      const [min, max, step, marksRange] = range; // default min = 0, max = 100, marks = false
      return {
        min,
        max,
        step: chooseFromMarksList ? null : step,
        marks: marks ?? marksRange,
      };
    } else {
      const { min, max, step, marks: marksRange } = range ?? {}; // default min = 0, max = 100, marks = false
      return {
        min,
        max,
        step: chooseFromMarksList ? null : step,
        marks: marks ?? marksRange,
      };
    }
  }, [range, marks, chooseFromMarksList]);

  const height = orientation === "vertical" ? "inherit" : "max-content";
  return (
    <Box
      sx={{
        mb: 1,
        height,
        ...(orientation === "vertical" && { width: "max-content" }),
      }}
    >
      <SliderLabel>{label}</SliderLabel>
      <Grid
        {...(!disablePadding && {
          container: true,
          spacing: 2,
          alignItems: "center",
          direction: orientation === "vertical" ? "column-reverse" : "row",
        })}
        sx={{
          height,
          ...(disablePadding && {
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }),
        }}
      >
        {startIcon && <Grid item>{startIcon}</Grid>}
        <Grid item xs sx={{ height: "inherit" }}>
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
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            orientation={orientation}
            track={
              trackBarLinePosition === "none" ? false : trackBarLinePosition
            }
            {...rangeProps}
            slots={{
              valueLabel:
                sliderStyle === SLIDER_STYLES.TOOLTIP_VALUE
                  ? ValueLabelComponent
                  : undefined,
              thumb:
                sliderStyle === SLIDER_STYLES.AIRBNB
                  ? AirbnbThumbComponent
                  : undefined,
            }}
            sliderStyle={sliderStyle}
            {...props}
          />
        </Grid>
        {(inputCmp || endIcon) && <Grid item>{inputCmp ?? endIcon}</Grid>}
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
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      track: PropTypes.string,
      thumb: PropTypes.string,
    }),
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["small", "medium"]),
  displayValue: PropTypes.oneOf(["auto", "off", "on"]),
  valueLabelFormat: PropTypes.func,
  disableSwap: PropTypes.bool,
  chooseFromMarksList: PropTypes.bool,
  inputCmp: PropTypes.node,
  sliderStyle: PropTypes.oneOf(Object.values(SLIDER_STYLES)),
  trackBarLinePosition: PropTypes.oneOf(["none", "inverted", "normal"]),
  disablePadding: PropTypes.bool,
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
  label: undefined,
  color: undefined,
  onChange: undefined,
  valueLabelFormat: undefined,
  disabled: undefined,
  disablePadding: undefined,
  orientation: undefined,
  size: undefined,
  trackBarLinePosition: undefined,
  displayValue: undefined,
  disableSwap: undefined,
  sliderStyle: undefined,
  inputCmp: undefined,
  marks: undefined,
  range: undefined,
};
