import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';
import { Backdrop as MuiBackdrop } from './Backdrop.styled';

interface BackdropProps {
    onClick?: () => void;
    open: boolean;
    color?: string;
    invisible?: boolean;
}
export default function Backdrop(props: PropsWithChildren<BackdropProps>): ReactNode {
    const { open, color, onClick, invisible, ...rest } = props;
    return <MuiBackdrop color={color} open={open} onClick={onClick} invisible={invisible} {...rest} />;
}

//	Backdrop.propTypes = {
//    onClick: PropTypes.func,
//    open: PropTypes.bool.isRequired,
//    color: PropTypes.string,
//    invisible: PropTypes.bool,
//	};

Backdrop.defaultProps = {
    onClick: undefined,
    // Todo: maybe remove open prop's default value or remove it as required
    open: false,
    color: '#fff',
    invisible: undefined,
};
