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
  Typography as MuiTypography,
  Checkbox as MuiCheckbox,
  IconButton as MuiIconButton,
  FormControlLabel as MuiFormControlLabel,
  Switch as MuiSwitch,
} from "@mui/material";

import MuiTooltip from "../Tooltip/Tooltip";
import MuiButton from "../Button/Button";
import MuiPaper from "../Paper/Paper";

import { Delete, FilterList } from "@mui/icons-material";
import { extractColors } from "./Table.utils";

export const DeleteIcon = Delete;
export const FilterListIcon = FilterList;

export const Box = MuiBox;
export const Button = MuiButton;
export const Table = MuiTable;
export const TableBody = MuiTableBody;
export const TableCell = styled(MuiTableCell)`
  padding-left: 1em;
  padding-right: 1em;

  ${(props) => {
    const { color, backgroundColor } = extractColors({
      theme: props.theme,
      colors: props.colors,
    });

    return css`
      color: ${color};
      background-color: ${backgroundColor};
    `;
  }};
`;
export const TableContainer = MuiTableContainer;
export const TableHead = MuiTableHead;
export const TablePagination = MuiTablePagination;
export const TableRow = MuiTableRow;
export const TableSortLabel = MuiTableSortLabel;
export const Toolbar = MuiToolbar;
export const Typography = MuiTypography;
export const Paper = MuiPaper;
export const Checkbox = MuiCheckbox;
export const IconButton = MuiIconButton;
export const Tooltip = MuiTooltip;
export const FormControlLabel = MuiFormControlLabel;
export const Switch = MuiSwitch;
export const Image = MuiImage;
