import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import { ClickAwayListener } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Input from "./TextField";
import { getCustomColor, isDefined } from "../../utils/helpers";
import { Box, SliderIcon } from "./TextField.styled";
import Slider from "../Slider/Slider";
import debounce from "lodash/debounce";

export const TextField = styled((props) => <Input {...props} type="text" />, {
  shouldForwardProp: (propName) =>
    !["patternChar", "allowEmptyFormatting", "thousandSeparator"].includes(
      propName
    ),
})``;

export default function InputNumber({
  label,
  name,
  value,
  min,
  max,
  step,
  mask,
  disabled,
  format,
  patternChar,
  emptyFormatPlaceholder,
  allowEmptyFormatting,
  thousandSeparator,
  decimalSeparator,
  valueIsNumericString,
  decimalScale,
  fixedDecimalScale,
  prefix,
  suffix,
  onBlur,
  onChange,
  slider,
  colorActive,
  sliderTooltip,
  sliderLabel,
  selectAllOnFocus,
  ...props
}) {
  const theme = useTheme();
  const ref = useRef(null);
  const [onFocus, setOnFocus] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const showSliderAsEndCmp = isDefined(min) && isDefined(max) && slider;
  const showSliderHandler = (forceValue) => {
    setShowSlider((v) => forceValue ?? !v);
  };
  const handleChangeSlider = (event, newValue) => {
    onChange({ target: { name, value: newValue } });
  };
  const [sliderLabelDebounce] = useState(() =>
    debounce(
      (v) => {
        if (typeof sliderLabel === "function") sliderLabel(v);
        else if (isDefined(sliderLabel)) return sliderLabel;
        else return `${label ? `${label}: ` : ""}${v}`;
      },
      100,
      { leading: false, trailing: true }
    )
  );

  const onBlurHandler = (e) => {
    const value = +(e.target.value?.replaceAll?.(/,/gi, "") ?? 0);

    if (e.target.value === "") {
      onChange?.(e);
    } else if (isDefined(min) && value < min) {
      e.target.value = min;
      onChange?.(e);
    } else if (isDefined(max) && value > max) {
      e.target.value = max;
      onChange?.(e);
    }

    onBlur?.(e);
  };

  const color = getCustomColor({ theme, customColor: colorActive });

  return (
    <ClickAwayListener
      onClickAway={() => {
        showSliderHandler(false);
        setOnFocus(false);
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }} ref={ref}>
        <NumericFormat
          {...props}
          label={label}
          value={String(value)}
          name={name}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          mask={mask ?? emptyFormatPlaceholder}
          allowEmptyFormatting={allowEmptyFormatting}
          format={format}
          patternChar={patternChar}
          colorActive={color}
          colorLabel={onFocus ? color : undefined}
          thousandSeparator={
            typeof thousandSeparator === "string"
              ? thousandSeparator
              : thousandSeparator
              ? ","
              : undefined
          }
          decimalSeparator={
            typeof decimalSeparator === "string"
              ? decimalSeparator
              : decimalSeparator
              ? "."
              : undefined
          }
          valueIsNumericString={typeof value === "string"}
          prefix={prefix}
          suffix={suffix}
          autoComplete="off"
          decimalScale={decimalScale}
          fixedDecimalScale={fixedDecimalScale}
          onBlur={onBlurHandler}
          customInput={TextField}
          type="number"
          endCmp={
            showSliderAsEndCmp ? (
              <SliderIcon
                customColor={onFocus ? color : undefined}
                onClick={showSliderHandler}
                tooltipProps={{ title: sliderTooltip }}
              />
            ) : undefined
          }
          onFocus={(e) => {
            if (selectAllOnFocus) e.target.select();
            setOnFocus(true);
          }}
          onValueChange={(values) => {
            const { floatValue: value } = values;
            onChange?.({ target: { name, value } });
          }}
        />
        {showSlider && (
          <Box
            sx={{
              position: "absolute",
              width: ref.current?.clientWidth ?? 0,
              bottom: "-26px",
              left: "0px",
              zIndex: 0,
              px: "5px",
              boxSizing: "border-box",
            }}
          >
            <Slider
              customColor={color}
              value={+value}
              disabled={disabled}
              onChange={handleChangeSlider}
              valueLabelFormat={sliderLabelDebounce}
              min={min}
              max={max}
              step={step}
              startIcon={min}
              endIcon={max}
              disablePadding
            />
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}

InputNumber.propTypes = {
  colorActive: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  decimalSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  valueIsNumericString: PropTypes.bool,
  mask: PropTypes.string,
  format: PropTypes.string, // +1 (###) ###-####
  patternChar: PropTypes.string, // +1 (###) ###-####
  decimal: PropTypes.number,
  disabled: PropTypes.bool,
  fixedDecimalScale: PropTypes.bool,
  allowEmptyFormatting: PropTypes.bool,
  emptyFormatPlaceholder: PropTypes.string,
  slider: PropTypes.bool,
  sliderTooltip: PropTypes.string,
  sliderLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  selectAllOnFocus: PropTypes.bool,
};

InputNumber.defaultProps = {
  colorActive: "primary",
  name: undefined,
  onChange: undefined,
  onBlur: undefined,
  value: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  prefix: undefined,
  suffix: undefined,
  thousandSeparator: true,
  decimalSeparator: true,
  valueIsNumericString: true,
  mask: undefined,
  format: undefined,
  patternChar: "#",
  decimal: 2,
  disabled: undefined,
  fixedDecimalScale: true,
  allowEmptyFormatting: true,
  emptyFormatPlaceholder: undefined,
  slider: true,
  sliderTooltip: "slider",
  sliderLabel: undefined,
  selectAllOnFocus: true,
};
