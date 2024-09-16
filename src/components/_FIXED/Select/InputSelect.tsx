import React, { cloneElement, isValidElement, useState } from 'react';
import { ClickAwayListener } from '@mui/material';

import { Select, FormControl, InputLabel, FormHelperText, Stack, Box } from './InputSelect.styled';
import { useCustomColor } from '../../../utils/helpers';
import { getOptions, useOptions, useOptionsConverter } from './InputSelect.hooks';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { InputSelectProps } from '../../decs';

const emptyObjectRef = [];

const InputSelect: React.FC<InputSelectProps> = ({
    alignActions = 'baseline',
    alignActionsExternal = 'baseline',
    autoWidth = false,
    checkbox,
    cmpSpacing = 2,
    colorActive: _colorActive,
    colorLabel: _colorLabel,
    colorText: _colorText,
    convertedOptions: _convertedOptions,
    disabled,
    endCmp: _endCmp,
    endCmpExternal: _endCmpExternal,
    error,
    fullWidth = true,
    groupBy,
    helperText,
    hideStartActionsOnEmpty = true,
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
    size = 'medium',
    startCmp: _startCmp,
    startCmpExternal: _startCmpExternal,
    value,
    variant = 'outlined',
    ...props
}): React.ReactElement | React.ReactNode => {
    const [isFocused, setIsFocused] = useState(false);

    const optionsObj = useOptionsConverter({
        options: _convertedOptions ? emptyObjectRef : getOptions({ options: _options }),
        convertedOptions: _convertedOptions,
        groupBy,
    });

    const options = useOptions({
        placeholder: placeholderOption,
        convertedOptions: optionsObj,
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
                        const optionList = Array.isArray(optionsObj) ? optionsObj : Object.values(optionsObj).flat();
                        const option = Array.isArray(value)
                            ? optionList.filter((option) => value.includes(option.value))
                            : optionList.find((option) => option.value === value);
                        const _value = isValidElement(renderValue)
                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              cloneElement(renderValue, { value, option } as any)
                            : renderValue?.(value, option) ??
                              (Array.isArray(option) ? option.map((op) => op.label ?? op.value) : option?.label) ??
                              (Array.isArray(value) ? value.join(', ') : value);

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
                                    {_value}
                                </Box>
                                {endCmp as React.ReactNode}
                            </Box>
                        );
                    }}
                >
                    {options.length ? selectAllOption : undefined}
                    {options.map((option: any) => (typeof option === 'function' ? option({ value, max }) : option))}
                </Select>
                {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
            </FormControl>
        </ClickAwayListener>
    );

    if (startCmpExternal || endCmpExternal) {
        return (
            <Stack direction="row" spacing={cmpSpacing} alignItems={alignActionsExternal}>
                {startCmpExternal as React.ReactNode}
                {component}
                {endCmpExternal as React.ReactNode}
            </Stack>
        );
    }

    return component;
};

InputSelect.displayName = 'InputSelect';

export type { InputSelectProps, InputSelectOptions } from '../../decs';
export default InputSelect;
