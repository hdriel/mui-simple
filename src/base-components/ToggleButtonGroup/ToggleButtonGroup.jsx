import React from "react";
import PropTypes from "prop-types";
import { ToggleButton as MuiToggleButton } from "@mui/material";
import {
  FormHelperText,
  ToggleButton,
  ToggleButtonGroup,
} from "./ToggleButtonGroup.styled";

const ToggleButtonGroup = ({
  direction,
  value: selectedValue,
  defaultValue,
  onChange,
  color,
  muiColor,
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
  return (
    <>
      <ToggleButtonGroup
        row={direction}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={selectedValue}
        {...props}
      >
        {data?.map(({ value, label, disabled, ...radioProps }, index) => (
          <ToggleButton
            checked={selectedValue === value}
            size={size}
            color={color}
            muiColor={muiColor}
            disableRipple={disableRipple}
            icon={icon}
            checkedIcon={checkedIcon}
          />
        ))}
      </ToggleButtonGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

ToggleButtonGroup.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
};

ToggleButtonGroup.defaultProps = {
  variant: "contained",
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  onClick: undefined,
};

export default ToggleButtonGroup;
