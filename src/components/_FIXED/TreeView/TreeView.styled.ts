import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView as MuiTreeView, SimpleTreeViewProps as TreeViewProps } from '@mui/x-tree-view';
import { TreeItem as MuiTreeItem, treeItemClasses } from '@mui/x-tree-view';
import { borderedStyles, closeIconFade, edgeCorners, selectedColor } from './TreeView.styles';
import { numberToPx } from '../../../utils/helpers';

// export const TreeView: React.FC<TreeViewProps<any> & { maxWidth?: string | number; height?: string | number }> = styled(
export const TreeView: React.FC<TreeViewProps<any> & { maxWidth?: string | number; height?: string | number }> = styled(
    MuiTreeView,
    {
        shouldForwardProp: (propName: string) => !['maxWidth', 'height'].includes(propName as string),
    }
)`
    height: ${(props: any) => numberToPx(props.height)};
    flex-grow: 1;
    max-width: ${(props: any) => (props.maxWidth ? numberToPx(props.maxWidth) : undefined)};
    overflow-y: auto;
    overflow-x: hidden;
`;

export const TreeItem = MuiTreeItem;

export const LabelIconTreeItemStyled = styled(MuiTreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        width: 'auto',
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

export const IndentBorderTreeItemStyled = styled(MuiTreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(0.2, 0),
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
}));

export const TreeItemStyled = styled(MuiTreeItem, {
    shouldForwardProp: (propName: string) => !['bordered', 'closeIconFade'].includes(propName as string),
})`
    ${closeIconFade};
    ${borderedStyles};
    ${selectedColor};
    ${edgeCorners};

    & .${treeItemClasses.content} {
        width: auto;

        padding-right: ${(props: any) => props.theme.spacing(1)};
        font-weight: ${(props: any) => props.theme.typography.fontWeightMedium};

        &.Mui-expanded {
            font-weight: ${(props: any) => props.theme.typography.fontWeightRegular};
        }

        & .${treeItemClasses.label} {
            font-weight: inherit;
            color: inherit;
        }
    }

    & .${treeItemClasses.groupTransition} {
        margin-left: 0;

        & .${treeItemClasses.content} {
            padding-left: ${(props: any) => props.theme.spacing(2)};
        }
    }
`;
