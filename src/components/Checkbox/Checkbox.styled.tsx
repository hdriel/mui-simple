import React from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, FormControlLabel, FormHelperText } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import type { CheckboxProps } from '../desc';

type CheckboxStyledPropsType = CheckboxProps & MuiCheckboxProps;

export const Checkbox = styled(
    (props: CheckboxStyledPropsType) => {
        const {
            inputProps,
            ariaLabel,
            readOnly,
            required,
            disabled,
            labelPlacement,
            helperText,
            label = '',
            fontSize,
            customColor,
            muiColor,
            sx,
            ...rest
        } = props;
        return (
            <>
                <FormControlLabel
                    required={required}
                    disabled={disabled}
                    labelPlacement={labelPlacement}
                    sx={{ m: 0, userSelect: 'none' }}
                    control={
                        <MuiCheckbox
                            color={muiColor as MuiColor}
                            inputProps={{
                                ...inputProps,
                                'aria-label': ariaLabel,
                                readOnly,
                            }}
                            sx={{
                                ...sx,
                                ...(fontSize && { '& .MuiSvgIcon-root': { fontSize } }),
                                ...(customColor && {
                                    color: customColor,
                                    '&.Mui-checked': { color: customColor },
                                }),
                            }}
                            {...rest}
                        />
                    }
                    label={label}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </>
        );
    },
    {
        shouldForwardProp: (prop) => !['textColor', 'fontSize', 'helperText'].includes(prop),
    }
)<CheckboxStyledPropsType>`` as ComponentType<CheckboxStyledPropsType>;
