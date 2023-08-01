import React from 'react';
import { Link as MuiLink } from './Link.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { LinkProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const Link: React.FC<LinkProps> = ({
    url,
    color,
    size,
    label,
    icon: _icon,
    children,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    return (
        <MuiLink href={url} color={muiColor} customColor={muiColor ? undefined : customColor} size={size} {...props}>
            {icon}
            {label}
            {children}
        </MuiLink>
    );
};

Link.defaultProps = {
    url: undefined,
    icon: undefined,
    label: undefined,
    color: undefined,
    underline: undefined,
    size: undefined,
};

export type { LinkProps } from '../../decs';
export default Link;
