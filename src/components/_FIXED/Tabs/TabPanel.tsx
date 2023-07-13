import React from 'react';
import { TabPanel as MuiTabPanel } from './Tabs.styled';
import type { TabPanelProps } from '../../decs';

const TabPanel: React.FC<TabPanelProps> = ({ open, swipeable, children, ...props }): React.ReactElement => {
    return open ? (
        <MuiTabPanel key={String(props.value) as any} {...props}>
            {children}
        </MuiTabPanel>
    ) : null;
};

TabPanel.defaultProps = {
    open: undefined,
    swipeable: undefined,
};

export default TabPanel;
