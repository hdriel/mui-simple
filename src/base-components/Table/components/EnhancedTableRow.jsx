import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { TableCell, TableRow, Tooltip, Image } from "../Table.styled";
import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography";
import Checkbox from "../../Checkbox/Checkbox";

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

EnhancedTableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      numeric: PropTypes.bool,
      format: PropTypes.func,
      disablePadding: PropTypes.bool,
      label: PropTypes.string,
      align: PropTypes.oneOf(["right", "center", "left", "justify", "inherit"]),
      dateFormat: PropTypes.string,
      props: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
      cmp: PropTypes.any,
      image: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        avatar: PropTypes.bool,
      }),
    })
  ),
  handleClick: PropTypes.func,
  index: PropTypes.number,
  evenRowsColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  oddRowsColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
};

EnhancedTableRow.defaultProps = {
  columns: undefined,
  handleClick: undefined,
  index: undefined,
  data: undefined,
};

// <TableCell component="th" id={labelId} scope="row" padding="none">{row.name}</TableCell>
// <TableCell align="right">{row.protein}</TableCell>
