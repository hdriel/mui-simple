import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { createFilterOptions } from '@mui/material';
import { renderHighlightOptionCB } from '../InputAutocomplete.styled';
import type { RenderOptionCB } from '../InputAutocomplete.styled';
import { createFilterOptions as Filter } from '@mui/material/Autocomplete';

const creationFilter = Filter();

export const useAutocompleteOptionsHook = ({
    CREATION_PREFIX_LABEL,
    creationAllowed,
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
    const options = _options?.map((option, index) => {
        if (typeof optionConverter === 'function') return optionConverter(option, index);
        return ['string', 'number'].includes(typeof option) ? { label: option, id: option } : { ...option };
    });

    if (sortBy || raiseSelectedToTop) {
        options.sort((a, b) => {
            const optionFieldA = typeof sortBy === 'function' ? sortBy(a) : a[sortBy];
            const optionFieldB = typeof sortBy === 'function' ? sortBy(b) : b[sortBy];
            const asc = typeof sortDir === 'boolean' ? sortDir : sortDir > 0;
            const [A, B] = asc ? [optionFieldA, optionFieldB] : [optionFieldB, optionFieldA];

            const selectedComparator = +b.selected - +a.selected;
            if (raiseSelectedToTop && selectedComparator !== 0) {
                return selectedComparator;
            }

            return typeof optionFieldA === 'string' ? A.localeCompare(B) : A - B;
        });
    }

    const getOptionLabel =
        typeof _getOptionLabel === 'function'
            ? _getOptionLabel
            : (option) => option?.[_getOptionLabel] || option?.inputValue || '';

    const filterOptions = useMemo(() => {
        if (typeof _filterOptions === 'function') return _filterOptions;
        if (Object.keys(_filterOptions ?? {}).length)
            return createFilterOptions({
                ignoreAccents: _filterOptions.ignoreAccents,
                ignoreCase: _filterOptions.ignoreCase,
                limit: _filterOptions.limitResultOptions,
                matchFrom: _filterOptions.matchFrom,
                stringify: _filterOptions.stringify ?? getOptionLabel,
                trim: _filterOptions.trim,
            });
        if (creationAllowed)
            return (options, params) => {
                const filtered = creationFilter(options, params);
                const { inputValue } = params;

                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === getOptionLabel?.(option.title));
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        inputValue,
                        title: `${CREATION_PREFIX_LABEL ? `${CREATION_PREFIX_LABEL as string} ` : ''}"${
                            inputValue as string
                        }"`,
                    });
                }

                return filtered;
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [creationAllowed, _filterOptions, getOptionLabel]);

    const renderOption =
        typeof _renderOption === 'function' || highlightSearchResults
            ? (...args): ReactNode | RenderOptionCB => {
                  if (typeof _renderOption === 'function') {
                      return _renderOption(...args);
                  }

                  if (highlightSearchResults) {
                      const fieldValue = highlightField ?? getOptionLabel?.(args[1]) ?? args[1].label;
                      // @ts-expect-error
                      return renderHighlightOptionCB(fieldValue)(...args);
                  }

                  return undefined;
              }
            : undefined;

    return { options, getOptionLabel, renderOption, filterOptions };
};
