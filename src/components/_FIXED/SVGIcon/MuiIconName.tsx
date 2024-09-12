import { createElement } from 'react';
import type { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { SxProps } from '@mui/material';
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

const MuiIconName: FC<MuiIconNamePropsType> = ({
    name,
    color,
    width,
    height,
    children,
    ...props
}): ReactElement | any => {
    const Icon = typeof name === 'string' ? MUIIcon[name] : undefined;

    return Icon
        ? createElement(Icon, {
              ...props,
              style: { width: numberToPx(width), height: numberToPx(height), color },
          })
        : children;
};

export default MuiIconName;
