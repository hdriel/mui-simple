import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { createFilterOptions } from '@mui/material';
import { renderHighlightOptionCB } from '../InputAutocomplete.styled';
import type { RenderOptionCB } from '../InputAutocomplete.styled';

export const useAutocompleteOptionsHook = ({
    filterOptions: _filterOptions,
    getOptionLabel: _getOptionLabel,
    highlightField,
    highlightSearchResults,
    options: _options,
    optionConverter,
    raiseSelectedToTop,
    renderOption: _renderOption,
    sortBy,
    sortDir,
}): { options: any; filterOptions: any; getOptionLabel: any; renderOption: any } => {
    const options = useMemo(() => {
        let result = _options?.map((option) => {
            if (typeof optionConverter === 'function') return optionConverter(option);
            return ['string', 'number'].includes(typeof option) ? { label: option, id: option } : { ...option };
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

    const renderOption = (...args): ReactNode | RenderOptionCB => {
        if (typeof _renderOption === 'function') {
            return _renderOption(...args);
        }

        if (highlightSearchResults) {
            const fieldValue = highlightField ?? getOptionLabel?.(args[1]) ?? args[1].label;
            // @ts-expect-error
            return renderHighlightOptionCB(fieldValue)(...args);
        }

        return undefined;
    };

    return { options, getOptionLabel, renderOption, filterOptions };
};
