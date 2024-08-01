import React, { isValidElement } from 'react';
import type { PropsWithChildren } from 'react';
import MuiIconName from './MuiIconName';
import { SVG } from './SVGIcon.styled';
import type { SVGIconProps } from '../../decs';
import { useCustomColor } from '../../../utils/helpers';

const SVGIcon: React.FC<PropsWithChildren<SVGIconProps>> = ({
    children,
    color,
    height,
    iconSrc,
    muiIconName,
    size,
    sx: _sx,
    width,
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

SVGIcon.displayName = 'SVGIcon';

export type { SVGIconProps } from '../../decs';

export default SVGIcon;
