import React, { useMemo, isValidElement, cloneElement } from 'react';
import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
import { Snackbar as MuiSnackbar, Grow, Slide } from './Snackbar.styled';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import type { SnackbarProps } from '../../decs';

const transitionStyle = { width: '100%' };

const Snackbar: React.FC<SnackbarProps> = ({
    actions,
    animation,
    animationDuration,
    animationProps,
    autoHideDuration,
    children,
    fullWidth,
    horizontal,
    message,
    messageId,
    onClickAway,
    onClose,
    open,
    resumeHideDuration,
    slideDirection,
    title,
    variant,
    vertical,
    ...props
}): ReactElement => {
    const action = useMemo(
        () =>
            []
                .concat(
                    actions,
                    onClose
                        ? [<Button key="onCloseAction" color="inherit" size="small" icon="Close" onClick={onClose} />]
                        : []
                )
                ?.map((action, index) =>
                    isValidElement(action) ? (
                        cloneElement(action, { key: index, color: action.props.color ?? 'inherit' })
                    ) : (
                        <Button
                            key={index}
                            color={action?.color ?? 'inherit'}
                            {...(typeof action === 'object' ? action : undefined)}
                        >
                            {action?.label ?? action}
                        </Button>
                    )
                ),
        [actions, onClose]
    );

    const transition = useMemo(() => {
        const SlideTransition = (props): ReactNode => (
            <Slide sx={{ ...(fullWidth && transitionStyle) }} {...props} direction={slideDirection ?? 'up'}>
                {props.children}
            </Slide>
        );
        const GrowTransition = (props): ReactNode => (
            <Grow sx={{ ...(fullWidth && transitionStyle) }} {...props}>
                {props.children}
            </Grow>
        );
        const FadeTransition = (props): ReactNode => (
            <Grow sx={{ ...(fullWidth && transitionStyle) }} {...props}>
                {props.children}
            </Grow>
        );

        return (
            {
                fade: FadeTransition,
                slide: SlideTransition,
                grow: GrowTransition,
            }[animation ?? 'slide'] || SlideTransition
        );
    }, [animation, slideDirection]);

    const msg = children ?? message;
    return (
        <MuiSnackbar
            open={open}
            autoHideDuration={autoHideDuration}
            resumeHideDuration={resumeHideDuration}
            onClose={(event, reason) => {
                if (reason === 'clickaway') return onClickAway?.(event, reason);
                return onClose?.(event, reason);
            }}
            key={messageId}
            anchorOrigin={
                (vertical || horizontal) && {
                    vertical: vertical ?? 'top',
                    horizontal: horizontal ?? 'right',
                }
            }
            message={msg}
            title={title}
            fullWidth={fullWidth}
            TransitionComponent={transition}
            transitionDuration={animationDuration ?? (animation !== 'slide' ? 1000 : undefined)}
            TransitionProps={animationProps}
            {...props}
            action={action} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
        >
            {['success', 'error', 'warning', 'info'].includes(variant) ? (
                <Alert
                    onClose={(event) => onClose(event)}
                    severity={variant}
                    action={action}
                    title={title}
                    width={fullWidth ? '100%' : undefined}
                >
                    {msg}
                </Alert>
            ) : null}
        </MuiSnackbar>
    );
};

Snackbar.defaultProps = {
    actions: undefined,
    animation: undefined,
    animationDuration: undefined,
    animationProps: undefined,
    autoHideDuration: undefined,
    fullWidth: undefined,
    horizontal: undefined,
    message: undefined,
    messageId: undefined,
    onClickAway: undefined,
    onClose: undefined,
    open: undefined,
    resumeHideDuration: undefined,
    slideDirection: undefined,
    title: undefined,
    variant: undefined,
    vertical: undefined,
};

export type { SnackbarProps } from '../../decs';
export default Snackbar;
