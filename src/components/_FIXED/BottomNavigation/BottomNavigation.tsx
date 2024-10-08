import React from 'react';
import type { ReactElement } from 'react';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from './BottomNavigation.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { BottomNavigationProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const BottomNavigation: React.FC<BottomNavigationProps> = function ({
    actions = [],
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
}): ReactElement {
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
                    // @ts-expect-error
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
BottomNavigation.displayName = 'BottomNavigation';

export type { BottomNavigationProps } from '../../decs';
export default BottomNavigation;
