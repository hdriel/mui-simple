import React, { forwardRef } from 'react';
import { useTreeItem } from '@mui/lab';
import { TreeItem } from './TreeView.styled';

export function withTreeViewItem(Component, TreeItemComponent = TreeItem) {
    // eslint-disable-next-line react/display-name
    const CustomTreeItemChild = forwardRef((props, ref) => {
        const {
            nodeId,
            TransitionComponent,
            children,
            closeIconFade,
            closeIconFadeStyles,
            borderedStyles,
            edgeCornersStyles,
            ...restProps
        } = props ?? {};

        const { disabled, expanded, selected, focused, handleExpansion, handleSelection, preventSelection } =
            useTreeItem(nodeId);

        const handleExpansionClick = (event): void => handleExpansion?.(event);
        const handleSelectionClick = (event): void => handleSelection?.(event);

        return (
            props && (
                <TreeItemComponent
                    key={nodeId}
                    ref={ref}
                    nodeId={nodeId}
                    TransitionComponent={TransitionComponent}
                    closeIconFade={closeIconFade}
                    bordered={borderedStyles}
                    closeIconFadeStyles={closeIconFadeStyles}
                    borderedStyles={borderedStyles}
                    edgeCornersStyles={edgeCornersStyles}
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
                        ...(restProps.color && { '--tree-view-color': restProps.color }),
                        ...(restProps.bgColor && { '--tree-view-bg-color': restProps.bgColor }),
                    }}
                >
                    {[].concat(children ?? [])?.map(({ props: treeItemProps }, index) => {
                        return <CustomTreeItemChild key={treeItemProps?.nodeId ?? index} {...treeItemProps} />;
                    })}
                </TreeItemComponent>
            )
        );
    });

    return function renderTree({ children, ...props }) {
        return (
            <CustomTreeItemChild {...props}>
                {[].concat(children ?? [])?.map(({ props: treeItemProps }) => renderTree(treeItemProps))}
            </CustomTreeItemChild>
        );
    };
}
