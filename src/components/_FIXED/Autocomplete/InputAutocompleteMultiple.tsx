import React, { useMemo } from 'react';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import MuiAutocomplete from './InputAutocomplete';
import Chip from '../Chip/Chip';
import Checkbox from '../Checkbox/Checkbox';
import type { InputAutocompleteMultipleProp } from '../../decs';
import { isDefined } from '../../../utils/helpers';

const InputAutocompleteMultiple: React.FC<InputAutocompleteMultipleProp> = ({
    checkboxStyle = true,
    chipProps = { rounded: false, endIcon: <CloseIcon /> },
    fieldId = 'id',
    filterSelectedOptions = false,
    getOptionLabel: _getOptionLabel = 'label',
    limitTags,
    name,
    onChange,
    options,
    raiseSelectedToTop, // todo: implement this
    readOnly,
    renderOption: _renderOption,
    value: selectedOptions = [],
    ...props
}) => {
    selectedOptions = [].concat(selectedOptions);

    const getOptionLabel =
        typeof _getOptionLabel === 'function' ? _getOptionLabel : (option: any) => option?.[_getOptionLabel] || '';

    // let totalSelectedOptions = 0;
    // if (raiseSelectedToTop) {
    //     options.forEach((option) => {
    //         option.selected = !!selectedOptions.find((so) => getOptionLabel(so) === getOptionLabel(option));
    //         totalSelectedOptions += option.selected ? 1 : 0;
    //     });
    // }

    const setSelectedOptions = (event, options, action): void => {
        const optionIds = options?.filter((v) => isDefined(v)).map((o) => o[fieldId] ?? o) ?? [];
        event.target.name = name;
        event.target.value = optionIds;

        if (action === 'clear') {
            const newOptionsIds =
                selectedOptions?.filter((option) => option?.disabled).map((o) => o[fieldId] ?? o) ?? [];
            event.target.value = newOptionsIds;
            onChange?.(event, newOptionsIds);
        } else {
            onChange?.(event, optionIds);
        }
    };

    const renderOption = (props, option, { selected }): React.ReactNode => {
        const label = _renderOption?.(props, option, { selected }) ?? getOptionLabel?.(option) ?? option;

        return (
            <li {...props} /* onClick={(e) => e.preventDefault()} */>
                {checkboxStyle ? <Checkbox style={{ marginRight: 2 }} checked={selected} edge="start" /> : null}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {label}
                    {!checkboxStyle && selected ? <CheckIcon /> : null}
                </Box>
            </li>
        );
    };

    const renderTags = (value, getTagProps): React.ReactNode[] => {
        return value
            .filter((v) => isDefined(v))
            .map(
                (optionId: string) =>
                    options?.find(
                        (option: any) => (typeof option === 'object' ? option[fieldId] : option) === optionId
                    ) ?? optionId
            )
            .map((option: any, index: number) => {
                const optionLabel = getOptionLabel?.(option) ?? option.label;
                const label = typeof option === 'string' ? option : optionLabel ? optionLabel : JSON.stringify(option);
                if (!optionLabel) {
                    console.debug(`getOptionLabel error: could not find label on option`, option);
                }

                const disabled = readOnly ? undefined : option?.disabled;
                const onDelete = readOnly || option?.disabled ? undefined : getTagProps({ index })?.onDelete;

                return (
                    <Chip
                        key={label}
                        {...getTagProps({ index })}
                        {...(typeof chipProps === 'function' ? chipProps(option) : chipProps)}
                        label={label}
                        disabled={disabled}
                        onDelete={onDelete}
                    />
                );
            })
            .filter((v) => v);
    };

    const autocompleValues = selectedOptions?.map(
        (optionId) =>
            options?.find((option: any) => (typeof option === 'object' ? option[fieldId] : option) === optionId) ??
            optionId
    );

    return (
        <MuiAutocomplete
            value={autocompleValues}
            onChange={setSelectedOptions}
            name={name}
            multiple
            raiseSelectedToTop={raiseSelectedToTop}
            disableCloseOnSelect
            blurOnSelect={false}
            limitTags={limitTags}
            filterSelectedOptions={filterSelectedOptions}
            getOptionLabel={getOptionLabel}
            readOnly={readOnly}
            options={options}
            renderOption={renderOption}
            renderTags={renderTags}
            {...props}
        />
    );
};
InputAutocompleteMultiple.displayName = 'InputAutocompleteMultiple';

export type { InputAutocompleteMultipleProp } from '../../decs';
export default InputAutocompleteMultiple;
