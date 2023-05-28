import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (propName) =>
    !["drawerWidth", "customColor"].includes(propName),
})`
  width: calc(100% - ${(props) => props.drawerWidth}px);
  transition: ${(props) =>
    props.theme.transitions.create("width", {
      easing: props.theme.transitions.easing.sharp,
      duration: props.theme.transitions.duration.enteringScreen,
    })};
  margin-left: ${(props) => props.drawerWidth}px;
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
