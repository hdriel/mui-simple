import type { ComponentType } from 'react';
import type { BadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Badge as MuiBadge } from '@mui/material';

interface BadgeStyledProps {
    customColor?: string;
}

type BadgeStyledPropsType = BadgeProps & BadgeStyledProps;

export const Badge = styled(MuiBadge, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})<BadgeStyledPropsType>`
    & .MuiBadge-badge {
        border: 1.5px solid ${(props: any) => props.theme.palette.background.paper};
        background-color: ${(props: any) => props.customColor};
    }
` as ComponentType<BadgeStyledPropsType>;
