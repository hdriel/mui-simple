import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';
import type { SxProps } from '@mui/material';

import { Chip as MuiChip } from './Chip.styled';
import { useCustomColor } from '../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';

interface ChipProps {
    width?: string;
    label?: string;
    onClick?: () => void;
    onDelete?: () => void;
    link?: string;
    avatar?: ReactNode;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: string;
    multiLine?: boolean;
    size?: 'small' | 'medium';
    breadCrumbsStyle?: boolean;
    rounded?: boolean;
    minWidth?: string | number;
    textColor?: string;
    sx?: SxProps;
}
export default function Chip(props: PropsWithChildren<ChipProps>): ReactNode {
    const {
        label,
        avatar,
        onClick,
        onDelete,
        link,
        endIcon,
        color,
        textColor: _textColor,
        multiLine,
        size,
        width,
        breadCrumbsStyle,
        rounded,
        disabled,
        minWidth,
        children,
        sx,
        ...rest
    } = props;
    let { startIcon } = props;

    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);
    startIcon &&= <SVGIcon>{startIcon}</SVGIcon>;

    const linkProps = link && { href: link, component: 'a', clickable: true };
    return (
        <MuiChip
            width={width}
            label={label ?? children}
            onClick={onClick}
            onDelete={onDelete}
            avatar={avatar}
            icon={startIcon}
            customColor={muiColor ? undefined : customColor}
            textColor={muiColor ? undefined : textColor}
            color={muiColor}
            size={size}
            disabled={disabled}
            deleteIcon={endIcon}
            multiLine={multiLine}
            breadCrumbsStyle={breadCrumbsStyle}
            rounded={rounded}
            sx={{ ...sx, minWidth }}
            {...linkProps}
            {...rest}
        />
    );
}

//	Chip.propTypes = {
//		width: PropTypes.string,
//		label: PropTypes.string,
//		onClick: PropTypes.func,
//		onDelete: PropTypes.func,
//		link: PropTypes.string,
//		avatar: PropTypes.node,
//		disabled: PropTypes.bool,
//		startIcon: PropTypes.node,
//		endIcon: PropTypes.node,
//		color: PropTypes.string,
//		multiLine: PropTypes.bool,
//		size: PropTypes.oneOf(['small', 'medium']),
//		breadCrumbsStyle: PropTypes.bool,
//		rounded: PropTypes.bool,
//		minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//	};

Chip.defaultProps = {
    width: undefined,
    label: undefined,
    onClick: undefined,
    onDelete: undefined,
    link: undefined,
    avatar: undefined,
    disabled: undefined,
    startIcon: undefined,
    endIcon: undefined,
    color: undefined,
    multiLine: undefined,
    size: undefined,
    breadCrumbsStyle: undefined,
    rounded: true,
    minWidth: undefined,
};
