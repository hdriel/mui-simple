import React from 'react';
import type { ComponentType, PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction as MuiBottomNavigationAction,
} from '@mui/material';
import type { BottomNavigationProps } from '@mui/material';

import Paper from '../../Paper/Paper';

interface BottomNavigationStyledProps {
    fixedToBottom?: boolean;
    customColor?: string;
    elevation?: number;
    fixedToTop?: boolean;
    width?: number | string;
    position?: 'absolute' | 'fixed';
}

type BottomNavigationStyledPropsType = BottomNavigationProps & BottomNavigationStyledProps & any;

export const BottomNavigation = styled(
    ({
        width,
        elevation,
        fixedToTop,
        fixedToBottom,
        position,
        ...props
    }: PropsWithChildren<BottomNavigationStyledProps>) => (
        <Paper
            sx={{
                width,
                ...((fixedToTop || fixedToBottom) && {
                    position: position ?? 'fixed',
                    left: 0,
                    right: 0,
                    top: fixedToTop ? 0 : undefined,
                    bottom: fixedToBottom ? 0 : undefined,
                    zIndex: 2,
                }),
            }}
            elevation={elevation}
        >
            <MuiBottomNavigation {...props} />
        </Paper>
    ),
    {
        shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
    }
)<BottomNavigationStyledPropsType>`
    & .MuiBottomNavigationAction-root.Mui-selected {
        color: ${(props) => props.customColor}
` as ComponentType<BottomNavigationStyledPropsType>;

export const BottomNavigationAction = MuiBottomNavigationAction;
