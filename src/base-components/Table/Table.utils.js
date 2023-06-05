import _ from "lodash";
import { getOriginalTextWidth } from "../../hooks/useEllipsisActive";
import { SORT } from "./Table.consts";

export function getDataRange({ rows, total, page, rowsPerPage }) {
  // case that got full data as total
  if (rows === total) {
    const from = page * rowsPerPage;
    return [from, from + rowsPerPage];
  }

  // case that got partial data from server pagination side
  return [0, rowsPerPage];
}

export function extractColors({ theme, colors }) {
  const { background, color } =
    typeof colors === "object" ? colors : { background: colors };

  const isThemeColor = !!(
    color === undefined &&
    (_.get(theme, `palette.${background}.main`) ??
      _.get(theme, `palette.${background}`))
  );

  const textColor = isThemeColor
    ? _.get(theme, `palette.${background}.contrastText`)
    : _.get(theme, `palette.${color}.main`) ??
      _.get(theme, `palette.${color}`, color);

  const bgColor =
    _.get(theme, `palette.${background}.main`) ??
    _.get(theme, `palette.${background}`, background);

  return { color: textColor, backgroundColor: bgColor };
}

export function getColumn(row, column) {
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
    dateFormat: isString
      ? typeof row?.[field] === "number" &&
        !new Date(row?.[field]).toISOString().startsWith("1970-01-01T")
        ? "DD/MM/YYYY HH:mm a"
        : undefined
      : undefined,
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

export function getMenuWidth(fields) {
  const sized = fields?.map((field) => field?.length ?? 0) ?? [0];
  const index = Math.max(...sized);
  const maxWord = fields?.[sized.indexOf(index)] ?? "";
  const { offsetWidth } = getOriginalTextWidth(maxWord);
  const checkboxPadding = 50;
  const draggalbePadding = 50;
  const spaceItemsPadding = 15;
  return checkboxPadding + draggalbePadding + offsetWidth + spaceItemsPadding;
}

// ### sort functions
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

export function getNextOrderBy(orderBy) {
  return {
    false: SORT.UP,
    [SORT.UP]: SORT.DOWN,
    [SORT.DOWN]: false,
  }[orderBy];
}
