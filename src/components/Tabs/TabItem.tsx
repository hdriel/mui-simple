import React, { ReactNode } from 'react';
// import PropTypes from 'prop-types';
import { Tab as MuiTab } from './Tabs.styled';
import Tooltip from '../_FIXED/Tooltip/Tooltip';
import { tooltipPlacementsType } from '../_FIXED/Tooltip/Tooltip.consts';
import SVGIcon from '../SVGIcon/SVGIcon';

type IconPositionType = 'bottom' | 'end' | 'start' | 'top';
type OrientationType = 'horizontal' | 'vertical';

interface TooltipProps {
    title?: string;
    placement?: tooltipPlacementsType;
    followCursor?: boolean;
    bgColor?: string;
    color?: string;
    fontSize?: string | number;
    lineHeight?: string | number;
}

interface TabItemProps {
    iconPosition?: IconPositionType;
    orientation?: OrientationType;
    label?: string;
    value?: string;
    open?: boolean;
    wrapped?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: ReactNode | string;
    link?: string;
    onClick?: (event: any, value: string) => void;
    tooltipProps?: TooltipProps;
    [key: string]: any;
}

const TabItem: React.FC<TabItemProps> = ({
    link,
    onClick,
    value,
    open,
    tooltipProps,
    orientation,
    icon,
    children,
    ...props
}) => {
    return (
        <Tooltip
            {...tooltipProps}
            placement={
                tooltipProps?.placement !== undefined
                    ? tooltipProps?.placement
                    : orientation === 'vertical'
                    ? 'right'
                    : 'bottom'
            }
        >
            <MuiTab
                value={value}
                role="tabpanel"
                hidden={!open}
                id={`simple-tabpanel-${value}`}
                aria-labelledby={`simple-tab-${value}`}
                component={link ? 'a' : undefined}
                href={link}
                icon={icon && <SVGIcon>{icon}</SVGIcon>}
                onClick={
                    link
                        ? (event, value) => {
                              event.preventDefault();
                              onClick?.(event, value);
                          }
                        : undefined
                }
                {...props}
            />
        </Tooltip>
    );
};

// TabItem.propTypes = {
//     iconPosition: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
//     orientation: PropTypes.oneOf(['horizontal', 'vertical']),
//     label: PropTypes.string,
//     value: PropTypes.string,
//     open: PropTypes.bool,
//     wrapped: PropTypes.bool,
//     disabled: PropTypes.bool,
//     disableRipple: PropTypes.bool,
//     icon: PropTypes.node,
//     link: PropTypes.string,
//     onClick: PropTypes.func,
//     tooltipProps: PropTypes.shape({
//         title: PropTypes.string,
//         placement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
//         followCursor: PropTypes.bool,
//         bgcolor: PropTypes.string,
//         color: PropTypes.string,
//         fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//         lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     }),
// };

TabItem.defaultProps = {
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
    tooltipProps: undefined,
};

export default TabItem;
