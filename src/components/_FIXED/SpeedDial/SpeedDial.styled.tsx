import React from 'react';
import type { ComponentType } from 'react';
import {
    SpeedDial as MuiSpeedDial,
    SpeedDialAction as MuiSpeedDialAction,
    SpeedDialIcon as MuiSpeedDialIcon,
} from '@mui/material';
import type { SpeedDialProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';

export const SpeedDialIcon = MuiSpeedDialIcon; // note: styled on MuiSpeedDialIcon will break his flip icon animation!!

interface SpeedDialStyledProps {
    showTooltip?: boolean;
    position?: { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string };
}

type SpeedDialStyledPropsType = SpeedDialProps & SpeedDialStyledProps;

// TODO: FIX THE  & .MuiSpeedDialAction-staticTooltipLabel position for right and left direction - not getting the top/bottom values
export const SpeedDial = styled(MuiSpeedDial, {
    shouldForwardProp: (propName: string) =>
        !['muiColor', 'customColor', 'showTooltip', 'position'].includes(propName as string),
})<SpeedDialStyledPropsType>`
    position: absolute;

    & .MuiSpeedDial-actions {
        gap: ${(props: any) => (props.showTooltip && ['right', 'left'].includes(props.direction) ? '20px' : undefined)};
    }

    & .MuiSpeedDialAction-staticTooltipLabel {
        ${(props: any) => {
            switch (props.direction) {
                case 'right':
                    return css`
                        top: 60px;
                    `;
                case 'left':
                    return css`
                        bottom: 60px !important;
                    `;
                case 'down':
                case 'up':
                default:
                    return css``;
            }
        }}
    }
` as ComponentType<SpeedDialStyledPropsType>;

export const SpeedDialAction = MuiSpeedDialAction;
