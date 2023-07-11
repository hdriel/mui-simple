import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import InputPattern from './InputPattern';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import Button from '../FIXED/Button/Button';
import { copyToClipboard } from '../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';

export default function InputPhone({ name, value, showMaskAsPlaceholder, copyTooltip, copyMessage, ...props }) {
    const ref = useRef(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleClickCopyToClipboard = () => {
        const copied = copyToClipboard(value);
        setShowAlert(copied);
    };

    return (
        <>
            <InputPattern
                {...props}
                inputRef={ref}
                name={name}
                value={value}
                /* eslint-disable no-octal-escape */
                mask="\050-000-0000"
                type="tel"
                showMaskAsPlaceholder
                endCmp={
                    <Button
                        onClick={handleClickCopyToClipboard}
                        icon={<ContentCopyIcon />}
                        tooltipProps={{ title: copyTooltip }}
                    />
                }
            />
            <Snackbar
                open={showAlert}
                onClose={() => setShowAlert(false)}
                autoHideDuration={1500}
                message={copyMessage}
            />
        </>
    );
}

InputPhone.propTypes = {
    showMaskAsPlaceholder: PropTypes.bool,
    copyTooltip: PropTypes.string,
    copyMessage: PropTypes.string,
};

InputPhone.defaultProps = {
    showMaskAsPlaceholder: undefined,
    copyTooltip: 'copy',
    copyMessage: 'Copied to clipboard',
};
