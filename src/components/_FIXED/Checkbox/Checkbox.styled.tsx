import React, { isValidElement } from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '../Typography/Typography';
import { Checkbox as MuiCheckbox, FormControlLabel, FormHelperText } from '@mui/material';
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
            labelProps,
            wrapperStyle,
            error,
            labelPlacement,
            onChange,
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
                            <Typography sx={{ fontSize, color: textColor, ...sxLabel }} {...labelProps}>
                                {label}
                            </Typography>
                        )
                    }
                    sx={{ m: 0, userSelect: 'none', color: textColor }}
                    control={
                        <MuiCheckbox
                            color={muiColor}
                            onChange={readOnly ? undefined : onChange}
                            inputProps={{
                                ...inputProps,
                                'aria-label': ariaLabel,
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
