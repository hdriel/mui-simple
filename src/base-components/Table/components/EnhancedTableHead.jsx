import React from "react";
import PropTypes from "prop-types";

import { SORT } from "../Table.utils";
import {
  TableHead,
  TableCell,
  Box,
  TableRow,
  TableSortLabel,
} from "../Table.styled";

export function EnhancedTableHead({ columns, orderBy, onRequestSort }) {
  // const theme = useTheme();
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => {
          const isActiveOrderBy = orderBy[headCell.id] !== undefined;
          const orderByDir = isActiveOrderBy && !!orderBy[headCell.id];
          let orderByValue = SORT.UP;
          if (isActiveOrderBy && orderBy[headCell.id])
            orderByValue = orderBy[headCell.id];

          return (
            <TableCell
              key={headCell.field}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderByDir}
              // sx={{ backgroundColor: lighten(theme.palette.primary.main, 0.7), color: 'black' }}
            >
              <TableSortLabel
                active={isActiveOrderBy}
                direction={orderByValue === SORT.UP ? "asc" : "desc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func,
  orderBy: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      align: PropTypes.oneOf(["right", "center", "left", "justify", "inherit"]),
    })
  ),
};

EnhancedTableHead.defaultProps = {
  onRequestSort: undefined,
  orderBy: "",
  columns: [],
};
