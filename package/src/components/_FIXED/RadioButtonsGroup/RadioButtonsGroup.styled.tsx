import React from 'react';
import type { ComponentType } from 'react';
import { get } from 'lodash-es';
import { styled } from '@mui/material/styles';
import {
    FormControlLabel,
    FormHelperText as MuiFormHelperText,
    RadioGroup as MuiRadioGroup,
    Radio as MuiRadio,
    FormControl as MuiFormControl,
    FormLabel as MuiFormLabel,
} from '@mui/material';
import type { RadioProps, FormControlLabelProps } from '@mui/material';

export const FormControl = MuiFormControl;
export const FormLabel = MuiFormLabel;
export const FormHelperText = MuiFormHelperText;

export const RadioGroup = MuiRadioGroup;
export const Legend = styled('legend')`
    display: block;
    padding-left: ${(props) => (props.children ? '10px' : 0)};
    padding-right: ${(props) => (props.children ? '10px' : 0)};
`;

// #### Radio
type RadioStyledPropsType = RadioProps & any;

export const Radio = styled(({ value, fontSize, muiColor, color, inputProps, ...props }: RadioStyledPropsType) => (
    <MuiRadio
        value={value}
        color={muiColor as any}
        inputProps={{ 'aria-label': value as string, ...inputProps }}
        sx={{
            ...(color && { color, '&.Mui-checked': { color } }),
            ...(fontSize && { '& .MuiSvgIcon-root': { fontSize } }),
        }}
        {...props}
    />
))`` as ComponentType<RadioStyledPropsType>;

// #### RadioControlled
type RadioControlledStyledPropsType = FormControlLabelProps & any;

export const RadioControlled = styled(
    ({ label = '', ...props }: RadioControlledStyledPropsType) => (
        <FormControlLabel label={label} sx={{ userSelect: 'none' }} {...props} />
    ),
    {
        shouldForwardProp: (propName) =>
            !['textColor', 'muiColor', 'fontSize', 'helperText', 'ignoreLabelColor'].includes(propName as string),
    }
)(({ theme, color, muiColor, checked, ignoreLabelColor }) => ({
    ...(!ignoreLabelColor &&
        checked && {
            '.MuiFormControlLabel-label': {
                color: color ?? get(theme, `palette.${muiColor as string}.main`) ?? get(theme, `palette.primary.main`),
            },
        }),
})) as ComponentType<RadioControlledStyledPropsType>;
