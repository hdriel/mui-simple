import React from "react";
import { TreeItem } from "./TreeView.styled";
import clsx from "clsx";

export function withTreeViewItem(Component) {
  class C extends React.Component {
    render() {
      const { classes, onMouseDown, innerRef, ...props } = this.props ?? {};

      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div className={classes} onMouseDown={onMouseDown} ref={innerRef}>
          <Component {...props} />
        </div>
      );
    }
  }

  const ComponentWrapper = React.forwardRef((props, ref) => {
    return <C innerRef={ref} {...props} />;
  });

  const CustomTreeItemChild = (props) => {
    const {
      classes,
      className,
      icon: iconProp,
      expansionIcon,
      displayIcon,
      getTreeItemProps,
      nodeId,
      label,
      children,
      ...restProps
    } = props ?? {};

    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = getTreeItemProps?.() ?? {};

    const icon = iconProp || expansionIcon || displayIcon;
    const handleMouseDown = (event) => preventSelection?.(event);
    const handleExpansionClick = (event) => handleExpansion?.(event);
    const handleSelectionClick = (event) => handleSelection?.(event);

    debugger;
    return (
      <TreeItem
        nodeId={nodeId}
        label={label}
        ContentComponent={ComponentWrapper}
        ContentProps={{
          ...restProps,
          disabled: disabled,
          expanded: expanded,
          selected: selected,
          focused: focused,
          icon,
          classes: clsx(
            className,
            classes && classes.root,
            classes && {
              [classes.expanded]: expanded,
              [classes.selected]: selected,
              [classes.focused]: focused,
              [classes.disabled]: disabled,
            }
          ),
          onMouseDown: handleMouseDown,
        }}
      >
        {[].concat(children ?? [])?.map(({ props: treeItemProps }) => {
          return <CustomTreeItemChild {...treeItemProps} />;
        })}
      </TreeItem>
    );
  };

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
