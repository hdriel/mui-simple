import React, { isValidElement } from 'react';
import MuiIconName from './MuiIconName';
import { SVG } from './SVGIcon.styled';
import type { SVGIconProps } from '../../decs';
import { useCustomColor } from '../../../utils/helpers';

const SVGIcon: React.FC<SVGIconProps> = ({
    muiIconName,
    iconSrc,
    color,
    width,
    height,
    size,
    children,
    sx: _sx,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const iconName = muiIconName || (typeof children === 'string' ? children : undefined);
    const sx = { display: 'flex', justifyContent: 'center', alignItems: 'center', ..._sx };
    if (children && isValidElement(children)) {
        return children;
    }

    return (
        <MuiIconName
            name={iconName}
            color={customColor}
            width={size ?? width}
            height={size ?? height}
            sx={sx}
            {...props}
        >
            {iconSrc ? (
                <SVG
                    src={iconSrc}
                    fill={customColor}
                    width={size ?? width}
                    height={size ?? height}
                    sx={sx}
                    {...props}
                />
            ) : (
                children
            )}
        </MuiIconName>
    );
};

export type { SVGIconProps } from '../../decs';

export default SVGIcon;
