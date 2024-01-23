import React, { useState } from 'react';
import { TextField as MuiTextField, Stack } from './TextField.styled';
import { InputAdornment, ClickAwayListener } from '@mui/material';
import { debounce } from 'lodash-es';
import type { InputBaseProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const TextField: React.FC<InputBaseProps> = function TextField(props): React.ReactElement {
    const {
        alignActions,
        alignActionsExternal,
        cmpSpacing,
        colorActive,
        colorLabel,
        colorText,
        debounceDelay,
        direction,
        endCmp: _endCmp,
        endCmpExternal: _endCmpExternal,
        focused,
        FormHelperTextProps,
        hideStartActionsOnEmpty,
        InputLabelProps,
        InputProps,
        letterSpacing,
        onBlur,
        onChange,
        onFocus,
        onEnterKeyPress,
        onKeyPress,
        readOnly,
        startCmp: _startCmp,
        startCmpExternal: _startCmpExternal,
        value,
        ...rest
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const onFocusHandler = (e): void => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const startCmp = typeof _startCmp === 'string' ? <SVGIcon>{_startCmp}</SVGIcon> : _startCmp;
    const startCmpExternal =
        typeof _startCmpExternal === 'string' ? <SVGIcon>{_startCmpExternal}</SVGIcon> : _startCmpExternal;
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;
    const endCmpExternal = typeof _endCmpExternal === 'string' ? <SVGIcon>{_endCmpExternal}</SVGIcon> : _endCmpExternal;
    const showActions = !hideStartActionsOnEmpty || value || (!value && isFocused);
    const handleOnChange = debounceDelay ? debounce(onChange, debounceDelay) : onChange;

    const component = (
        <ClickAwayListener onClickAway={() => setIsFocused(false)}>
            <MuiTextField
                colorActive={colorActive}
                colorLabel={colorLabel}
                colorText={colorText}
                focused={focused}
                FormHelperTextProps={{ ...FormHelperTextProps }}
                InputLabelProps={{ ...InputLabelProps }}
                onBlur={onBlur}
                onChange={handleOnChange}
                onFocus={onFocusHandler}
                value={value}
                direction={direction}
                InputProps={{
                    ...InputProps,
                    readOnly,
                    ...(showActions &&
                        startCmp && {
                            startAdornment: (
                                <InputAdornment position="start" sx={{ margin: 'auto', paddingInlineEnd: '8px' }}>
                                    {startCmp}
                                </InputAdornment>
                            ),
                        }),
                    ...(endCmp && {
                        endAdornment: (
                            <InputAdornment position="end" sx={{ margin: 'auto' }}>
                                {endCmp}
                            </InputAdornment>
                        ),
                    }),
                    sx: {
                        alignItems: alignActions,
                        letterSpacing,
                        ...(direction && { direction: `${direction} !important` }),
                        ...InputProps?.sx,
                    },
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || +e.keyCode === 13) {
                        setIsFocused(false);
                        onEnterKeyPress?.(e);
                    } else {
                        onKeyPress?.(e);
                    }
                }}
                {...rest}
            />
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

TextField.defaultProps = {
    alignActions: 'baseline',
    alignActionsExternal: 'baseline',
    autoComplete: 'off',
    cmpSpacing: 2,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    direction: 'ltr',
    disabled: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: true,
    helperText: undefined,
    hideStartActionsOnEmpty: true,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onChange: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    startCmp: undefined,
    startCmpExternal: undefined,
    textAlign: undefined,
    type: 'text',
    value: undefined,
    variant: 'outlined',
    letterSpacing: undefined,
};

export type { InputBaseProps as TextFieldProps } from '../../decs';
export default TextField;
