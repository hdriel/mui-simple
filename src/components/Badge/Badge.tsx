import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';

import { Badge as MuiBadge } from './Badge.styled';
import { useCustomColor } from '../../utils/helpers';

type OverlapType = 'circular';
type VariantType = 'dot';

interface BadgeProps {
    color?: string;
    content?: string | number;
    hide?: boolean;
    horizontal?: 'right' | 'left';
    max?: number;
    overlap?: OverlapType;
    showZero?: boolean;
    variant?: VariantType;
    vertical?: 'top' | 'bottom';
    [key: string]: any;
}

export default function Badge(props: PropsWithChildren<BadgeProps>): ReactNode {
    const { variant, color, content, hide, showZero, max, overlap, vertical, horizontal, ...rest } = props;

    const [customColor, muiColor] = useCustomColor(color);
    return (
        <MuiBadge
            color={muiColor}
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
}

//	Badge.propTypes = {
//    color: PropTypes.string,
//    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//    hide: PropTypes.bool,
//    horizontal: PropTypes.oneOf(['right', 'left']),
//    max: PropTypes.number,
//    overlap: PropTypes.oneOf(['circular']),
//    showZero: PropTypes.bool,
//    variant: PropTypes.oneOf(['dot']),
//    vertical: PropTypes.oneOf(['top', 'bottom']),
//	};

Badge.defaultProps = {
    color: undefined,
    content: 0,
    hide: undefined,
    horizontal: undefined,
    max: undefined,
    overlap: undefined,
    showZero: undefined,
    variant: undefined,
    vertical: undefined,
};
