import React from "react";

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
          const orderByColumn = orderBy?.[headCell.field];
          const isActiveOrderBy = orderByColumn !== undefined;
          const orderByDir = isActiveOrderBy
            ? orderByColumn
              ? "asc"
              : "desc"
            : false;
          let orderByValue = SORT.UP;
          if (isActiveOrderBy && orderByColumn) {
            orderByValue = orderByColumn;
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
