import React from 'react';
// import PropTypes from 'prop-types';
import { TabPanel as MuiTabPanel } from './Tabs.styled';

interface TabPanelProps {
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

// TabPanel.propTypes = {
//     open: PropTypes.bool,
// };

TabPanel.defaultProps = {
    open: undefined,
    swipeable: undefined,
};

export default TabPanel;
