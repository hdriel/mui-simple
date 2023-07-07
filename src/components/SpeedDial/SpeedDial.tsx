import React from 'react';
import type { MouseEventHandler, SyntheticEvent, ReactNode, PropsWithChildren, ReactElement } from 'react';
//	import PropTypes from 'prop-types';
import { Backdrop } from '@mui/material'; // Backdrop must use from @mui/material and not from my custom Backdrop
import type { CloseReason, OpenReason, SxProps } from '@mui/material';

import { SpeedDial as MuiSpeedDial, SpeedDialAction as MuiSpeedDialAction, SpeedDialIcon } from './SpeedDial.styled';
import { useCustomColor } from '../../utils/helpers';

type DirectionType = 'down' | 'left' | 'right' | 'up';

interface SpeedDialActionProps {
    name: string;
    icon: ReactNode;
    showTooltip: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

interface SpeedDialProps {
    actions?: SpeedDialActionProps[];
    ariaLabel?: string;
    bottom?: string | number;
    color?: string;
    direction?: DirectionType;
    hidden?: boolean;
    icon?: ReactNode;
    left?: string | number;
    onClose?: (event: SyntheticEvent<{}, Event>, reason: CloseReason) => void;
    onOpen?: (event: SyntheticEvent<{}, Event>, reason: OpenReason) => void;
    open?: boolean;
    openIcon?: ReactNode;
    right?: string | number;
    showOnBackdrop?: boolean;
    showTooltip?: boolean;
    sx?: SxProps;
    top?: string | number;
    [key: string]: any;
}

export default function SpeedDial(props: PropsWithChildren<SpeedDialProps>): ReactElement {
    const {
        ariaLabel,
        actions,
        bottom,
        color,
        direction,
        hidden,
        icon,
        left,
        onClose,
        onOpen,
        open,
        openIcon,
        right,
        showOnBackdrop,
        showTooltip,
        top,
        sx,
        ...rest
    } = props;
    const [customColor] = useCustomColor(color);
    const [customColorHover] = useCustomColor(color, { darken: 0.2 });

    return (
        <>
            {showOnBackdrop && <Backdrop open={open} />}
            <MuiSpeedDial
                ariaLabel={props.ariaLabel ?? ''}
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
                sx={{ ...sx, top, bottom, right, left }}
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
}

//	SpeedDial.propTypes = {
//			actions: PropTypes.arrayOf(
//					PropTypes.shape({
//							name: PropTypes.string,
//							icon: PropTypes.node,
//							showTooltip: PropTypes.bool,
//							onClick: PropTypes.func,
//					})
//			),
//			bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//			color: PropTypes.string,
//			direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
//			hidden: PropTypes.bool,
//			icon: PropTypes.node,
//			left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//			onClose: PropTypes.func,
//			onOpen: PropTypes.func,
//			open: PropTypes.bool,
//			openIcon: PropTypes.node,
//			right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//			showOnBackdrop: PropTypes.bool,
//			showTooltip: PropTypes.bool,
//			top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//	};

SpeedDial.defaultProps = {
    actions: [],
    ariaLabel: undefined,
    bottom: undefined,
    color: undefined,
    direction: undefined,
    hidden: undefined,
    icon: undefined,
    left: undefined,
    onClose: undefined,
    onOpen: undefined,
    open: undefined,
    openIcon: undefined,
    right: undefined,
    showOnBackdrop: undefined,
    showTooltip: true,
    sx: {},
    top: undefined,
};
