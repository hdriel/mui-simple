import React from 'react';
import { IndeterminateCheckBox as IndeterminateCheckBoxIcon } from '@mui/icons-material';
import { SORT, SORT_VALUE } from '../Table.consts';
import { TableHead, TableCell, TableRow, TableSortLabel, Checkbox } from '../Table.styled';
import { getNextOrderBy } from '../Table.utils';
import type { ColorsProps, TableColumn, SORT_VALUE_TYPE } from '../Table.desc';

interface EnhancedTableHeadProps {
    columns: TableColumn[];
    sortColumns: TableColumn[];
    onRequestSort: (event: any, property: string, nextState: string) => void;
    headerColor: ColorsProps;
    actionColor: ColorsProps;
    numSelected: number;
    onSelectAllClick: (event: any) => void;
    rowCount: number;
    selectionMode: boolean;
}

export const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = ({
    columns,
    sortColumns,
    onRequestSort,
    headerColor,
    actionColor,
    numSelected,
    onSelectAllClick,
    rowCount,
    selectionMode,
}): React.ReactElement | React.ReactNode => {
    const createSortHandler = (property, nextState) => {
        return (event) => onRequestSort(event, property, nextState);
    };

    return (
        <TableHead>
            <TableRow>
                {selectionMode && (
                    <TableCell padding="checkbox" colors={headerColor}>
                        <Checkbox
                            color={actionColor?.background ?? actionColor?.color ?? 'primary'}
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            indeterminateIcon={
                                <IndeterminateCheckBoxIcon
                                    sx={{ color: actionColor?.background ?? actionColor?.color ?? 'primary' }}
                                />
                            }
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                )}

                {columns?.map((headCell) => {
                    const sortColumn = sortColumns.find((sortColumn) => sortColumn.field === headCell.field);
                    const { orderBy } = sortColumn ?? {};
                    const isActiveOrderBy = [SORT.DOWN, SORT.UP].includes(orderBy as string);
                    const sortDirection: SORT_VALUE_TYPE = {
                        [SORT.DOWN]: SORT_VALUE.DOWN,
                        [SORT.UP]: SORT_VALUE.UP,
                    }[orderBy] as SORT_VALUE_TYPE;

                    const nextState = getNextOrderBy(orderBy);

                    return (
                        <TableCell
                            key={headCell.field}
                            align={headCell.numeric ? 'right' : 'left'}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={sortDirection}
                            colors={headerColor}
                        >
                            <TableSortLabel
                                active={isActiveOrderBy}
                                direction={orderBy === SORT.UP ? 'asc' : 'desc'}
                                onClick={createSortHandler(headCell.field, nextState)}
                            >
                                {headCell.label}
                            </TableSortLabel>
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};
