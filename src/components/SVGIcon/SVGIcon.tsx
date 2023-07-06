import React, { isValidElement, PropsWithChildren } from 'react';
// import PropTypes from 'prop-types';
import MuiIconName from './MuiIconName';
import { SVG } from './SVGIcon.styled';

interface SVGIconProps {
    muiIconName?: string;
    iconSrc?: string;
    color?: string;
    width?: string | number;
    height?: string | number;
    size?: string | number;
}

export default function SVGIcon(props: PropsWithChildren<SVGIconProps>) {
    const { muiIconName, iconSrc, color, width, height, size, children, ...rest } = props;
    const iconName = muiIconName || typeof children === 'string' ? children : undefined;

    return children && isValidElement(children) ? (
        children
    ) : (
        <MuiIconName name={iconName} color={color} width={size ?? width} height={size ?? height} {...rest}>
            {iconSrc && <SVG src={iconSrc} fill={color} width={size ?? width} height={size ?? height} {...rest} />}
        </MuiIconName>
    );
}

// SVGIcon.propTypes = {
//     muiIconName: PropTypes.string,
//     iconSrc: PropTypes.string,
//     color: PropTypes.string,
//     width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

SVGIcon.defaultProps = {
    muiIconName: undefined,
    iconSrc: undefined,
    color: undefined,
    width: undefined,
    height: undefined,
    size: undefined,
};
