import React, { useEffect, useMemo, useState } from "react";
import {
  FilterAltOff as FilterAltOffIcon,
  FilterAlt as FilterAltIcon,
  DragHandle as DragHandleIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
} from "@mui/icons-material";
import { getDataRange } from "./Table.utils";
import CheckList from "../List/CheckList";
import Menu from "../Menu/Menu";
import Checkbox from "../Checkbox/Checkbox";
import { getOriginalTextWidth } from "../../hooks/useEllipsisActive";
import { action } from "@storybook/addon-actions";

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

function getColumn(row, column) {
  const isString = typeof column === "string";
  const field = isString ? column : column?.field;

  return {
    id: field,
    field: field,
    label: isString ? column : column.label,
    numeric: isString
      ? typeof row?.[field] === "number" ?? false
      : column.numeric,
    disablePadding: isString ? false : column.disablePadding ?? false,
    align: isString
      ? typeof row?.[field] === "number"
        ? "right"
        : "left"
      : column.align,
    format: undefined,
    dateFormat: undefined,
    props: undefined,
    cmp: undefined,
    image: isString
      ? /\.(jpg|jpeg|png|gif|bmp|tiff|svg|webp|ico|heic|jp2)$/i.test?.(
          row?.[field] ?? ""
        )
      : column.image,
    ...(typeof column === "object" && column),
  };
}

function getMenuWidth(fields) {
  const sized = fields?.map((field) => field?.length ?? 0) ?? [0];
  const index = Math.max(...sized);
  const maxWord = fields?.[sized.indexOf(index)] ?? "";
  const { offsetWidth, scrollWidth } = getOriginalTextWidth(maxWord);
  const checkboxPadding = 50;
  const draggalbePadding = 50;
  const spaceItemsPadding = 15;
  return checkboxPadding + draggalbePadding + offsetWidth + spaceItemsPadding;
}

export function useFilterColumns({ data, columns: _columns, hide }) {
  const [columnsState, setColumnsState] = useState(_columns);

  const columns = useMemo(
    () =>
      (columnsState ?? Object.keys(data?.[0] ?? {}))?.map((column) =>
        getColumn(data?.[0] ?? {}, column)
      ) ?? [],
    [columnsState]
  );

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
    const fields = columnsState?.map((column) => column.label);
    const width = getMenuWidth(fields);
    const height = (fields?.length ?? 1) * 75;

    return [width, height];
  }, [columnsState]);

  const checked = useMemo(
    () => Object.values(filters).filter(Boolean).length === columns.length,
    [filters]
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
          title="columns"
          items={columns?.map((column) => ({
            id: column.id,
            title: column.label ?? column.field,
            checked: filters[column.field] ?? false,
            onClick: onClickFilterItem(column.field),
            actions: [<DragHandleIcon />],
          }))}
          dragAndDropItems
          onListOrderChange={(fields) => {
            const ids = fields.map(({ id }) => id);
            const state = ids.map((id) =>
              columnsState.find((column) => column.field === id)
            );
            setColumnsState(state);
          }}
        />
      }
    >
      <div onClick={() => setMenuOpen((o) => !o)}>
        <Checkbox
          color={"rgba(0, 0, 0, 0.87)"}
          checkedIcon={<FilterAltOffIcon />}
          icon={<FilterAltIcon />}
          checked={checked}
          tooltipProps={{ title: "Filter Columns" }}
        />
      </div>
    </Menu>
  );

  return [filteredColumns, cmp];
}

export function useSelectionMode({ selectionMode: _selectionMode, hide }) {
  const [selectionMode, setSelectionMode] = useState(_selectionMode ?? false);

  useEffect(() => {
    setSelectionMode(_selectionMode);
  }, [_selectionMode]);

  const cmp = !hide && (
    <Checkbox
      checkedIcon={<LibraryAddCheckIcon />}
      icon={<CheckBoxOutlineBlankIcon />}
      checked={selectionMode}
      onClick={(event) => setSelectionMode(!selectionMode)}
      tooltipProps={{ title: "Enable Selection Mode" }}
    />
  );

  return [selectionMode, cmp];
}
