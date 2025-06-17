import React from 'react';
import { Box } from '@mui/material';

import { TreeView as MuiTreeView, TreeItem, TreeItemStyled } from './TreeView.styled';
import MuiTransitionComponent from './TreeView.transition';
import { withTreeViewItem } from './withTreeViewItem';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TreeViewProps } from '../../decs';

function removeDuplicates(arr: string[]) {
    const countMap: Record<string, number> = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    return arr.filter((val) => countMap[val] === 1);
}

const TreeView: React.FC<TreeViewProps> = ({
    borderedStyles = false,
    closeIconFadeStyles = false,
    collapseIcon: _collapseIcon = 'ExpandMore',
    CustomComponent,
    edgeCornersStyles = false,
    endIcon: _endIcon,
    expandedIds,
    expandIcon: _expandIcon = 'ChevronRight',
    externalItemProps = {},
    fieldId,
    fieldLabel,
    maxWidth,
    multiSelect,
    nodes = [],
    onExpanded,
    onSelected,
    selectedIds,
    TransitionComponent = MuiTransitionComponent,
    TreeItemComponent = TreeItem,
    useStyle,
    ...props
}) => {
    const collapseIcon = typeof _collapseIcon === 'string' ? <SVGIcon>{_collapseIcon}</SVGIcon> : _collapseIcon;
    const expandIcon = typeof _expandIcon === 'string' ? <SVGIcon>{_expandIcon}</SVGIcon> : _expandIcon;
    const endIcon = typeof _endIcon === 'string' ? <SVGIcon>{_endIcon}</SVGIcon> : _endIcon;

    const handleToggle = onExpanded
        ? (event, nodeIds: string | string[]) => {
              event.stopPropagation();
              const expendedItems = removeDuplicates([].concat(expandedIds, nodeIds));
              onExpanded(expendedItems);
          }
        : undefined;
    const handleSelect = onSelected
        ? (event, nodeIds) => {
              event.stopPropagation();
              if (multiSelect) {
                  const selectedItems = removeDuplicates([].concat(selectedIds, nodeIds));
                  onSelected(selectedItems);
              } else {
                  onSelected([].concat(nodeIds));
              }
          }
        : undefined;

    const CustomTreeItem: any = CustomComponent
        ? withTreeViewItem(CustomComponent, TreeItemStyled, externalItemProps)
        : TreeItemComponent;

    const renderTree = (nodes: any[]): any[] =>
        nodes?.map(({ id, label, ...node }) => (
            <CustomTreeItem
                key={(fieldId && node[fieldId]) ?? id}
                label={node[fieldLabel] ?? label}
                TransitionComponent={TransitionComponent}
                {...node}
                id={(fieldId && node[fieldId]) ?? id}
                nodeId={(fieldId && node[fieldId]) ?? id}
                itemId={(fieldId && node[fieldId]) ?? id}
            >
                {renderTree(node.children)}
            </CustomTreeItem>
        ));

    return (
        <Box>
            <MuiTreeView
                slots={{
                    ...(collapseIcon && { collapseIcon: (props) => React.cloneElement(collapseIcon as any, props) }),
                    ...(expandIcon && { expandIcon: (props) => React.cloneElement(expandIcon as any, props) }),
                    ...(endIcon && { endIcon: (props) => React.cloneElement(endIcon as any, props) }),
                }}
                // defaultCollapseIcon={collapseIcon as React.ReactNode}
                // defaultExpandIcon={expandIcon as React.ReactNode}
                // defaultEndIcon={endIcon as React.ReactNode}
                expandedItems={expandedIds}
                onItemSelectionToggle={handleSelect}
                onItemExpansionToggle={handleToggle}
                maxWidth={maxWidth}
                selectedItems={selectedIds}
                {...(multiSelect && { multiSelect })}
                {...props}
            >
                {CustomTreeItem && renderTree(nodes)}
            </MuiTreeView>
        </Box>
    );
};

export default TreeView;
export type { TreeViewProps, TreeViewNodeProps } from '../../decs';
