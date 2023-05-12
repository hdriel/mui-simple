import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  ButtonGroup as MuiButtonGroup,
} from "@mui/material";

export const Button = styled(MuiButton, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})``;

export const IconButton = styled(MuiIconButton)``;

export const ButtonGroup = styled(MuiButtonGroup)``;
