import React, { useRef, useState } from 'react';
import InputPattern from './InputPattern';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import Button from '../Button/Button';
import { copyToClipboard } from '../../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';
import SVGIcon from '../../SVGIcon/SVGIcon';
import type { InputPhoneProps } from '../../decs';

const InputPhone: React.FC<InputPhoneProps> = ({
    name,
    value,
    showMaskAsPlaceholder,
    copyAction,
    copyTooltip,
    copyMessage,
    endCmp: _endCmp,
    ...props
}): React.ReactElement => {
    const ref = useRef(null);
    const [showAlert, setShowAlert] = useState(false);
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;

    const handleClickCopyToClipboard = (): void => {
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
                    <>
                        {endCmp}
                        {copyAction ? (
                            <Button
                                onClick={handleClickCopyToClipboard}
                                icon={<ContentCopyIcon />}
                                tooltipProps={{ title: copyTooltip }}
                            />
                        ) : undefined}
                    </>
                }
            />
            {copyAction && (
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            )}
        </>
    );
};

InputPhone.defaultProps = {
    showMaskAsPlaceholder: undefined,
    copyTooltip: 'copy',
    copyMessage: 'Copied to clipboard',
    copyAction: false,
};

export type { InputPhoneProps } from '../../decs';
export default InputPhone;
