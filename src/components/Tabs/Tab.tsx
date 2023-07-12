import React from 'react';
import type { ReactNode } from 'react';
import { Box } from './Tabs.styled';

interface TabProps {
    iconPosition?: 'bottom' | 'end' | 'start' | 'top';
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

const Tab: React.FC<TabProps> = (props): React.ReactElement => <Box {...props} />;

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

export default Tab;
