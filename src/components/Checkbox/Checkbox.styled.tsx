import React, { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, FormControlLabel, FormHelperText } from '@mui/material';
import type { CheckboxProps, SxProps } from '@mui/material';

type MuiColor = 'error' | 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';

interface CheckboxStyledProps {
    textColor?: string;
    fontSize?: string | number;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    label?: string;
    customColor?: string;
    muiColor?: string;
    sx?: SxProps;
}

type CheckboxStyledPropsType = CheckboxProps & CheckboxStyledProps;

export const Checkbox = styled((props: CheckboxStyledPropsType) => {
    const {
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
        (
            <>
                <FormControlLabel
                    required={required}
                    disabled={disabled}
                    labelPlacement={labelPlacement}
                    sx={{ m: 0, userSelect: 'none' }}
                    control={
                        <MuiCheckbox
                            color={muiColor as MuiColor}
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
        ),
        {
            shouldForwardProp: (prop) => !['textColor', 'fontSize', 'helperText'].includes(prop),
        }
    );
})<CheckboxStyledPropsType>`` as ComponentType<CheckboxStyledPropsType>;
