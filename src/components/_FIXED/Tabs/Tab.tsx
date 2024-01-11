import React from 'react';
import { Box } from './Tabs.styled';
import type { TabProps } from '../../decs';

const Tab: React.FC<TabProps> = (props): React.ReactElement | React.ReactNode => <Box {...props} />;

Tab.displayName = 'Tab';

Tab.defaultProps = {
    iconPosition: undefined,
    label: undefined,
    value: undefined,
    open: undefined,
    wrapped: undefined,
    disabled: undefined,
    disableRipple: undefined,
    icon: undefined,
    link: undefined,
    onClick: undefined,
    tooltip: undefined,
};

export type { TabProps } from '../../decs';
export default Tab;
