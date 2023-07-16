import React, { useMemo, isValidElement, cloneElement } from 'react';
import type { PropsWithChildren, ReactNode, ReactElement } from 'react';
import { Snackbar as MuiSnackbar, Grow, Slide } from './Snackbar.styled';
import Button from '../_FIXED/Button/Button';
import Alert from '../_FIXED/Alert/Alert';
import type { SnackbarProps } from '../decs';

const Snackbar: React.FC<PropsWithChildren<SnackbarProps>> = ({
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
                    onClose ? [<Button key="onCloseAction" muiColor="inherit" size="small" icon="Close" />] : []
                )
                ?.map((action, index) =>
                    isValidElement(action) ? (
                        cloneElement(action, { key: index })
                    ) : (
                        <Button key={index} {...(typeof action === 'object' ? action : undefined)}>
                            {action?.label ?? action}
                        </Button>
                    )
                ),
        [actions, onClose]
    );

    const transition = useMemo(() => {
        const SlideTransition = (props): ReactNode => (
            <Slide direction={slideDirection ?? 'up'} {...props}>
                {children ?? ''}
            </Slide>
        );
        const GrowTransition = (props): ReactNode => <Grow {...props}>{children ?? ''}</Grow>;
        const FadeTransition = (props): ReactNode => <Grow {...props}>{children ?? ''}</Grow>;

        return (
            {
                fade: FadeTransition,
                slide: SlideTransition,
                grow: GrowTransition,
            }[animation ?? 'slide'] || SlideTransition
        );
    }, [animation, slideDirection, children]);

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
            message={message}
            title={title}
            fullWidth={fullWidth}
            TransitionComponent={transition}
            transitionDuration={animationDuration ?? (animation !== 'slide' ? 1000 : undefined)}
            TransitionProps={animationProps}
            {...props}
            action={action} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
        >
            {['success', 'error', 'warning', 'info'].includes(variant) ? (
                <Alert onClose={(event) => onClose(event)} severity={variant} action={action} title={title}>
                    {children ?? message}
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

export default Snackbar;
