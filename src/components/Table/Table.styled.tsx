import { Image as MuiImage } from 'mui-image';
import { styled, css } from '@mui/material/styles';
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
} from '@mui/material';

import MuiCheckbox from '../_FIXED/Checkbox/Checkbox';
import MuiAvatar from '../_FIXED/Avatar/Avatar';
import MuiTypography from '../_FIXED/Typography/Typography';
import MuiTooltip from '../_FIXED/Tooltip/Tooltip';
import MuiButton from '../_FIXED/Button/Button';
import MuiPaper from '../Paper/Paper';
import { extractColors } from './Table.utils';
import { ColorsProps } from './Table.desc';

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

interface TableCellProp {
    colors?: ColorsProps;
}
export const TableCell = styled(MuiTableCell, {
    shouldForwardProp: (propName: PropertyKey) => !['colors'].includes(propName as string),
})<TableCellProp>`
    padding-left: 1em;
    padding-right: 1em;

    ${(props) => {
        const { colors, theme } = props;
        const { color, background } = extractColors({ theme, colors }) ?? {};

        return css`
            color: ${color};
            background-color: ${background};
        `;
    }};
`;
export const TableContainer = MuiTableContainer;
export const TableHead = MuiTableHead;
export const TablePagination = MuiTablePagination;
export const TableRow: any = MuiTableRow;
export const TableSortLabel = MuiTableSortLabel;
export const Toolbar = MuiToolbar;
