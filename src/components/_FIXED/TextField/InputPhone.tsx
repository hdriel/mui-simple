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
                showMaskAsPlaceholder
                {...props}
                inputRef={ref}
                name={name}
                value={value}
                /* eslint-disable no-octal-escape */
                mask="\050-000-0000"
                type="tel"
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
    copyTooltip: 'copy',
    copyMessage: 'Copied to clipboard',
    copyAction: false,
    autofix: undefined,
    blocks: undefined,
    definitions: undefined,
    direction: 'ltr',
    lazy: undefined,
    mask: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    overwrite: undefined,
    showMaskAsPlaceholder: true,
    textAlign: undefined,
    unmask: undefined,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
};

export type { InputPhoneProps } from '../../decs';
export default InputPhone;
