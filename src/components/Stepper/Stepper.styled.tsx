import { get } from 'lodash-es';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Step as MuiStep,
    StepLabel as MuiStepLabel,
    Stepper as MuiStepper,
    StepContent as MuiStepContent,
    StepConnector as MuiStepConnector,
    stepConnectorClasses,
} from '@mui/material';
import type { StepperProps, StepContentProps, StepLabelProps, BoxProps, StepConnectorProps } from '@mui/material';

import MuiTypography from '../_FIXED/Typography/Typography';
import MuiButton from '../_FIXED/Button/Button';
import { numberToPx } from '../../utils/helpers';

export const Typography = MuiTypography;

export const Button = MuiButton;

interface StepperStyledProps {
    lineWidth?: number;
    lineColor?: string;
    marginContent?: number | string;
}
type StepperStyledPropsType = StepperStyledProps & StepperProps;
export const Stepper = styled(MuiStepper, {
    shouldForwardProp: (propName) => !['lineWidth', 'lineColor', 'marginContent'].includes(propName as string),
})<StepperStyledPropsType>`
    &.MuiStepper-root.MuiStepper-vertical.MuiStepper-alternativeLabel {
        gap: 1.5em;
    }
    & .MuiStep-root.MuiStep-vertical.MuiStep-alternativeLabel {
        width: 100%;
    }
    & .MuiStepConnector-vertical {
        margin-left: ${(props) => numberToPx(props.marginContent)};
    }
`;

export const Step = MuiStep;

interface StepContentStyledProps {
    lineWidth?: string | number;
    lineColor?: string;
    marginContent?: string | number;
}
type StepContentStyledPropsType = StepContentStyledProps & StepContentProps;
export const StepContent = styled(MuiStepContent, {
    shouldForwardProp: (propName) => !['lineWidth', 'lineColor', 'marginContent'].includes(propName as string),
})<StepContentStyledPropsType>`
    &.MuiStepContent-root {
        border-width: ${(props) => numberToPx(props.lineWidth) ?? '3px'};
        border-color: ${(props) => props.lineColor ?? '#eaeaf0'};
        margin-left: ${(props) => numberToPx(props.marginContent)};
    }
`;

export const StepLabel = styled(MuiStepLabel, {
    shouldForwardProp: (propName) => ![].includes(propName as string),
})<StepLabelProps>`
    & .MuiStepIcon-root.Mui-active,
    & .MuiStepIcon-root.Mui-completed,
    & .MuiStepLabel-label.Mui-active {
        color: ${(props) => props.color};

        .MuiStepIcon-text {
            fill: #ffffff;
        }
    }
`;

export const Box = styled(MuiBox)<BoxProps>``;

interface OwnerState {
    completed?: boolean;
    active?: boolean;
}
interface ConnectorStepIconRootStyledProps {
    theme?: string;
    ownerState?: OwnerState;
    padding?: string | number;
    background?: string;
    fontSize?: string | number;
}
export const ConnectorStepIconRoot = styled('div')<ConnectorStepIconRootStyledProps>(
    ({ theme, ownerState, padding, background, fontSize = 25 }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        fontSize: numberToPx(fontSize),
        padding: numberToPx(padding),
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            ...(background?.includes('gradient')
                ? { backgroundImage: background }
                : { background, backgroundImage: 'unset' }),
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            ...(background?.includes('gradient')
                ? { backgroundImage: background }
                : { background, backgroundImage: 'unset' }),
        }),
    })
);

interface StepConnectorStyledProps {
    theme?: string;
    orientation?: string;
    background?: string;
    lineColor?: string;
    lineWidth?: string | number;
    color?: string;
}
type StepConnectorStyledPropsType = StepConnectorStyledProps & StepConnectorProps;
export const StepConnector = styled(MuiStepConnector)<StepConnectorStyledPropsType>(
    ({ theme, orientation, background, lineColor, lineWidth = 3, color }) => {
        const bgColor = lineColor ?? background ?? color ?? get(theme, `palette.primary.main`);

        const bgColorProp = bgColor?.includes('gradient') ? { backgroundImage: bgColor } : { background: bgColor };

        return {
            [`&.${stepConnectorClasses.alternativeLabel}`]: {
                top: 22,
            },
            [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: { ...bgColorProp },
            },
            [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: { ...bgColorProp },
            },
            [`& .${stepConnectorClasses.line}`]: {
                ...(orientation === 'vertical' ? { width: numberToPx(lineWidth) } : { height: numberToPx(lineWidth) }),
                border: 0,
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
                borderRadius: 1,
            },
        };
    }
);

interface QontoConnectorStyledProps {
    theme?: string;
    fontSize?: string | number;
    background?: string;
    lineColor?: string;
    lineWidth?: string | number;
    color?: string;
    orientation?: string;
}
export const QontoConnector = styled(MuiStepConnector)<QontoConnectorStyledProps>(
    ({ theme, fontSize, background, lineColor, lineWidth = 3, color: _color }) => {
        const color = lineColor ?? background ?? _color ?? get(theme, `palette.primary.main`);

        return {
            [`&.${stepConnectorClasses.alternativeLabel}`]: {
                top: 10,
                left: 'calc(-50% + 16px)',
                right: 'calc(50% + 16px)',
            },
            [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    borderColor: color,
                },
            },
            [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    borderColor: color,
                },
            },
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
                borderTopWidth: numberToPx(lineWidth),
                borderRadius: 1,
            },
        };
    }
);

interface QontoStepStyledProps {
    theme?: string;
    ownerState?: OwnerState;
    background?: string;
    padding?: string;
    fontSize?: string;
    color?: string;
}
// Todo: check why fontSize, color are unused
export const QontoStepIconRoot = styled('div')<QontoStepStyledProps>(
    ({ theme, ownerState, background, padding = 10, fontSize = 25, color }) => {
        const backgroundColor = background ?? color ?? get(theme, `palette.primary.main`);

        return {
            color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
            ...(ownerState.active && { color: backgroundColor }),
            '& .QontoStepIcon-completedIcon': {
                color: backgroundColor,
                zIndex: 1,
            },
            '& .QontoStepIcon-circle': {
                color: backgroundColor,
                width: numberToPx(padding),
                height: numberToPx(padding),
                borderRadius: '50%',
                backgroundColor: 'currentColor',
            },
        };
    }
);
