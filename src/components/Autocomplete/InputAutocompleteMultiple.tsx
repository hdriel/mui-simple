import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import MuiAutocomplete from './InputAutocomplete';
import Chip from '../FIXED/Chip/Chip';
import Checkbox from '../FIXED/Checkbox/Checkbox';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function InputAutocompleteMultiple({
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
}) {
    const getOptionLabel = useMemo(
        () => (typeof _getOptionLabel === 'function' ? _getOptionLabel : (option) => option[_getOptionLabel] || ''),
        [_getOptionLabel]
    );

    let totalSelectedOptions = 0;
    if (raiseSelectedToTop) {
        options.forEach((option) => {
            option.selected = !!selectedOptions.find((so) => getOptionLabel(so) === getOptionLabel(option));
            totalSelectedOptions += option.selected ? 1 : 0;
        });
    }

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
            raiseSelectedToTop={totalSelectedOptions}
            disableCloseOnSelect
            limitTags={limitTags}
            filterSelectedOptions={filterSelectedOptions}
            getOptionLabel={getOptionLabel}
            readOnly={readOnly}
            options={options}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
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
                return value.map((option, index) => (
                    <Chip
                        {...getTagProps({ index })}
                        {...(typeof chipProps === 'function' ? chipProps(option) : chipProps)}
                        label={getOptionLabel?.(option) ?? option.label}
                        disabled={readOnly ? undefined : option.disabled}
                        onDelete={readOnly || option.disabled ? undefined : getTagProps({ index }).onDelete}
                    />
                ));
            }}
            {...props}
        />
    );
}

InputAutocompleteMultiple.propTypes = {
    selectedOptions: PropTypes.arrayOf(PropTypes.any),
    setSelectedOptions: PropTypes.func,
    filterSelectedOptions: PropTypes.bool,
    chipProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    limitTags: PropTypes.number,
    renderOption: PropTypes.func,
    checkboxStyle: PropTypes.bool,
    readOnly: PropTypes.bool,
    raiseSelectedToTop: PropTypes.bool,
};

InputAutocompleteMultiple.defaultProps = {
    selectedOptions: [],
    setSelectedOptions: undefined,
    filterSelectedOptions: false,
    chipProps: { rounded: false, endIcon: <CloseIcon /> },
    limitTags: undefined,
    renderOption: undefined,
    checkboxStyle: true,
    readOnly: undefined,
    raiseSelectedToTop: undefined,
};
