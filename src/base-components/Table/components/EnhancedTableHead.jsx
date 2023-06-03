import React from "react";
import PropTypes from "prop-types";

import { PT_column, PT_colors } from "../Table.propTypes";

import { SORT } from "../Table.utils";

import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Checkbox,
} from "../Table.styled";

export function EnhancedTableHead({
  columns,
  orderBy,
  onRequestSort,
  headerColor,
  numSelected,
  onSelectAllClick,
  rowCount,
  selectionMode,
}) {
  // const theme = useTheme();
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {selectionMode && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}

        {columns?.map((headCell) => {
          const isActiveOrderBy = orderBy[headCell.id] !== undefined;
          const orderByDir = isActiveOrderBy && !!orderBy[headCell.id];
          let orderByValue = SORT.UP;
          if (isActiveOrderBy && orderBy[headCell.id]) {
            orderByValue = orderBy[headCell.id];
          }

          return (
            <TableCell
              key={headCell.field}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderByDir}
              colors={headerColor}
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
  orderBy: PropTypes.object,
  columns: PropTypes.arrayOf(PT_column),
  headerColor: PT_colors,
};

EnhancedTableHead.defaultProps = {
  onRequestSort: undefined,
  orderBy: "",
  columns: [],
  headerColor: undefined,
};
