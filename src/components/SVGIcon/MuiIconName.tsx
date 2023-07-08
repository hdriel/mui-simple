import { createElement } from 'react';
import type { PropsWithChildren } from 'react';
// import PropTypes from 'prop-types';
import * as MUIIcon from '@mui/icons-material';
import { numberToPx } from '../../utils/helpers';

interface MuiIconNameProps {
    name: string;
    color: string;
    width: string | number;
    height: string | number;
}
type MuiIconNamePropsType = PropsWithChildren<MuiIconNameProps>;

export default function MuiIconName({
    name,
    color,
    width,
    height,
    children,
    ...props
}: MuiIconNamePropsType): React.ReactElement {
    const Icon = name && MUIIcon[name];

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
