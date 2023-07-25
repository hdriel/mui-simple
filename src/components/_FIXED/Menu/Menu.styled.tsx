import React from 'react';
import type { ComponentType, PropsWithChildren } from 'react';
import {
    Menu as MuiMenu,
    MenuList as MuiMenuList,
    MenuItem as MuiMenuItem,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
    Box,
} from '@mui/material';
import type { BoxProps, MenuProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import Paper from '../../Paper/Paper';
import { ELEVATION } from '../../../utils/consts';

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

export const Menu = styled(({ height, width, maxHeight, elevation, ...props }) => (
    <MuiMenu
        open
        PaperProps={{
            elevation,
            sx: {
                height,
                width,
                maxHeight,
                overflowY: 'auto',
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
