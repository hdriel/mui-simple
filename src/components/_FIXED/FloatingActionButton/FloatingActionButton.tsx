import React from 'react';
import type { PropsWithChildren } from 'react';
import { Fab as MuiFab } from './FloatingActionButton.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { FabProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const Fab: React.FC<PropsWithChildren<FabProps>> = ({
    disabled,
    disableRipple,
    link,
    size,
    variant,
    icon: _icon,
    color,
    children,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    return (
        <MuiFab
            disabled={disabled}
            disableRipple={disableRipple}
            href={link}
            size={size}
            variant={variant}
            customColor={muiColor ? undefined : customColor}
            color={muiColor as any}
            {...props}
        >
            {icon}
            {children}
        </MuiFab>
    );
};

Fab.defaultProps = {
    disabled: undefined,
    disableRipple: undefined,
    link: undefined,
    icon: undefined,
    size: undefined,
    variant: undefined,
    color: undefined,
};

export type { FabProps } from '../../decs';
export default Fab;
