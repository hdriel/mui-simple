import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { IndentBorderTreeItemStyled } from "../TreeView.styled";
import { CloseSquare, MinusSquare, PlusSquare } from "../TreeView.icons";

const IndentBorderTreeItem = forwardRef((props, ref) => {
  const { bgColor, color, icon, label, ...other } = props ?? {};

  return (
    props && (
      <IndentBorderTreeItemStyled
        ref={ref}
        {...other}
        label={label}
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor,
        }}
      />
    )
  );
});

IndentBorderTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

IndentBorderTreeItem.defaultProps = {
  bgColor: undefined,
  color: undefined,
  label: undefined,
};

export default IndentBorderTreeItem;

export const IndentBorderTreeItemIcons = {
  collapseIcon: <MinusSquare />,
  expandIcon: <PlusSquare />,
  endIcon: <CloseSquare />,
};
