import React from 'react';
import { get } from 'lodash-es';
import { styled } from '@mui/material/styles';
import {
    FormControlLabel,
    FormHelperText as MuiFormHelperText,
    RadioGroup as MuiRadioGroup,
    Radio as MuiRadio,
} from '@mui/material';

export const FormHelperText = MuiFormHelperText;
export const RadioGroup = MuiRadioGroup;

export const Radio = styled(
    ({
        onChange,
        name,
        checked,
        value,
        disabled,
        fontSize,
        muiColor,
        icon,
        checkedIcon,
        color,
        disableRipple,
        ...props
    }) => (
        <MuiRadio
            checked={checked}
            value={value}
            disabled={disabled}
            onChange={onChange}
            color={muiColor}
            inputProps={{ 'aria-label': value, ...props.inputProps }}
            icon={icon}
            checkedIcon={checkedIcon}
            disableRipple={disableRipple}
            sx={{
                ...(color && { color, '&.Mui-checked': { color } }),
                ...(fontSize && { '& .MuiSvgIcon-root': { fontSize } }),
            }}
            {...props}
        />
    )
)``;

export const RadioControlled = styled(
    ({ checked, color, muiColor, value, disabled, labelPlacement, label = '', theme, ...props }) => (
        <FormControlLabel
            value={value}
            disabled={disabled}
            labelPlacement={labelPlacement}
            label={label}
            sx={{
                userSelect: 'none',
            }}
            {...props}
        />
    ),
    {
        shouldForwardProp: (prop) =>
            !['textColor', 'muiColor', 'fontSize', 'helperText', 'ignoreLabelColor'].includes(prop),
    }
)(({ theme, color, muiColor, checked, ignoreLabelColor }) => ({
    ...(!ignoreLabelColor &&
        checked && {
            '.MuiFormControlLabel-label': {
                color: color ?? get(theme, `palette.${muiColor}.main`) ?? get(theme, `palette.primary.main`),
            },
        }),
}));