import { Divider as MuiDivider } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { DividerProps } from '@mui/material';
import type { ComponentType } from 'react';
import { verticalStyle, horizontalStyle } from './Divider.styles';

interface DividerStyledProps {
    thickness?: number | string;
    [key: string]: any;
}
type DividerStyledPropsType = Omit<DividerProps, 'thickness'> & DividerStyledProps;

export const Divider = styled(MuiDivider, {
    shouldForwardProp: (propName: string) => !['color', 'thickness'].includes(propName as string),
})<DividerStyledPropsType>`
    ${verticalStyle}
    ${horizontalStyle}
` as ComponentType<DividerStyledPropsType>;
