import React from 'react';
import { Collapse } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

function TransitionComponent(props): React.ReactNode | React.ReactElement {
    const style = useSpring({
        from: {
            opacity: 0,
            transform: 'translate3d(0,-20px,0)',
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
        },
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

export default TransitionComponent;
