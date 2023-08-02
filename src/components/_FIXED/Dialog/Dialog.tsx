import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
import {
    Dialog as MuiDialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    DialogContentText as MuiDialogContentText,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from '../Button/Button';
import { Transition, PaperComponent } from './Dialog.components';
import type { DialogProps } from '../../decs';

function Dialog(props: PropsWithChildren<DialogProps>): ReactNode {
    const {
        actions,
        autoContentPadding,
        children,
        contentId,
        dividers,
        draggable,
        fullScreen,
        onClose,
        open,
        selectedValue,
        title,
        titleId,
        ...rest
    } = props;
    const theme = useTheme();
    const fullScreenBreakPoint = useMediaQuery(theme.breakpoints.down(fullScreen as any));

    const handleClose = (): void => onClose?.(selectedValue);

    return (
        <MuiDialog
            sx={{ backgroundColor: 'background.dialog' }}
            onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            scroll="paper"
            aria-labelledby={titleId}
            aria-describedby={contentId}
            PaperComponent={draggable ? (props) => <PaperComponent titleId={titleId} {...rest} /> : undefined}
            fullScreen={typeof fullScreen === 'boolean' ? fullScreen : fullScreenBreakPoint}
            {...rest}
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

Dialog.defaultProps = {
    actions: [],
    autoContentPadding: true,
    contentId: undefined,
    dividers: false,
    draggable: false,
    fullScreen: false,
    fullWidth: false,
    maxWidth: false,
    onClose: undefined,
    open: false,
    selectedValue: undefined,
    title: '',
    titleId: 'dialog-title-id',
};

export type { DialogProps } from '../../decs';
export const DialogContentText = MuiDialogContentText;
export default Dialog;
