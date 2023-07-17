import React from 'react';
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
import type { ColorsProps, Column, Pagination, ToolbarAction } from '../Table.desc';

const DEFAULT_EMPTY_ROW_HEIGHT = 57;

interface EnhancedTableProps {
    elevation: number;
    stickyHeader: boolean;
    helperText: string;
    maxHeight: string | number;
    dense: boolean;
    title: string;
    pagination: Pagination;
    onChangePagination: (param: { orderBy: string | boolean; pagination: Pagination }) => void;
    onChangeSortColumns: (sort: Record<string, string | number>) => void;
    orderBy: Record<string, string | number>;
    addSortColumnsAction: boolean;
    addFilterColumnsAction: boolean;
    addSelectionModeAction: boolean;
    data: any[];
    columns: Column[];
    onClickRow: (rowId: string, rowData: any) => void;
    actions: ToolbarAction[];
    selectionMode: boolean;
    selectedActions: ToolbarAction[];
    paginationProps: Record<string, any>;
    paginationAlign: 'start' | 'center' | 'end';
    PaginationComponent: React.ReactNode;
    actionColor: string | ColorsProps;
    tableColor: string | ColorsProps;
    headerColor: string | ColorsProps;
    evenRowsColor: string | ColorsProps;
    oddRowsColor: string | ColorsProps;
    FILTER_TOOLTIP_LABELS: string;
    FILTER_MENU_TITLE_LABELS: string;
    SORT_MENU_TITLE_LABELS: string;
    SELECTION_MODE_TOOLTIP_LABELS: string;
    NUM_SELECTED_LABELS: string;
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({
    elevation,
    stickyHeader,
    helperText,
    maxHeight,
    dense,
    title,
    pagination,
    onChangePagination,
    onChangeSortColumns,
    orderBy,
    addSortColumnsAction,
    addFilterColumnsAction,
    addSelectionModeAction,
    data: _data,
    columns: _columns,
    onClickRow,
    actions,
    selectionMode: _selectionMode,
    selectedActions,
    paginationProps,
    paginationAlign,
    PaginationComponent,
    actionColor,
    tableColor,
    headerColor,
    evenRowsColor,
    oddRowsColor,
    FILTER_TOOLTIP_LABELS,
    FILTER_MENU_TITLE_LABELS,
    SORT_MENU_TITLE_LABELS,
    SELECTION_MODE_TOOLTIP_LABELS,
    NUM_SELECTED_LABELS,
}): React.ReactElement => {
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
    });

    const [columns, filterActionCmp] = useFilterColumns({
        firstItem,
        columns: _columns,
        hide: !addFilterColumnsAction,
        tooltip: FILTER_TOOLTIP_LABELS,
        title: FILTER_MENU_TITLE_LABELS,
        colors: actionColorProps,
    });

    const {
        handleRequestSort,
        sortColumns,
        cmp: sortColumnsAction,
    } = useSortColumns({
        firstItem,
        columns,
        hide: !addSortColumnsAction,
        onChangeSortColumns,
        title: SORT_MENU_TITLE_LABELS,
        colors: actionColorProps,
    });

    const [selectionMode, selectionModeCmp] = useSelectionMode({
        selectionMode: _selectionMode,
        hide: !addSelectionModeAction,
        tooltip: SELECTION_MODE_TOOLTIP_LABELS,
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

    return (
        <Box sx={{ width: '100%' }}>
            <Paper elevation={elevation} sx={{ width: '100%', mb: 2, overflow: 'hidden', ...colorProps }}>
                {(title || actions?.length || selectedActions?.length || filterActionCmp) && (
                    <EnhancedTableToolbar
                        title={title}
                        actions={actions}
                        filterAction={filterActionCmp}
                        selectionModeAction={selectionModeCmp}
                        sortColumnsAction={sortColumnsAction}
                        selectedActions={selectedActions}
                        selectedLabel={NUM_SELECTED_LABELS}
                        data={_data}
                        selected={selected}
                        colorProps={colorProps}
                    />
                )}

                <TableContainer sx={{ maxHeight: maxHeight }}>
                    <Table stickyHeader={stickyHeader} sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
                        {helperText && <caption>{helperText}</caption>}
                        <EnhancedTableHead
                            numSelected={selected.length}
                            columns={columns}
                            sortColumns={sortColumns}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            headerColor={headerColor ?? colorProps}
                            rowCount={rows}
                            onSelectAllClick={handleSelectAllClick}
                            selectionMode={selectionMode}
                            actionColor={actionColorProps ?? colorProps}
                        />

                        <TableBody>
                            {data.map((row, index) => (
                                <EnhancedTableRow
                                    key={index}
                                    columns={columns}
                                    handleClick={(event, rowId, rowData) => {
                                        event.stopPropagation();
                                        if (!selectionMode) onClickRow?.(rowId, rowData);
                                    }}
                                    index={index}
                                    selectionMode={selectionMode}
                                    evenRowsColor={evenRowsColor}
                                    oddRowsColor={oddRowsColor}
                                    actionColor={actionColorProps ?? colorProps}
                                    onSelect={(event) => {
                                        handleSelect(event, row.id ?? index);
                                        if (!row.id) console.warn('Missing id field in row', row);
                                    }}
                                    selected={isSelected(row.id ?? index)}
                                >
                                    {row}
                                </EnhancedTableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: DEFAULT_EMPTY_ROW_HEIGHT * emptyRows }}>
                                    <TableCell colSpan={columns?.length || undefined} rowSpan={emptyRows} />
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

// EnhancedTable.propTypes = {
//     elevation: PT_elevation,
//     stickyHeader: PropTypes.bool,
//     dense: PropTypes.bool,
//     maxHeight: PT_sizeUnit,
//     selectedLabel: PropTypes.string,
//     selectionMode: PropTypes.bool,
//     addSortColumnsAction: PropTypes.bool,
//     addFilterColumnsAction: PropTypes.bool,
//     addSelectionModeAction: PropTypes.bool,
//     title: PropTypes.string,
//     helperText: PropTypes.string,
//     onChangePagination: PropTypes.func,
//     onClickRow: PropTypes.func,
//     pagination: PT_pagination,
//     columns: PropTypes.arrayOf(PT_column),
//     actions: PropTypes.arrayOf(PT_action),
//     selectedActions: PropTypes.arrayOf(PT_action),
//     PaginationComponent: PropTypes.any,
//     paginationProps: PropTypes.object,
//     paginationAlign: PropTypes.oneOf(['start', 'center', 'end']),
//     tableColor: PT_colors,
//     headerColor: PT_colors,
//     evenRowsColor: PT_colors,
//     oddRowsColor: PT_colors,
//     LABELS: PropTypes.shape({
//         FILTER_TOOLTIP: PropTypes.string,
//         SELECTION_MODE_TOOLTIP: PropTypes.string,
//     }),
//     // eslint-disable-next-line react/forbid-prop-types
//     orderBy: PropTypes.object,
//     // eslint-disable-next-line react/forbid-prop-types
//     data: PropTypes.arrayOf(PropTypes.object),
// };

EnhancedTable.defaultProps = {
    elevation: 10,
    stickyHeader: true,
    dense: undefined,
    maxHeight: undefined,
    selectionMode: undefined,
    addSortColumnsAction: undefined,
    addFilterColumnsAction: undefined,
    addSelectionModeAction: undefined,
    title: undefined,
    helperText: undefined,
    onChangePagination: undefined,
    onClickRow: undefined,
    pagination: undefined,
    columns: undefined,
    actions: undefined,
    selectedActions: undefined,
    PaginationComponent: undefined,
    paginationProps: undefined,
    paginationAlign: undefined,
    tableColor: undefined,
    headerColor: undefined,
    evenRowsColor: undefined,
    oddRowsColor: undefined,
    FILTER_TOOLTIP_LABELS: 'Filter Columns',
    FILTER_MENU_TITLE_LABELS: 'Filter Columns order',
    SORT_MENU_TITLE_LABELS: 'Sort Columns order',
    SELECTION_MODE_TOOLTIP_LABELS: 'Enable Selection Mode',
    NUM_SELECTED_LABELS: '{n} selected',
    orderBy: undefined,
    data: undefined,
};

export default EnhancedTable;
