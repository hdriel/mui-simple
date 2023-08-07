import React from 'react';
import { styled } from '@mui/material/styles';
import {
    FormControlLabel,
    FormHelperText as MuiFormHelperText,
    Switch as MuiSwitch,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';
import { SWITCH_STYLES } from './Switch.consts';
import { customColor, antSwitchStyle, androidSwitchStyle, iosSwitchStyle } from './Switch.styles';

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
    ${(props) => customColor(props)}
    ${(props) => antSwitchStyle(props)}
  ${(props) => androidSwitchStyle(props)}
  ${(props) => iosSwitchStyle(props)}
  &.MuiSwitch-root {
        scale: ${(props) => props.scale};
    }
`;

export const SwitchOnOff = styled(
    ({ onLabel = 'on', offLabel = 'off', ...props }: any) => (
        <MuiStack direction="row" spacing={0} alignItems="center">
            <MuiTypography>{offLabel}</MuiTypography>
            <Switch {...props} />
            <MuiTypography>{onLabel}</MuiTypography>
        </MuiStack>
    ),
    {
        shouldForwardProp: (prop: string) => !['textColor', 'muiColor', 'fontSize', 'helperText'].includes(prop),
    }
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
