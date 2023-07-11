import React from 'react';
import { TabPanel as MuiTabPanel } from './Tabs.styled';

interface TabPanelProps {
    value?: string | number;
    open?: boolean;
    swipeable?: boolean;
    [key: string]: any;
}

const TabPanel: React.FC<TabPanelProps> = ({ open, swipeable, children, ...props }) => {
    return open ? (
        <MuiTabPanel key={props.value} {...props}>
            {children}
        </MuiTabPanel>
    ) : null;
};

TabPanel.defaultProps = {
    open: undefined,
    swipeable: undefined,
};

export default TabPanel;
