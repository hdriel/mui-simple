import React from 'react';
import type { PropsWithChildren } from 'react';

import { Chip as MuiChip } from './Chip.styled';
import { useCustomColor } from '../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { ChipProps } from '../desc';

function Chip(props: PropsWithChildren<ChipProps>): React.ReactElement {
    const {
        avatar,
        useStyleBreadCrumb,
        children,
        color,
        disabled,
        endIcon,
        label,
        link: href,
        minWidth,
        multiLine,
        onClick,
        onDelete,
        rounded,
        size,
        startIcon,
        sx,
        textColor: _textColor,
        width,
        ...rest
    } = props;

    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);
    const linkProps = href && { href, component: 'a', clickable: true };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onDeleteHandler = onDelete ?? endIcon ? () => {} : undefined;

    return (
        <MuiChip
            avatar={avatar}
            useStyleBreadCrumb={useStyleBreadCrumb}
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            deleteIcon={typeof endIcon === 'string' ? <SVGIcon>{endIcon}</SVGIcon> : (endIcon as any)}
            disabled={disabled}
            icon={typeof startIcon === 'string' ? <SVGIcon>{startIcon}</SVGIcon> : (startIcon as any)}
            label={label ?? children}
            multiLine={multiLine}
            onClick={onClick}
            onDelete={onDeleteHandler}
            rounded={rounded}
            size={size}
            sx={{ ...sx, minWidth, width: width ?? 'auto' }}
            textColor={textColor}
            {...linkProps}
            {...rest}
        />
    );
}

Chip.defaultProps = {
    alignEndIcon: undefined,
    avatar: undefined,
    useStyleBreadCrumb: undefined,
    color: undefined,
    disabled: undefined,
    endIcon: undefined,
    label: undefined,
    link: undefined,
    minWidth: undefined,
    multiLine: undefined,
    onClick: undefined,
    onDelete: undefined,
    rounded: true,
    size: undefined,
    startIcon: undefined,
    width: undefined,
};

export default Chip;
