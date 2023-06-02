import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import { extractColors, SORT } from "../Table.utils";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { EnhancedTableHead } from "./EnhancedTableHead";
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
import EnhancedTableRow from "./EnhancedTableRow";
import {
  useFilterColumns,
  usePaginationDetails,
  useSelection,
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
  data,
  columns: _columns,
  onClickRow,
  actions,
  selectionMode,
  selectedActions,
  selectedLabel,
  paginationProps,
  paginationAlign,
  PaginationComponent,
  tableColor,
  headerColor,
  evenRowsColor,
  oddRowsColor,
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
    columns: _columns,
    hide: !addFilterColumnsAction,
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
          selectedActions.length ||
          filterActionCmp) && (
          <EnhancedTableToolbar
            title={title}
            actions={actions}
            filterAction={filterActionCmp}
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
              rowCount={data.length}
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
  elevation: PropTypes.number,
  stickyHeader: PropTypes.bool,
  dense: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedLabel: PropTypes.string,
  selectionMode: PropTypes.bool,
  addFilterColumnsAction: PropTypes.bool,
  title: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  onClickRow: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  orderBy: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.shape({
    total: PropTypes.number,
    rowsPerPage: PropTypes.number,
    page: PropTypes.number,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      numeric: PropTypes.bool,
      format: PropTypes.func,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      align: PropTypes.oneOf(["right", "center", "left", "justify", "inherit"]),
      dateFormat: PropTypes.string,
      props: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      cmp: PropTypes.any,
      image: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        avatar: PropTypes.bool,
      }),
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      Cmp: PropTypes.node,
    })
  ),
  selectedActions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      Cmp: PropTypes.node,
    })
  ),
  PaginationComponent: PropTypes.node,
  paginationProps: PropTypes.object,
  paginationAlign: PropTypes.oneOf(["start", "center", "end"]),
  tableColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  headerColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  evenRowsColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  oddRowsColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
};

EnhancedTable.defaultProps = {
  elevation: 10,
  dense: undefined,
  selectionMode: undefined,
  selectedLabel: undefined,
  title: undefined,
  orderBy: undefined,
  pagination: undefined,
  onChange: undefined,
  onClickRow: undefined,
  data: [],
  columns: [],
  actions: [],
  PaginationComponent: undefined,
  paginationProps: undefined,
  paginationAlign: undefined,
  headerColor: undefined,
  evenRowsColor: undefined,
  oddRowsColor: undefined,
};

// sx={{ backgroundColor: lighten(theme.palette.primary.main, 0.7), color: 'black' }}

// <TableCell component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
// <TableCell align="right">{row.protein}</TableCell>
