import React, { useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
//	import PropTypes from 'prop-types';
import { Avatar as MuiAvatar } from '@mui/material';

import { getCapitalLetters, stringToColor, useCustomColor } from '../../utils/helpers';
import Tooltip from '../Tooltip/Tooltip';
//	import { TOOLTIP_PLACEMENTS } from '../Tooltip/Tooltip.consts';

type Variant = 'circular' | 'rounded' | 'square';
type tooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
interface AvatarProps {
    color?: string;
    fallbackImage?: string;
    icon?: ReactNode;
    image?: string;
    onClick?: () => void;
    showTooltip?: boolean;
    size?: string;
    tooltipPlacement?: tooltipPlacement;
    username?: string;
    variant?: Variant;
    [key: string]: any;
}
export default function Avatar(props: PropsWithChildren<AvatarProps>): ReactNode {
    const {
        username,
        image,
        size,
        icon,
        variant,
        color,
        fallbackImage,
        onClick,
        showTooltip,
        tooltipPlacement,
        ...rest
    } = props;
    const [url, setUrl] = useState(image);
    const [fallbackSet, setFallbackSet] = useState(false);
    const [customColor] = useCustomColor(color);

    const errorHandler = (): void => {
        if (fallbackSet) {
            setUrl(undefined);
        } else {
            setFallbackSet(true);
            setUrl(fallbackImage);
        }
    };

    const background = customColor ?? (url && !username ? undefined : stringToColor(username));

    return (
        <Tooltip title={showTooltip ? username : ''} placement={tooltipPlacement}>
            <MuiAvatar
                alt={username ?? 'avatar'}
                src={url}
                sx={{ width: size, height: size, background }}
                variant={variant}
                imgProps={{ onError: errorHandler }}
                onClick={onClick}
                {...rest}
            >
                {!url && (icon ?? getCapitalLetters(username))}
            </MuiAvatar>
        </Tooltip>
    ) as ReactNode; // Todo: check if as ReactNode is the correct way to deal with the TS error
}

//	Avatar.propTypes = {
//		fallbackImage: PropTypes.string,
//		icon: PropTypes.node,
//		image: PropTypes.string,
//		onClick: PropTypes.func,
//		showTooltip: PropTypes.bool,
//		size: PropTypes.string,
//		tooltipPlacement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
//		username: PropTypes.string,
//		variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
//	};

Avatar.defaultProps = {
    color: undefined,
    fallbackImage: undefined,
    icon: undefined,
    image: undefined,
    onClick: undefined,
    showTooltip: false,
    size: undefined,
    tooltipPlacement: undefined,
    username: undefined,
    variant: 'circular',
};
