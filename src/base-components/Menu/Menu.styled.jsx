import React from "react";
import {
  Menu as MuiMenu,
  MenuList as MuiMenuList,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Popper as MuiPopper,
  ClickAwayListener,
  Grow,
  Box,
} from "@mui/material";
import { styled, css } from "@mui/material/styles";
import Paper from "../Paper/Paper";

export const ContextMenuWrapper = styled(Box)`
  width: 100%;
  height: 100%;
`;

export const MenuWrapper = styled(Box)`
  position: relative;
  overflow: visible;
  margin-top: 1.5px;

  &::before {
    ${(props) =>
      props.arrow &&
      css`
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 14px;
        width: 10px;
        height: 10px;
        background-color: ${props.theme.palette.background.paper};
        transform: translateY(-50%) rotate(45deg);
        z-index: 0;
      `}
  }
`;

export const Menu = styled(
  ({ height, width, maxHeight, elevation, ...props }) => (
    <MuiMenu
      PaperProps={{
        elevation,
        sx: {
          height,
          width,
          maxHeight,
          overflowY: "auto",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      {...props}
    />
  )
)`
  max-width: 100%;
  & .MuiList-root:focus-visible {
    outline: none;
  }
`;
export const MenuList = styled(MuiMenuList)``;
export const MenuItem = styled(MuiMenuItem)``;
export const ListItemIcon = styled(MuiListItemIcon)``;
export const ListItemText = styled(MuiListItemText)``;
export const Popper = styled(({ width, onClickAway, children, ...props }) => (
  <MuiPopper {...props} sx={{ width, ...props.sx }}>
    {({ TransitionProps, placement }) => (
      <Grow
        {...TransitionProps}
        style={{
          transformOrigin:
            placement === "bottom-start" ? "left top" : "left bottom",
        }}
      >
        <Paper>
          <ClickAwayListener onClickAway={onClickAway}>
            {children}
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </MuiPopper>
))`
  max-width: 100%;
`;
