import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
import { Backdrop as MuiBackdrop } from './Backdrop.styled';

interface BackdropProps {
    onClick?: () => void;
    open: boolean;
    color?: string;
    invisible?: boolean;
    [key: string]: any;
}
const Backdrop: React.FC<PropsWithChildren<BackdropProps>> = function (props): ReactNode {
    const { open, color, onClick, invisible, ...rest } = props;

    return <MuiBackdrop color={color} open={open} onClick={onClick} invisible={invisible} {...rest} />;
};

Backdrop.defaultProps = {
    onClick: undefined,
    color: '#fff',
    invisible: undefined,
};

export default Backdrop;
