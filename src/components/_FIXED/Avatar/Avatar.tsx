import React, { useState } from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

import { getCapitalLetters, stringToColor, useCustomColor } from '../../../utils/helpers';
import Tooltip from '../Tooltip/Tooltip';
import type { AvatarProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const Avatar: React.FC<AvatarProps> = (props): React.ReactElement | React.ReactNode => {
    const {
        color,
        fallbackImage,
        icon: _icon,
        image,
        onClick,
        showTooltip,
        size,
        tooltipPlacement,
        username,
        variant,
        ...rest
    } = props;

    const [url, setUrl] = useState(image);
    const [fallbackSet, setFallbackSet] = useState(false);
    const [customColor] = useCustomColor(color);
    const background = customColor ?? (url && !username ? undefined : stringToColor(username));
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;
    const onError = (): void => {
        if (fallbackSet) return setUrl(undefined);
        setFallbackSet(true);
        setUrl(fallbackImage);
    };

    return (
        <Tooltip title={showTooltip ? username : ''} placement={tooltipPlacement}>
            <MuiAvatar
                alt={username ?? 'avatar'}
                src={url}
                sx={{ width: size, height: size, background }}
                variant={variant}
                imgProps={{ onError }}
                onClick={onClick}
                {...rest}
            >
                {!url && (icon ?? getCapitalLetters(username))}
            </MuiAvatar>
        </Tooltip>
    );
};

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

export type { AvatarProps } from '../../decs';
export default Avatar;
