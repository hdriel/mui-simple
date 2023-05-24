import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemText as MuiListItemText,
  ListSubheader as MuiListSubheader,
  Collapse as MuiCollapse,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import { styled } from "@mui/material/styles";
import MuiDivider from "../Divider/Divider";

export const Divider = MuiDivider;
export const Collapse = MuiCollapse;
export const List = styled(({ useTransition, children, ...props }) => (
  <MuiList {...props}>
    {useTransition ? (
      <TransitionGroup>{children}</TransitionGroup>
    ) : (
      { children }
    )}
  </MuiList>
))``;
export const ListItem = MuiListItem;
export const ListItemAvatar = MuiListItemAvatar;
export const ListItemButton = MuiListItemButton;
export const ListItemIcon = MuiListItemIcon;
export const ListItemSecondaryAction = MuiListItemSecondaryAction;
export const ListItemText = MuiListItemText;
export const ListSubheader = MuiListSubheader;
