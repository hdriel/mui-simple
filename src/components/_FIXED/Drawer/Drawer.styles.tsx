import type { PropsWithChildren } from 'react';
import type { SxProps, Theme } from '@mui/material';

// const openedMixin = (theme: Theme, drawerWidth?: number | string): SxProps => ({});
//
// const closedMixin = (theme: Theme): SxProps => ({
//     // width: `calc(${theme.spacing(7)} + 1px)`,
//     // [theme.breakpoints.up('sm')]: {
//     //     width: `calc(${theme.spacing(8)} + 1px)`,
//     // },
// });

interface DrawerStylesProps {
    theme?: Theme;
    open?: boolean;
    bgColor?: string;
    isMiniPersistent?: boolean;
    drawerWidth?: number | string;
}

export function drawerStyles(props: DrawerStylesProps): SxProps {
    const { theme, bgColor } = props;
    return {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        background: bgColor,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    };
}
