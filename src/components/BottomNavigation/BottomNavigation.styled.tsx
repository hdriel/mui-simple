import React from 'react';
import { get } from 'lodash-es';
import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction as MuiBottomNavigationAction,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '../Paper/Paper';

export const BottomNavigation = styled(
    ({ width, elevation, fixedToTop, fixedToBottom, position, ...props }) => (
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
)`
    & .MuiBottomNavigationAction-root.Mui-selected {
        color: ${(props) =>
            get(props, `theme.palette.${props.muiColor}.main`) ??
            get(props, `theme.palette.${props.muiColor}`) ??
            props.customColor};
    }
`;
export const BottomNavigationAction = MuiBottomNavigationAction;
