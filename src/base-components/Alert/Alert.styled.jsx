import {
  Alert as MuiAlert,
  AlertTitle as MuiAlertTitle,
  alpha,
} from "@mui/material";
import { styled, css } from "@mui/material/styles";

export const Alert = styled(MuiAlert, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  &.MuiAlert-root {
    min-width: 200px;
  }
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};

  & .MuiAlert-icon,
  & .MuiAlert-message {
    color: ${(props) => props.customColor};
  }

  ${(props) =>
    !props.title &&
    css`
      & .MuiAlert-action {
        align-items: center;
      }
    `}

  &.MuiPaper-root {
    background-color: ${(props) =>
      props.customColor && alpha(props.customColor, 0.15)};
  }
`;
export const AlertTitle = styled(MuiAlertTitle)``;
