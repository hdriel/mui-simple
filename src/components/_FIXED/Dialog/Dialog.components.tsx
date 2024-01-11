import React, { forwardRef } from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Slide as MuiSlide, Paper as MuiPaper } from '@mui/material';
import Draggable from 'react-draggable';

export const Transition = forwardRef(function Transition(
    { children, ...props }: PropsWithChildren<any>,
    ref
): ReactElement {
    return (
        <MuiSlide direction="up" ref={ref} {...props}>
            {children}
        </MuiSlide>
    );
});

interface PaperComponentProps {
    titleId?: string | number;
}
export const PaperComponent: React.FC<PaperComponentProps> = ({
    titleId,
    ...props
}): ReactElement | React.ReactNode => {
    return (
        <Draggable bounds="body" handle={`#${titleId}`} cancel={'[class*="MuiDialogContent-root"]'}>
            <MuiPaper {...props} />
        </Draggable>
    );
};
