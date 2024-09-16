import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
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

const Dialog: React.FC<PropsWithChildren<DialogProps>> = (props): ReactElement | React.ReactNode => {
    const {
        actions = [],
        autoContentPadding = true,
        children,
        contentId,
        dividers = false,
        draggable = false, // todo: draggable not working, hide the dialog
        fullScreen = false,
        maxWidth = false,
        onClose,
        open = true,
        selectedValue,
        title = '',
        titleId = 'dialog-title-id',
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
            maxWidth={maxWidth}
            {...rest}
        >
            {title && (
                <MuiDialogTitle style={{ ...(draggable && { cursor: 'move' }) }} id={titleId} title={title as string} />
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
};

Dialog.displayName = 'Dialog';

export type { DialogProps } from '../../decs';
export const DialogContentText = MuiDialogContentText;
export default Dialog;
