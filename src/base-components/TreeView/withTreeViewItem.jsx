import React, { forwardRef } from "react";
import { useTreeItem } from "@mui/lab";
import { TreeItem } from "./TreeView.styled";

export function withTreeViewItem(Component, TreeItemComponent = TreeItem) {
  const CustomTreeItemChild = forwardRef((props, ref) => {
    const { nodeId, TransitionComponent, children, ...restProps } = props ?? {};

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItem(nodeId);

    const handleExpansionClick = (event) => handleExpansion?.(event);
    const handleSelectionClick = (event) => handleSelection?.(event);

    return (
      <TreeItemComponent
        ref={ref}
        nodeId={nodeId}
        TransitionComponent={TransitionComponent}
        label={
          <Component
            {...restProps}
            nodeId={nodeId}
            itemDisabled={disabled}
            itemExpanded={expanded}
            itemSelected={selected}
            itemFocused={focused}
            onExpandedItem={handleExpansionClick}
            onSelectedItem={handleSelectionClick}
            preventSelectItem={preventSelection}
          />
        }
        style={{
          "--tree-view-color": restProps.color,
          "--tree-view-bg-color": restProps.bgColor,
        }}
      >
        {[].concat(children ?? [])?.map(({ props: treeItemProps }) => {
          return <CustomTreeItemChild {...treeItemProps} />;
        })}
      </TreeItemComponent>
    );
  });

  return function renderTree({ children, ...props }) {
    return (
      <CustomTreeItemChild {...props}>
        {[].concat(children ?? [])?.map(({ props: treeItemProps }) => {
          return renderTree(treeItemProps);
        })}
      </CustomTreeItemChild>
    );
  };
}
