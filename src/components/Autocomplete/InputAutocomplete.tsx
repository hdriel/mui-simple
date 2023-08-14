import React from 'react';
import { Autocomplete as MuiAutocomplete, GroupHeader, GroupItems } from './InputAutocomplete.styled';
import TextField from '../_FIXED/TextField/TextField';
import { useCustomColor } from '../../utils/helpers';
import Chip from '../_FIXED/Chip/Chip';
import type { InputAutoCompleteProp, InputBaseProps } from '../decs';
import { useAutocompleteOptionsHook } from './hooks/useAutocompleteOptions.hook';

const InputAutocomplete: React.FC<InputAutoCompleteProp> = ({
    // inputProps: {
    id,
    name,
    placeholder,
    variant,
    onFocus,
    onBlur,
    required,
    margin,
    focused,
    colorText,
    colorLabel,
    colorActive,
    startCmpExternal,
    endCmpExternal,
    endCmp,
    cmpSpacing,
    alignActions,
    alignActionsExternal,
    hideStartActionsOnEmpty,
    disabled,
    helperText,
    error,
    // } = {},
    width,
    size,
    label,
    onChange,
    selectedOption,
    setSelectedOption,
    autoComplete,
    options: _options,
    renderOption: _renderOption,
    raiseSelectedToTop,
    getOptionLabel: _getOptionLabel,
    groupBy,
    sortBy,
    sortDir,
    freeSolo,
    disablePortal,
    disableClearable,
    disableCloseOnSelect,
    clearOnPressEscape,
    includeInputInList,
    openOnFocus,
    disableListWrap,
    autoHighlight,
    blurOnSelect,
    selectOnFocus,
    readOnly,
    highlightField,
    highlightSearchResults,
    filterSelectedOptions,
    multiple,
    chipProps,
    filterOptions: _filterOptions,
    sx,
    ...props
}): React.ReactElement => {
    const [color] = useCustomColor(colorActive ?? colorLabel);
    const { options, filterOptions, getOptionLabel, renderOption } = useAutocompleteOptionsHook({
        sortDir,
        sortBy,
        raiseSelectedToTop,
        options: _options,
        getOptionLabel: _getOptionLabel,
        filterOptions: _filterOptions,
        highlightField,
        highlightSearchResults,
        renderOption: _renderOption,
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

    const inputProps: InputBaseProps = {
        id,
        name,
        placeholder,
        label,
        variant,
        onFocus,
        onBlur,
        required,
        margin,
        focused,
        colorText,
        colorLabel,
        colorActive,
        startCmpExternal,
        endCmpExternal,
        cmpSpacing,
        alignActions,
        alignActionsExternal,
        hideStartActionsOnEmpty,
        helperText,
        error,
        endCmp,
    };

    return (
        <MuiAutocomplete
            disablePortal={disablePortal}
            freeSolo={readOnly || freeSolo}
            disableClearable={disableClearable}
            disableCloseOnSelect={disableCloseOnSelect}
            clearOnEscape={clearOnPressEscape}
            includeInputInList={includeInputInList}
            openOnFocus={openOnFocus}
            disableListWrap={disableListWrap}
            blurOnSelect={blurOnSelect}
            selectOnFocus={selectOnFocus}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            options={options}
            size={size}
            sx={{ ...sx, width }}
            autoHighlight={autoHighlight}
            getOptionLabel={getOptionLabel}
            filterSelectedOptions={filterSelectedOptions}
            multiple={multiple}
            value={selectedOption}
            onChange={setSelectedOption}
            filterOptions={filterOptions}
            isOptionEqualToValue={
                getOptionLabel ? (option, value) => getOptionLabel?.(option) === getOptionLabel?.(value) : undefined
            }
            renderInput={(params) => <TextField {...params} {...inputProps} fullWidth />}
            groupBy={typeof groupBy === 'function' ? groupBy : (option) => option[groupBy]}
            renderOption={renderOption}
            getOptionDisabled={(option) => option.disabled}
            renderGroup={renderGroup}
            renderTags={renderTags}
            {...props}
        />
    );
};

InputAutocomplete.defaultProps = {
    id: undefined,
    name: undefined,
    placeholder: undefined,
    error: undefined,
    required: undefined,
    onChange: undefined,
    focused: undefined,
    margin: undefined,
    helperText: undefined,
    variant: 'outlined',
    startCmpExternal: undefined,
    endCmpExternal: undefined,
    cmpSpacing: undefined,
    hideStartActionsOnEmpty: undefined,
    alignActionsExternal: 'baseline',
    colorText: undefined,
    colorLabel: undefined,
    colorActive: 'primary',
    size: undefined,
    options: [],
    label: undefined,
    filterOptions: undefined,
    getOptionLabel: 'label',
    groupBy: undefined,
    sortBy: undefined,
    sortDir: true,
    freeSolo: undefined,
    autoComplete: true,
    selectedOption: undefined,
    setSelectedOption: undefined,
    raiseSelectedToTop: undefined,
    disablePortal: undefined,
    disableClearable: undefined,
    disableCloseOnSelect: true,
    clearOnPressEscape: true,
    includeInputInList: true,
    openOnFocus: true,
    disableListWrap: true,
    autoHighlight: true,
    blurOnSelect: true,
    selectOnFocus: false,
    disabled: undefined,
    readOnly: undefined,
    highlightSearchResults: true,
    highlightField: undefined,
    multiple: undefined,
    filterSelectedOptions: true,
    chipProps: undefined,
};

export default InputAutocomplete;
