import React from 'react';
import { Box } from './Tabs.styled';
import type { TabProps } from '../../decs';

const Tab: React.FC<TabProps> = (props): React.ReactElement | React.ReactNode => <Box {...props} />;

Tab.displayName = 'Tab';

export type { TabProps } from '../../decs';
export default Tab;
