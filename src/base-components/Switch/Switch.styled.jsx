import React from "react";
import {
  FormControlLabel,
  FormHelperText as MuiFormHelperText,
  Switch as MuiSwitch,
} from "@mui/material";
import { styled, css } from "@mui/material/styles";

function customColor(props) {
  if (!props.color) return css``;
  const opacity = props.theme.palette?.action?.hoverOpacity;
  const color = props.color;

  return css`
    & .MuiSwitch-switchBase.Mui-checked {
      color: ${color};
      &:hover { background-color: alpha(${color}, ${opacity}) },
    },
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${color};
  },`;
}

export const FormHelperText = MuiFormHelperText;
export const Switch = styled(
  ({ checked, scale, color, muiColor, ...props }) => (
    <MuiSwitch
      {...props}
      color={muiColor}
      checked={checked}
      sx={{
        ...props.sx,
      }}
    />
  )
  // {
  //   shouldForwardProp: (prop) =>
  //     !["textColor", "muiColor", "fontSize", "helperText"].includes(prop),
  // }
)`
  ${(props) => customColor(props)}
  &.MuiSwitch-root {
    scale: ${(props) => props.scale};
  }
`;

export const SwitchControlled = styled(
  ({
    required,
    fontSize,
    disabled,
    labelPlacement,
    color,
    label = "",
    ...props
  }) => (
    <FormControlLabel
      required={required}
      disabled={disabled}
      labelPlacement={labelPlacement}
      sx={{
        m: 0,
        userSelect: "none",
        ".MuiFormControlLabel-label": { color, fontSize },
      }}
      control={<Switch color={color} {...props} />}
      label={label}
    />
  )
  // {
  //   shouldForwardProp: (prop) =>
  //     !["textColor", "muiColor", "fontSize", "helperText"].includes(prop),
  // }
)``;
