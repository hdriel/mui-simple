import React, { useMemo, useState } from "react";
import { getDataRange } from "./Table.utils";
import CheckList from "../List/CheckList";
import { Button } from "./Table.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "../Menu/Menu";

export function usePaginationDetails(
  data = [],
  { total: _total, rowsPerPage: _rowsPerPage, page: _page } = {}
) {
  const rows = data?.length ?? 0;
  const total = _total ?? rows;
  const rowsPerPage = _rowsPerPage ?? data.length;
  const page = _page ?? 0;

  const [sliceFrom, sliceTo] = getDataRange({ rows, total, page, rowsPerPage });

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows = useMemo(
    () => {
      if (rows === total) {
        const totalRowsTillPrevPage = page <= 1 ? 0 : (page - 1) * rowsPerPage;

        return (
          rowsPerPage - Math.min(rowsPerPage, rows - totalRowsTillPrevPage)
        );
      } else {
        return rows >= rowsPerPage ? 0 : rowsPerPage - rows;
      }
    },
    [page, rowsPerPage, rows],
    []
  );

  const rowsPerPageList = useMemo(
    () =>
      [...new Set([5, 10, 20, rowsPerPage])]
        .filter(Boolean)
        .sort((a, b) => a - b),
    [rowsPerPage]
  );

  return {
    total,
    rowsPerPage,
    page,
    emptyRows,
    sliceFrom,
    sliceTo,
    rowsPerPageList,
  };
}

export function useSelection({ data }) {
  const [selected, setSelected] = useState([]);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((row, index) => row.id ?? index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return { selected, isSelected, handleSelectAllClick, handleSelect };
}

export function useFilterColumns({ columns, hide }) {
  const [filters, setFilters] = useState(
    columns?.reduce(
      (obj, column) => ({
        ...obj,
        [column.field]: column.hide === undefined ? true : !column.hide,
      }),
      {}
    )
  );

  const onClickFilterItem = (field) => (event) => {
    event.stopPropagation();
    setFilters((o) => ({ ...o, [field]: !o[field] }));
  };

  const cmp = !hide && (
    <Menu
      alternativeContent={
        <CheckList
          items={columns?.map((column) => ({
            title: column.label ?? column.field,
            checked: filters[column.field] ?? false,
            onClick: onClickFilterItem(column.field),
          }))}
        />
      }
    >
      <Button
        icon={<FilterListIcon />}
        tooltipProps={{ title: "Filter Columns" }}
      />
    </Menu>
  );

  return [columns.filter((column) => filters[column.field]), cmp];
}
