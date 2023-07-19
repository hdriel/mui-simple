import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { ClickAwayListener } from '@mui/material';

import { Select, FormControl, InputLabel, FormHelperText, Stack, Box } from './InputSelect.styled';
import { getCustomColor, useCustomColor } from '../../../utils/helpers';
import { useTheme } from '@mui/material/styles';
import { useOptions, useOptionsConverter } from './InputSelect.hooks';
import SVGIcon from '../../SVGIcon/SVGIcon';

const emptyObjectRef = [];

type SelectOption =
    | string
    | Array<{
          label?: string | ReactNode;
          subtitle?: string | ReactNode;
          disabled?: boolean;
          chipProps?: object;
          value?: string | number | boolean;
          [key: string]: any;
      }>;

interface InputSelectProps {
    alignActions?: string;
    alignActionsExternal?: string;
    checkbox?: boolean;
    cmpSpacing?: number;
    colorActive?: string;
    colorLabel?: string;
    colorText?: string;
    convertedOptions?: any;
    disabled?: boolean;
    endCmp?: string | ReactNode;
    endCmpExternal?: string | ReactNode;
    error?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    groupBy?: string | ((event: any) => void);
    helperText?: string;
    hideStartActionsOnEmpty?: boolean;
    id?: string;
    label?: string;
    margin?: 'normal' | 'dense';
    max?: number;
    name?: string;
    nullable?: string | boolean;
    onBlur?: (event: any) => void;
    onChange?: (event: any) => void;
    onFocus?: (event: any) => void;
    options?: SelectOption;
    autoWidth?: boolean;
    placeholderOption?: string;
    readOnly?: boolean;
    renderValue?: (value: any, option: SelectOption) => any;
    required?: boolean;
    selectAll?: boolean;
    selectAllOption?: any;
    size?: 'medium' | 'small';
    startCmp?: string | ReactNode;
    startCmpExternal?: string | ReactNode;
    value?: string | number | boolean | Array<string | number | boolean>;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

const InputSelect: React.FC<InputSelectProps> = ({
    alignActions,
    alignActionsExternal,
    autoWidth,
    checkbox,
    cmpSpacing,
    colorActive: _colorActive,
    colorLabel: _colorLabel,
    colorText: _colorText,
    convertedOptions: _convertedOptions,
    disabled,
    endCmp: _endCmp,
    endCmpExternal: _endCmpExternal,
    error,
    fullWidth,
    groupBy,
    helperText,
    hideStartActionsOnEmpty,
    id,
    label,
    margin,
    max,
    name,
    nullable,
    onBlur,
    onChange,
    onFocus,
    options: _options,
    placeholderOption,
    readOnly,
    renderValue,
    required,
    selectAll,
    selectAllOption,
    size,
    startCmp: _startCmp,
    startCmpExternal: _startCmpExternal,
    value,
    variant,
    ...props
}): React.ReactElement => {
    const [isFocused, setIsFocused] = useState(false);

    const optionsObj = useOptionsConverter({
        options: _convertedOptions ? emptyObjectRef : _options,
        groupBy,
    });

    const options = useOptions({
        placeholder: placeholderOption,
        convertedOptions: _convertedOptions ?? optionsObj,
        checkbox,
        nullable: !selectAll && nullable,
    });

    const menuColor = _colorActive ?? _colorLabel;
    const [menuColorText] = useCustomColor(_colorText);
    const [menuColorSelected] = useCustomColor(menuColor, { lighten: 0.8 });
    const [menuColorHover] = useCustomColor(menuColor, { lighten: 0.6 });

    const startCmp = typeof _startCmp === 'string' ? <SVGIcon>{_startCmp}</SVGIcon> : _startCmp;
    const startCmpExternal =
        typeof _startCmpExternal === 'string' ? <SVGIcon>{_startCmpExternal}</SVGIcon> : _startCmpExternal;
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;
    const endCmpExternal = typeof _endCmpExternal === 'string' ? <SVGIcon>{_endCmpExternal}</SVGIcon> : _endCmpExternal;

    const onFocusHandler = (e): void => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const showActions = !hideStartActionsOnEmpty || value || (!value && isFocused);

    const component = (
        <ClickAwayListener onClickAway={() => setIsFocused(false)}>
            <FormControl
                fullWidth={fullWidth}
                variant={variant}
                size={size}
                error={error}
                disabled={disabled}
                required={required}
                colorText={_colorText}
                colorLabel={_colorLabel}
                colorActive={_colorActive}
                margin={['dense', 'normal'].includes(margin) ? margin : undefined}
            >
                {label && <InputLabel>{label}</InputLabel>}
                <Select
                    {...props}
                    id={id}
                    name={name}
                    value={value}
                    label={label}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocusHandler}
                    autoWidth={autoWidth}
                    inputProps={{ readOnly }}
                    MenuProps={{
                        sx: {
                            '&& .MuiMenuItem-root': { color: menuColorText },
                            '&& .MuiMenuItem-root:hover': { backgroundColor: menuColorHover },
                            '&& .Mui-selected': { backgroundColor: menuColorSelected },
                            '&& .Mui-selected:hover': { backgroundColor: menuColorSelected },
                        },
                    }}
                    renderValue={(value) => {
                        const option = options.find((option) => option.value === value);
                        const rValue = renderValue?.(value, option) ?? value;

                        return (
                            <Box
                                className="content-body"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        gap: 2,
                                    }}
                                >
                                    {showActions && startCmp}
                                    {rValue}
                                </Box>
                                {endCmp}
                            </Box>
                        );
                    }}
                >
                    {options.length ? selectAllOption : undefined}
                    {options.map((option) => (typeof option === 'function' ? option({ value, max }) : option))}
                </Select>
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </ClickAwayListener>
    );

    if (startCmpExternal || endCmpExternal) {
        return (
            <Stack direction="row" spacing={cmpSpacing} alignItems={alignActionsExternal}>
                {startCmpExternal}
                {component}
                {endCmpExternal}
            </Stack>
        );
    }

    return component;
};

InputSelect.defaultProps = {
    alignActions: 'baseline',
    alignActionsExternal: 'baseline',
    autoComplete: 'off',
    autoWidth: undefined,
    cmpSpacing: 2,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    fullWidth: true,
    groupBy: undefined, // (option) => option?.label[0].toUpperCase()
    helperText: undefined,
    hideStartActionsOnEmpty: true,
    id: undefined,
    label: undefined,
    margin: undefined,
    name: undefined,
    nullable: undefined,
    onChange: undefined,
    options: undefined,
    placeholderOption: undefined,
    readOnly: undefined,
    renderValue: undefined,
    required: undefined,
    size: 'medium',
    startCmp: undefined,
    startCmpExternal: undefined,
    value: undefined,
    variant: 'outlined',
};

export default InputSelect;
