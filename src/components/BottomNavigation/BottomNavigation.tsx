import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from './BottomNavigation.styled';
import { useCustomColor } from '../../utils/helpers';

export default function BottomNavigation({
    width,
    showLabels,
    color,
    value,
    onChange,
    actions,
    position,
    elevation,
    fixedToTop,
    fixedToBottom,
    ...props
}) {
    const [customColor, muiColor] = useCustomColor(color);

    return (
        <MuiBottomNavigation
            muiColor={muiColor}
            customColor={muiColor ? undefined : customColor}
            width={width}
            showLabels={showLabels}
            value={value}
            onChange={onChange}
            position={position}
            elevation={elevation}
            fixedToTop={fixedToTop}
            fixedToBottom={fixedToBottom}
            {...props}
        >
            {actions?.map((action, key) => (
                <BottomNavigationAction
                    key={key}
                    label={action.label}
                    icon={action.icon}
                    value={action.value}
                    showLabel={action.showLabel}
                />
            ))}
        </MuiBottomNavigation>
    );
}

BottomNavigation.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showLabels: PropTypes.bool,
    muiColor: PropTypes.string,
    customColor: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
    fixedToTop: PropTypes.bool,
    fixedToBottom: PropTypes.bool,
    position: PropTypes.oneOf(['absolute', 'fixed']),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.node,
            value: PropTypes.node,
            showLabel: PropTypes.bool,
        })
    ),
};

BottomNavigation.defaultProps = {
    width: undefined,
    showLabels: undefined,
    muiColor: undefined,
    customColor: undefined,
    value: undefined,
    onChange: undefined,
    position: undefined,
    elevation: undefined,
    fixedToTop: undefined,
    fixedToBottom: undefined,
    actions: [],
};
