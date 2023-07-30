import React from 'react';
import { Link as MuiLink } from './Link.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { LinkProps } from '../../decs';

const Link: React.FC<LinkProps> = ({ url, color, size, ...props }): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);

    return (
        <MuiLink href={url} color={muiColor} customColor={muiColor ? undefined : customColor} size={size} {...props} />
    );
};

Link.defaultProps = {
    url: undefined,
    color: undefined,
    underline: undefined,
    size: undefined,
};

export type { LinkProps } from '../../decs';
export default Link;
