import React from 'react';
import { Link } from 'react-router-dom';
import { Fab as MuiFab } from './FloatingActionButton.styled';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { FabProps } from '../../decs';

const Fab: React.FC<FabProps> = (props): React.ReactElement => {
    const {
        innerRef,
        children,
        color,
        disabled,
        disableRipple,
        icon: _icon,
        link,
        size,
        variant,
        useReactRouterDomLink,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    const cmp = (
        <MuiFab
            ref={innerRef}
            disabled={disabled}
            disableRipple={disableRipple}
            href={useReactRouterDomLink ? undefined : link}
            size={size}
            variant={variant}
            customColor={muiColor ? undefined : customColor}
            color={muiColor as any}
            {...rest}
        >
            {icon}
            {children}
        </MuiFab>
    );

    return useReactRouterDomLink && link ? (
        <Link to={link} style={{ textDecoration: 'none' }}>
            {cmp}
        </Link>
    ) : (
        cmp
    );
};

Fab.defaultProps = {
    innerRef: undefined,
    color: undefined,
    disabled: undefined,
    disableRipple: undefined,
    icon: undefined,
    link: undefined,
    size: undefined,
    variant: undefined,
    useReactRouterDomLink: undefined,
};

export type { FabProps } from '../../decs';
export default Fab;
