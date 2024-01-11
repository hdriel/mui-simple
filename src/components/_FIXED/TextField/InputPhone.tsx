import React, { useRef, useState } from 'react';
import InputPattern from './InputPattern';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import Button from '../Button/Button';
import { copyToClipboard } from '../../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { InputPhoneProps } from '../../decs';

const InputPhone: React.FC<InputPhoneProps> = ({
    value,
    copyAction,
    copyTooltip,
    copyMessage,
    endCmp: _endCmp,
    ...props
}): React.ReactElement | React.ReactNode => {
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
                inputRef={ref}
                value={value}
                type="tel"
                {...props}
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
    definitions: { '#': /[1-9]/ },
    direction: 'ltr',
    lazy: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    overwrite: undefined,
    showMaskAsPlaceholder: undefined,
    textAlign: undefined,
    unmask: undefined,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
    // eslint-disable-next-line
    mask: '000-000-0000',
};

export type { InputPhoneProps } from '../../decs';
export default InputPhone;
