import React from 'react';
import { Link as MuiLink, RRDLink } from './Link.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { LinkProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const Link: React.FC<LinkProps> = ({
    color,
    icon: _icon,
    label,
    preventScrollReset,
    replaceUrl,
    relativeUrl,
    size,
    url,
    underline,
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
            underline={underline}
            {...props}
        >
            {icon}
            {label}
            {children}
        </MuiLink>
    );

    return useReactRouterDomLink ? (
        <RRDLink
            underline={underline}
            customColor={muiColor ? undefined : customColor}
            to={relativeUrl || replaceUrl || url}
            replace={!!replaceUrl}
            relative={!!relativeUrl}
            preventScrollReset={preventScrollReset}
        >
            {cmp}
        </RRDLink>
    ) : (
        cmp
    );
};

Link.defaultProps = {
    color: undefined,
    icon: undefined,
    label: undefined,
    preventScrollReset: false,
    replaceUrl: undefined,
    relativeUrl: undefined,
    size: undefined,
    underline: undefined,
    url: undefined,
    useReactRouterDomLink: undefined,
};

export type { LinkProps } from '../../decs';
export default Link;
