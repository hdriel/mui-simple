import {
  Menu as MuiMenu,
  MenuList as MuiMenuList,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Popper as MuiPopper,
  ClickAwayListener,
  Grow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { numberToPx } from "../../utils/helpers";
import Paper from "../Paper/Paper";

export const Menu = styled(({ ...props }) => (
  <MuiMenu
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0,
        },
      },
    }}
    {...props}
  />
))`
  width: ${(props) => numberToPx(props.width)};
  max-width: 100%;
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
