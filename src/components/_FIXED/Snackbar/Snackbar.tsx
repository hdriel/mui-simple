import React, { useMemo, isValidElement, cloneElement } from 'react';
import type { ReactNode, ReactElement, PropsWithChildren } from 'react';
import { Snackbar as MuiSnackbar, Grow, Slide } from './Snackbar.styled';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';
import type { SnackbarProps } from '../../decs';

const transitionStyle = { width: '100%' };

const Snackbar: React.FC<PropsWithChildren<SnackbarProps>> = ({
    actions,
    animation,
    animationDuration,
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
    preventDefaultClickAwayEvent,
    ...props
}): ReactElement | React.ReactNode => {
    const action = []
        .concat(
            actions,
            onClose ? [<Button key="onCloseAction" color="inherit" size="small" icon="Close" onClick={onClose} />] : []
        )
        ?.map((action, index) =>
            isValidElement(action) ? (
                // @ts-ignore
                cloneElement(action, { key: index, color: action.props?.color ?? 'inherit' })
            ) : (
                <Button
                    key={index}
                    color={action?.color ?? 'inherit'}
                    {...(typeof action === 'object' ? action : undefined)}
                >
                    {action?.label ?? action}
                </Button>
            )
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
            slots={{ transition: transition }}
            transitionDuration={animationDuration ?? (animation !== 'slide' ? 1000 : undefined)}
            {...props}
            slotProps={{
                clickAwayListener: {
                    onClickAway: (event) => {
                        if (preventDefaultClickAwayEvent) {
                            // @ts-ignore
                            event.defaultMuiPrevented = true;
                        }
                    },
                },
            }}
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

Snackbar.displayName = 'Snackbar';

export type { SnackbarProps } from '../../decs';
export default Snackbar;
