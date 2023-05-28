import { styled } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  SwipeableDrawer as MuiSwipeableDrawer,
  Box,
} from "@mui/material";
import { drawerStyles } from "./Drawer.styles";

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (propName) =>
    !["isMiniPersistent", "open"].includes(propName),
})(drawerStyles);

export const SwipeableDrawer = styled(MuiSwipeableDrawer, {
  shouldForwardProp: (propName) =>
    !["isMiniPersistent", "open"].includes(propName),
})(drawerStyles);

export const ContentWrapper = styled(
  ({ openFromDirection, ...props }) => (
    <Box
      sx={{
        width: ["top", "bottom"].includes(openFromDirection) ? "auto" : 250,
      }}
      role="presentation"
      {...props}
    />
  ),
  { shouldForwardProp: (propName) => !["openFromDirection"].includes(propName) }
)``;

export const DrawerHeader = styled("div")(({ theme, anchor }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: anchor === "right" ? "flex-start" : "flex-end",
}));
