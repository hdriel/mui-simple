import React from 'react';
import { Tab as MuiTab } from './Tabs.styled';
import Tooltip from '../Tooltip/Tooltip';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { TabItemProps } from '../../decs';

const TabItem: React.FC<TabItemProps> = ({
    children,
    icon,
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
                icon={icon && <SVGIcon>{icon}</SVGIcon>}
                {...(link && {
                    href: link,
                    component: 'a',
                    onClick(event, value) {
                        event.preventDefault();
                        onClick?.(event, value);
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
