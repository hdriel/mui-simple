import React, { isValidElement } from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import type { CheckboxProps } from '../../decs';

type CheckboxStyledPropsType = CheckboxProps & MuiCheckboxProps;

export const Checkbox = styled(
    (props: CheckboxStyledPropsType) => {
        const {
            ariaLabel,
            customColor,
            disabled,
            fontSize,
            helperText,
            inputProps,
            label = '',
            wrapperStyle,
            error,
            labelPlacement,
            muiColor,
            readOnly,
            required,
            sxLabel,
            sx,
            textColor,
            ...rest
        } = props;
        return (
            <span style={wrapperStyle}>
                <FormControlLabel
                    required={required}
                    disabled={disabled}
                    labelPlacement={labelPlacement}
                    error={error}
                    label={
                        isValidElement(label) ? (
                            label
                        ) : (
                            <Typography sx={{ fontSize, color: textColor, ...sxLabel }}>{label}</Typography>
                        )
                    }
                    sx={{ m: 0, userSelect: 'none', color: textColor }}
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
                />
                {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
            </span>
        );
    },
    {
        shouldForwardProp: (prop) => ![].includes(prop),
    }
)<CheckboxStyledPropsType>`` as ComponentType<CheckboxStyledPropsType>;
