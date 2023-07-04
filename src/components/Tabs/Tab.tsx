import React, { ReactNode } from 'react';
// import PropTypes from 'prop-types';
import { Box } from './Tabs.styled';

type IconPositionType = 'bottom' | 'end' | 'start' | 'top';

interface TabProps {
    iconPosition?: IconPositionType;
    label?: string;
    value?: string;
    open?: boolean;
    wrapped?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: ReactNode | string;
    link?: string;
    onClick?: (event: any, value: string) => void;
    tooltip?: string;
    [key: string]: any;
}

const Tab: React.FC<TabProps> = (props) => {
    return <Box {...props} />;
};

// Tab.propTypes = {
//     iconPosition: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
//     label: PropTypes.string,
//     value: PropTypes.string,
//     open: PropTypes.bool,
//     wrapped: PropTypes.bool,
//     disabled: PropTypes.bool,
//     disableRipple: PropTypes.bool,
//     icon: PropTypes.node,
//     link: PropTypes.string,
//     onClick: PropTypes.func,
//     tooltip: PropTypes.string,
// };

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

export default Tab;
