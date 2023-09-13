import type { ComponentType } from 'react';
import type { AppBarProps, BoxProps } from '@mui/material';
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box as MuiBox } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AppBarStyledProps {
    drawerWidth?: number;
    customColor?: string;
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
` as ComponentType<AppBarStyledPropsType>;

export const TitleWrapper = styled(MuiBox)<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1em;
`;

export const Toolbar = styled(MuiToolbar)`
    padding: 0 0.5em;
`;

export const Box = MuiBox;
