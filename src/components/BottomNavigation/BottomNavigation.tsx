import React from 'react';
import type { PropsWithChildren, ReactNode, SyntheticEvent } from 'react';

//	import PropTypes from 'prop-types';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from './BottomNavigation.styled';
import { useCustomColor } from '../../utils/helpers';

interface Action {
    icon?: ReactNode;
    label?: string;
    showLabel?: boolean;
    value?: ReactNode;
}
interface BottomNavigationProps {
    actions?: Action[];
    color?: string;
    customColor?: string;
    elevation?: number; // assuming you want the values to be numbers
    fixedToBottom?: boolean;
    fixedToTop?: boolean;
    muiColor?: string;
    onChange?: (event: SyntheticEvent<Element, Event>, value: number | string) => void;
    position?: 'absolute' | 'fixed';
    showLabels?: boolean;
    value?: number | string;
    width?: number | string;
    [key: string]: any;
}
export default function BottomNavigation(props: PropsWithChildren<BottomNavigationProps>): ReactNode {
    const {
        actions,
        color,
        elevation,
        fixedToBottom,
        fixedToTop,
        onChange,
        position,
        showLabels,
        value,
        width,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);

    return (
        <MuiBottomNavigation
            customColor={muiColor ? undefined : customColor}
            elevation={elevation}
            fixedToBottom={fixedToBottom}
            fixedToTop={fixedToTop}
            muiColor={muiColor}
            onChange={onChange}
            position={position}
            showLabels={showLabels}
            value={value}
            width={width}
            {...rest}
        >
            {actions?.map((action, key) => (
                <BottomNavigationAction
                    icon={action.icon}
                    key={key}
                    label={action.label}
                    showLabel={action.showLabel}
                    value={action.value}
                />
            ))}
        </MuiBottomNavigation>
    );
}

//	BottomNavigation.propTypes = {
//		icon: PropTypes.node,
//		label: PropTypes.string,
//		showLabel: PropTypes.bool,
//		value: PropTypes.node,
//		PropTypes.shape({
//		actions: PropTypes.arrayOf(
//		customColor: PropTypes.string,
//		elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), //		 0-24
//		fixedToBottom: PropTypes.bool,
//		fixedToTop: PropTypes.bool,
//		muiColor: PropTypes.string,
//		onChange: PropTypes.func,
//		position: PropTypes.oneOf(['absolute', 'fixed']),
//		showLabels: PropTypes.bool,
//		value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//    })
//		),
//	};

BottomNavigation.defaultProps = {
    actions: [],
    customColor: undefined,
    elevation: undefined,
    fixedToBottom: undefined,
    fixedToTop: undefined,
    muiColor: undefined,
    onChange: undefined,
    position: undefined,
    showLabels: undefined,
    value: undefined,
    width: undefined,
};
