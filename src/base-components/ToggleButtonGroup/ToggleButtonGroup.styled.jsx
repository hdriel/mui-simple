import React from "react";
import { styled } from "@mui/material/styles";
import {
  FormHelperText as MuiFormHelperText,
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from "@mui/material";

export const FormHelperText = MuiFormHelperText;
export const ToggleButtonGroup = MuiToggleButtonGroup;

export const ToggleButton = styled(
  ({
    onChange,
    name,
    checked,
    value,
    disabled,
    fontSize,
    muiColor,
    icon,
    checkedIcon,
    color,
    disableRipple,
    ...props
  }) => (
    <MuiToggleButton
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      color={muiColor}
      inputProps={{ "aria-label": value, ...props.inputProps }}
      icon={icon}
      checkedIcon={checkedIcon}
      disableRipple={disableRipple}
      sx={{
        ...(color && { color, "&.Mui-checked": { color } }),
        ...(fontSize && { "& .MuiSvgIcon-root": { fontSize } }),
      }}
      {...props}
    />
  )
)``;
