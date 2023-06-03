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
  TablePagination,
} from "../Table.styled";

import {
  useFilterColumns,
  usePaginationDetails,
  useSelection,
  useSelectionMode,
} from "../Table.hooks";

export default function EnhancedTable({
  elevation,
  stickyHeader,
  helperText,
  maxHeight,
  dense,
  title,
  pagination,
  onChange,
  orderBy,
  addFilterColumnsAction,
  addSelectionModeAction,
  data,
  columns: _columns,
  onClickRow,
  actions,
  selectionMode: _selectionMode,
  selectedActions,
  selectedLabel,
  paginationProps,
  paginationAlign,
  PaginationComponent,
  tableColor,
  headerColor,
  evenRowsColor,
  oddRowsColor,
  LABELS,
}) {
  const theme = useTheme();
  const { handleSelectAllClick, isSelected, selected, handleSelect } =
    useSelection({ data });

  const {
    total,
    rowsPerPage,
    rowsPerPageList,
    page,
    emptyRows,
    sliceFrom,
    sliceTo,
  } = usePaginationDetails(data, pagination);

  const [columns, filterActionCmp] = useFilterColumns({
    data,
    columns: _columns,
    hide: !addFilterColumnsAction,
    tooltip: LABELS.FILTER_TOOLTIP,
    title: LABELS.FILTER_NENU_TITLE,
  });

  const [selectionMode, selectionModeCmp] = useSelectionMode({
    selectionMode: _selectionMode,
    hide: !addSelectionModeAction,
    tooltip: LABELS.SELECTION_MODE_TOOLTIP,
  });

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event, rowId, rowData) => onClickRow?.(rowId, rowData);

  const handleRequestSort = (event, property) => {
    const orderDir = orderBy?.[property] ?? SORT.UP;
    const isAsc = orderBy?.[property] && orderDir === SORT.UP;
    const config = {
      pagination,
      orderBy: { ...orderBy, [property]: isAsc ? SORT.DOWN : SORT.UP },
    };
    onChange?.(config);
  };

  const handleChangePage = (event, newPage) => {
    if (typeof event === "number") newPage = event;

    const config = { orderBy, pagination: { ...pagination, page: newPage } };
    onChange?.(config);
  };

  const handleChangeRowsPerPage = (event) => {
    const rowPerPage = parseInt(event.target.value, 10);
    const config = { orderBy, pagination: { ...pagination, rowPerPage } };
    onChange?.(config);
  };

  const colorProps = extractColors({ theme: theme, colors: tableColor });

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
            selectedActions={selectedActions}
            selectedLabel={selectedLabel}
            data={data}
            selected={selected}
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
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headerColor={headerColor}
              rowCount={data?.length}
              onSelectAllClick={handleSelectAllClick}
              selectionMode={selectionMode}
            />

            <TableBody>
              {data?.slice(sliceFrom, sliceTo).map((row, index) => (
                <EnhancedTableRow
                  key={index}
                  columns={columns}
                  handleClick={handleClick}
                  index={index}
                  selectionMode={selectionMode}
                  evenRowsColor={evenRowsColor}
                  oddRowsColor={oddRowsColor}
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

        {pagination && (
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: paginationAlign ?? "end",
            }}
          >
            {PaginationComponent ? (
              <PaginationComponent
                totalPages={total}
                page={page}
                onChange={handleChangePage}
                {...paginationProps}
              />
            ) : (
              <TablePagination
                component="div"
                rowsPerPageOptions={rowsPerPageList}
                count={total}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </Box>
        )}
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
  addFilterColumnsAction: PropTypes.bool,
  addSelectionModeAction: PropTypes.bool,
  title: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  onClickRow: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  orderBy: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  pagination: PT_pagination,
  columns: PropTypes.arrayOf(PT_column),
  actions: PropTypes.arrayOf(PT_action),
  selectedActions: PropTypes.arrayOf(PT_action),
  PaginationComponent: PropTypes.node,
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
};

EnhancedTable.defaultProps = {
  elevation: 10,
  dense: undefined,
  selectionMode: undefined,
  selectedLabel: undefined,
  title: undefined,
  orderBy: undefined,
  pagination: undefined,
  addFilterColumnsAction: undefined,
  addSelectionModeAction: undefined,
  onChange: undefined,
  onClickRow: undefined,
  data: undefined,
  columns: undefined,
  actions: undefined,
  PaginationComponent: undefined,
  paginationProps: undefined,
  paginationAlign: undefined,
  headerColor: undefined,
  evenRowsColor: undefined,
  oddRowsColor: undefined,
  LABELS: {
    FILTER_TOOLTIP: "Filter Columns",
    FILTER_NENU_TITLE: "Columns",
    SELECTION_MODE_TOOLTIP: "Enable Selection Mode",
  },
};
