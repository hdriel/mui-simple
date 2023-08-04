import React, { isValidElement } from 'react';
import type { PropsWithChildren } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import { Tabs as MuiTabs, Box } from './Tabs.styled';
import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { useCustomColor } from '../../../utils/helpers';
import type { TabsProps } from '../../decs';

const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({
    centered,
    fillActiveTab,
    color,
    onChange,
    orientation,
    variant,
    value,
    visibleScrollbar,
    visibleScrollButtons,
    swipeable,
    autoNavigateByArrowKeyboard,
    verticalMaxFixedHeight,
    verticalTabWidth,
    reverse,
    children,
    ...props
}) => {
    const [customColor] = useCustomColor(color);

    const theme = useTheme();

    const filteredChildren = []
        .concat(children)
        .filter((child) => isValidElement(child) && child?.type?.displayName === Tab.displayName)
        .filter((v) => v);

    const tabPanels = filteredChildren
        .map(({ props }, index) => (
            <TabPanel
                key={props.value}
                index={index}
                dir={theme.direction}
                swipeable={swipeable}
                {...props}
                open={props.value === value}
            />
        ))
        .filter((v) => v);

    const tabs = filteredChildren.map(({ props }, index) => {
        return (
            <TabItem
                key={props.value}
                iconPosition={props.iconPosition}
                label={props.label}
                value={String(props.value ?? index).toString()}
                open={props.value === value}
                wrapped={props.wrapped}
                disabled={props.disabled}
                disableRipple={props.disableRipple}
                icon={props.icon}
                tooltipProps={props.tooltipProps}
                orientation={orientation}
            />
        );
    });

    const activeTabIndex = filteredChildren.map((child) => child.props.value).indexOf(value);

    const handleChange = (event, tabId): void => onChange?.(tabId);
    const isScrollableVariant = orientation === 'vertical' || visibleScrollbar || variant === 'scrollable';

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: reverse ? 'column-reverse' : 'column',
                ...(orientation === 'vertical' && {
                    flexDirection: reverse ? 'row-reverse' : 'row',
                    maxHeight: verticalMaxFixedHeight ?? 'inherit',
                }),
            }}
        >
            <MuiTabs
                reverse={reverse}
                centered={isScrollableVariant ? undefined : centered}
                customColor={customColor}
                fillActiveTab={fillActiveTab}
                onChange={handleChange}
                orientation={orientation}
                variant={isScrollableVariant ? 'scrollable' : variant}
                value={value}
                selectionFollowsFocus={autoNavigateByArrowKeyboard}
                visibleScrollbar={visibleScrollbar}
                allowScrollButtonsMobile
                scrollButtons={visibleScrollButtons}
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
            >
                {tabs}
            </MuiTabs>

            {swipeable ? (
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeTabIndex}
                    onChangeIndex={(event, tabIndex) => {
                        const tabId = filteredChildren[tabIndex]?.props.value;
                        onChange?.(tabId);
                    }}
                    style={{ width: '100%', height: '100%' }}
                >
                    {tabPanels}
                </SwipeableViews>
            ) : (
                tabPanels
            )}
        </Box>
    );
};

Tabs.defaultProps = {
    centered: undefined,
    fillActiveTab: undefined,
    color: undefined,
    onChange: undefined,
    orientation: undefined,
    variant: undefined,
    value: undefined,
    visibleScrollbar: undefined,
    visibleScrollButtons: true,
    swipeable: undefined,
    autoNavigateByArrowKeyboard: undefined,
    verticalMaxFixedHeight: undefined,
    verticalTabWidth: undefined,
    reverse: undefined,
};

export type { TabsProps } from '../../decs';
export default Tabs;
