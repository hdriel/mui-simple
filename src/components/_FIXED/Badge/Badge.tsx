import React from 'react';
import type { ReactElement } from 'react';
import { Badge as MuiBadge } from './Badge.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { BadgeProps } from '../../decs';

const Badge: React.FC<BadgeProps> = (props): ReactElement => {
    const { variant, color, content, hide, showZero, max, overlap, vertical, horizontal, ...rest } = props;

    const [customColor, muiColor] = useCustomColor(color);

    return (
        <MuiBadge
            color={muiColor as any}
            customColor={muiColor ? undefined : customColor}
            badgeContent={content}
            variant={variant}
            invisible={hide}
            showZero={showZero}
            max={max}
            overlap={overlap}
            anchorOrigin={
                (vertical || horizontal) && {
                    vertical: vertical ?? 'top',
                    horizontal: horizontal ?? 'right',
                }
            }
            {...rest}
        />
    );
};

Badge.defaultProps = {
    color: 'primary',
    content: 0,
    hide: undefined,
    horizontal: undefined,
    max: undefined,
    overlap: undefined,
    showZero: undefined,
    variant: undefined,
    vertical: undefined,
};

export type { BadgeProps } from '../../decs';
export default Badge;
