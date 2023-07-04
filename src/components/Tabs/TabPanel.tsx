import React from 'react';
// import PropTypes from 'prop-types';
import { TabPanel as MuiTabPanel } from './Tabs.styled';

interface TabPanelProps {
    open?: boolean;
    [key: string]: any;
}

const TabPanel: React.FC<TabPanelProps> = ({ open, children, ...props }) => {
    return open ? <MuiTabPanel {...props}>{children}</MuiTabPanel> : undefined;
};

// TabPanel.propTypes = {
//     open: PropTypes.bool,
// };

TabPanel.defaultProps = {
    open: undefined,
};

export default TabPanel;
