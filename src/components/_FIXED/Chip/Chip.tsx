import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Chip as MuiChip } from './Chip.styled';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { ChipProps } from '../../decs';

const Chip: React.FC<PropsWithChildren<ChipProps>> = (props): ReactElement | React.ReactNode => {
    const {
        children,
        color,
        endIcon: _endIcon,
        label,
        link: href,
        minWidth,
        onDelete,
        startIcon: _startIcon,
        sx,
        textColor: _textColor,
        width,
        rounded = true,
        ...rest
    } = props;

    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);
    const linkProps: any = href && { href, component: 'a', clickable: true };
    const startIcon = typeof _startIcon === 'string' ? <SVGIcon>{_startIcon}</SVGIcon> : (_startIcon as any);
    const endIcon = typeof _endIcon === 'string' ? <SVGIcon>{_endIcon}</SVGIcon> : (_endIcon as any);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onDeleteHandler = onDelete ?? (endIcon ? () => {} : undefined);

    return (
        <MuiChip
            color={muiColor as any}
            customColor={muiColor ? undefined : customColor}
            deleteIcon={endIcon}
            icon={startIcon}
            label={label ?? children}
            onDelete={onDeleteHandler}
            sx={{ ...sx, minWidth, width: width ?? 'auto' }}
            textColor={textColor}
            rounded={rounded}
            {...linkProps}
            {...rest}
        />
    );
};

Chip.displayName = 'Chip';

export type { ChipProps } from '../../decs';
export default Chip;
