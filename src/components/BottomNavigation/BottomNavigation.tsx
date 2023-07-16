import React from 'react';
import type { PropsWithChildren, ReactElement } from 'react';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from './BottomNavigation.styled';
import { useCustomColor } from '../../utils/helpers';
import type { BottomNavigationProps } from '../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const BottomNavigation: React.FC<PropsWithChildren<BottomNavigationProps>> = function (props): ReactElement {
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
    const [customColor] = useCustomColor(color);

    return (
        <MuiBottomNavigation
            customColor={customColor}
            elevation={elevation}
            fixedToBottom={fixedToBottom}
            fixedToTop={fixedToTop}
            onChange={onChange}
            position={position}
            showLabels={showLabels}
            value={value}
            width={width}
            {...rest}
        >
            {actions?.map((action, key) => (
                <BottomNavigationAction
                    {...action.icon}
                    icon={typeof action.icon === 'string' ? <SVGIcon>{action.icon}</SVGIcon> : action.icon}
                    key={key}
                    label={action.label}
                    showLabel={action.showLabel}
                    value={action.value}
                />
            ))}
        </MuiBottomNavigation>
    );
};

BottomNavigation.defaultProps = {
    actions: [],
    color: undefined,
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

export default BottomNavigation;
