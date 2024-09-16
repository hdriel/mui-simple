import React from 'react';
import { Tab as MuiTab } from './Tabs.styled';
import Tooltip from '../Tooltip/Tooltip';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TabItemProps } from '../../decs';

const TabItem: React.FC<TabItemProps> = ({
    children,
    icon: _icon,
    link,
    onClick,
    open,
    orientation,
    tooltipProps,
    value,
    reverse,
    verticalTabWidth,
    ...props
}): React.ReactElement | React.ReactNode => {
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;

    return (
        <Tooltip
            {...tooltipProps}
            placement={
                tooltipProps?.placement !== undefined
                    ? tooltipProps?.placement
                    : orientation === 'vertical'
                    ? 'right'
                    : 'bottom'
            }
        >
            <MuiTab
                value={value}
                role="tabpanel"
                hidden={!open}
                id={`simple-tabpanel-${value}`}
                aria-labelledby={`simple-tab-${value}`}
                icon={icon as React.ReactElement}
                {...(link && {
                    href: link,
                    component: 'a',
                    onClick(event, _value?) {
                        event.preventDefault();
                        onClick?.(event, _value ?? value);
                    },
                })}
                sx={{
                    ...(orientation === 'vertical' && {
                        ...(reverse ? { borderLeft: 1 } : { borderRight: 1 }),
                        borderColor: 'divider',
                        minWidth: 'fit-content',
                        width: verticalTabWidth,
                    }),
                    ...((orientation === undefined || orientation === 'horizontal') && {
                        borderBottom: 1,
                        borderColor: 'divider',
                    }),
                }}
                {...props}
            />
        </Tooltip>
    );
};

export default TabItem;
