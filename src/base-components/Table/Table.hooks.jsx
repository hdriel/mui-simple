import React, { useEffect, useMemo, useState } from "react";
import {
  FilterAltOff as FilterAltOffIcon,
  FilterAlt as FilterAltIcon,
  DragHandle as DragHandleIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
} from "@mui/icons-material";
import { Checkbox, Tooltip } from "./Table.styled";

import { getColumn, getDataRange, getMenuWidth, SORT } from "./Table.utils";
import CheckList from "../List/CheckList";
import Menu from "../Menu/Menu";
import { isDefined } from "../../utils/helpers";

export function usePaginationDetails({
  rows = 0,
  pagination = {},
  onChangePagination,
  orderBy,
}) {
  const { total: _total, rowsPerPage: _rowsPerPage, page: _page } = pagination;

  const total = _total ?? rows;
  const rowsPerPage = _rowsPerPage ?? rows;
  const page = _page ?? 0;

  const [sliceFrom, sliceTo] = getDataRange({ rows, total, page, rowsPerPage });

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows = useMemo(() => {
    if (rows === total) {
      const totalRowsTillPrevPage = page <= 1 ? 0 : (page - 1) * rowsPerPage;

      return rowsPerPage - Math.min(rowsPerPage, rows - totalRowsTillPrevPage);
    } else {
      return rows >= rowsPerPage ? 0 : rowsPerPage - rows;
    }
  }, [total, page, rowsPerPage, rows]);

  const rowsPerPageList = useMemo(
    () =>
      [...new Set([5, 10, 20, rowsPerPage])]
        .filter(Boolean)
        .sort((a, b) => a - b),
    [rowsPerPage]
  );

  const handleRequestSort = (event, property) => {
    const orderDir = orderBy?.[property] ?? SORT.UP;
    const isAsc = orderBy?.[property] && orderDir === SORT.UP;
    const config = {
      pagination: { total, rowsPerPage, page },
      orderBy: { ...orderBy, [property]: isAsc ? SORT.DOWN : SORT.UP },
    };
    onChangePagination?.(config);
  };

  return {
    total,
    rowsPerPage,
    page,
    emptyRows,
    sliceFrom,
    sliceTo,
    rowsPerPageList,
    handleRequestSort,
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

export function useFilterColumns({
  firstItem = {},
  columns: _columns,
  hide,
  tooltip,
  title,
}) {
  const [columnsState, setColumnsState] = useState(_columns);

  const columns = useMemo(
    () =>
      (columnsState ?? Object.keys(firstItem))?.map((column) =>
        getColumn(firstItem, column)
      ) ?? [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columnsState]
  );

  const isSameData = useMemo(
    () => JSON.stringify(columns) === JSON.stringify(columnsState),
    [columns, columnsState]
  );

  useEffect(() => {
    if (!isSameData) setColumnsState(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSameData]);

  const [menuOpen, setMenuOpen] = useState(false);

  const [filters, setFilters] = useState(
    columns?.reduce(
      (obj, column) => ({
        ...obj,
        [column.field]: column.hide === undefined ? true : !column.hide,
      }),
      {}
    )
  );

  const [menuWidth, menuHeight] = useMemo(() => {
    const fields = columns?.map((column) => column.label);
    const width = getMenuWidth(fields);
    const height = (fields?.length ?? 1) * 61.2 + (title ? 48 : 0);

    return [width, height];
  }, [columns, title]);

  const checked = useMemo(
    () => Object.values(filters).filter(Boolean).length === columns.length,
    [filters, columns.length]
  );

  const filteredColumns = useMemo(
    () => columns.filter((column) => filters[column.field]),
    [filters, columns]
  );

  const onClickFilterItem = (field) => (event) => {
    event.stopPropagation();
    setFilters((o) => ({ ...o, [field]: !o[field] }));
  };

  const cmp = !hide && (
    <Menu
      width={menuWidth}
      height={menuHeight}
      open={menuOpen}
      onClick={() => false}
      onClose={() => setMenuOpen(false)}
      alternativeContent={
        <CheckList
          droppableId="filter-menu"
          title={title}
          items={columns?.map((column) => ({
            id: column.field,
            title: column.label ?? column.field,
            checked: filters[column.field] ?? false,
            onClick: onClickFilterItem(column.field),
            actions: [<DragHandleIcon />],
            data: column,
          }))}
          dragAndDropItems
          onListOrderChange={(items) => {
            const state = items.map((item) => item.data);
            setColumnsState(state);
          }}
        />
      }
    >
      <div onClick={() => setMenuOpen((o) => !o)}>
        <Tooltip title={tooltip}>
          <Checkbox
            color={"rgba(0, 0, 0, 0.87)"}
            checkedIcon={<FilterAltOffIcon />}
            icon={<FilterAltIcon />}
            checked={checked}
          />
        </Tooltip>
      </div>
    </Menu>
  );

  return [filteredColumns, cmp];
}

export function useSelectionMode({
  selectionMode: _selectionMode,
  hide,
  tooltip,
}) {
  const [selectionMode, setSelectionMode] = useState(_selectionMode ?? false);

  useEffect(() => {
    if (isDefined(_selectionMode)) setSelectionMode(_selectionMode);
  }, [_selectionMode]);

  const cmp = !hide && (
    <Tooltip title={tooltip}>
      <Checkbox
        checkedIcon={<LibraryAddCheckIcon />}
        icon={<LibraryAddCheckIcon />}
        checked={selectionMode}
        onClick={(_event) => setSelectionMode(!selectionMode)}
      />
    </Tooltip>
  );

  return [selectionMode, cmp];
}

export function useData({ columns, data: _data = [], orderBy }) {
  const [data, setData] = useState(_data);

  return { data };
}
