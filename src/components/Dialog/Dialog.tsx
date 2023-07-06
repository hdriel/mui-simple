import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog as MuiDialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    DialogContentText as MuiDialogContentText,
    Slide as MuiSlide,
    Paper as MuiPaper,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Draggable from 'react-draggable';

import Button from '../Button/Button';

const Transition = forwardRef(function Transition({ children, ...props }, ref) {
    return (
        <MuiSlide direction="up" ref={ref} {...props}>
            {children}
        </MuiSlide>
    );
});

function PaperComponent({ titleId, ...props }) {
    return (
        <Draggable bounds="body" handle={`#${titleId}`} cancel={'[class*="MuiDialogContent-root"]'}>
            <MuiPaper {...props} />
        </Draggable>
    );
}

function Dialog({
    onClose,
    title,
    titleId,
    dividers,
    contentId,
    selectedValue,
    open,
    actions,
    fullWidth,
    maxWidth,
    fullScreen,
    draggable,
    children,
    autoContentPadding,
    ...props
}) {
    const theme = useTheme();
    const fullScreenBreakPoint = useMediaQuery(theme.breakpoints.down(fullScreen));

    const handleClose = () => onClose?.(selectedValue);

    return (
        <MuiDialog
            sx={{ backgroundColor: 'background.dialog' }}
            onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            scroll="paper"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            aria-labelledby={titleId}
            aria-describedby={contentId}
            PaperComponent={draggable ? (props) => <PaperComponent titleId={titleId} {...props} /> : undefined}
            fullScreen={typeof fullScreen === 'boolean' ? fullScreen : fullScreenBreakPoint}
            {...props}
        >
            {title && (
                <MuiDialogTitle style={{ ...(draggable && { cursor: 'move' }) }} id={titleId}>
                    {title}
                </MuiDialogTitle>
            )}

            <MuiDialogContent sx={{ ...(!autoContentPadding && { padding: 0 }) }} dividers={dividers}>
                {typeof children === 'string' ? (
                    <MuiDialogContentText id={contentId}>{children}</MuiDialogContentText>
                ) : (
                    children
                )}
            </MuiDialogContent>

            {actions?.length ? (
                <MuiDialogActions>
                    {actions.map((action, index) => (
                        <Button
                            key={index}
                            {...action}
                            onClick={action.onClick}
                            autoFocus={action.autoFocus}
                            variant={action.variant ?? 'text'}
                        >
                            {action.label}
                        </Button>
                    ))}
                </MuiDialogActions>
            ) : null}
        </MuiDialog>
    );
}

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    titleId: PropTypes.string,
    contentId: PropTypes.string,
    fullWidth: PropTypes.bool,
    dividers: PropTypes.bool,
    autoContentPadding: PropTypes.bool,
    draggable: PropTypes.bool,
    maxWidth: PropTypes.oneOf([false, 'xs', 'sm', 'md', 'lg', 'xl']),
    fullScreen: PropTypes.oneOf([false, true, 'xs', 'sm', 'md', 'lg', 'xl']),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            onClick: PropTypes.func,
            label: PropTypes.string,
            autoFocus: PropTypes.bool,
        })
    ),
};

Dialog.defaultProps = {
    onClose: undefined,
    open: false,
    selectedValue: undefined,
    title: '',
    titleId: 'dialog-title-id',
    contentId: undefined,
    fullWidth: false,
    dividers: false,
    maxWidth: false,
    draggable: false,
    autoContentPadding: true,
    fullScreen: false,
    actions: [],
};

export const DialogContentText = MuiDialogContentText;
export default Dialog;
