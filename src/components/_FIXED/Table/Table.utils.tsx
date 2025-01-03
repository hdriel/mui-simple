import { Image } from 'mui-image';
import { get } from 'lodash-es';
import React, { cloneElement, isValidElement } from 'react';
import { format } from 'date-fns';
import { SORT } from './Table.consts';
import type { ColorsProps, extractColorsProps, getDataRangeProps, TableColumn } from './Table.desc';
import { getCustomColor, getTextWidth, isDefined, isValidDateValue } from '../../../utils/helpers';
import MuiTypography from '../Typography/Typography';
import MuiAvatar from '../Avatar/Avatar';
import MuiPaper from '../Paper/Paper';
import MuiCheckbox from '../Checkbox/Checkbox';
import MuiTooltip from '../Tooltip/Tooltip';

export const Typography = MuiTypography;
export const Avatar = MuiAvatar;
export const Paper = MuiPaper;
export const Checkbox = MuiCheckbox;
export const Tooltip = MuiTooltip;

export function extractColors({ theme, colors }: extractColorsProps): undefined | ColorsProps {
    const { background: _background, color: _color } = typeof colors === 'object' ? colors : { background: colors };
    const [color] = getCustomColor({ theme, customColor: _color });
    const [, isThemeColor] = getCustomColor({
        theme,
        customColor: color === undefined && _background,
    });
    const [background] = getCustomColor({ theme, customColor: _background });

    const textColor: string = isThemeColor && background ? get(theme, `palette.${background}.contrastText`) : color;

    const bgColor = background;

    return isDefined(textColor) || isDefined(bgColor) ? { color: textColor, background: bgColor } : undefined;
}

export function getColumn(row: any, column: TableColumn): TableColumn {
    const isString = typeof column === 'string';
    const field: string = isString ? (column as string) : column?.field;

    return {
        id: column?.id ?? field,
        field,
        label: isString ? column : column.label,
        numeric: isString ? typeof row?.[field] === 'number' : column.numeric,
        disablePadding: isString ? false : column.disablePadding ?? false,
        align: isString ? (typeof row?.[field] === 'number' ? 'right' : 'left') : column.align,
        format: undefined,
        dateFormat: isString
            ? typeof row?.[field] === 'number' && !new Date(row?.[field]).toISOString().startsWith('1970-01-01T')
                ? 'DD/MM/YYYY HH:mm a'
                : undefined
            : undefined,
        props: undefined,
        cmp: undefined,
        image: isString
            ? /\.(jpg|jpeg|png|gif|bmp|tiff|svg|webp|ico|heic|jp2)$/i.test?.(row?.[field] ?? '')
            : column.image,
        ...(typeof column === 'object' && column),
    };
}

function getMenuWidth(fields: string[]): number {
    const sized = fields?.map((field) => field?.length ?? 0) ?? [0];
    const index = Math.max(...sized);
    const maxWord = fields?.[sized.indexOf(index)] ?? '';
    const { offsetWidth } = getTextWidth(maxWord);
    const checkboxPadding = 50;
    const draggalbePadding = 50;
    const spaceItemsPadding = 15;
    return checkboxPadding + draggalbePadding + offsetWidth + spaceItemsPadding;
}

// ### sort functions
export function descendingComparator(a, b, orderBy): number {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator(order: 'asc' | 'desc', orderBy: string): (a, b) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
export function stableSort(array, comparator): any[] {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export function getNextOrderBy(orderBy: string | boolean): '1' | '-1' | false {
    return ({
        false: SORT.UP,
        [SORT.UP]: SORT.DOWN,
        [SORT.DOWN]: false,
    }[orderBy as string] ?? SORT.UP) as '1' | '-1' | false;
}

export function getMenuSizes({ columns, title }: { columns: any[]; title: string }): [number, number] {
    const fields = columns?.map((column) => column.label);
    const width = getMenuWidth(fields);
    const height = (fields?.length ?? 1) * 62 + (title ? 48 : 5);

    return [width, height];
}

export function getRowContent({ column, data }: { column: TableColumn; data: any }): React.ReactElement {
    const fieldValue: any = get(data, column.field);

    const props = typeof column.props === 'function' ? column.props(data) : column.props;

    if (isValidElement(column.cmp)) {
        return cloneElement(column.cmp, { ...props });
    } else if (column.cmp) {
        const { cmp: Cmp }: any = column;
        return <Cmp {...data} />;
    }

    let content;
    if (column.dateFormat && fieldValue) {
        const dateFormat = column.dateFormat.replace(/Y/g, 'y').replace(/D/g, 'd');
        if (isValidDateValue(fieldValue)) {
            content = format(new Date(fieldValue), dateFormat);
        }
    } else if (column.image && fieldValue) {
        const { width, height, avatar, alt } =
            typeof column.image === 'boolean' ? ({} as any) : column.image ?? ({} as any);

        content = avatar ? (
            <Avatar image={fieldValue} {...props} />
        ) : (
            <Image src={fieldValue} alt={alt ?? fieldValue} style={{ width, height }} {...props} />
        );
    } else {
        content = fieldValue;
        content = typeof column.format === 'function' ? column.format(content, data) : content;

        // Example: numberVariable.toLocaleString('en-US')  1324171354 => 1,324,171,354
        content = column.numeric ? content?.toLocaleString('en-US') : content;
    }

    const tooltip = typeof column.tooltip === 'function' ? column.tooltip?.(data) : column.tooltip;

    const wrapped = ['number', 'string'].includes(typeof content) ? (
        <Typography rows={2} {...props}>
            {content}
        </Typography>
    ) : (
        content
    );

    return <Tooltip title={tooltip}>{wrapped}</Tooltip>;
}
