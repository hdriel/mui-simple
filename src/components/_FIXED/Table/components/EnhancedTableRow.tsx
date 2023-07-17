import React from 'react';
import type { PropsWithChildren } from 'react';

import { TableCell, TableRow, Checkbox } from '../Table.styled';
import { getRowContent } from '../Table.utils';
import type { EnhancedTableRowProps } from '../Table.desc';

const EnhancedTableRow: React.FC<PropsWithChildren<EnhancedTableRowProps>> = ({
    columns,
    handleClick,
    index,
    evenRowsColor,
    oddRowsColor,
    actionColor,
    onSelect,
    selected,
    selectionMode,
    children,
}): React.ReactElement => {
    const data: any = children ?? {};

    return (
        <TableRow
            index={index}
            hover
            onClick={(event) => handleClick(event, data)}
            role="checkbox"
            tabIndex={-1}
            sx={{ cursor: handleClick ? 'pointer' : 'default' }}
        >
            {selectionMode && (
                <TableCell padding="checkbox" colors={index % 2 === 1 ? evenRowsColor : oddRowsColor}>
                    <Checkbox
                        color={actionColor?.background ?? actionColor?.color ?? 'primary'}
                        checked={selected ?? false}
                        onChange={onSelect}
                    />
                </TableCell>
            )}

            {columns?.map((column, colIndex) => (
                <TableCell
                    key={column.field}
                    id={`enhanced-table-checkbox-${colIndex}`}
                    align={column.align}
                    colors={index % 2 === 1 ? evenRowsColor : oddRowsColor}
                    rowSpan={data._rowSpan}
                    colSpan={data.colSpan}
                >
                    {getRowContent({ column, data })}
                </TableCell>
            ))}
        </TableRow>
    );
};

export default EnhancedTableRow;
