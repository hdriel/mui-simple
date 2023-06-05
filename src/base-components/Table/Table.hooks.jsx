import React, { useEffect, useMemo, useState } from "react";
import {
  FilterAltOff as FilterAltOffIcon,
  FilterAlt as FilterAltIcon,
  DragHandle as DragHandleIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
  SortByAlpha as SortByAlphaIcon,
  North as NorthIcon,
  South as SouthIcon,
  ImportExport as ImportExportIcon,
} from "@mui/icons-material";

import { Checkbox, Tooltip } from "./Table.styled";
import {
  getColumn,
  getDataRange,
  getMenuWidth,
  getNextOrderBy,
} from "./Table.utils";
import CheckList from "../List/CheckList";
import Menu from "../Menu/Menu";
import { isDefined } from "../../utils/helpers";
import { SORT } from "./Table.consts";

export function usePaginationDetails({
  rows = 0,
  pagination = {},
  onChangePagination,
}) {
  const { total: _total, rowsPerPage: _rowsPerPage, page: _page } = pagination;

  const total = _total ?? rows;
  const independentData = total === rows;
  const rowsPerPage = _rowsPerPage ?? rows;
  const page = _page ?? 0;

  const [sliceFrom, sliceTo] = getDataRange({ rows, total, page, rowsPerPage });

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows = useMemo(() => {
    if (independentData) {
      const totalRowsTillPrevPage = page <= 1 ? 0 : (page - 1) * rowsPerPage;

      return rowsPerPage - Math.min(rowsPerPage, rows - totalRowsTillPrevPage);
    } else {
      return rows >= rowsPerPage ? 0 : rowsPerPage - rows;
    }
  }, [independentData, page, rowsPerPage, rows]);

  const rowsPerPageList = useMemo(
    () =>
      [...new Set([5, 10, 20, rowsPerPage])]
        .filter(Boolean)
        .sort((a, b) => a - b),
    [rowsPerPage]
  );

  return {
    independentData,
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

export function useFilterColumns({
  firstItem = {},
  columns: _columns,
  hide,
  tooltip,
  title,
  colors,
}) {
  const [columnsState, setColumnsState] = useState(_columns);

  const columns = useMemo(
    () =>
      (columnsState ?? Object.keys(firstItem))?.map((column) =>
        getColumn(firstItem, column)
      ) ?? [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [firstItem]
  );

  const isSameData = useMemo(
    () => JSON.stringify(columns) === JSON.stringify(columnsState),
    [columns]
  );

  const [filters, setFilters] = useState(
    columns?.reduce(
      (obj, column) => ({
        ...obj,
        [column.field]: column.hide === undefined ? true : !column.hide,
      }),
      {}
    )
  );

  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isSameData) setColumnsState(columns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSameData]);

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
            color={colors?.background}
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
  colors,
}) {
  console.log("useSelectionMode.colors?.background", colors?.background);
  const [selectionMode, setSelectionMode] = useState(_selectionMode ?? false);

  useEffect(() => {
    if (isDefined(_selectionMode)) setSelectionMode(_selectionMode);
  }, [_selectionMode]);

  const cmp = !hide && (
    <Tooltip title={tooltip}>
      <Checkbox
        color={colors?.background}
        checkedIcon={<LibraryAddCheckIcon />}
        icon={<LibraryAddCheckIcon />}
        checked={selectionMode}
        onClick={(_event) => setSelectionMode(!selectionMode)}
      />
    </Tooltip>
  );

  return [selectionMode, cmp];
}

export function useSortColumns({
  firstItem,
  columns,
  orderBy: _orderBy = [],
  hide,
  onChangeSortColumns,
  title,
  tooltip,
  colors,
}) {
  const [sortColumns, setSortColumns] = useState(
    columns?.map(
      (column) =>
        ({
          field: column.field,
          orderBy: [SORT.DOWN, SORT.UP].includes(column.orderBy)
            ? column.orderBy
            : false,
          label: column.label,
          type: typeof firstItem[column.field],
        } ?? [])
    )
  );

  const handleRequestSort = (event, property, orderBy) => {
    const sortColumn = sortColumns.find(({ field }) => field === property);
    if (sortColumn === -1) return;
    sortColumn.orderBy = orderBy;
    setSortColumns([...sortColumns]);

    onChangeSortColumns?.(
      sortColumns
        .filter((sortColumn) => sortColumn.orderBy)
        .reduce((obj, sc) => ({ ...obj, [sc.field]: sc.orderBy }), {})
    );
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const [menuWidth, menuHeight] = useMemo(() => {
    const fields = sortColumns?.map((column) => column.label);
    const width = getMenuWidth(fields);
    const height = (fields?.length ?? 1) * 61.2 + (title ? 48 : 5);

    return [width, height];
  }, [sortColumns, title]);

  const onClickItem = (field, orderBy) => (event) => {
    event.stopPropagation();
    const sortColumn = sortColumns.find((sc) => sc.field === field);
    if (!sortColumn) return;
    sortColumn.orderBy = orderBy;
    setSortColumns([...sortColumns]);
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
          items={sortColumns?.map((column) => ({
            id: column.field,
            title: column.label ?? column.field,
            color: "rgba(0, 0, 0, 0.87)",
            checked: column.orderBy === SORT.UP,
            checkedIcon: <NorthIcon />,
            icon:
              column.orderBy === SORT.DOWN ? (
                <SouthIcon />
              ) : (
                <ImportExportIcon />
              ),
            onClick: onClickItem(column.field, getNextOrderBy(column.orderBy)),
            actions: [<DragHandleIcon />],
            data: column,
          }))}
          dragAndDropItems
          onListOrderChange={(items) => {
            const state = items.map((item) => item.data);
            setSortColumns(state);
          }}
        />
      }
    >
      <div onClick={() => setMenuOpen((o) => !o)}>
        <Tooltip title={tooltip}>
          <Checkbox
            color={colors?.background}
            checkedIcon={<SortByAlphaIcon />}
            icon={<SortByAlphaIcon />}
            checked={sortColumns.some((column) => column.orderBy)}
          />
        </Tooltip>
      </div>
    </Menu>
  );

  return { sortColumns, handleRequestSort, cmp };
}

export function useData({
  page,
  independentData,
  sortColumns,
  data: _data = [],
  sliceFrom = 0,
  sliceTo,
}) {
  const sortedData = useMemo(() => {
    let data = _data ?? [];
    if (independentData) {
      sortColumns
        .filter((sortColumn) => sortColumn.orderBy)
        .forEach((sortColumn) => {
          data = data.sort((item1, item2) => {
            const [a, b] =
              sortColumn.orderBy === SORT.UP
                ? [item1[sortColumn.field], item2[sortColumn.field]]
                : [item2[sortColumn.field], item1[sortColumn.field]];

            return sortColumn.type === "number"
              ? a - b
              : `${a}`.localeCompare(`${b}`);
          });
        });
    }

    data = data.slice(sliceFrom, sliceTo);

    return data;
  }, [_data, sortColumns, sliceFrom, sliceTo, page]);

  return sortedData;
}
