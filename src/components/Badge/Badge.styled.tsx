import type { ComponentType } from 'react';
import { Badge as MuiBadge, BadgeProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BadgeStyledProps {
    customColor?: string;
}
type BadgeStyledPropsType = BadgeProps & BadgeStyledProps;
export const Badge = styled(MuiBadge, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})<BadgeStyledPropsType>`
    & .MuiBadge-badge {
        border: 1.5px solid ${(props) => props.theme.palette.background.paper};
        background-color: ${(props) => props.customColor};
    }
` as ComponentType<BadgeStyledPropsType>;
