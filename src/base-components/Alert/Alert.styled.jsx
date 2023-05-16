import { Alert as MuiAlert, AlertTitle as MuiAlertTitle } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const Alert = styled(MuiAlert, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  & .MuiAlert-icon,
  & .MuiAlert-message {
    color: ${(props) => props.customColor};
  }
  &.MuiPaper-root {
    background-color: ${(props) =>
      props.customColor && alpha(props.customColor, 0.15)};
  }
`;
export const AlertTitle = styled(MuiAlertTitle)``;
