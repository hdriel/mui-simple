import type { PropsWithChildren } from 'react';
import type { SxProps, Theme } from '@mui/material';

// Todo: check if its should be SxProps type
const openedMixin = (theme: Theme, drawerWidth?: number | string, bgColor?: string): SxProps => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    background: bgColor,
});

const closedMixin = (theme: Theme): SxProps => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

interface DrawerStylesProps {
    theme?: Theme;
    open?: boolean;
    isMiniPersistent?: boolean;
    drawerWidth?: number | string;
}
export function drawerStyles(props: PropsWithChildren<DrawerStylesProps>): SxProps {
    const { theme, open, isMiniPersistent, drawerWidth = 240, bgColor } = props;
    return {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(isMiniPersistent &&
            open && {
                ...openedMixin(theme, drawerWidth, bgColor),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
        ...(isMiniPersistent &&
            !open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
    };
}
