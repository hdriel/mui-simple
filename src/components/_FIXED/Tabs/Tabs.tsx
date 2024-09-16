import React, { isValidElement } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

import { Tabs as MuiTabs, TabWrapper } from './Tabs.styled';
import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { useCustomColor } from '../../../utils/helpers';
import type { TabsProps } from '../../decs';

const Tabs: React.FC<TabsProps> = ({
    centered,
    fillActiveTab,
    color,
    onChange,
    orientation,
    variant,
    value,
    visibleScrollbar,
    visibleScrollButtons = true,
    swipeable,
    autoNavigateByArrowKeyboard,
    verticalMaxFixedHeight,
    verticalTabWidth,
    reverse,
    wrap,
    children,
    ...props
}) => {
    const [customColor] = useCustomColor(color);

    const theme = useTheme();

    const filteredChildren = []
        .concat(children)
        // @ts-ignore
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
                reverse={reverse}
                verticalTabWidth={verticalTabWidth}
            />
        );
    });

    const activeTabIndex = filteredChildren.map((child) => child.props.value).indexOf(value);

    const handleChange = (event, tabId): void => onChange?.(tabId);
    const isScrollableVariant = orientation === 'vertical' || visibleScrollbar || variant === 'scrollable';

    return (
        <TabWrapper reverse={reverse} orientation={orientation} verticalMaxFixedHeight={verticalMaxFixedHeight}>
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
                wrap={wrap}
                TabIndicatorProps={{ hidden: wrap }}
                {...props}
                sx={{
                    ...(wrap && {
                        '.MuiTabs-flexContainer':
                            orientation === 'vertical' ? { flexFlow: 'wrap' } : { flexWrap: 'wrap' },
                    }),
                    ...props.sx,
                }}
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
                    style={{ width: '100%', height: '100%', padding: 0 }}
                >
                    {tabPanels}
                </SwipeableViews>
            ) : (
                tabPanels
            )}
        </TabWrapper>
    );
};

Tabs.displayName = 'Tabs';

export type { TabsProps } from '../../decs';
export default Tabs;
