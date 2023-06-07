import React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";

import Input from "./TextField";
import { isDefined } from "../../utils/helpers";
import { styled } from "@mui/material/styles";

export const TextField = styled(
  (props) => {
    const { name, onBlur, onChange, max, min } = props;
    const onBlurHandler = (e) => {
      const value = +e.target.value.replaceAll(/,/gi, "");

      if (isDefined(min) && value < min) {
        e.target.value = min;
        onChange?.(e);
      } else if (isDefined(max) && value > max) {
        e.target.value = max;
        onChange?.(e);
      }

      onBlur?.(e);
    };

    return <Input {...props} onBlur={onBlurHandler} type="text" />;
  },
  {
    shouldForwardProp: (propName) =>
      !["patternChar", "allowEmptyFormatting", "thousandSeparator"].includes(
        propName
      ),
  }
)``;

export default function InputNumber({
  value,
  name,
  min,
  max,
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
  ...props
}) {
  return (
    <NumericFormat
      {...props}
      value={String(value)}
      name={name}
      disabled={disabled}
      min={min}
      max={max}
      mask={mask ?? emptyFormatPlaceholder}
      allowEmptyFormatting={allowEmptyFormatting}
      format={format}
      patternChar={patternChar}
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
      customInput={TextField}
      type="number"
      onFocus={(e) => e.target.select()}
      onValueChange={(values) => {
        const { floatValue: value } = values;
        onChange?.({ target: { name, value } });
      }}
      // isAllowed={(values) => {
      //   const { floatValue: value } = values;
      //   const isMinValid = isDefined(min) ? value >= min : true;
      //   const isMaxValid = isDefined(max) ? value <= max : true;
      //   return isMinValid && isMaxValid;
      // }}
    />
  );
}

InputNumber.propTypes = {
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
};

InputNumber.defaultProps = {
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
};
