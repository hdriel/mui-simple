import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import {
  RadioGroup,
  RadioControlled,
  Radio,
  FormHelperText,
} from "./RadioButtonsGroup.styled";
import { useCustomColor } from "../../utils/helpers";

const RadioButtonsGroup = ({
  direction,
  value: selectedValue,
  defaultValue,
  onChange,
  color,
  icon,
  checkedIcon,
  name,
  helperText,
  disableRipple,
  size,
  data,
  ignoreLabelColor,
  ...props
}) => {
  const theme = useTheme();
  const [customColor, muiColor] = useCustomColor(color);

  return (
    <>
      <RadioGroup
        row={direction === "row"}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={selectedValue}
        {...props}
      >
        {data?.map(({ value, label, disabled, ...radioProps }, index) => (
          <RadioControlled
            theme={theme}
            key={radioProps?.value ?? index}
            color={muiColor ? undefined : customColor}
            muiColor={muiColor}
            value={value}
            label={label}
            disabled={disabled}
            ignoreLabelColor={ignoreLabelColor}
            {...radioProps}
            checked={selectedValue === value}
            control={
              <Radio
                checked={selectedValue === value}
                size={size}
                color={muiColor ? undefined : customColor}
                muiColor={muiColor}
                disableRipple={disableRipple}
                icon={icon}
                checkedIcon={checkedIcon}
              />
            }
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

RadioButtonsGroup.propTypes = {
  row: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.string,
  ignoreLabelColor: PropTypes.bool,
  value: PropTypes.string,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
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
  direction: "column",
  size: undefined,
  color: undefined,
  name: undefined,
  helperText: undefined,
  ignoreLabelColor: false,
  icon: undefined,
  checkedIcon: undefined,
  value: undefined,
  defaultValue: undefined,
  disableRipple: true,
  data: [],
};
export default RadioButtonsGroup;