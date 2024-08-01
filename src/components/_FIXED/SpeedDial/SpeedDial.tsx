import React from 'react';
import type { ReactElement } from 'react';
import { Backdrop } from '@mui/material'; // Backdrop must use from @mui/material and not from my custom Backdrop
import { SpeedDial as MuiSpeedDial, SpeedDialAction as MuiSpeedDialAction, SpeedDialIcon } from './SpeedDial.styled';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { SpeedDialProps } from '../../decs';

const SpeedDial: React.FC<SpeedDialProps> = ({
    ariaLabel,
    actions = [],
    bottom,
    color,
    direction,
    hidden,
    icon: _icon,
    left,
    onClose,
    onOpen,
    open,
    openIcon: _openIcon,
    right,
    showOnBackdrop,
    showTooltip = true,
    top,
    sx,
    ...rest
}): ReactElement | React.ReactNode => {
    const [customColor] = useCustomColor(color);
    const [customColorHover] = useCustomColor(color, { darken: 0.2 });
    const openIcon = typeof _openIcon === 'string' ? <SVGIcon>{_openIcon}</SVGIcon> : _openIcon;
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    actions?.forEach((action) => {
        action.icon = typeof action.icon === 'string' ? <SVGIcon>{action.icon}</SVGIcon> : action.icon;
    });

    const position = { top, bottom, right, left };

    return (
        <>
            {showOnBackdrop && <Backdrop open={open} />}
            <MuiSpeedDial
                ariaLabel={ariaLabel ?? ''}
                hidden={hidden}
                direction={direction}
                onClose={onClose}
                onOpen={onOpen}
                open={open}
                showTooltip={showTooltip}
                icon={<SpeedDialIcon openIcon={openIcon} icon={icon} />}
                FabProps={{
                    sx: {
                        bgcolor: customColor,
                        '&:hover': { bgcolor: customColorHover },
                    },
                }}
                sx={{ ...sx, ...position }}
                position={{ top, bottom, right, left }}
                {...rest}
            >
                {actions?.map((action) => (
                    <MuiSpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen={showTooltip}
                        onClick={action.onClick}
                    />
                ))}
            </MuiSpeedDial>
        </>
    );
};

SpeedDial.displayName = 'SpeedDial';

export type { SpeedDialProps } from '../../decs';
export default SpeedDial;
