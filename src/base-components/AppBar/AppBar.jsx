import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar, Toolbar } from "./AppBar.styled";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

export default function AppBar({ menu, title, children, ...props }) {
  console.log("menu", menu);
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
    <MuiAppBar position="static" {...props}>
      <Toolbar>
        {menuIcon}
        {isValidElement(title)
          ? title
          : title && (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                wrap={false}
              >
                {title}
              </Typography>
            )}
        <Box>{children}</Box>
      </Toolbar>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
  menu: undefined,
  title: undefined,
};
