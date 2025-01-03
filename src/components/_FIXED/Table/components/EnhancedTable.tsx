import React, { isValidElement } from 'react';
import { useTheme } from '@mui/material/styles';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableHead } from './EnhancedTableHead';
import EnhancedTableRow from './EnhancedTableRow';
import { extractColors } from '../Table.utils';
import { TableCell, Box, TableRow, TableContainer, TableBody, Table, Paper } from '../Table.styled';
import {
    useData,
    useFilterColumns,
    usePaginationDetails,
    useSelection,
    useSelectionMode,
    useSortColumns,
} from '../hooks';
import { EnhancedTablePagination } from './EnhancedTablePagination';
import type { ColorsProps, TableProps } from '../Table.desc';

const EnhancedTable: React.FC<TableProps> = ({
    actionColor,
    actions,
    addFilterColumnsAction,
    addSelectionModeAction,
    addSortColumnsAction,
    columns: _columns,
    data: _data,
    DEFAULT_EMPTY_ROW_HEIGHT = 57,
    dense,
    elevation = 10,
    EmptyResultCmp = 'EMPTY RESULT',
    evenRowsColor,
    fieldId = 'id',
    FILTER_MENU_TITLE_LABEL = 'Filter Columns order',
    FILTER_TOOLTIP_LABEL = 'Filter Columns',
    headerColor,
    helperText,
    maxHeight,
    NUM_SELECTED_LABEL = '{n} selected',
    oddRowsColor,
    onChangePagination,
    onChangeSortColumns,
    onClickRow,
    orderBy,
    pagination,
    paginationAlign,
    PaginationComponent,
    paginationProps,
    rowsPerPageOptions = [5, 10, 20],
    selectedActions,
    SELECTION_MODE_TOOLTIP_LABEL = 'Enable Selection Mode',
    selectionMode: _selectionMode,
    SORT_MENU_TITLE_LABEL = 'Sort Columns order',
    SORT_TOOLTIP_LABEL = 'Sort Columns',
    stickyHeader = true,
    tableColor,
    title,
}): React.ReactElement | React.ReactNode => {
    const theme = useTheme();
    const colorProps = extractColors({ theme, colors: tableColor });
    const actionColorProps =
        extractColors({ theme, colors: actionColor }) ??
        (colorProps?.color && {
            background: colorProps?.color,
        });
    const rows = _data?.length ?? 0;
    const [firstItem] = _data ?? [];

    const { handleSelectAllClick, isSelected, selected, handleSelect } = useSelection({ data: _data });

    const { emptyRows, sliceFrom, sliceTo, independentData, page } = usePaginationDetails({
        rows,
        pagination,
        rowsPerPageOptions,
    });

    const [columns, filterActionCmp] = useFilterColumns({
        firstItem,
        columns: _columns,
        hide: !addFilterColumnsAction,
        tooltip: FILTER_TOOLTIP_LABEL,
        title: FILTER_MENU_TITLE_LABEL,
        colors: actionColorProps,
    });

    const {
        handleRequestSort,
        sortColumns,
        cmp: sortColumnsAction,
    } = useSortColumns({
        tooltip: SORT_TOOLTIP_LABEL,
        firstItem,
        columns,
        hide: !addSortColumnsAction,
        onChangeSortColumns,
        title: SORT_MENU_TITLE_LABEL,
        colors: actionColorProps,
    });

    const [selectionMode, selectionModeCmp] = useSelectionMode({
        selectionMode: _selectionMode,
        hide: !addSelectionModeAction,
        tooltip: SELECTION_MODE_TOOLTIP_LABEL,
        colors: actionColorProps,
    });

    const data = useData({
        page,
        independentData,
        sortColumns,
        sliceFrom,
        sliceTo,
        data: _data,
    });

    const isEmpty = !data.length;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper elevation={elevation} sx={{ width: '100%', mb: 2, overflow: 'hidden', ...colorProps }}>
                {(title || actions?.length || selectedActions?.length || filterActionCmp || selectionModeCmp) && (
                    <EnhancedTableToolbar
                        title={title}
                        actions={actions}
                        filterAction={filterActionCmp}
                        selectionModeAction={selectionModeCmp}
                        sortColumnsAction={sortColumnsAction}
                        selectedActions={selectedActions}
                        selectedLabel={NUM_SELECTED_LABEL}
                        data={_data}
                        selected={selected}
                        colorProps={actionColorProps ?? colorProps}
                        fieldId={fieldId}
                    />
                )}

                <TableContainer sx={{ maxHeight }}>
                    <Table
                        stickyHeader={stickyHeader}
                        sx={{
                            minWidth: 750,
                            ...(isEmpty && { width: '100%', display: 'flex', flexDirection: 'column' }),
                        }}
                        size={dense ? 'small' : 'medium'}
                    >
                        {helperText && <caption>{helperText}</caption>}
                        <EnhancedTableHead
                            numSelected={selected.length}
                            columns={columns}
                            sortColumns={sortColumns}
                            onRequestSort={handleRequestSort}
                            headerColor={(headerColor ?? colorProps) as ColorsProps}
                            rowCount={rows}
                            selectionMode={selectionMode}
                            onSelectAllClick={handleSelectAllClick}
                            actionColor={actionColorProps ?? colorProps}
                        />

                        <TableBody>
                            {data.map((row, index) => (
                                <EnhancedTableRow
                                    key={index}
                                    columns={columns}
                                    handleClick={(event, rowData) => {
                                        event.stopPropagation();
                                        if (!selectionMode) onClickRow?.(event, rowData);
                                    }}
                                    index={index}
                                    selectionMode={selectionMode}
                                    evenRowsColor={evenRowsColor as ColorsProps}
                                    oddRowsColor={oddRowsColor as ColorsProps}
                                    actionColor={actionColorProps ?? colorProps}
                                    onSelect={(event) => {
                                        handleSelect(event, row[fieldId] ?? index);
                                        if (!row[fieldId]) console.warn('Missing id field in row', row);
                                    }}
                                    selected={isSelected(row[fieldId] ?? index)}
                                >
                                    {row}
                                </EnhancedTableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow
                                    sx={{
                                        height: DEFAULT_EMPTY_ROW_HEIGHT * emptyRows,
                                        ...(isEmpty && { width: '100%', display: 'flex' }),
                                    }}
                                    rowSpan={emptyRows}
                                >
                                    <TableCell colSpan={columns?.length || undefined} centerContent={isEmpty}>
                                        {isEmpty && EmptyResultCmp
                                            ? isValidElement(EmptyResultCmp)
                                                ? React.cloneElement(EmptyResultCmp)
                                                : typeof EmptyResultCmp === 'string'
                                                ? EmptyResultCmp
                                                : // <EmptyResultCmp />
                                                  null
                                            : null}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <EnhancedTablePagination
                    pagination={pagination}
                    onChangePagination={onChangePagination}
                    rows={rows}
                    paginationProps={paginationProps}
                    paginationAlign={paginationAlign}
                    PaginationComponent={PaginationComponent}
                    orderBy={orderBy}
                />
            </Paper>
        </Box>
    );
};

EnhancedTable.displayName = 'Table';

export type { TableColumn, TableProps } from '../Table.desc';
export default EnhancedTable;
