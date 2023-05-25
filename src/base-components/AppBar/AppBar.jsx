import React, { isValidElement } from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MuiAppBar, Toolbar } from "./AppBar.styled";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

export default function AppBar({ menuIcon, title, children, ...props }) {
  return (
    <MuiAppBar position="static" {...props}>
      <Toolbar>
        {menuIcon && (
          <Button
            muiColor="inherit"
            edge="start"
            size="large"
            icon={menuIcon}
            sx={{ mr: 2 }}
          />
        )}

        {isValidElement(title) ? (
          title
        ) : (
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
  menuIcon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

AppBar.defaultProps = {
  menuIcon: <MenuIcon />,
  title: "My Mui Component",
};
