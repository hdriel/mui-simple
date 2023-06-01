import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { SORT, usePaginationDetails } from "../Table.utils";
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
  Tooltip,
  Image,
} from "../Table.styled";
import EnhancedTableRow from "./EnhancedTableRow";

export default function EnhancedTable({
  title,
  pagination,
  onChange,
  orderBy,
  data,
  columns,
  onClickRow,
  actions,
  paginationProps,
  paginationAlign,
  PaginationComponent,
}) {
  const {
    total,
    rowsPerPage,
    rowsPerPageList,
    page,
    emptyRows,
    sliceFrom,
    sliceTo,
  } = usePaginationDetails(data, pagination);

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
    const config = { orderBy, pagination: { ...pagination, page: newPage } };
    onChange?.(config);
  };

  const handleChangeRowsPerPage = (event) => {
    const rowPerPage = parseInt(event.target.value, 10);
    const config = { orderBy, pagination: { ...pagination, rowPerPage } };
    onChange?.(config);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {(title || actions?.length) && (
          <EnhancedTableToolbar title={title} actions={actions} />
        )}

        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium">
            <EnhancedTableHead
              columns={columns}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {data?.slice(sliceFrom, sliceTo).map((row, index) => (
                <EnhancedTableRow
                  key={index}
                  columns={columns}
                  handleClick={handleClick}
                  index={index}
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
  title: PropTypes.string,
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
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      align: PropTypes.oneOf(["right", "center", "left", "justify", "inherit"]),
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  PaginationComponent: PropTypes.node,
  paginationProps: PropTypes.object,
  paginationAlign: PropTypes.oneOf(["start", "center", "end"]),
};

EnhancedTable.defaultProps = {
  title: undefined,
  orderBy: undefined,
  pagination: undefined,
  onChange: undefined,
  onClickRow: undefined,
  data: [],
  columns: [],
  actions: [],
};

// <TableCell component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
// <TableCell align="right">{row.protein}</TableCell>
