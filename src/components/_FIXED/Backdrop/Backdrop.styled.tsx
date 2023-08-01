import type { ComponentType } from 'react';
import type { BackdropProps } from '@mui/material';
import { Backdrop as MuiBackdrop } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BackdropStyledProps {
    color?: string;
}

type BackdropStyledPropsType = BackdropStyledProps & BackdropProps;

export const Backdrop = styled(MuiBackdrop)<BackdropStyledPropsType>`
    color: ${({ color }) => color};
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
` as ComponentType<BackdropStyledPropsType>;
