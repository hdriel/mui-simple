import React, { cloneElement, isValidElement } from "react";
import moment from "moment";

import {
  TableCell,
  TableRow,
  Tooltip,
  Image,
  Checkbox,
  Avatar,
  Typography,
} from "../Table.styled";

function getRowContent({ column, data }) {
  const fieldValue =
    typeof column.field === "function"
      ? column.field(data)
      : data[column.field];

  const props =
    typeof column.props === "function" ? column.props(data) : column.props;

  const CustomCmp =
    isValidElement(column.cmp) && cloneElement(column.cmp, { ...props });

  if (CustomCmp) {
    return <CustomCmp>{fieldValue}</CustomCmp>;
  }

  let content;
  if (column.dateFormat && fieldValue) {
    content = moment(fieldValue).format(column.dateFormat);
  } else if (column.image && fieldValue) {
    const { width, height, avatar } =
      typeof column.image === "boolean" ? {} : column.image ?? {};

    content = avatar ? (
      <Avatar image={fieldValue} {...props} />
    ) : (
      <Image
        src={fieldValue}
        alt={`${column.field}`}
        style={{ width, height }}
        {...props}
      />
    );
  } else {
    content = fieldValue;
    content =
      typeof column.format === "function"
        ? column.format(content, data)
        : content;

    // numberVariable.toLocaleString('en-US')  1324171354 => 1,324,171,354
    content = column.numeric ? content?.toLocaleString("en-US") : content;
  }

  const tooltip =
    typeof column.tooltip === "function"
      ? column.tooltip?.(data)
      : column.tooltip;

  const wrapped = ["number", "string"].includes(typeof content) ? (
    <Typography rows={2} {...props}>
      {content}
    </Typography>
  ) : (
    content
  );

  return <Tooltip title={tooltip}>{wrapped}</Tooltip>;
}
export default function EnhancedTableRow({
  columns,
  handleClick,
  index,
  evenRowsColor,
  oddRowsColor,
  onSelect,
  selected,
  selectionMode,
  children,
}) {
  const data = children ?? {};

  return (
    <TableRow
      index={index}
      hover
      onClick={(event) => handleClick(event, data)}
      role="checkbox"
      tabIndex={-1}
      sx={{ cursor: handleClick ? "pointer" : "default" }}
    >
      {selectionMode && (
        <TableCell padding="checkbox">
          <Checkbox color="primary" checked={selected} onChange={onSelect} />
        </TableCell>
      )}

      {columns?.map((column, colIndex) => (
        <TableCell
          key={column.field}
          id={`enhanced-table-checkbox-${colIndex}`}
          align={column.align}
          colors={index % 2 === 0 ? evenRowsColor : oddRowsColor}
          rowSpan={data._rowSpan}
          colSpan={data.colSpan}
        >
          {getRowContent({ column, data })}
        </TableCell>
      ))}
    </TableRow>
  );
}
