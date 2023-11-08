import React, { useMemo } from 'react';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import MuiAutocomplete from './InputAutocomplete';
import Chip from '../_FIXED/Chip/Chip';
import Checkbox from '../_FIXED/Checkbox/Checkbox';
import type { InputAutocompleteMultipleProp } from '../decs';

const InputAutocompleteMultiple: React.FC<InputAutocompleteMultipleProp> = ({
    selectedOptions,
    setSelectedOptions,
    limitTags,
    filterSelectedOptions,
    chipProps,
    renderOption,
    checkboxStyle,
    getOptionLabel: _getOptionLabel,
    options,
    readOnly,
    raiseSelectedToTop, // todo: implement this
    ...props
}) => {
    const getOptionLabel = useMemo(
        () => (typeof _getOptionLabel === 'function' ? _getOptionLabel : (option) => option[_getOptionLabel] || ''),
        [_getOptionLabel]
    );

    // let totalSelectedOptions = 0;
    // if (raiseSelectedToTop) {
    //     options.forEach((option) => {
    //         option.selected = !!selectedOptions.find((so) => getOptionLabel(so) === getOptionLabel(option));
    //         totalSelectedOptions += option.selected ? 1 : 0;
    //     });
    // }

    return (
        <MuiAutocomplete
            selectedOption={[].concat(selectedOptions)}
            setSelectedOption={(event, options, action) => {
                if (action === 'clear') {
                    const newOptions = selectedOptions.filter((option) => option.disabled);
                    setSelectedOptions(event, newOptions);
                } else {
                    setSelectedOptions(event, options);
                }
            }}
            multiple
            raiseSelectedToTop={raiseSelectedToTop}
            disableCloseOnSelect
            blurOnSelect={false}
            limitTags={limitTags}
            filterSelectedOptions={filterSelectedOptions}
            getOptionLabel={getOptionLabel}
            readOnly={readOnly}
            options={options}
            renderOption={(props, option, { selected }) => (
                <li {...props} /* onClick={(e) => e.preventDefault()} */>
                    {checkboxStyle ? <Checkbox style={{ marginRight: 2 }} checked={selected} edge="start" /> : null}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        {renderOption?.(props, option, { selected }) ?? getOptionLabel?.(option) ?? option}
                        {!checkboxStyle && selected ? <CheckIcon /> : null}
                    </Box>
                </li>
            )}
            renderTags={(value, getTagProps) => {
                return value.map((option: any, index: number) => {
                    const label = getOptionLabel?.(option) ?? option.label;
                    const disabled = readOnly ? undefined : option.disabled;
                    const onDelete = readOnly || option.disabled ? undefined : getTagProps({ index }).onDelete;
                    console.log(`getTagProps({ index: ${index} }).onDelete`);
                    console.log(onDelete);

                    return (
                        <Chip
                            key={label}
                            {...getTagProps({ index })}
                            {...(typeof chipProps === 'function' ? chipProps(option) : chipProps)}
                            label={label}
                            disabled={disabled}
                            onDelete={(...onDeleteParams) => {
                                debugger;
                                onDelete(...onDeleteParams);
                            }}
                        />
                    );
                });
            }}
            {...props}
        />
    );
};

InputAutocompleteMultiple.defaultProps = {
    checkboxStyle: true,
    chipProps: { rounded: false, endIcon: <CloseIcon /> },
    filterSelectedOptions: false,
    limitTags: undefined,
    raiseSelectedToTop: undefined,
    readOnly: undefined,
    renderOption: undefined,
    selectedOptions: [],
    setSelectedOptions: undefined,
};

export type { InputAutocompleteMultipleProp } from '../decs';
export default InputAutocompleteMultiple;
