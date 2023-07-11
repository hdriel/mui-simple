import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ClickAwayListener } from '@mui/material';
import {
    VisibilityOff as VisibilityOffIcon,
    Visibility as VisibilityIcon,
    ContentCopy as ContentCopyIcon,
    LockReset as LockResetIcon,
} from '@mui/icons-material';

import Input from '../_FIXED/TextField/TextField';
import Button from '../_FIXED/Button/Button';
import { copyToClipboard, generatePassword } from '../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';

export default function InputPassword({
    showPasswordAction,
    generateRandomAction,
    copyAction,
    value,
    name,
    onChange,
    generateRandom,
    copyMessage,
    copyTooltip,
    generatePasswordTooltip,
    showPasswordTooltip,
    hidePasswordOnClickAway,
    disabled,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickCopyToClipboard = () => {
        const copied = copyToClipboard(value);
        setShowAlert(copied);
    };
    const handleClickGeneratePassword = () => {
        const password = generatePassword(
            typeof generateRandom === 'number' ? { length: generateRandom, symbol: false } : { ...generateRandom }
        );
        setShowPassword(true);

        onChange?.({ target: { name, value: password } });
    };

    return (
        <ClickAwayListener onClickAway={() => hidePasswordOnClickAway && setShowPassword(false)}>
            <Box>
                <Input
                    {...props}
                    name={name}
                    value={showPasswordAction ? value : '*'.repeat(value.length)}
                    onChange={(e) => showPasswordAction && onChange?.(e)}
                    endCmp={
                        <>
                            {copyAction && showPasswordAction ? (
                                <Button
                                    onClick={handleClickCopyToClipboard}
                                    icon={<ContentCopyIcon />}
                                    tooltipProps={{ title: copyTooltip }}
                                />
                            ) : undefined}
                            {!disabled && showPasswordAction && generateRandomAction ? (
                                <Button
                                    icon={<LockResetIcon />}
                                    onClick={handleClickGeneratePassword}
                                    tooltipProps={{ title: generatePasswordTooltip }}
                                />
                            ) : undefined}
                            {showPasswordAction ? (
                                <Button
                                    icon={showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    tooltipProps={{ title: showPasswordTooltip }}
                                />
                            ) : undefined}
                        </>
                    }
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
}

InputPassword.propTypes = {
    showPasswordAction: PropTypes.bool,
    generateRandomAction: PropTypes.bool,
    copyAction: PropTypes.bool,
    generateRandom: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            length: PropTypes.number,
            numbers: PropTypes.bool,
            lowercase: PropTypes.bool,
            uppercase: PropTypes.bool,
            symbol: PropTypes.bool,
        }),
    ]),
    copyMessage: PropTypes.string,
    copyTooltip: PropTypes.string,
    generatePasswordTooltip: PropTypes.string,
    showPasswordTooltip: PropTypes.string,
    hidePasswordOnClickAway: PropTypes.bool,
    disabled: PropTypes.bool,
};

InputPassword.defaultProps = {
    showPasswordAction: true,
    generateRandomAction: true,
    copyAction: true,
    generateRandom: 8,
    copyMessage: 'Copied to clipboard',
    copyTooltip: 'copy',
    generatePasswordTooltip: 'generate new password',
    showPasswordTooltip: undefined,
    hidePasswordOnClickAway: true,
    disabled: false,
};
