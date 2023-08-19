import React, { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { ButtonBase } from '@mui/material';
import { Wrapper } from './RippleBox.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { RippleBoxProps } from '../../decs';
const { TouchRipple } = ButtonBase;

const RippleBox: React.FC<PropsWithChildren<RippleBoxProps>> = ({ color, children }): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color ?? 'primary');

    const rippleRef = useRef(null);

    const onRippleStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        rippleRef.current.start(e);
    };

    const onRippleStop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        rippleRef.current.stop(e);
    };

    return (
        <Wrapper color={muiColor ?? customColor} onMouseDown={onRippleStart} onMouseUp={onRippleStop}>
            {children}
            <TouchRipple ref={rippleRef} center={false} />
        </Wrapper>
    );
};

RippleBox.defaultProps = {
    color: undefined,
};

export type { RippleBoxProps } from '../../decs';
export default RippleBox;
