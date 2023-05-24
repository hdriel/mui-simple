import {
  Pagination as MuiPagination,
  PaginationItem as MuiPaginationItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Pagination = styled(MuiPagination, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  .MuiPaginationItem-root.Mui-selected {
    background-color: ${(props) => props.customColor};
  }
`;

export const PaginationItem = MuiPaginationItem;
