import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import {
  RadioGroup,
  RadioControlled,
  FormHelperText,
} from "./RadioButtonsGroup.styled";
const RadioButtonsGroup = ({
  row,
  value: selectedValue,
  defaultValue,
  onChange,
  color,
  muiColor,
  name,
  helperText,
  disableRipple,
  size,
  data,
  ...props
}) => {
  const theme = useTheme();

  return (
    <>
      <RadioGroup
        row={row}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={selectedValue}
        {...props}
      >
        {data?.map(({ value, label, disabled, ...radioProps }, index) => (
          <RadioControlled
            theme={theme}
            disableRipple={disableRipple}
            key={radioProps?.value ?? index}
            color={color}
            muiColor={muiColor}
            size={size}
            value={value}
            label={label}
            disabled={disabled}
            {...radioProps}
            checked={selectedValue === value}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

RadioButtonsGroup.propTypes = {
  row: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  name: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  disableRipple: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};

RadioButtonsGroup.defaultProps = {
  row: undefined,
  size: undefined,
  name: undefined,
  helperText: undefined,
  value: undefined,
  defaultValue: undefined,
  disableRipple: true,
  data: [],
};
export default RadioButtonsGroup;
