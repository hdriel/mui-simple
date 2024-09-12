import React from 'react';

import InputAutocompleteMultiple from './InputAutocompleteMultiple';
import { useAutoCompleteAsync } from './hooks/useAutoCompleteAsync';
import type { InputAutocompleteMultipleAsyncProps } from '../../decs';

const InputAutocompleteMultipleAsync: React.FC<InputAutocompleteMultipleAsyncProps> = ({
    getOptionsPromise,
    sleep = 0,
    getOptionsCallback,
    fetchOptionsOnFocus,
    LOADING_LABEL,
    ...props
}) => {
    const asyncProps = useAutoCompleteAsync({
        LOADING_LABEL,
        getOptionsPromise,
        sleep,
        getOptionsCallback,
        fetchOptionsOnFocus,
    });

    return <InputAutocompleteMultiple {...props} {...asyncProps} />;
};
InputAutocompleteMultipleAsync.displayName = 'InputAutocompleteMultipleAsync';

export type { InputAutocompleteMultipleAsyncProps } from '../../decs';
export default InputAutocompleteMultipleAsync;
