import React, { ComponentType } from 'react';
import {
    SpeedDial as MuiSpeedDial,
    SpeedDialAction as MuiSpeedDialAction,
    SpeedDialIcon as MuiSpeedDialIcon,
    SpeedDialProps,
} from '@mui/material';
import { styled, css } from '@mui/material/styles';

export const SpeedDialIcon = MuiSpeedDialIcon; // note: styled on MuiSpeedDialIcon will break his flip icon animation!!

interface SpeedDialStyledProps {
    showTooltip?: boolean;
}

type SpeedDialStyledPropsType = SpeedDialProps & SpeedDialStyledProps;

// TODO: FIX THE  & .MuiSpeedDialAction-staticTooltipLabel position for right and left direction - not getting the top/bottom values
export const SpeedDial = styled(MuiSpeedDial, {
    shouldForwardProp: (propName) => !['muiColor', 'customColor', 'showTooltip'].includes(propName as string),
})<SpeedDialStyledPropsType>`
    position: absolute;

    & .MuiSpeedDial-actions {
        gap: ${(props) => (props.showTooltip && ['right', 'left'].includes(props.direction) ? '20px' : undefined)};
    }

    //& .MuiSpeedDialAction-staticTooltipLabel {
    ${(props) => {
        switch (props.direction) {
            case 'right':
                return css`
                    top: 60px;
                `;
            case 'left':
                return css`
                    bottom: 60px;
                `;
            case 'down':
            case 'up':
            default:
                return css``;
        }
    }}//}
` as ComponentType<SpeedDialStyledPropsType>;

export const SpeedDialAction = MuiSpeedDialAction;
