import React, { forwardRef, isValidElement, cloneElement, useState, useCallback, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { Alert as MuiAlert, AlertTitle } from './Alert.styled';
import Button from '../Button/Button';
import { useCustomColor } from '../../../utils/helpers';
import type { AlertProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const Alert: React.FC<PropsWithChildren<AlertProps>> = forwardRef(
    (props: AlertProps, ref: any): React.ReactElement | React.ReactNode => {
        const {
            actions,
            children,
            color,
            icon,
            onClose,
            severity,
            show: _show = true,
            title,
            variant,
            width,
            ...rest
        } = props;
        const [show, setShow] = useState(_show);
        const [customColor] = useCustomColor(color);

        const onCloseHandler = useCallback(
            (event): void => {
                if (onClose === undefined) setShow(false);
                else onClose?.(event);
            },
            [onClose]
        );

        useEffect(() => {
            setShow(_show);
        }, [_show]);

        const actionList = []
            .concat(actions)
            .filter((v) => v)
            .map((action, index) => {
                return isValidElement(action) ? (
                    cloneElement(action, { key: index })
                ) : (
                    <Button
                        key={index}
                        color="inherit"
                        size="small"
                        icon={action?.icon}
                        tooltipProps={{ tooltip: action?.tooltip }}
                        onClick={(event) => action?.onClick?.(event) ?? onCloseHandler?.(event)}
                        {...(typeof action === 'object' ? action : undefined)}
                    >
                        {typeof action === 'string' ? action : action?.label}
                    </Button>
                );
            });

        const actionCmp = actionList.length ? actionList : undefined;

        return show ? (
            <MuiAlert
                ref={ref}
                severity={severity}
                variant={variant}
                onClose={onCloseHandler}
                icon={typeof icon === 'string' ? <SVGIcon>{icon}</SVGIcon> : (icon as any)}
                customColor={customColor}
                title={title}
                width={width}
                {...rest}
                action={actionCmp} // Notice: 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
            >
                {title && <AlertTitle>{title}</AlertTitle>}
                {children}
            </MuiAlert>
        ) : null;
    }
);
Alert.displayName = 'Alert';

export type { AlertProps } from '../../decs';
export default Alert;
