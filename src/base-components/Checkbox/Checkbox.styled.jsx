import React from "react";

import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Checkbox = styled(
  ({
    required,
    disabled,
    labelPlacement,
    helperText,
    label = "",
    fontSize,
    color,
    muiColor,
    ...props
  }) => (
    <>
      <FormControlLabel
        required={required}
        disabled={disabled}
        labelPlacement={labelPlacement}
        sx={{ m: 0, userSelect: 'none', }}
        control={
          <MuiCheckbox
            {...props}
            color={muiColor}
            sx={{
              ...props.sx,
              ...(fontSize && { "& .MuiSvgIcon-root": { fontSize } }),
              ...(color && { color, "&.Mui-checked": { color } }),
            }}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  ),
  {
    shouldForwardProp: (prop) =>
      !["textColor", "muiColor", "fontSize", "helperText"].includes(prop),
  }
)``;
