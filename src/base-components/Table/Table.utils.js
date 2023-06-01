import { useMemo } from "react";

function getDataRange({ rows, total, page, rowsPerPage }) {
  // case that got full data as total
  if (rows === total) {
    const from = page <= 1 ? 0 : (page - 1) * rowsPerPage;
    return [from, from + rowsPerPage];
  }

  // case that got partial data from server pagination side
  return [0, rowsPerPage];
}
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

  return { total, rowsPerPage, page, emptyRows, sliceFrom, sliceTo };
}

export function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

export const ROWS = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
export const SORT = { UP: "1", DOWN: "-1" };

export const HEAD_CELLS = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
    align: "right",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
    align: "right",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
    align: "right",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
    align: "right",
  },
];
