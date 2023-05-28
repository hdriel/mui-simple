import React, { useRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { SORT } from "#src/components-base/TableData/TabelData.utils";
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

export default function EnhancedTable({
  title,
  pagination,
  onChange,
  orderBy,
  rows,
  columns,
  onClickRow,
  actions,
}) {
  const { total, rowsPerPage, page } = pagination ?? {};

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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length ?? 0) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar title={title} actions={actions} />

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              columns={columns}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {rows?.slice(0, rowsPerPage).map((row, index) => (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row)}
                  role="checkbox"
                  aria-checked={false}
                  tabIndex={-1}
                  key={row._id ?? index}
                  sx={{ cursor: onClickRow ? "pointer" : "default" }}
                >
                  {columns?.map((column, colIndex) => {
                    const fieldValue =
                      typeof column.field === "function"
                        ? column.field(row)
                        : row[column.field];

                    return (
                      <TableCell
                        key={column.field}
                        id={`enhanced-table-checkbox-${colIndex}`}
                        align={column.align}
                      >
                        <Tooltip title={column.tooltip?.(row)}>
                          <Box>
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {column.dateFormat && fieldValue ? (
                              moment(fieldValue).format(column.dateFormat)
                            ) : column.image !== undefined && fieldValue ? (
                              <Image
                                src={fieldValue}
                                alt={`${column.field}`}
                                style={{
                                  width: column.image.width,
                                  height: column.image.height,
                                }}
                              />
                            ) : (
                              fieldValue
                            )}
                          </Box>
                        </Tooltip>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 40 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {pagination && (
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 20]}
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
}

EnhancedTable.propTypes = {
  title: PropTypes.string,
  pagination: PropTypes.shape({
    total: PropTypes.number,
    rowsPerPage: PropTypes.number,
    page: PropTypes.number,
  }),
  onChange: PropTypes.func,
  onClickRow: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  orderBy: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.arrayOf(PropTypes.object),
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
};

EnhancedTable.defaultProps = {
  title: "Tabel",
  orderBy: undefined,
  pagination: undefined,
  onChange: undefined,
  onClickRow: undefined,
  rows: [],
  columns: [],
  actions: [],
};

// <TableCell component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
// <TableCell align="right">{row.protein}</TableCell>
