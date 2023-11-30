import React from 'react';

import MuiAutocomplete from './InputAutocomplete';
import { useAutoCompleteAsync } from './hooks/useAutoCompleteAsync';
import type { InputAutocompleteAsyncProps } from '../decs';

const InputAutocompleteAsync: React.FC<InputAutocompleteAsyncProps> = ({
    getOptionsPromise,
    sleep,
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

    return <MuiAutocomplete {...props} {...asyncProps} />;
};

InputAutocompleteAsync.defaultProps = {
    getOptionLabel: undefined,
    getOptionsPromise: undefined,
    sleep: 0,
    fetchOptionsOnFocus: undefined,
    LOADING_LABEL: undefined,
};

export type { InputAutocompleteAsyncProps } from '../decs';
export default InputAutocompleteAsync;
