import React from 'react';
import type { AppBarProps } from '@mui/material';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box as MuiBox } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AppBarStyledProps {
    drawerWidth?: number;
    customColor?: string;
}
type AppBarStyledPropsType = AppBarStyledProps & AppBarProps;

export const AppBar: React.FC<AppBarStyledPropsType> = styled(MuiAppBar, {
    shouldForwardProp: (propName: string) => !['drawerWidth', 'customColor'].includes(propName as string),
})<AppBarStyledPropsType>`
    width: calc(100% - ${(props: any) => props.drawerWidth}px);
    transition: ${(props: any) =>
        props.theme.transitions.create('width', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.enteringScreen,
        })};
    margin-left: ${(props: any) => props.drawerWidth}px;

    &.MuiPaper-root {
        background-color: ${(props: any) => props.customColor};
    }
`;

export const Toolbar = styled(MuiToolbar)`
    padding: 0 0.5em;
`;

export const Box = MuiBox;
