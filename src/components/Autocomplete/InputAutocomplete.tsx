import React from 'react';
import { Autocomplete as MuiAutocomplete, GroupHeader, GroupItems } from './InputAutocomplete.styled';
import TextField from '../_FIXED/TextField/TextField';
import { useCustomColor } from '../../utils/helpers';
import Chip from '../_FIXED/Chip/Chip';
import type { InputAutoCompleteProp, InputBaseProps } from '../decs';
import { useAutocompleteOptionsHook } from './hooks/useAutocompleteOptions.hook';

const InputAutocomplete: React.FC<InputAutoCompleteProp> = ({
    // inputProps: {
    alignActions,
    alignActionsExternal,
    cmpSpacing,
    colorActive,
    colorLabel,
    colorText,
    disabled,
    endCmp,
    endCmpExternal,
    error,
    focused,
    helperText,
    hideStartActionsOnEmpty,
    id,
    margin,
    name,
    onBlur,
    onFocus,
    placeholder,
    required,
    startCmpExternal,
    variant,
    // } = {},
    autoComplete,
    autoHighlight,
    blurOnSelect,
    chipProps,
    clearOnPressEscape,
    disableClearable,
    disableCloseOnSelect,
    disableListWrap,
    disablePortal,
    filterOptions: _filterOptions,
    filterSelectedOptions,
    freeSolo,
    getOptionLabel: _getOptionLabel,
    groupBy,
    highlightField,
    highlightSearchResults,
    includeInputInList,
    label,
    multiple,
    onChange,
    openOnFocus,
    options: _options,
    optionConverter,
    raiseSelectedToTop,
    readOnly,
    renderOption: _renderOption,
    selectedOption,
    selectOnFocus,
    setSelectedOption,
    size,
    sortBy,
    sortDir,
    sx,
    width,
    ...props
}): React.ReactElement => {
    const [color] = useCustomColor(colorActive ?? colorLabel);

    const { options, filterOptions, getOptionLabel, renderOption } = useAutocompleteOptionsHook({
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
    });

    const renderGroup = groupBy
        ? (params) => (
              <li key={params.key}>
                  <GroupHeader color={color}>{params.group}</GroupHeader>
                  <GroupItems>{params.children}</GroupItems>
              </li>
          )
        : undefined;

    const renderTags = multiple
        ? (value, getTagProps) =>
              value.map((option, index) => (
                  <Chip
                      key={option}
                      label={option}
                      {...getTagProps({ index })}
                      {...(typeof chipProps === 'function' ? chipProps(option) : chipProps)}
                  />
              ))
        : undefined;

    if (typeof selectedOption === 'string' || typeof selectedOption === 'number') {
        selectedOption = options.find((o) => o.id === selectedOption);
    }

    const inputProps: InputBaseProps = {
        alignActions,
        alignActionsExternal,
        cmpSpacing,
        colorActive,
        colorLabel,
        colorText,
        endCmp,
        endCmpExternal,
        error,
        focused,
        helperText,
        hideStartActionsOnEmpty,
        id,
        label,
        margin,
        name,
        onBlur,
        onFocus,
        placeholder,
        required,
        startCmpExternal,
        variant,
    };

    return (
        <MuiAutocomplete
            autoComplete={autoComplete}
            autoHighlight={autoHighlight}
            blurOnSelect={blurOnSelect}
            clearOnEscape={clearOnPressEscape}
            disableClearable={disableClearable}
            disableCloseOnSelect={disableCloseOnSelect}
            disabled={disabled}
            disableListWrap={disableListWrap}
            disablePortal={disablePortal}
            filterOptions={filterOptions}
            filterSelectedOptions={filterSelectedOptions}
            freeSolo={readOnly || freeSolo}
            getOptionDisabled={(option) => option.disabled}
            getOptionLabel={getOptionLabel}
            groupBy={typeof groupBy === 'function' ? groupBy : (option) => option[groupBy]}
            includeInputInList={includeInputInList}
            isOptionEqualToValue={
                getOptionLabel ? (option, value) => getOptionLabel?.(option) === getOptionLabel?.(value) : undefined
            }
            multiple={multiple}
            onChange={setSelectedOption}
            openOnFocus={openOnFocus}
            options={options}
            readOnly={readOnly}
            renderGroup={renderGroup}
            renderInput={(params) => <TextField {...params} {...inputProps} fullWidth />}
            renderOption={renderOption}
            renderTags={renderTags}
            selectOnFocus={selectOnFocus}
            size={size}
            sx={{ ...sx, ...{ width } }}
            value={selectedOption}
            {...props}
        />
    );
};

InputAutocomplete.defaultProps = {
    alignActionsExternal: 'baseline',
    autoComplete: true,
    autoHighlight: true,
    blurOnSelect: true,
    chipProps: undefined,
    clearOnPressEscape: true,
    cmpSpacing: undefined,
    colorActive: 'primary',
    colorLabel: undefined,
    colorText: undefined,
    disableClearable: undefined,
    disableCloseOnSelect: true,
    disabled: undefined,
    disableListWrap: true,
    disablePortal: undefined,
    endCmpExternal: undefined,
    error: undefined,
    filterOptions: undefined,
    filterSelectedOptions: true,
    focused: undefined,
    freeSolo: undefined,
    getOptionLabel: 'label',
    groupBy: undefined,
    helperText: undefined,
    hideStartActionsOnEmpty: undefined,
    highlightField: undefined,
    highlightSearchResults: true,
    id: undefined,
    includeInputInList: true,
    label: undefined,
    margin: undefined,
    multiple: undefined,
    name: undefined,
    onChange: undefined,
    openOnFocus: true,
    options: [],
    optionConverter: undefined,
    placeholder: undefined,
    raiseSelectedToTop: undefined,
    readOnly: undefined,
    required: undefined,
    selectedOption: undefined,
    selectOnFocus: false,
    setSelectedOption: undefined,
    size: undefined,
    sortBy: undefined,
    sortDir: true,
    startCmpExternal: undefined,
    variant: 'outlined',
};

export type { InputAutoCompleteProp } from '../decs';
export default InputAutocomplete;
