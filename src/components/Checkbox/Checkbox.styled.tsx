import React, { ComponentType } from 'react';
import { styled } from '@mui/material/styles';

import { Checkbox as MuiCheckbox, FormControlLabel, FormHelperText, CheckboxProps } from '@mui/material';

interface CheckboxStyledProps {
    textColor: string;
    fontSize: string | number;
    helperText: string;
}

type CheckboxStyledPropsType = CheckboxProps & CheckboxStyledProps;

export const Checkbox = styled(
    ({ required, disabled, labelPlacement, helperText, label = '', fontSize, customColor, muiColor, sx, ...props }) => (
        <>
            <FormControlLabel
                required={required}
                disabled={disabled}
                labelPlacement={labelPlacement}
                sx={{ m: 0, userSelect: 'none' }}
                control={
                    <MuiCheckbox
                        color={muiColor}
                        sx={{
                            ...sx,
                            ...(fontSize && { '& .MuiSvgIcon-root': { fontSize } }),
                            ...(customColor && {
                                color: customColor,
                                '&.Mui-checked': { color: customColor },
                            }),
                        }}
                        {...props}
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
)<CheckboxStyledPropsType>`` as ComponentType<CheckboxStyledPropsType>;
