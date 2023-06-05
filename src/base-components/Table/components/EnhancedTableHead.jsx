import React from "react";

import { SORT, SORT_VALUE } from "../Table.consts";

import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel,
  Checkbox,
} from "../Table.styled";

export function EnhancedTableHead({
  columns,
  sortColumns,
  orderBy,
  onRequestSort,
  headerColor,
  numSelected,
  onSelectAllClick,
  rowCount,
  selectionMode,
}) {
  const createSortHandler = (property, nextState) => (event) =>
    onRequestSort(event, property, nextState);

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
          const sortColumn = sortColumns.find(
            (sortColumn) => sortColumn.field === headCell.field
          );
          const { orderBy } = sortColumn ?? {};
          const isActiveOrderBy = [SORT.DOWN, SORT.UP].includes(orderBy);
          const nextState = {
            false: SORT.UP,
            [SORT.UP]: SORT.DOWN,
            [SORT.DOWN]: false,
          }[orderBy];

          return (
            <TableCell
              key={headCell.field}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={SORT_VALUE[orderBy]}
              colors={headerColor}
            >
              <TableSortLabel
                active={isActiveOrderBy}
                direction={orderBy === SORT.UP ? "asc" : "desc"}
                onClick={createSortHandler(headCell.field, nextState)}
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
