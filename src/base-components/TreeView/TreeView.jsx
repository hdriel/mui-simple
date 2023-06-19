import React, { isValidElement } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  TreeView as MuiTreeView,
  IndentBorderTreeItemStyled,
  TreeItem,
  TreeItemStyled,
} from "./TreeView.styled";
import LabelIconTreeItemStyled from "./LabelIconTreeItemStyled";
import { CloseSquare, MinusSquare, PlusSquare } from "./TreeView.icons";
import TransitionComponent from "./TreeView.transition";
import { withTreeViewItem } from "./withTreeViewItem";

export default function TreeView({
  nodes,
  collapseIcon,
  expandIcon,
  endIcon,
  multiSelect,
  expandedIds,
  onExpended,
  selectedIds,
  onSelected,
  useStyle,
  Component,
  ...props
}) {
  const handleToggle = onExpended
    ? (event, nodeIds) => {
        onExpended([].concat(nodeIds));
      }
    : undefined;

  const handleSelect = onSelected
    ? (event, nodeIds) => {
        onSelected([].concat(nodeIds));
      }
    : undefined;

  const CustomTreeItem = Component ? withTreeViewItem(Component) : TreeItem;

  const renderTree = (nodes) =>
    nodes?.map(({ id, label, ...node }) => (
      <CustomTreeItem
        key={id}
        TransitionComponent={TransitionComponent}
        nodeId={id}
        label={label}
        {...node}
      >
        {renderTree(node.children)}
      </CustomTreeItem>
    ));

  if (useStyle === "LabelIcon") {
    collapseIcon = <ArrowDropDownIcon />;
    expandIcon = <ArrowRightIcon />;
    endIcon = <div style={{ width: 24 }} />;
  } else if (useStyle === "IndentBorder") {
    collapseIcon = <MinusSquare />;
    expandIcon = <PlusSquare />;
    endIcon = <CloseSquare />;
  }

  return (
    <Box>
      <MuiTreeView
        defaultCollapseIcon={collapseIcon}
        defaultExpandIcon={expandIcon}
        defaultEndIcon={endIcon}
        multiSelect={multiSelect}
        expanded={expandedIds}
        selected={selectedIds}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        maxWidth={400}
        {...props}
      >
        {renderTree(nodes)}
      </MuiTreeView>
    </Box>
  );
}

const nodePropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.array,
  })
);

TreeView.propTypes = {
  nodes: nodePropTypes,
  collapseIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expandIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  multiSelect: PropTypes.bool,
  expandedIds: PropTypes.arrayOf(PropTypes.string),
  onExpended: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  onSelected: PropTypes.func,
  useStyle: PropTypes.oneOf(["default", "LabelIcon", "IndentBorder"]),
  Component: PropTypes.any,
};

TreeView.defaultProps = {
  nodes: [],
  collapseIcon: <ExpandMoreIcon />,
  expandIcon: <ChevronRightIcon />,
  endIcon: undefined,
  multiSelect: undefined,
  expandedIds: undefined,
  onExpended: undefined,
  selectedIds: undefined,
  onSelected: undefined,
  useStyle: "default",
  Component: "default",
};
