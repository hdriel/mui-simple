import React from 'react';
import type { PropsWithChildren } from 'react';
import { Backdrop as MuiBackdrop } from './Backdrop.styled';
import type { BackdropProps } from '../../decs';

const Backdrop: React.FC<PropsWithChildren<BackdropProps>> = function ({
    open,
    color = '#fff',
    onClick,
    invisible,
    ...rest
}): React.ReactElement {
    return <MuiBackdrop color={color} open={open} onClick={onClick} invisible={invisible} {...rest} />;
};
Backdrop.displayName = 'Backdrop';

export type { BackdropProps } from '../../decs';
export default Backdrop;
