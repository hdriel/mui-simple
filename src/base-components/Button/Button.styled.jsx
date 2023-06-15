import { styled } from "@mui/material/styles";
import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  ButtonGroup as MuiButtonGroup,
  alpha,
} from "@mui/material";

export const Button = styled(MuiButton, {
  shouldForwardProp: (propName) =>
    !["disableElevation", "customColor"].includes(propName),
})`
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  &:not(.MuiButton-contained) {
    color: ${(props) => props.customColor} !important;
    border-color: ${(props) =>
      props.customColor && alpha(props.customColor, 0.5)} !important;
  }

  &.MuiButton-contained {
    background-color: ${(props) => props.customColor} !important;
    color: white;
    &:not(:last-of-type) {
      border-color: white;
    }
  }
`;

export const IconButton = styled(MuiIconButton, {
  shouldForwardProp: (propName) =>
    !["disableElevation", "customColor"].includes(propName),
})``;

export const ButtonGroup = styled(MuiButtonGroup, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  & .MuiButtonGroup-grouped {
    &:not(.MuiButton-contained) {
      color: ${(props) => props.customColor};
      border-color: ${(props) =>
        props.customColor && alpha(props.customColor, 0.5)};
    }

    &.MuiButton-contained {
      background-color: ${(props) => props.customColor};
      color: white;
      &:not(:last-of-type) {
        border-color: white;
      }
    }
  }
`;

// background-color: ${(props) => props.variant !== "contained" && props.customColor};
