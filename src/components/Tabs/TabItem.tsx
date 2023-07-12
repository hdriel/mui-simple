import React from 'react';
import type { PropsWithChildren } from 'react';
import { Tab as MuiTab } from './Tabs.styled';
import Tooltip from '../_FIXED/Tooltip/Tooltip';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TabItemProps } from '../decs';

const TabItem: React.FC<PropsWithChildren<TabItemProps>> = ({
    children,
    icon,
    link,
    onClick,
    open,
    orientation,
    tooltipProps,
    value,
    ...props
}): React.ReactElement => {
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
                {...(link && {
                    href: link,
                    component: 'a',
                    onClick(event, value) {
                        event.preventDefault();
                        onClick?.(event, value);
                    },
                })}
                icon={icon && <SVGIcon>{icon}</SVGIcon>}
                {...props}
            />
        </Tooltip>
    );
};

TabItem.defaultProps = {
    disabled: undefined,
    disableRipple: undefined,
    icon: undefined,
    iconPosition: undefined,
    label: undefined,
    link: undefined,
    onClick: undefined,
    open: undefined,
    tooltipProps: undefined,
    value: undefined,
    wrapped: undefined,
};

export default TabItem;
