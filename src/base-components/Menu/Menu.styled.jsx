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

export const Menu = styled(MuiMenu)`
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
