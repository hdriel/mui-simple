import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';

import InputAutocompleteMultipleAsync from '../InputAutocompleteMultipleAsync';
import { countries, timeSlots, top100Films, top100FilmsWithFirstLetters } from './InputAutocomplete.mocks';

export default {
    title: 'Inputs/Inputs/InputAutocompleteMultipleAsync',
    component: InputAutocompleteMultipleAsync,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputAutocompleteMultipleAsync />;
};

export const FilmOptions = () => {
    const options = [{ ...top100Films[0], disabled: true }, ...top100Films.slice(1)];
    const [selectedOptions, setSelectedOptions] = useState([options[0], options[1]]);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteMultipleAsync
                    key={variant}
                    label="Movie"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, option) => setSelectedOptions(option)}
                    fetchOptionsOnFocus
                    getOptionsPromise={async () => top100Films}
                    getOptionLabel={(option) => option.title}
                    variant={variant}
                />
            ))}
        </Stack>
    );
};

export const CountrySelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant, index) => (
                <InputAutocompleteMultipleAsync
                    key={variant}
                    label="Choose a country"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, option) => setSelectedOptions(option)}
                    variant={variant}
                    fetchOptionsOnFocus
                    getOptionsPromise={async () => countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                        </Box>
                    )}
                />
            ))}
        </Stack>
    );
};

export const GroupedByCategories = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteMultipleAsync
                    key={variant}
                    id="grouped-demo"
                    label="With categories"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, option) => setSelectedOptions(option)}
                    fetchOptionsOnFocus
                    getOptionsPromise={async () => top100FilmsWithFirstLetters}
                    groupBy={(option) => option.firstLetter}
                    sortBy="title"
                    getOptionLabel={(option) => option.title}
                    width={400}
                />
            ))}
        </Stack>
    );
};

export const DisabledOptions = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const _options = timeSlots.slice(0).map((option, index) => ({ time: option, disabled: index % 4 === 0 }));

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteMultipleAsync
                    key={variant}
                    variant={variant}
                    id="grouped-demo"
                    label="Disabled options"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, options) => setSelectedOptions(options)}
                    fetchOptionsOnFocus
                    getOptionsPromise={async () => _options}
                    getOptionLabel="time"
                    width={200}
                />
            ))}
        </Stack>
    );
};
