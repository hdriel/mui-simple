import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box as MuiBox } from '@mui/material';
import type { ToolbarProps, AppBarProps, BoxProps } from '@mui/material';

interface AppBarStyledProps {
    drawerWidth?: number;
    /* Todo: assert this type and its usage logic
		since the customColor made using function that returns array */
    customColor?: string[];
}
type AppBarStyledPropsType = AppBarStyledProps & AppBarProps;
export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (propName) => !['drawerWidth', 'customColor'].includes(propName as string),
})<AppBarStyledPropsType>`
    width: calc(100% - ${(props) => props.drawerWidth}px);
    transition: ${(props) =>
        props.theme.transitions.create('width', {
            easing: props.theme.transitions.easing.sharp,
            duration: props.theme.transitions.duration.enteringScreen,
        })};
    margin-left: ${(props) => props.drawerWidth}px;
    &.MuiPaper-root {
        background-color: ${(props) => props.customColor};
    }
`;

export const Toolbar = styled(MuiToolbar)<ToolbarProps>``;

export const TitleWrapper = styled(MuiBox)<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1em;
`;

export const Box = styled(MuiBox)<BoxProps>``;
