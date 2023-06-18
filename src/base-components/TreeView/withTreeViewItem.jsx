import React from "react";
import { TreeItem } from "./TreeView.styled";

export function withTreeViewItem(Component) {
  const CustomTreeItemChild = (props) => (
    <TreeItem ContentComponent={Component ? Component : undefined} {...props} />
  );

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
