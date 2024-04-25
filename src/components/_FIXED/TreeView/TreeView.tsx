import React from 'react';
import { Box } from '@mui/material';

import { TreeView as MuiTreeView, TreeItem, TreeItemStyled } from './TreeView.styled';
import MuiTransitionComponent from './TreeView.transition';
import { withTreeViewItem } from './withTreeViewItem';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TreeViewProps } from '../../decs';

const TreeView: React.FC<TreeViewProps> = ({
    borderedStyles,
    closeIconFadeStyles,
    collapseIcon: _collapseIcon,
    CustomComponent,
    edgeCornersStyles,
    endIcon: _endIcon,
    expandedIds,
    expandIcon: _expandIcon,
    externalItemProps,
    fieldId,
    fieldLabel,
    maxWidth,
    multiSelect,
    nodes,
    onExpanded,
    onSelected,
    selectedIds,
    TransitionComponent,
    TreeItemComponent,
    useStyle,
    ...props
}) => {
    const collapseIcon = typeof _collapseIcon === 'string' ? <SVGIcon>{_collapseIcon}</SVGIcon> : _collapseIcon;
    const expandIcon = typeof _expandIcon === 'string' ? <SVGIcon>{_expandIcon}</SVGIcon> : _expandIcon;
    const endIcon = typeof _endIcon === 'string' ? <SVGIcon>{_endIcon}</SVGIcon> : _endIcon;

    const handleToggle = onExpanded ? (event, nodeIds) => onExpanded([].concat(nodeIds)) : undefined;
    const handleSelect = onSelected ? (event, nodeIds) => onSelected([].concat(nodeIds)) : undefined;

    const CustomTreeItem = CustomComponent
        ? withTreeViewItem(CustomComponent, TreeItemStyled, externalItemProps)
        : TreeItemComponent;

    const renderTree = (nodes): any[] =>
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
                multiSelect={multiSelect}
                expanded={expandedIds}
                selected={selectedIds}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                maxWidth={maxWidth}
                {...props}
            >
                {CustomTreeItem && renderTree(nodes)}
            </MuiTreeView>
        </Box>
    );
};

TreeView.defaultProps = {
    borderedStyles: false,
    closeIconFadeStyles: false,
    collapseIcon: 'ExpandMore',
    CustomComponent: undefined,
    edgeCornersStyles: false,
    endIcon: undefined,
    expandedIds: undefined,
    expandIcon: 'ChevronRight',
    externalItemProps: {},
    fieldId: undefined,
    fieldLabel: undefined,
    maxWidth: undefined,
    multiSelect: undefined,
    nodes: [],
    onExpanded: undefined,
    onSelected: undefined,
    selectedIds: undefined,
    TransitionComponent: MuiTransitionComponent,
    TreeItemComponent: TreeItem,
};

export default TreeView;
export type { TreeViewProps, TreeViewNodeProps } from '../../decs';
