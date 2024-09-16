import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Drawer as MuiDrawer,
    DrawerProps,
    SwipeableDrawer as MuiSwipeableDrawer,
    SwipeableDrawerProps,
    Box,
    BoxProps,
} from '@mui/material';

import { drawerStyles } from './Drawer.styles';

export const Drawer: React.FC<DrawerProps & { isMiniPersistent?: boolean; bgColor?: string }> = styled(MuiDrawer, {
    shouldForwardProp: (propName: string) => !['isMiniPersistent', 'bgColor'].includes(propName as string),
})((props) => ({
    ...drawerStyles(props),
}));

export const SwipeableDrawer: React.FC<SwipeableDrawerProps & { isMiniPersistent?: boolean; bgColor?: string }> =
    styled(MuiSwipeableDrawer, {
        shouldForwardProp: (propName: string) => !['isMiniPersistent', 'bgColor'].includes(propName as string),
    })((props) => ({
        ...drawerStyles(props),
    }));

export const ContentWrapper = styled(({ width, anchor, ...props }: any) => (
    <Box
        sx={{ width: ['top', 'bottom'].includes(anchor?.toLowerCase() ?? 'left') ? 'auto' : width }}
        role="presentation"
        {...props}
    />
))``;

export const DrawerHeader: React.FC<BoxProps & { anchor?: string }> = styled(Box)(({ theme, anchor }: any) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: anchor === 'right' ? 'flex-start' : 'flex-end',
}));
