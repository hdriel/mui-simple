import type { ComponentType } from 'react';
import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, alpha, AlertProps, AlertTitleProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { numberToPx } from '../../utils/helpers';

export const Alert = styled(MuiAlert, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})`
    &.MuiAlert-root {
        min-width: 200px;
    }
    width: ${(props) => numberToPx(props.width)};

    & .MuiAlert-icon,
    & .MuiAlert-message {
        color: ${(props) => props.customColor};
    }

    ${(props) =>
        !props.title &&
        css`
            & .MuiAlert-action {
                align-items: center;
            }
        `}

    &.MuiPaper-root {
        background-color: ${(props) => props.customColor && alpha(props.customColor, 0.15)};
    }
` as ComponentType<AlertProps>;

export const AlertTitle = styled(MuiAlertTitle)`` as ComponentType<AlertTitleProps>;
