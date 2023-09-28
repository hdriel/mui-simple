import React, { isValidElement } from 'react';
import type { SxProps } from '@mui/material';
import MuiIconName from './MuiIconName';
import { SVG } from './SVGIcon.styled';

interface SVGIconProps {
    muiIconName?: string;
    iconSrc?: string;
    color?: string;
    width?: string | number;
    height?: string | number;
    size?: string | number;
    sx?: SxProps;
}

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

export default SVGIcon;
