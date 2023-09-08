import React from 'react';
import { Fab as MuiFab } from './FloatingActionButton.styled';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../../SVGIcon/SVGIcon';
import type { FabProps } from '../../decs';

const Fab: React.FC<FabProps> = (props): React.ReactElement => {
    const { children, color, disabled, disableRipple, icon: _icon, link, size, variant, ...rest } = props;
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
            {...rest}
        >
            {icon}
            {children}
        </MuiFab>
    );
};

Fab.defaultProps = {
    color: undefined,
    disabled: undefined,
    disableRipple: undefined,
    icon: undefined,
    link: undefined,
    size: undefined,
    variant: undefined,
};

export type { FabProps } from '../../decs';
export default Fab;
