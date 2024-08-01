import React, { useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { Wrapper } from './RippleBox.styled';
import type { RippleBoxProps } from '../../decs';
import { useCustomColor } from '../../../utils/helpers';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

const RippleBox: React.FC<PropsWithChildren<RippleBoxProps>> = ({
    color = undefined,
    children,
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color ?? 'primary');

    const rippleRef = useRef(null);

    const onRippleStart = (e): void => {
        e.preventDefault();
        e.stopPropagation();
        rippleRef.current.start(e);
    };

    const onRippleStop = (e): void => {
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

RippleBox.displayName = 'RippleBox';

export type { RippleBoxProps } from '../../decs';
export default RippleBox;
