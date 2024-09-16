import React from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Link as MuiLink, RRDLink } from './Link.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { LinkProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
    children,
    color,
    icon: _icon,
    label,
    preventScrollReset = false,
    relativeUrl,
    replaceUrl,
    size,
    underline,
    url,
    useReactRouterDomLink,
    ...props
}): ReactElement | ReactNode => {
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
            relative={relativeUrl ? 'path' : 'route'}
            preventScrollReset={preventScrollReset}
        >
            {cmp}
        </RRDLink>
    ) : (
        cmp
    );
};

Link.displayName = 'Link';

export type { LinkProps } from '../../decs';
export default Link;
