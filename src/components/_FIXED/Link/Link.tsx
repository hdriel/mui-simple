import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
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
    useReactRouterDomLink,
    children,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    const cmp = (
        <MuiLink
            href={useReactRouterDomLink ? undefined : url}
            color={muiColor as any}
            customColor={muiColor ? undefined : customColor}
            size={size}
            {...props}
        >
            {icon}
            {label}
            {children}
        </MuiLink>
    );

    return useReactRouterDomLink ? <ReactLink to={url} component={cmp} /> : cmp;
};

Link.defaultProps = {
    url: undefined,
    icon: undefined,
    label: undefined,
    color: undefined,
    underline: undefined,
    size: undefined,
    useReactRouterDomLink: undefined,
};

export type { LinkProps } from '../../decs';
export default Link;
