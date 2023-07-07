import React, { forwardRef, useMemo } from 'react';
import type { ReactElement, PropsWithChildren, ReactNode, MouseEvent } from 'react';
//	import PropTypes from 'prop-types';

import { Alert as MuiAlert, AlertTitle } from './Alert.styled';
import Button from '../Button/Button';
import { useCustomColor } from '../../utils/helpers';

interface AlertProps {
    actions?:
        | ReactNode
        | { label: string; onClick: () => void }
        | string
        | Array<ReactNode | { label: string; onClick: () => void } | string>;
    color?: string;
    icon?: ReactNode;
    onClose?: (event: MouseEvent) => void;
    severity?: 'error' | 'info' | 'success' | 'warning';
    title?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
    [key: string]: any;
}

const Alert = forwardRef((props: PropsWithChildren<AlertProps>, ref): ReactElement => {
    const { severity, variant, onClose, icon, color, actions, title, width, children, ...rest } = props;
    const [customColor] = useCustomColor(color);

    const actionCmp = useMemo(() => {
        const actionList = []
            .concat(actions)
            .filter(Boolean)
            .map((action, index) => {
                return React.isValidElement(action) ? (
                    React.cloneElement(action, { key: index })
                ) : (
                    <Button
                        key={index}
                        muiColor="inherit"
                        size="small"
                        onClick={(event) => action?.onClick?.(event) ?? onClose?.(event)}
                        {...(typeof action === 'object' ? action : undefined)}
                    >
                        {action?.label ?? action}
                    </Button>
                );
            });

        return actionList.length ? actionList : undefined;
    }, [actions, onClose]);

    return (
        <MuiAlert
            ref={ref}
            severity={severity}
            variant={variant}
            onClose={onClose}
            icon={icon}
            customColor={customColor}
            title={title}
            width={width}
            {...rest}
            action={actionCmp} // 'action' end after props, to prevent bugs from storybook, that any props has storybook action field
        >
            {title && <AlertTitle>{title}</AlertTitle>}
            {children}
        </MuiAlert>
    );
});

//	Alert.propTypes = {
//	    severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
//	    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
//	    onClose: PropTypes.func,
//	    icon: PropTypes.node,
//	    color: PropTypes.string,
//	    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//	    actions: PropTypes.oneOfType([
//	        PropTypes.node,
//	        PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
//	        PropTypes.string,
//	        PropTypes.arrayOf(
//	            PropTypes.oneOfType([
//	                PropTypes.node,
//	                PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func }),
//	                PropTypes.string,
//	            ])
//	        ),
//	    ]),
//	};

Alert.defaultProps = {
    actions: undefined,
    color: undefined,
    icon: undefined,
    onClose: undefined,
    severity: undefined,
    title: undefined,
    variant: undefined,
    width: undefined,
};

Alert.displayName = 'Alert';
export default Alert;
