import {
  Menu as MuiMenu,
  MenuList as MuiMenuList,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { numberToPx } from "../../utils/helpers";

export const Menu = styled(MuiMenu)`
  width: ${(props) => numberToPx(props.width)};
  max-width: 100%;
`;
export const MenuList = styled(MuiMenuList)``;
export const MenuItem = styled(MuiMenuItem)``;
export const ListItemIcon = styled(MuiListItemIcon)``;
export const ListItemText = styled(MuiListItemText)``;
