import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar, TitleWrapper, Toolbar } from "./AppBar.styled";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import OnScrollEventWrapper from "./OnScrollEventWrapper";
import { ScrollTop } from "./ScrollTop";

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
  children,
  ...props
}) {
  const menuIcon = isValidElement(menu)
    ? cloneElement(menu, { edge: "start", size: "large" })
    : menu && (
        <Button
          muiColor="inherit"
          edge="start"
          size="large"
          icon={<MenuIcon />}
          sx={{ mr: 2 }}
        />
      );

  return (
    <>
      <OnScrollEventWrapper
        scrollElement={scrollElement}
        elevationScroll={elevationScroll}
        hideOnScroll={hideOnScroll}
        elevation={elevation}
      >
        <MuiAppBar
          position={hideOnScroll || elevationScroll ? "fixed" : position}
          color={muiColor}
          customColor={customColor}
          enableColorOnDark={enableColorOnDark}
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
            <Box>{children}</Box>
          </Toolbar>
        </MuiAppBar>
      </OnScrollEventWrapper>
      <Toolbar variant={"dense"} id={toolbarId ?? "back-to-top-anchor"} />
      {scrollToTop ? (
        <ScrollTop
          {...scrollToTopProps}
          scrollToId={toolbarId ?? "back-to-top-anchor"}
        >
          {isValidElement(scrollToTop) ? scrollToTop : undefined}
        </ScrollTop>
      ) : undefined}
    </>
  );
}

AppBar.propTypes = {
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["fixed", "sticky", "static"]),
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
  scrollToTop: false,
  scrollToTopProps: undefined,
};
