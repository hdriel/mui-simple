import React from 'react';
import { GroupHeader, GroupItems } from './InputAutocomplete.styled';
import TextField from '../TextField/TextField';
import { isDefined, useCustomColor } from '../../../utils/helpers';
import Chip from '../Chip/Chip';
import type { InputAutoCompleteProp, InputBaseProps } from '../../decs';
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
    creationAllowed,
    CREATION_PREFIX_LABEL,
    disableClearable,
    disableCloseOnSelect,
    disableListWrap,
    disablePortal,
    fieldId,
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
    NO_OPTIONS_LABEL,
    onChange,
    openOnFocus,
    options: _options,
    optionConverter,
    raiseSelectedToTop,
    readOnly,
    renderOption: _renderOption,
    value: selectedOption,
    selectOnFocus,
    size,
    sortBy,
    sortDir,
    sx,
    width,
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
                      {...getTagProps({ index })}
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
        event.target.value = isDefined(option) ? option[fieldId] ?? option : option;
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
        <MuiAutocomcolorActiveplete
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
    clearOnBlur: true,
    clearOnPressEscape: true,
    creationAllowed: false,
    CREATION_PREFIX_LABEL: 'Add',
    NO_OPTIONS_LABEL: undefined,
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
    fieldId: 'id',
    filterOptions: undefined,
    filterSelectedOptions: true,
    focused: undefined,
    freeSolo: undefined,
    getOptionLabel: 'label',
    groupBy: undefined,
    handleHomeEndKeys: true,
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
    optionConverter: undefined,
    options: [],
    placeholder: undefined,
    raiseSelectedToTop: undefined,
    readOnly: undefined,
    required: undefined,
    selectOnFocus: true,
    size: undefined,
    sortBy: undefined,
    sortDir: true,
    startCmpExternal: undefined,
    value: undefined,
    variant: 'outlined',
};

export type { InputAutoCompleteProp } from '../../decs';
export default InputAutocomplete;
