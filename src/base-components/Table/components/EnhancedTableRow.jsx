import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { TableCell, TableRow, Tooltip, Image } from "../Table.styled";

function getRowContent({ column, data }) {
  const fieldValue =
    typeof column.field === "function"
      ? column.field(data)
      : data[column.field];

  let content;

  if (column.dateFormat && fieldValue) {
    content = moment(fieldValue).format(column.dateFormat);
  } else if (column.image && fieldValue) {
    content = (
      <Image
        src={fieldValue}
        alt={`${column.field}`}
        style={{
          width: column.image.width,
          height: column.image.height,
        }}
      />
    );
  } else {
    content = fieldValue;
  }

  return content;
}
export default function EnhancedTableRow({
  columns,
  handleClick,
  index,
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
      {columns?.map((column, colIndex) => (
        <TableCell
          key={column.field}
          id={`enhanced-table-checkbox-${colIndex}`}
          align={column.align}
        >
          <Tooltip title={column.tooltip?.(data)}>
            {getRowContent({ column, data })}
          </Tooltip>
        </TableCell>
      ))}
    </TableRow>
  );
}

EnhancedTableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      numeric: PropTypes.bool,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      align: PropTypes.oneOf(["right", "center", "left", "justify", "inherit"]),
    })
  ),
  handleClick: PropTypes.func,
  index: PropTypes.number,
  data: PropTypes.object,
};

EnhancedTableRow.defaultProps = {
  columns: undefined,
  handleClick: undefined,
  index: undefined,
  data: undefined,
};

// <TableCell component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
// <TableCell align="right">{row.protein}</TableCell>
