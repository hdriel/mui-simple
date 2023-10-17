import React, { isValidElement } from 'react';
import MuiIconName from './MuiIconName';
import { SVG } from './SVGIcon.styled';
import type { SVGIconProps } from '../../decs';

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
}): React.ReactElement => {
    const iconName = muiIconName || (typeof children === 'string' ? children : undefined);
    const sx = { display: 'flex', justifyContent: 'center', alignItems: 'center', ..._sx };
    if (children && isValidElement(children)) {
        return children;
    }

    return (
        <MuiIconName name={iconName} color={color} width={size ?? width} height={size ?? height} sx={sx} {...props}>
            {iconSrc ? (
                <SVG src={iconSrc} fill={color} width={size ?? width} height={size ?? height} sx={sx} {...props} />
            ) : (
                children
            )}
        </MuiIconName>
    );
};

SVGIcon.defaultProps = {
    muiIconName: undefined,
    iconSrc: undefined,
    color: undefined,
    width: undefined,
    height: undefined,
    size: undefined,
};

export type { SVGIconProps } from '../../decs';

export default SVGIcon;
