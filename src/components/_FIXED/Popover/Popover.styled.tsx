import type { ComponentType } from 'react';
import type { PopoverProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Popover as MuiPopover } from '@mui/material';

interface PopoverStyledProps {
    customColor?: string;
}

type PopoverStyledPropsType = PopoverProps & PopoverStyledProps;

export const Popover = styled(MuiPopover, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})<PopoverStyledPropsType>`
    & .MuiPopover-badge {
        border: 1.5px solid ${(props: any) => props.theme.palette.background.paper};
        background-color: ${(props: any) => props.customColor};
    }
` as ComponentType<PopoverStyledPropsType>;
