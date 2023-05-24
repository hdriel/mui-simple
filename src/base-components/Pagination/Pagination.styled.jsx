import {
  Pagination as MuiPagination,
  PaginationItem as MuiPaginationItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Pagination = styled(MuiPagination, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})``;
export const PaginationItem = MuiPaginationItem;
