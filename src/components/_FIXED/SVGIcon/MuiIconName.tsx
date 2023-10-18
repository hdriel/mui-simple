import { createElement } from 'react';
import type { SxProps } from '@mui/material';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
// import PropTypes from 'prop-types';
import * as MUIIcon from '@mui/icons-material';
import { numberToPx } from '../../../utils/helpers';

interface MuiIconNameProps {
    name: string | ReactNode;
    color: string;
    width: string | number;
    height: string | number;
    sx?: SxProps;
}
type MuiIconNamePropsType = PropsWithChildren<MuiIconNameProps>;

export default function MuiIconName({
    name,
    color,
    width,
    height,
    children,
    ...props
}: MuiIconNamePropsType): ReactElement | any {
    const Icon = typeof name === 'string' ? MUIIcon[name] : undefined;

    return Icon
        ? createElement(Icon, {
              ...props,
              style: { width: numberToPx(width), height: numberToPx(height), color },
          })
        : children;
}

// MuiIconName.propTypes = {
//     name: PropTypes.string,
//     color: PropTypes.string,
//     width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

MuiIconName.defaultProps = {
    name: undefined,
    color: undefined,
    width: undefined,
    height: undefined,
};
