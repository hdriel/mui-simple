import React from 'react';
import type { ComponentType } from 'react';
import { styled, css } from '@mui/material/styles';
import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, alpha } from '@mui/material';
import type { AlertProps } from '@mui/material';

import { numberToPx } from '../../../utils/helpers';

interface AlertStyledProps {
    customColor?: string;
    width?: string | number;
}
type AlertStyledPropsType = AlertStyledProps & AlertProps;
export const Alert: React.FC<AlertStyledPropsType> = styled(MuiAlert, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})<AlertStyledPropsType>`
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
`;

export const AlertTitle = MuiAlertTitle;
