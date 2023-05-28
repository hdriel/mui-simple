import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Drawer as MuiDrawer,
  ContentWrapper,
  SwipeableDrawer,
  DrawerHeader,
} from "./Drawer.styled";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

export default function Drawer({
  onClose,
  open,
  swipeable,
  variant,
  keepMounted,
  openDirection,
  toggleDrawer: _toggleDrawer,
  drawerWidth,
  children,
  ...props
}) {
  const theme = useTheme();
  const isMiniPersistent = variant === "mini-persistent";
  console.log("isMiniPersistent", isMiniPersistent);
  variant = isMiniPersistent ? "persistent" : variant;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    _toggleDrawer?.(open);
  };

  const DrawerCmp = swipeable ? SwipeableDrawer : MuiDrawer;

  return (
    <DrawerCmp
      variant={variant}
      anchor={openDirection}
      open={open}
      onClose={toggleDrawer?.(false)}
      ModalProps={{ keepMounted }}
      isMiniPersistent={isMiniPersistent}
      drawerWidth={drawerWidth}
    >
      <DrawerHeader anchor={openDirection}>
        <Button
          onClick={toggleDrawer?.(false)}
          icon={
            theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )
          }
        />
      </DrawerHeader>
      <Divider variant="fullWidth" />
      <ContentWrapper
        drawerWidth={drawerWidth}
        anchor={openDirection}
        onClick={toggleDrawer?.(false)}
        onKeyDown={toggleDrawer?.(false)}
      >
        {children}
      </ContentWrapper>
    </DrawerCmp>
  );
}

Drawer.propTypes = {
  openDirection: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf([
    "permanent",
    "mini-persistent",
    "persistent",
    "temporary",
  ]), // mui default "temporary"
  open: PropTypes.bool,
  swipeable: PropTypes.bool,
  keepMounted: PropTypes.bool,
  onClose: PropTypes.func,
  toggleDrawer: PropTypes.func,
  drawerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Drawer.defaultProps = {
  openDirection: undefined,
  variant: undefined,
  open: undefined,
  swipeable: undefined,
  keepMounted: undefined,
  onClose: undefined,
  toggleDrawer: undefined,
  drawerWidth: 240,
};
