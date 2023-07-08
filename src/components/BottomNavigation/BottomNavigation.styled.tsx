import React from 'react';
import type { PropsWithChildren } from 'react';
import { get } from 'lodash-es';
import { styled } from '@mui/material/styles';
import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction as MuiBottomNavigationAction,
} from '@mui/material';
import type { BottomNavigationProps } from '@mui/material';

import Paper from '../Paper/Paper';

type Position = 'absolute' | 'fixed';
interface BottomNavigationStyledProps {
    fixedToBottom?: boolean;
    customColor?: string;
    elevation?: number;
    fixedToTop?: boolean;
    muiColor?: string;
    width?: number | string;
    position?: Position;
}
type BottomNavigationStyledPropsType = BottomNavigationProps & BottomNavigationStyledProps;
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
                }),
            }}
            elevation={elevation}
        >
            <MuiBottomNavigation {...props} />
        </Paper>
    ),
    {
        shouldForwardProp: (propName) => !['muiColor', 'customColor'].includes(propName as string),
    }
)<BottomNavigationStyledPropsType>`
    & .MuiBottomNavigationAction-root.Mui-selected {
        color: ${(props) =>
            get(props, `theme.palette.${props.muiColor}.main`) ??
            get(props, `theme.palette.${props.muiColor}`) ??
            props.customColor};
    }
`;
export const BottomNavigationAction = MuiBottomNavigationAction;
