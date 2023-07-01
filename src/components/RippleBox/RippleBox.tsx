import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import { Wrapper } from './RippleBox.styled';
import { useCustomColor } from '../../utils/helpers';

interface RippleBoxProps {
    color?: string;
    [key: string]: any;
}

export function RippleBox({ color, children }: RippleBoxProps) {
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
}

RippleBox.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

RippleBox.defaultProps = {
    color: undefined,
};
