import type { ComponentType } from 'react';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box, ToolbarProps, AppBarProps, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (propName) => !['drawerWidth', 'customColor'].includes(propName as string),
})`
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
` as ComponentType<AppBarProps>;

export const Toolbar = styled(MuiToolbar)`` as ComponentType<ToolbarProps>;

export const TitleWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1em;
` as ComponentType<BoxProps>;
