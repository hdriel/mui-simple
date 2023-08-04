import React from 'react';
import type { PropsWithChildren } from 'react';
import { Backdrop as MuiBackdrop } from './Backdrop.styled';
import type { BackdropProps } from '../../decs';

const Backdrop: React.FC<PropsWithChildren<BackdropProps>> = function (props): React.ReactElement {
    const { open, color, onClick, invisible, ...rest } = props;

    return <MuiBackdrop color={color} open={open} onClick={onClick} invisible={invisible} {...rest} />;
};

Backdrop.defaultProps = {
    color: '#fff',
    invisible: undefined,
    onClick: undefined,
};

export type { BackdropProps } from '../../decs';
export default Backdrop;
