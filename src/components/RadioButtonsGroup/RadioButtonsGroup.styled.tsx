import React, { ComponentType } from 'react';
import { get } from 'lodash-es';
import { styled, Theme } from '@mui/material/styles';
import {
    FormControlLabel,
    FormHelperText as MuiFormHelperText,
    RadioGroup as MuiRadioGroup,
    Radio as MuiRadio,
    RadioProps,
    FormControlLabelProps,
} from '@mui/material';

export const FormHelperText = MuiFormHelperText;
export const RadioGroup = MuiRadioGroup;

interface RadioStyledProps {
    fontSize?: string | number;
    muiColor?: string;
}
type RadioStyledPropsType = RadioProps & RadioStyledProps;

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
    }: RadioStyledPropsType) => (
        <MuiRadio
            checked={checked}
            value={value}
            disabled={disabled}
            onChange={onChange}
            color={muiColor as any}
            inputProps={{ 'aria-label': value as string, ...props.inputProps }}
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
)`` as ComponentType<RadioStyledPropsType>;

interface RadioControlledStyledProps {
    muiColor?: string;
    ignoreLabelColor?: boolean;
    theme: Theme;
}
type RadioControlledStyledPropsType = FormControlLabelProps & RadioControlledStyledProps;

export const RadioControlled = styled(
    ({
        checked,
        color,
        muiColor,
        value,
        disabled,
        labelPlacement,
        label = '',
        theme,
        ...props
    }: RadioControlledStyledPropsType) => (
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
        shouldForwardProp: (propName) =>
            !['textColor', 'muiColor', 'fontSize', 'helperText', 'ignoreLabelColor'].includes(propName as string),
    }
)(({ theme, color, muiColor, checked, ignoreLabelColor }) => ({
    ...(!ignoreLabelColor &&
        checked && {
            '.MuiFormControlLabel-label': {
                color: color ?? get(theme, `palette.${muiColor}.main`) ?? get(theme, `palette.primary.main`),
            },
        }),
})) as ComponentType<RadioControlledStyledPropsType>;
