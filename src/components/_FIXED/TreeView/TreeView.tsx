import React from 'react';
import { Box } from '@mui/material';

import { TreeView as MuiTreeView, TreeItem, TreeItemStyled } from './TreeView.styled';
import MuiTransitionComponent from './TreeView.transition';
import { withTreeViewItem } from './withTreeViewItem';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TreeViewProps } from '../../decs';

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

    const handleToggle = onExpanded ? (event, nodeIds) => onExpanded([].concat(nodeIds)) : undefined;
    const handleSelect = onSelected ? (event, nodeIds) => onSelected([].concat(nodeIds)) : undefined;

    const CustomTreeItem: any = CustomComponent
        ? withTreeViewItem(CustomComponent, TreeItemStyled, externalItemProps)
        : TreeItemComponent;

    const renderTree = (nodes: any[]): any[] =>
        nodes?.map(({ id, label, ...node }) => (
            <CustomTreeItem
                key={node[fieldId] ?? id}
                id={node[fieldId] ?? id}
                nodeId={node[fieldId] ?? id}
                label={node[fieldLabel] ?? label}
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
                expanded={expandedIds}
                selected={selectedIds}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                maxWidth={maxWidth}
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
