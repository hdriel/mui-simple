import React from 'react';
import { Autocomplete as MuiAutocomplete, GroupHeader, GroupItems } from './InputAutocomplete.styled';
import TextField from '../TextField/TextField';
import { isDefined, useCustomColor } from '../../../utils/helpers';
import Chip from '../Chip/Chip';
import type { InputAutoCompleteProp, InputBaseProps } from '../../decs';
import { useAutocompleteOptionsHook } from './hooks/useAutocompleteOptions.hook';

const InputAutocomplete: React.FC<InputAutoCompleteProp> = ({
    // inputProps: {
    alignActions,
    alignActionsExternal = 'baseline',
    cmpSpacing,
    colorActive = 'primary',
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
    variant = 'outlined',
    // } = {},
    inputRef,
    autoComplete = true,
    autoHighlight = true,
    blurOnSelect = true,
    clearOnBlur = true,
    chipProps,
    clearOnPressEscape = true,
    creationAllowed = false,
    CREATION_PREFIX_LABEL = 'Add',
    disableClearable,
    disableCloseOnSelect = true,
    disableListWrap = true,
    disablePortal,
    fieldId = 'id',
    filterOptions: _filterOptions,
    filterSelectedOptions = true,
    freeSolo,
    getOptionLabel: _getOptionLabel = 'label',
    groupBy,
    highlightField,
    highlightSearchResults,
    includeInputInList = true,
    label,
    multiple,
    NO_OPTIONS_LABEL,
    onChange,
    openOnFocus = true,
    options: _options = [],
    optionConverter,
    padding,
    raiseSelectedToTop,
    readOnly,
    renderOption: _renderOption,
    value: selectedOption,
    selectOnFocus = true,
    size,
    sortBy,
    sortDir = true,
    sx,
    width,
    handleHomeEndKeys = true,

    ...props
}): React.ReactElement | React.ReactNode => {
    const [color] = useCustomColor(colorActive ?? colorLabel);

    const { options, filterOptions, getOptionLabel, renderOption } = useAutocompleteOptionsHook({
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
                      {...getTagProps?.({ index })}
                      {...(typeof chipProps === 'function' ? chipProps(option) : chipProps)}
                  />
              ))
        : undefined;

    const setSelectedOption = (event, option): void => {
        if (multiple) {
            onChange?.(event, option);
            return;
        }
        event.target.name = name;
        event.target.value = isDefined(option) ? option.value ?? option[fieldId] ?? option : option;
        onChange?.(event, option);
    };

    const isPrimitiveSelectedOption = (option): boolean => ['string', 'number'].includes(typeof option);
    if (Array.isArray(selectedOption)) {
        selectedOption = selectedOption.map(
            (option) =>
                options.find((o) => {
                    if (!isDefined(o) || !isDefined(option)) return false;
                    if (o === option) return true;
                    if (!isDefined(o[fieldId])) return false;
                    return isPrimitiveSelectedOption(option) ? o[fieldId] === option : o[fieldId] === option?.[fieldId];
                }) ?? option // todo: add converted for selectedOption to appropriate option object
        );
    } else {
        selectedOption =
            options.find((o) => {
                if (!isDefined(o) || !isDefined(selectedOption)) return false;
                if (o === selectedOption) return true;
                if (!isDefined(o[fieldId])) return false;
                return isPrimitiveSelectedOption(selectedOption)
                    ? o[fieldId] === selectedOption
                    : o[fieldId] === selectedOption?.[fieldId];
            }) ??
            (isDefined(selectedOption)
                ? multiple
                    ? [].concat(selectedOption)
                    : selectedOption
                : multiple
                ? []
                : null);
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
        padding,
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
            groupBy={typeof groupBy === 'function' ? groupBy : (option) => groupBy && option[groupBy]}
            includeInputInList={includeInputInList}
            isOptionEqualToValue={
                getOptionLabel
                    ? (option, value) => isDefined(option) && getOptionLabel?.(option) === getOptionLabel?.(value)
                    : undefined
            }
            multiple={multiple}
            noOptionsText={NO_OPTIONS_LABEL}
            onChange={setSelectedOption}
            openOnFocus={openOnFocus}
            options={options}
            readOnly={readOnly}
            renderGroup={renderGroup}
            renderInput={(params) => <TextField inputRef={inputRef} {...params} {...inputProps} fullWidth />}
            renderOption={renderOption}
            renderTags={renderTags}
            selectOnFocus={selectOnFocus}
            size={size}
            sx={{ ...sx, ...{ width } }}
            value={selectedOption}
            clearOnBlur={clearOnBlur}
            handleHomeEndKeys={handleHomeEndKeys}
            {...props}
        />
    );
};
InputAutocomplete.displayName = 'InputAutocomplete';

export type { InputAutoCompleteProp } from '../../decs';
export default InputAutocomplete;
