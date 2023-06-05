import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { EnhancedTableHead } from "./EnhancedTableHead";
import EnhancedTableRow from "./EnhancedTableRow";

import {
  PT_elevation,
  PT_action,
  PT_column,
  PT_pagination,
  PT_sizeUnit,
  PT_colors,
} from "../Table.propTypes";

import { extractColors, SORT } from "../Table.utils";

import {
  TableCell,
  Box,
  TableRow,
  TableContainer,
  TableBody,
  Table,
  Paper,
} from "../Table.styled";

import {
  useData,
  useFilterColumns,
  usePaginationDetails,
  useSelection,
  useSelectionMode,
  useSortColumns,
} from "../Table.hooks";
import { EnhancedTablePagination } from "./EnhancedTablePagination";

export default function EnhancedTable({
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
  LABELS,
}) {
  const theme = useTheme();
  const colorProps = extractColors({ theme, colors: tableColor });
  const actionColorProps =
    extractColors({ theme, colors: actionColor }) ??
    (colorProps?.color && {
      background: colorProps?.color,
    });
  const rows = _data?.length ?? 0;
  const [firstItem] = _data ?? [];

  const { handleSelectAllClick, isSelected, selected, handleSelect } =
    useSelection({ data: _data });

  const { emptyRows, sliceFrom, sliceTo, independentData, page } =
    usePaginationDetails({
      rows,
      pagination,
      orderBy,
      onChangePagination,
    });

  const [columns, filterActionCmp] = useFilterColumns({
    firstItem,
    columns: _columns,
    hide: !addFilterColumnsAction,
    tooltip: LABELS.FILTER_TOOLTIP,
    title: LABELS.FILTER_MENU_TITLE,
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
    orderBy,
    onChangeSortColumns,
    title: LABELS.SORT_MENU_TITLE,
    colors: actionColorProps,
  });

  const [selectionMode, selectionModeCmp] = useSelectionMode({
    selectionMode: _selectionMode,
    hide: !addSelectionModeAction,
    tooltip: LABELS.SELECTION_MODE_TOOLTIP,
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
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={elevation}
        sx={{ width: "100%", mb: 2, overflow: "hidden", ...colorProps }}
      >
        {(title ||
          actions?.length ||
          selectedActions?.length ||
          filterActionCmp) && (
          <EnhancedTableToolbar
            title={title}
            actions={actions}
            filterAction={filterActionCmp}
            selectionModeAction={selectionModeCmp}
            sortColumnsAction={sortColumnsAction}
            selectedActions={selectedActions}
            selectedLabel={LABELS.NUM_SELECTED}
            data={_data}
            selected={selected}
            colorProps={colorProps}
          />
        )}

        <TableContainer sx={{ maxHeight: maxHeight }}>
          <Table
            stickyHeader={stickyHeader}
            sx={{ minWidth: 750 }}
            size={dense ? "small" : "medium"}
          >
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
              actionColor={actionColorProps}
            />

            <TableBody>
              {data.map((row, index) => (
                <EnhancedTableRow
                  key={index}
                  columns={columns}
                  handleClick={(event, rowId, rowData) =>
                    onClickRow?.(rowId, rowData)
                  }
                  index={index}
                  selectionMode={selectionMode}
                  evenRowsColor={evenRowsColor}
                  oddRowsColor={oddRowsColor}
                  actionColor={actionColorProps}
                  onSelect={(event) => {
                    handleSelect(event, row.id ?? index);
                    if (!row.id) console.warn("Missing id field in row", row);
                  }}
                  selected={isSelected(row.id ?? index)}
                >
                  {row}
                </EnhancedTableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 40 * emptyRows }}>
                  <TableCell colSpan={columns?.length || undefined} />
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
}

EnhancedTable.propTypes = {
  elevation: PT_elevation,
  stickyHeader: PropTypes.bool,
  dense: PropTypes.bool,
  maxHeight: PT_sizeUnit,
  selectedLabel: PropTypes.string,
  selectionMode: PropTypes.bool,
  addSortColumnsAction: PropTypes.bool,
  addFilterColumnsAction: PropTypes.bool,
  addSelectionModeAction: PropTypes.bool,
  title: PropTypes.string,
  helperText: PropTypes.string,
  onChangePagination: PropTypes.func,
  onClickRow: PropTypes.func,
  pagination: PT_pagination,
  columns: PropTypes.arrayOf(PT_column),
  actions: PropTypes.arrayOf(PT_action),
  selectedActions: PropTypes.arrayOf(PT_action),
  PaginationComponent: PropTypes.any,
  paginationProps: PropTypes.object,
  paginationAlign: PropTypes.oneOf(["start", "center", "end"]),
  tableColor: PT_colors,
  headerColor: PT_colors,
  evenRowsColor: PT_colors,
  oddRowsColor: PT_colors,
  LABELS: PropTypes.shape({
    FILTER_TOOLTIP: PropTypes.string,
    SELECTION_MODE_TOOLTIP: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  orderBy: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
};

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
  LABELS: {
    FILTER_TOOLTIP: "Filter Columns",
    FILTER_MENU_TITLE: "Filter Columns order",
    SORT_MENU_TITLE: "Sort Columns order",
    SELECTION_MODE_TOOLTIP: "Enable Selection Mode",
    NUM_SELECTED: "{n} selected",
  },
  orderBy: undefined,
  data: undefined,
};
