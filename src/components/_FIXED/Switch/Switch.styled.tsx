import React from 'react';
import { styled } from '@mui/material/styles';
import {
    FormControlLabel,
    FormHelperText as MuiFormHelperText,
    Switch as MuiSwitch,
    Stack as MuiStack,
} from '@mui/material';
import MuiTypography from '../Typography/Typography';
import { SWITCH_STYLES } from './Switch.consts';
import { customColor, antSwitchStyle, androidSwitchStyle, iosSwitchStyle } from './Switch.styles';
import { isDefined } from '../../../utils/helpers';

export const FormHelperText = MuiFormHelperText;
export const Switch = styled(
    ({ switchStyle, checked, color, scale, ...props }: any) => (
        <MuiSwitch
            {...props}
            checked={checked}
            focusVisibleClassName={switchStyle === SWITCH_STYLES.IOS ? '.Mui-focusVisible' : ''}
            sx={{ ...props.sx }}
        />
    ),
    {
        shouldForwardProp: (prop: string) =>
            !['textColor', 'fontSize', 'helperText', 'switchStyle', 'labelPlacement'].includes(prop),
    }
)`
    ${(props: any) => customColor(props)}
    ${(props: any) => antSwitchStyle(props)}
    ${(props: any) => androidSwitchStyle(props)}
    ${(props: any) => iosSwitchStyle(props)}
    &.MuiSwitch-root {
        scale: ${(props: any) => props.scale};
    }
`;

export const SwitchOnOff = styled(
    ({ onOffLabelSide, ON_LABEL, OFF_LABEL, ...props }: any) => {
        const offLabel = OFF_LABEL && <MuiTypography tooltip={false}>{OFF_LABEL}</MuiTypography>;
        const onLabel = ON_LABEL && <MuiTypography tooltip={false}>{ON_LABEL}</MuiTypography>;
        const label = props.checked ? onLabel : offLabel;

        return isDefined(onOffLabelSide) && ['left', 'right'].includes(onOffLabelSide) ? (
            <MuiStack direction="row" spacing={0} alignItems="center">
                {onOffLabelSide === 'left' ? label : undefined}
                <Switch {...props} />
                {onOffLabelSide === 'right' ? label : undefined}
            </MuiStack>
        ) : (
            <MuiStack direction="row" spacing={0} alignItems="center">
                {offLabel}
                <Switch {...props} />
                {onLabel}
            </MuiStack>
        );
    },
    { shouldForwardProp: (prop: string) => ![].includes(prop) }
)``;

export const SwitchControlled = styled(
    ({ required, fontSize, disabled, labelPlacement, color, labelPadding, label = '', ...props }: any) => (
        <FormControlLabel
            required={required}
            disabled={disabled}
            labelPlacement={labelPlacement}
            sx={{
                m: 0,
                userSelect: 'none',
                '.MuiFormControlLabel-label': {
                    color,
                    fontSize,
                    ...(labelPadding !== undefined && { paddingLeft: labelPadding }),
                },
            }}
            label={label}
            {...props}
        />
    ),
    {
        shouldForwardProp: (prop: string) => !['textColor', 'muiColor', 'fontSize'].includes(prop),
    }
)``;
