import React from "react";
import { styled } from "@mui/material/styles";
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  Paper as MuiPaper,
} from "@mui/material";

export const ToggleButtonGroups = styled(({ ...props }) => (
  <MuiPaper elevation={0} {...props} />
))`
  display: flex;
  border: ${({ theme }) => `1px solid ${theme.palette.divider}`};
  flex-wrap: wrap;

  & .MuiToggleButtonGroup-grouped {
    margin: ${(props) => props.theme.spacing(0.5)};
    border: 0;
    &.Mui-disabled {
      border: 0;
    }
    &:not(:first-of-type) {
      border-radius: ${(props) => props.theme.shape.borderRadius};
    }
    &:first-of-type {
      border-radius: ${(props) => props.theme.shape.borderRadius};
    }
  }
`;

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)``;

export const ToggleButton = styled(
  ({ value, disabled, disableRipple, onChange, ...props }) => (
    <MuiToggleButton
      value={value}
      disabled={disabled}
      onChange={onChange}
      disableRipple={disableRipple}
      {...props}
    />
  )
)``;
