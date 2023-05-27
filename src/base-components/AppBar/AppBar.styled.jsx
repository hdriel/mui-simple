import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  &.MuiPaper-root {
    background-color: ${(props) => props.customColor};
  }
`;

export const Toolbar = styled(MuiToolbar)``;

export const TitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1em;
`;
