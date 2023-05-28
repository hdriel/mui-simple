import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import { useTheme } from '@mui/material';

import { Wrapper } from './RippleBox.styled';

export function RippleBox({ color, children }) {
    const theme = useTheme();
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
        <Wrapper color={color || theme.palette.primary.main} onMouseDown={onRippleStart} onMouseUp={onRippleStop}>
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
