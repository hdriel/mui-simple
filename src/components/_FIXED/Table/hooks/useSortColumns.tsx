import React, { useMemo, useState } from 'react';
import { get } from 'lodash-es';
import { SORT } from '../Table.consts';
import { getMenuSizes, getNextOrderBy } from '../Table.utils';
import Menu from '../../Menu/Menu';
import CheckList from '../../List/CheckList';
import {
    DragHandle as DragHandleIcon,
    ImportExport as ImportExportIcon,
    North as NorthIcon,
    South as SouthIcon,
} from '@mui/icons-material';
import type { TableColumn, useSortColumnsProps, useSortColumnsResult } from '../Table.desc';
import Button from '../../Button/Button';

export function useSortColumns({
    firstItem,
    columns,
    hide,
    onChangeSortColumns,
    title,
    tooltip,
    colors,
}: useSortColumnsProps): useSortColumnsResult {
    const [sortColumns, setSortColumns] = useState<TableColumn[]>(
        columns?.map(
            (column) =>
                (({
                    field: column.field,
                    orderBy: [SORT.DOWN, SORT.UP].includes(column.orderBy as string) ? column.orderBy : false,
                    label: column.label,
                    type: typeof get(firstItem, column.field),
                } ?? {}) as TableColumn)
        )
    );

    const [menuOpen, setMenuOpen] = useState(false);

    const [menuWidth, menuHeight] = useMemo(() => {
        return getMenuSizes({ columns: sortColumns, title });
    }, [sortColumns, title]);

    const handleRequestSort = (event, property, orderBy): void => {
        const sortColumn = sortColumns.find(({ field }) => field === property);
        if (!sortColumn) return;

        sortColumn.orderBy = orderBy;
        setSortColumns([...sortColumns]);

        onChangeSortColumns?.(
            sortColumns
                .filter((sortColumn) => sortColumn.orderBy)
                .reduce((obj, sc) => ({ ...obj, [sc.field]: sc.orderBy }), {})
        );
    };

    const onClickItem = (field, orderBy) => (event) => {
        event.stopPropagation();
        const sortColumn = sortColumns.find((sc) => sc.field === field);
        if (!sortColumn) return;
        sortColumn.orderBy = orderBy;
        setSortColumns([...sortColumns]);
    };

    const cmp = !hide && (
        <Menu
            width={menuWidth}
            height={menuHeight}
            open={menuOpen}
            onClick={() => false}
            onClose={() => setMenuOpen(false)}
            alternativeContent={
                <CheckList
                    disableGuttersItems
                    droppableId="filter-menu"
                    title={title}
                    items={sortColumns?.map((column, index) => ({
                        id: column.field,
                        title: column.label ?? column.field,
                        color: 'rgba(0, 0, 0, 0.87)',
                        checked: column.orderBy === SORT.UP,
                        checkedIcon: <NorthIcon />,
                        padding: '0.5em 1em',
                        icon: column.orderBy === SORT.DOWN ? <SouthIcon /> : <ImportExportIcon />,
                        onClick: onClickItem(column.field, getNextOrderBy(column.orderBy)),
                        actions: [<DragHandleIcon key={`${column.field}-${index}`} />],
                        data: column,
                    }))}
                    dragAndDropItems
                    onListOrderChange={(items) => {
                        const state = items.map((item) => item.data);
                        setSortColumns(state);
                    }}
                />
            }
        >
            <Button
                onClick={() => setMenuOpen((o) => !o)}
                tooltipProps={{ title: tooltip }}
                color={colors?.background}
                label={'filters'}
                icon={sortColumns.some((column) => column.orderBy) ? 'SortByAlpha' : 'SortByAlpha'}
            />
        </Menu>
    );

    return { sortColumns, handleRequestSort, cmp };
}
