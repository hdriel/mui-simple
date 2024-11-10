import React, { useState } from 'react';
import { TextField as MuiTextField, Stack } from './TextField.styled';
import { InputAdornment, ClickAwayListener } from '@mui/material';
import { debounce } from 'lodash-es';
import type { InputBaseProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import Button from '../Button/Button';
import { copyToClipboard } from '../../../utils';
import Snackbar from '../Snackbar/Snackbar';
import { isDefined, setDefaultValue } from '../../../utils/helpers';

/*
hideStartActionsOnEmpty = true,
        direction = 'ltr',
        copyIcon: _copyIcon = 'ContentCopy',
        copyMessage = 'Copied!',
        alignActions = 'baseline',
        alignActionsExternal = 'baseline',
        cmpSpacing = 2,
        autoComplete = 'off',
        fullWidth = true,
        type = 'text',
        variant = 'outlined',
 */
const TextField: React.FC<InputBaseProps> = function TextField(props): React.ReactElement {
    props = setDefaultValue(props, 'alignActions', 'baseline');
    props = setDefaultValue(props, 'alignActionsExternal', 'baseline');
    props = setDefaultValue(props, 'autoComplete', 'off');
    props = setDefaultValue(props, 'cmpSpacing', 2);
    props = setDefaultValue(props, 'copyIcon', 'ContentCopy');
    props = setDefaultValue(props, 'copyMessage', 'Copied!');
    props = setDefaultValue(props, 'direction', 'ltr');
    props = setDefaultValue(props, 'fullWidth', true);
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    props = setDefaultValue(props, 'type', 'text');
    props = setDefaultValue(props, 'variant', 'outlined');

    const {
        alignActions,
        alignActionsExternal,
        autoComplete,
        cmpSpacing,
        colorActive,
        colorLabel,
        colorText,
        copyAction,
        copyIcon: _copyIcon,
        copyMessage,
        copyTooltipProps,
        copyValueHandler,
        debounceDelay,
        direction,
        endCmp: _endCmp,
        endCmpExternal: _endCmpExternal,
        focused,
        FormHelperTextProps,
        fullWidth,
        hideStartActionsOnEmpty,
        InputLabelProps,
        InputProps,
        letterSpacing,
        maxRows,
        minRows,
        multiline,
        onBlur,
        onChange,
        onEnterKeyPress,
        onFocus,
        onKeyPress,
        padding,
        readOnly,
        rows,
        startCmp: _startCmp,
        startCmpExternal: _startCmpExternal,
        type,
        value,
        variant,
        ...rest
    } = props;

    const [showAlert, setShowAlert] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const onFocusHandler = (e): void => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleClickCopyToClipboard = (): void => {
        const textToCopy = copyValueHandler?.(value) ?? value;
        const copied = copyToClipboard(textToCopy);
        setShowAlert(copied);
    };

    const startCmp = typeof _startCmp === 'string' ? <SVGIcon>{_startCmp}</SVGIcon> : _startCmp;
    const startCmpExternal =
        typeof _startCmpExternal === 'string' ? <SVGIcon>{_startCmpExternal}</SVGIcon> : _startCmpExternal;
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;
    const endCmpExternal = typeof _endCmpExternal === 'string' ? <SVGIcon>{_endCmpExternal}</SVGIcon> : _endCmpExternal;
    const copyIcon = typeof _copyIcon === 'string' ? <SVGIcon>{_copyIcon}</SVGIcon> : _copyIcon;
    const showActions = !hideStartActionsOnEmpty || value || (!value && isFocused);
    const onChangeTemp = (e) => onChange?.(e);
    const handleOnChange = debounceDelay ? debounce(onChangeTemp, debounceDelay) : onChangeTemp;

    const component = (
        <>
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
                    autoComplete={autoComplete}
                    fullWidth={fullWidth}
                    type={type}
                    variant={variant}
                    maxRows={maxRows}
                    minRows={minRows}
                    multiline={!!(multiline || maxRows > 1 || minRows > 1 || rows > 1)}
                    rows={rows}
                    InputProps={{
                        ...InputProps,
                        readOnly,
                        style: {
                            ...InputProps?.style,
                            ...(isDefined(padding) && { padding: `${padding} !important` }),
                        },
                        ...(showActions &&
                            startCmp && {
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ margin: 'auto', paddingInlineEnd: '8px' }}>
                                        {startCmp as React.ReactNode}
                                    </InputAdornment>
                                ),
                            }),
                        ...((endCmp || copyAction) && {
                            endAdornment: (
                                <InputAdornment position="end" sx={{ margin: 'auto' }}>
                                    {endCmp as React.ReactNode}

                                    {copyAction && (
                                        <Button
                                            onClick={handleClickCopyToClipboard}
                                            icon={copyIcon}
                                            tooltipProps={copyTooltipProps}
                                            sx={{ ml: '0.5em' }}
                                        />
                                    )}
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
                    onKeyPress={
                        onEnterKeyPress
                            ? (e) => {
                                  if (e.key === 'Enter' || +e.keyCode === 13) {
                                      if (onEnterKeyPress) {
                                          setIsFocused(false);
                                          onEnterKeyPress?.(e);
                                      }
                                  }
                                  onKeyPress?.(e);
                                  return e;
                              }
                            : onKeyPress
                    }
                    {...rest}
                />
            </ClickAwayListener>
            {copyMessage && (
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            )}
        </>
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

TextField.displayName = 'TextField';

export type { InputBaseProps as TextFieldProps } from '../../decs';
export default TextField;
