import React, { forwardRef } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { useTreeItem } from "@mui/lab";
import { TreeItem } from "./TreeView.styled";

export function withTreeViewItem({ ...config }) {
  return function createTreeViewItem(Component) {
    const componentDisplayName =
      Component.displayName ||
      Component.name ||
      (Component.constructor && Component.constructor.name) ||
      "Component";

    class C extends React.Component {
      static displayName = `WithTreeViewItem(${componentDisplayName})`;

      /**
       * Just avoiding a render callback for perf here
       */
      renderFormComponent = (itemProps) => {
        if (!itemProps) return null;

        const {
          className,
          classes,
          label,
          nodeId,
          icon: iconProp,
          expansionIcon,
          displayIcon,
        } = itemProps ?? {};

        const {
          disabled,
          expanded,
          selected,
          focused,
          handleExpansion,
          handleSelection,
          preventSelection,
        } = useTreeItem(nodeId);

        const icon = iconProp || expansionIcon || displayIcon;

        const handleMouseDown = (event) => {
          preventSelection(event);
        };

        const handleClick = (event) => {
          handleExpansion(event);
          handleSelection(event);
        };

        return (
          <Component
            {...this.props}
            itemProps={{
              disabled,
              expanded,
              selected,
              focused,
              handleExpansion,
              handleSelection,
              preventSelection,
              icon,
              handleMouseDown,
              handleClick,
            }}
          />
        );
      };

      renderTree(itemProps) {
        const { children, ...props } = itemProps;
        debugger;
        return (
          <TreeItem
            ContentComponent={this.renderFormComponent.bind(null, props)}
            {...props}
            {...config}
          >
            {[].concat(children)?.map(({ props: treeItemProps }) => {
              debugger;
              return this.renderTree(treeItemProps);
            })}
          </TreeItem>
        );
      }

      render() {
        return this.renderTree(this.props);
      }
    }

    return hoistNonReactStatics(
      C,
      Component // cast type to ComponentClass (even if SFC)
    );
  };
}
