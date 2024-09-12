import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Badge as MuiBadge } from './Badge.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { BadgeProps } from '../../decs';

const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
    variant,
    color = 'primary',
    content = 0,
    hide,
    showZero,
    max,
    overlap,
    vertical,
    horizontal,
    ...rest
}): ReactElement | React.ReactNode => {
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
Badge.displayName = 'Badge';

export type { BadgeProps } from '../../decs';
export default Badge;
