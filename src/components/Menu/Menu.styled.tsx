import React from 'react';
import type { ComponentType, PropsWithChildren } from 'react';
import {
    Menu as MuiMenu,
    MenuList as MuiMenuList,
    MenuItem as MuiMenuItem,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
    Popper as MuiPopper,
    ClickAwayListener,
    Grow,
    Box,
} from '@mui/material';
import type { BoxProps, MenuProps, PopperProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import Paper from '../Paper/Paper';

export const ContextMenuWrapper = styled(Box)`
    width: 100%;
    height: 100%;
`;

interface ManuWrapperStyledProps {
    arrow?: boolean;
    [key: string]: any;
}
type ManuWrapperStyledPropsType = ManuWrapperStyledProps & BoxProps & any;

export const MenuWrapper = styled(Box, {
    label: 'arrow-test',
    shouldForwardProp: (propName) => !['arrow'].includes(propName),
})<ManuWrapperStyledPropsType>`
    position: relative;
    overflow: visible;
    margin-top: 1.5px;
    width: 0;

    &::before {
        ${(props) =>
            props.arrow &&
            css`
                background-color: ${props.theme.palette.background.paper};
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 14px;
                width: 10px;
                height: 10px;
                transform: translateY(-50%) rotate(45deg);
                z-index: 1;
            `}
    }
` as ComponentType<ManuWrapperStyledPropsType>;

interface ManuStyledProps {
    height?: string | number;
    width?: string | number;
    maxHeight?: string | number;
    elevation?: number;
    onClick?: (event: any) => void;
    [key: string]: any;
}
type MenuStyledPropsType = PropsWithChildren<Omit<MenuProps, 'onClick'> & ManuStyledProps & any>;

// https://stackoverflow.com/questions/69065717/material-ui-menu-component-locks-body-scrollbar
export const Menu = styled(({ height, width, maxHeight, elevation, ...props }) => (
    <MuiMenu
        open
        PaperProps={{
            // transition: true,
            elevation,
            sx: {
                height,
                width,
                maxHeight,
                overflowY: 'auto',
                filter: `drop-shadow(0px 2px ${(elevation as number) ?? 3}px rgba(0,0,0,0.32))`,
                '& > .MuiList-root': { pt: 0, pb: 0 },
                '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1 },
            },
        }}
        {...props}
    />
))<MenuStyledPropsType>`
    max-width: 100%;
    & .MuiList-root:focus-visible {
        outline: none;
    }
` as ComponentType<MenuStyledPropsType>;

export const MenuList = MuiMenuList;
export const MenuItem = MuiMenuItem;
export const ListItemIcon = MuiListItemIcon;
export const ListItemText = MuiListItemText;

interface PopperStyledProps {
    width?: string | number;
    onClickAway?: any;

    [key: string]: any;
}
type PopperStyledPropsType = PropsWithChildren<PopperProps & PopperStyledProps>;

export const Popper = styled(({ width, onClickAway, children, ...props }: PopperStyledPropsType) => (
    <MuiPopper {...props} sx={{ width, ...props.sx }}>
        {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
            >
                <Paper>
                    <ClickAwayListener onClickAway={onClickAway}>{children as any}</ClickAwayListener>
                </Paper>
            </Grow>
        )}
    </MuiPopper>
))<PopperStyledPropsType>`
    max-width: 100%;
` as ComponentType<PopperStyledPropsType>;
