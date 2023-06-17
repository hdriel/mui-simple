import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { TreeView as MuiTreeView, TreeItem } from "./TreeView.styled";
import TreeViewItem from "./TreeViewItem";

export default function TreeView({
  nodes,
  collapseIcon,
  expandIcon,
  multiSelect,
  expandedIds,
  onExpended,
  selectedIds,
  onSelected,
  ...props
}) {
  const handleToggle = onExpended
    ? (event, nodeIds) => onExpended(nodeIds)
    : undefined;

  const handleSelect = onSelected
    ? (event, nodeIds) => onSelected(nodeIds)
    : undefined;

  const renderTree = (nodes) =>
    nodes?.map(({ id, label, icon, info, ...node }) => (
      <TreeViewItem
        key={id}
        nodeId={id}
        labelText={label}
        labelIcon={icon}
        labelInfo={info}
        {...node}
      >
        {renderTree(node.children)}
      </TreeViewItem>
    )) ?? null;

  return (
    <Box>
      <MuiTreeView
        defaultCollapseIcon={collapseIcon}
        defaultExpandIcon={expandIcon}
        defaultEndIcon={<div style={{ width: 24, bgcolor: "red" }} />}
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
};

TreeView.defaultProps = {
  nodes: [],
  collapseIcon: <ExpandMoreIcon />,
  expandIcon: <ChevronRightIcon />,
  multiSelect: undefined,
  expandedIds: undefined,
  onExpended: undefined,
  selectedIds: undefined,
  onSelected: undefined,
};
