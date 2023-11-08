import React, { useEffect, useState } from 'react';
import { sleep } from '../../../utils/helpers';
import CircularProgress from '../../_FIXED/Progress/CircularProgress/CircularProgress';

interface UseAutoCompleteAsyncReturn {
    onOpen: () => void;
    onClose: () => void;
    options: any[];
    open: boolean;
    loading: boolean;
    endCmp: React.ReactNode;
}

export function useAutoCompleteAsync({
    getOptionsPromise,
    sleep: _sleep,
    getOptionsCallback,
    fetchOptionsOnFocus,
}): UseAutoCompleteAsyncReturn {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let active = true;
        if (!open || options.length) return undefined;

        if (getOptionsPromise) {
            setLoading(true);
            getOptionsPromise()
                .then(async (options) => {
                    await sleep(_sleep);
                    return options;
                })
                .then(async (options) => getOptionsCallback?.() ?? [...options])
                .then((options) => active && setOptions(options))
                .finally(() => setLoading(false));
        }

        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        if (!open && fetchOptionsOnFocus) setOptions([]);
    }, [open, fetchOptionsOnFocus]);

    const endCmp = loading ? <CircularProgress color="inherit" size={20} /> : null;

    return {
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
        options,
        open,
        loading,
        endCmp,
    };
}
