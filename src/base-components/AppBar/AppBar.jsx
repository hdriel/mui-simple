import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar, TitleWrapper, Toolbar } from "./AppBar.styled";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import ElevationScroll from "./ElevationScroll";
import HideOnScroll from "./HideOnScroll";

export default function AppBar({
  toolbarId,
  menu,
  title,
  muiColor,
  customColor,
  enableColorOnDark,
  elevationScroll,
  hideOnScroll,
  position,
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

  const appBarCmp = (
    <MuiAppBar
      position={position}
      color={muiColor}
      customColor={customColor}
      enableColorOnDark={enableColorOnDark}
      {...props}
    >
      <Toolbar id={toolbarId} color="inherit">
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
  );

  if (elevationScroll) {
    return <ElevationScroll>{appBarCmp}</ElevationScroll>;
  }

  if (hideOnScroll) {
    return <HideOnScroll>{appBarCmp}</HideOnScroll>;
  }

  return appBarCmp;
}

AppBar.propTypes = {
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.oneOf(["fixed", "sticky", "static"]),
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  enableColorOnDark: PropTypes.bool,
  toolbarId: PropTypes.string,
  elevationScroll: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
};

AppBar.defaultProps = {
  menu: undefined,
  position: "static",
  title: undefined,
  muiColor: undefined,
  customColor: undefined,
  enableColorOnDark: undefined,
  toolbarId: undefined,
  elevationScroll: undefined,
  HideOnScroll: undefined,
};
