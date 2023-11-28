import React from 'react';

import InputAutocompleteMultiple from './InputAutocompleteMultiple';
import { useAutoCompleteAsync } from './hooks/useAutoCompleteAsync';
import type { InputAutocompleteMultipleAsyncProps } from '../decs';

const InputAutocompleteMultipleAsync: React.FC<InputAutocompleteMultipleAsyncProps> = ({
    getOptionsPromise,
    sleep,
    getOptionsCallback,
    fetchOptionsOnFocus,
    ...props
}) => {
    const asyncProps = useAutoCompleteAsync({
        getOptionsPromise,
        sleep,
        getOptionsCallback,
        fetchOptionsOnFocus,
    });

    return <InputAutocompleteMultiple {...props} {...asyncProps} />;
};

InputAutocompleteMultipleAsync.defaultProps = {
    getOptionLabel: undefined,
    getOptionsPromise: undefined,
    sleep: 0,
    fetchOptionsOnFocus: undefined,
};

export type { InputAutocompleteMultipleAsyncProps } from '../decs';
export default InputAutocompleteMultipleAsync;
