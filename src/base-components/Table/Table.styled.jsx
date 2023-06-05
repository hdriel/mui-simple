import { Image as MuiImage } from "mui-image";
import { styled, css } from "@mui/material/styles";
import {
  Box as MuiBox,
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TablePagination as MuiTablePagination,
  TableRow as MuiTableRow,
  TableSortLabel as MuiTableSortLabel,
  Toolbar as MuiToolbar,
} from "@mui/material";

import MuiCheckbox from "../Checkbox/Checkbox";
import MuiAvatar from "../Avatar/Avatar";
import MuiTypography from "../Typography/Typography";
import MuiTooltip from "../Tooltip/Tooltip";
import MuiButton from "../Button/Button";
import MuiPaper from "../Paper/Paper";
import { extractColors } from "./Table.utils";

export const Typography = MuiTypography;
export const Avatar = MuiAvatar;
export const Paper = MuiPaper;
export const Checkbox = MuiCheckbox;
export const Tooltip = MuiTooltip;
export const Image = MuiImage;

export const Box = MuiBox;
export const Button = MuiButton;
export const Table = MuiTable;
export const TableBody = MuiTableBody;
export const TableCell = styled(MuiTableCell)`
  padding-left: 1em;
  padding-right: 1em;

  ${(props) => {
    const { color, background } =
      extractColors({
        theme: props.theme,
        colors: props.colors,
      }) ?? {};

    return css`
      color: ${color};
      background-color: ${background};
    `;
  }};
`;
export const TableContainer = MuiTableContainer;
export const TableHead = MuiTableHead;
export const TablePagination = MuiTablePagination;
export const TableRow = MuiTableRow;
export const TableSortLabel = MuiTableSortLabel;
export const Toolbar = MuiToolbar;
