import React, { useState } from 'react';
import { Box, ClickAwayListener } from '@mui/material';
import Input from './TextField';
import Button from '../Button/Button';
import { copyToClipboard, generatePassword, setDefaultValue } from '../../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';
import type { InputPasswordProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const InputPassword: React.FC<InputPasswordProps> = (props) => {
    props = setDefaultValue(props, 'copyAction', true); // undefined - probably not always we want this action
    props = setDefaultValue(props, 'copyIcon', 'ContentCopy');
    props = setDefaultValue(props, 'copyMessage', 'Copied to clipboard');
    props = setDefaultValue(props, 'copyTooltip', 'Copy');
    props = setDefaultValue(props, 'generatePasswordTooltip', 'generate new password');
    props = setDefaultValue(props, 'generateRandom', 8);
    props = setDefaultValue(props, 'generateRandomAction', true); // undefined - probably not always we want this action
    props = setDefaultValue(props, 'generateRandomCmp', 'LockReset');
    props = setDefaultValue(props, 'hidePasswordOnClickAway', true);
    props = setDefaultValue(props, 'showPasswordAction', true);
    props = setDefaultValue(props, 'showPasswordOnCmp', 'VisibilityOff');
    props = setDefaultValue(props, 'showPasswordOffCmp', 'Visibility');
    props = setDefaultValue(props, 'type', 'password');

    const {
        copyAction,
        copyMessage,
        copyTooltip,
        copyIcon: _copyIcon,
        disabled,
        generatePasswordTooltip,
        generateRandom,
        generateRandomAction,
        generateRandomCmp,
        hidePasswordOnClickAway,
        name,
        endCmp,
        onChange,
        showPasswordAction,
        showPasswordTooltip,
        showPasswordOnCmp,
        showPasswordOffCmp,
        value,
        ...rest
    } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClickShowPassword = (): void => {
        setShowPassword((show) => !show);
    };
    const handleClickCopyToClipboard = (): void => {
        const copied = copyToClipboard(value);
        setShowAlert(copied);
    };
    const handleClickGeneratePassword = (): void => {
        const password = generatePassword(
            typeof generateRandom === 'number' ? { length: generateRandom, symbol: false } : { ...generateRandom }
        );
        setShowPassword(true);
        onChange?.({ target: { name, value: password } });
    };

    const showPasswordOnIcon =
        typeof showPasswordOnCmp === 'string' ? <SVGIcon>{showPasswordOnCmp}</SVGIcon> : showPasswordOnCmp;
    const showPasswordOffIcon =
        typeof showPasswordOffCmp === 'string' ? <SVGIcon>{showPasswordOffCmp}</SVGIcon> : showPasswordOffCmp;
    const copyIcon = typeof _copyIcon === 'string' ? <SVGIcon>{_copyIcon}</SVGIcon> : _copyIcon;
    const generateRandomIcon =
        typeof generateRandomCmp === 'string' ? <SVGIcon>{generateRandomCmp}</SVGIcon> : generateRandomCmp;

    return (
        <ClickAwayListener onClickAway={() => hidePasswordOnClickAway && setShowPassword(false)}>
            <Box>
                <Input
                    {...rest}
                    name={name}
                    value={showPasswordAction ? value : '*'.repeat(value.length)}
                    onChange={(e) => showPasswordAction && onChange?.(e)}
                    endCmp={
                        <>
                            {copyAction && showPasswordAction ? (
                                <Button
                                    onClick={handleClickCopyToClipboard}
                                    icon={copyIcon}
                                    tooltipProps={{ title: copyTooltip }}
                                />
                            ) : undefined}
                            {!disabled && showPasswordAction && generateRandomAction ? (
                                <Button
                                    icon={generateRandomIcon}
                                    onClick={handleClickGeneratePassword}
                                    tooltipProps={{ title: generatePasswordTooltip }}
                                />
                            ) : undefined}
                            {showPasswordAction ? (
                                <Button
                                    icon={showPassword ? showPasswordOnIcon : showPasswordOffIcon}
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    tooltipProps={{ title: showPasswordTooltip }}
                                />
                            ) : undefined}
                            {typeof endCmp === 'string' ? <SVGIcon>{endCmp}</SVGIcon> : endCmp}
                        </>
                    }
                    disabled={disabled}
                    type={showPassword ? 'text' : 'password'}
                />
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            </Box>
        </ClickAwayListener>
    );
};

InputPassword.displayName = 'InputPassword';

export type { InputPasswordProps } from '../../decs';
export default InputPassword;
