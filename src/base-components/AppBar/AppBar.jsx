import React, { cloneElement, isValidElement, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar as MuiAppBar, TitleWrapper, Toolbar } from "./AppBar.styled";
import OnScrollEventWrapper from "./OnScrollEventWrapper";

import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Drawer from "../Drawer/Drawer";

const DEFAULT_DRAWER_WIDTH = 240;

export default function AppBar({
  menu,
  title,
  muiColor,
  customColor,
  position,
  enableColorOnDark,
  scrollElement,
  toolbarId,
  elevationScroll,
  elevation,
  hideOnScroll,
  dense,
  disablePadding,
  scrollToTop,
  scrollToTopProps,
  actions,
  drawerProps,
  children,
  ...props
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = drawerProps?.drawerWidth ?? DEFAULT_DRAWER_WIDTH;

  const toggleDrawer = (open) => setDrawerOpen((v) => !v);

  const isBottom = position === "fixed-bottom";
  position = isBottom ? "fixed" : position;

  const menuIcon = isValidElement(menu)
    ? cloneElement(menu, {
        edge: "start",
        size: "large",
        onClick: () => toggleDrawer(true),
      })
    : menu && (
        <Button
          muiColor="inherit"
          edge="start"
          size="large"
          icon={<MenuIcon />}
          sx={{ mr: 2 }}
          onClick={() => toggleDrawer(true)}
        />
      );

  return (
    <>
      <OnScrollEventWrapper
        scrollElement={scrollElement}
        elevationScroll={elevationScroll}
        hideOnScroll={hideOnScroll}
        elevation={elevation}
        scrollToTop={scrollToTop}
        {...scrollToTopProps}
        scrollToId={toolbarId ?? "#back-to-top-anchor"}
      >
        <MuiAppBar
          drawerWidth={drawerOpen ? drawerWidth : 0}
          position={hideOnScroll || elevationScroll ? "fixed" : position}
          color={muiColor}
          customColor={customColor}
          enableColorOnDark={enableColorOnDark}
          sx={{ ...(isBottom && { top: "auto", bottom: 0 }), ...props.sx }}
          {...props}
        >
          <Toolbar
            color="inherit"
            variant={dense ? "dense" : undefined}
            disableGutters={disablePadding}
          >
            {menuIcon}
            <TitleWrapper sx={{ flexGrow: 1 }}>
              {isValidElement(title)
                ? title
                : title && (
                    <Typography variant="h6" component="div" wrap={false}>
                      {title}
                    </Typography>
                  )}
            </TitleWrapper>
            <Box>{actions}</Box>
          </Toolbar>
        </MuiAppBar>
      </OnScrollEventWrapper>
      {!isBottom && (
        <Toolbar
          variant={dense ? "dense" : undefined}
          id={toolbarId ?? "back-to-top-anchor"}
        />
      )}
      {drawerProps && Object.keys(drawerProps).length && (
        <Drawer
          open={drawerOpen}
          openDirection={drawerProps.openDirection ?? "left"}
          variant={drawerProps.variant ?? "temporary"}
          swipeable={drawerProps.swipeable ?? false}
          drawerWidth={drawerWidth}
          {...drawerProps}
          toggleDrawer={(open) => {
            toggleDrawer(open);
            drawerProps?.toggleDrawer?.(open);
          }}
        >
          {children}
        </Drawer>
      )}
    </>
  );
}
// @todo: consider to all logo field and position like start / center
// @todo: what about responsive way ?

AppBar.propTypes = {
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["fixed", "fixed-bottom", "sticky", "static"]),
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  enableColorOnDark: PropTypes.bool,
  toolbarId: PropTypes.string,
  scrollElement: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  elevationScroll: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  dense: PropTypes.bool,
  disablePadding: PropTypes.bool,
  elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
  scrollToTop: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  scrollToTopProps: PropTypes.object,
  actions: PropTypes.node,
  drawerProps: PropTypes.object,
};

AppBar.defaultProps = {
  menu: undefined,
  position: "fixed",
  title: undefined,
  muiColor: undefined,
  customColor: undefined,
  enableColorOnDark: undefined,
  scrollElement: undefined,
  toolbarId: undefined,
  elevationScroll: undefined,
  hideOnScroll: undefined,
  dense: undefined,
  disablePadding: undefined,
  elevation: undefined,
  scrollToTop: undefined,
  scrollToTopProps: undefined,
  drawerProps: undefined,
};
