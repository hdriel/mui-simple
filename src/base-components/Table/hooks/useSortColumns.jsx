import React, { useMemo, useState } from "react";
import { SORT } from "../Table.consts";
import { getMenuSizes, getNextOrderBy } from "../Table.utils";
import Menu from "../../Menu/Menu";
import CheckList from "../../List/CheckList";
import {
  DragHandle as DragHandleIcon,
  ImportExport as ImportExportIcon,
  North as NorthIcon,
  SortByAlpha as SortByAlphaIcon,
  South as SouthIcon,
} from "@mui/icons-material";
import { Checkbox, Tooltip } from "../Table.styled";

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
          type: typeof firstItem?.[column.field],
        } ?? [])
    )
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const [menuWidth, menuHeight] = useMemo(() => {
    return getMenuSizes({ columns: sortColumns, title });
  }, [sortColumns, title]);

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
          disableGuttersItems
          droppableId="filter-menu"
          title={title}
          items={sortColumns?.map((column) => ({
            id: column.field,
            title: column.label ?? column.field,
            color: "rgba(0, 0, 0, 0.87)",
            checked: column.orderBy === SORT.UP,
            checkedIcon: <NorthIcon />,
            padding: "0.5em 0",
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
