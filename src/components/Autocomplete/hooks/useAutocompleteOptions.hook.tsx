import { useMemo } from 'react';
import { createFilterOptions } from '@mui/material';

export const useAutocompleteOptionsHook = ({
    raiseSelectedToTop,
    options: _options,
    sortBy,
    sortDir,
    getOptionLabel: _getOptionLabel,
    filterOptions: _filterOptions,
}): { options: any; filterOptions: any; getOptionLabel: any } => {
    const options = useMemo(() => {
        let result = _options?.map((option) => {
            return typeof option === 'string' ? { label: option, id: option } : { ...option };
        });

        if (sortBy || raiseSelectedToTop) {
            result =
                result.sort((a, b) => {
                    const optionFieldA = typeof sortBy === 'function' ? sortBy(a) : a[sortBy];

                    const optionFieldB = typeof sortBy === 'function' ? sortBy(b) : b[sortBy];

                    const asc = typeof sortDir === 'boolean' ? sortDir : sortDir > 0;
                    const [A, B] = asc ? [optionFieldA, optionFieldB] : [optionFieldB, optionFieldA];

                    const selectedComparator = +b.selected - +a.selected;
                    if (raiseSelectedToTop && selectedComparator !== 0) {
                        return selectedComparator;
                    }

                    return typeof optionFieldA === 'string' ? A.localeCompare(B) : A - B;
                }) ?? [];
        }

        return result;
    }, [sortBy, sortDir, _options, raiseSelectedToTop]);

    const getOptionLabel = useMemo(
        () => (typeof _getOptionLabel === 'function' ? _getOptionLabel : (option) => option[_getOptionLabel] || ''),
        [_getOptionLabel]
    );

    const filterOptions = useMemo(() => {
        return typeof _filterOptions === 'function'
            ? _filterOptions
            : Object.keys(_filterOptions ?? {}).length
            ? createFilterOptions({
                  ignoreAccents: _filterOptions.ignoreAccents,
                  ignoreCase: _filterOptions.ignoreCase,
                  limit: _filterOptions.limitResultOptions,
                  matchFrom: _filterOptions.matchFrom,
                  stringify: _filterOptions.stringify ?? getOptionLabel,
                  trim: _filterOptions.trim,
              })
            : undefined;
    }, [_filterOptions, getOptionLabel]);

    return { options, getOptionLabel, filterOptions };
};
