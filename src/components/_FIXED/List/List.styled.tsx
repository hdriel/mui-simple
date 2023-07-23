import React from 'react';

import {
    List as MuiList,
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    Collapse as MuiCollapse,
} from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { styled } from '@mui/material/styles';
import MuiDivider from '../../Divider/Divider';

export const Divider = MuiDivider;
export const Collapse = MuiCollapse;

export const List = styled(({ useTransition, children, ...props }) => (
    <MuiList {...props}>
        {useTransition && children ? (
            <TransitionGroup>
                <CSSTransition timeout={500}>{children}</CSSTransition>
            </TransitionGroup>
        ) : (
            children
        )}
    </MuiList>
))`
    width: 100%;
`;

export const ListItem = styled(MuiListItem, {
    shouldForwardProp: (propName) => !['flexDirectionItems'].includes(propName as string),
})`
    width: 100%;
    display: flex;
    flex-direction: column;

    & .MuiCollapse-root {
        width: 100%;
    }
`;
export const ListItemAvatar = MuiListItemAvatar;
export const ListItemButton = styled(MuiListItemButton, {
    shouldForwardProp: (propName) => !['flexDirection'].includes(propName),
})`
    width: 100%;
    padding: ${(props) => props.padding};
    flex-direction: ${(props) => props.flexDirection ?? 'row'};
`;
export const ListItemIcon = MuiListItemIcon;
export const ListItemSecondaryAction = MuiListItemSecondaryAction;
export const ListItemText = MuiListItemText;
export const ListSubheader = MuiListSubheader;
