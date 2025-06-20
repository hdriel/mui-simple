import React, { forwardRef } from 'react';
import { useTreeItemUtils } from '@mui/x-tree-view';
import { TreeItem } from './TreeView.styled';
import uuid from 'react-uuid';

export function withTreeViewItem(Component: any, TreeItemComponent: any = TreeItem, externalItemProps: any = {}) {
    // eslint-disable-next-line react/display-name
    const CustomTreeItemChild: any = forwardRef((props: any, ref) => {
        const {
            nodeId,
            fieldId,
            TransitionComponent,
            children,
            closeIconFade,
            closeIconFadeStyles,
            borderedStyles,
            edgeCornersStyles,
            ...restProps
        } = props ?? ({} as any);

        const {
            status: { disabled, expanded, selected, focused, expandable } = {},
            interactions: { handleExpansion, handleSelection },
        } = useTreeItemUtils({ itemId: nodeId });

        const handleExpansionClick = (event): void => handleExpansion?.(event);
        const handleSelectionClick = (event): void => handleSelection?.(event);

        const key = (fieldId && restProps[fieldId]) ?? (restProps.id || uuid());
        return (
            props && (
                <TreeItemComponent
                    key={key}
                    ref={ref}
                    id={key}
                    nodeId={key}
                    itemId={key}
                    TransitionComponent={TransitionComponent}
                    closeIconFade={closeIconFade}
                    bordered={borderedStyles}
                    closeIconFadeStyles={closeIconFadeStyles}
                    borderedStyles={borderedStyles}
                    edgeCornersStyles={edgeCornersStyles}
                    label={
                        <Component
                            {...restProps}
                            {...externalItemProps}
                            nodeId={nodeId}
                            itemDisabled={disabled}
                            itemExpanded={expanded}
                            itemSelected={selected}
                            itemFocused={focused}
                            onExpandedItem={handleExpansionClick}
                            onSelectedItem={handleSelectionClick}
                            preventSelectItem={!expandable}
                        />
                    }
                    style={
                        {
                            ...(restProps.color && { '--tree-view-color': restProps.color }),
                            ...(restProps.bgColor && { '--tree-view-bg-color': restProps.bgColor }),
                        } as Record<string, any>
                    }
                >
                    {[].concat(children ?? [])?.map(({ props: treeItemProps }: any, index) => {
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
