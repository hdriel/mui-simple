import React, { useEffect, useMemo, useState } from 'react';
import {
    DragHandle as DragHandleIcon,
    FilterAlt as FilterAltIcon,
    FilterAltOff as FilterAltOffIcon,
} from '@mui/icons-material';
import { getColumn, getMenuSizes } from '../Table.utils';
import Menu from '../../../Menu/Menu';
import CheckList from '../../../List/CheckList';
import { Checkbox, Tooltip } from '../Table.styled';
import type { TableColumn, useFilterColumnsProps } from '../Table.desc';

export function useFilterColumns({
    firstItem = {},
    columns: _columns,
    hide,
    tooltip,
    title,
    colors,
}: useFilterColumnsProps): [TableColumn[], React.ReactElement] {
    const [columnsState, setColumnsState] = useState(_columns);

    const columns = useMemo(
        () => (columnsState ?? Object.keys(firstItem))?.map((column) => getColumn(firstItem, column)) ?? [],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [columnsState, firstItem]
    );

    const [filters, setFilters] = useState(
        columns?.reduce(
            (obj, column) => ({
                ...obj,
                [column.field]: column.hide === undefined ? true : !column.hide,
            }),
            {}
        )
    );

    const [menuOpen, setMenuOpen] = useState(false);

    const [menuWidth, menuHeight] = useMemo(() => {
        return getMenuSizes({ columns, title });
    }, [columns, title]);

    const filteredColumns = useMemo(() => columns.filter((column) => filters[column.field]), [filters, columns]);

    const checked = useMemo(
        () => Object.values(filters).filter(Boolean).length === columns.length,
        [filters, columns.length]
    );

    const onClickFilterItem = (field) => (event) => {
        event.stopPropagation();
        setFilters((o) => ({ ...o, [field]: !o[field] }));
    };

    useEffect(() => {
        if (JSON.stringify(columns) !== JSON.stringify(columnsState)) setColumnsState(columns);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, columnsState]);

    const cmp = !hide && (
        <Menu
            width={menuWidth}
            height={menuHeight}
            open={menuOpen}
            onClick={() => false}
            onClose={() => setMenuOpen(false)}
            alternativeContent={
                <CheckList
                    droppableId="filter-menu"
                    title={title}
                    items={columns?.map((column, index) => ({
                        id: column.field,
                        title: column.label ?? column.field,
                        checked: filters[column.field] ?? false,
                        onClick: onClickFilterItem(column.field),
                        padding: '0.5em 0',
                        actions: [<DragHandleIcon key={`${column.field}-${index}`} />],
                        data: column,
                    }))}
                    dragAndDropItems
                    onListOrderChange={(items) => {
                        const state = items.map((item) => item.data);
                        setColumnsState(state);
                    }}
                />
            }
        >
            <div onClick={() => setMenuOpen((o) => !o)}>
                <Tooltip title={tooltip}>
                    <Checkbox
                        color={colors?.background}
                        checkedIcon={<FilterAltOffIcon />}
                        icon={<FilterAltIcon />}
                        checked={checked}
                    />
                </Tooltip>
            </div>
        </Menu>
    );

    return [filteredColumns, cmp];
}
