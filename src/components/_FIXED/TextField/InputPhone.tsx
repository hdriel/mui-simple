import React, { useRef } from 'react';
import InputPattern from './InputPattern';
import type { InputPhoneProps } from '../../decs';

const InputPhone: React.FC<InputPhoneProps> = ({ ...props }): React.ReactElement | React.ReactNode => {
    const ref = useRef(null);
    return <InputPattern inputRef={ref} type="tel" {...props} />;
};

InputPhone.defaultProps = {
    copyAction: undefined,
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
