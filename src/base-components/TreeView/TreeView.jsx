import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView as MuiTreeView, TreeItem } from "./TreeView.styled";
import MuiTransitionComponent from "./TreeView.transition";
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
  LabelComponent,
  TreeItemComponent,
  TransitionComponent,
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

  const CustomTreeItem = LabelComponent
    ? withTreeViewItem(LabelComponent, TreeItemComponent)
    : TreeItemComponent;

  const renderTree = (nodes) =>
    nodes?.map(({ id, label, ...node }) => (
      <CustomTreeItem
        key={id}
        id={id}
        nodeId={id}
        label={label}
        TransitionComponent={TransitionComponent}
        {...node}
      >
        {renderTree(node.children)}
      </CustomTreeItem>
    ));

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
        {CustomTreeItem && renderTree(nodes)}
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
  LabelComponent: PropTypes.any,
  TreeItemComponent: PropTypes.any,
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
  LabelComponent: undefined,
  TreeItemComponent: TreeItem,
  TransitionComponent: MuiTransitionComponent,
};
