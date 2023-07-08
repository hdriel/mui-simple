import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';

import InputAutocompleteMultiple from '../InputAutocompleteMultiple';
import { countries, timeSlots, top100Films, top100FilmsWithFirstLetters } from './InputAutocomplete.mocks';

export default {
    title: 'Inputs/Inputs/InputAutocompleteMultiple',
    component: InputAutocompleteMultiple,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputAutocompleteMultiple />;
};

export const FilmOptions = () => {
    const options = [{ ...top100Films[0], disabled: true }, ...top100Films.slice(1)];
    const [selectedOptions, setSelectedOptions] = useState([options[0], options[1]]);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant, index) => (
                <InputAutocompleteMultiple
                    key={variant}
                    label="Movie"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, options) => setSelectedOptions(options)}
                    getOptionLabel={(option) => option.title}
                    variant={variant}
                    options={options}
                    checkboxStyle={!!index}
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
                <InputAutocompleteMultiple
                    key={variant}
                    label="Choose a country"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, options) => setSelectedOptions(options)}
                    variant={variant}
                    options={countries}
                    raiseSelectedToTop
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option, meta) => {
                        return (
                            <Box
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'unset !important',
                                    '& > img': { mr: 2, flexShrink: 0 },
                                }}
                                {...props}
                            >
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    alt=""
                                />
                                {option.label} ({option.code}) +{option.phone}
                            </Box>
                        );
                    }}
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
                <InputAutocompleteMultiple
                    key={variant}
                    id="grouped-demo"
                    label="With categories"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, options) => setSelectedOptions(options)}
                    options={top100FilmsWithFirstLetters}
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
                <InputAutocompleteMultiple
                    key={variant}
                    variant={variant}
                    id="grouped-demo"
                    label="Disabled time options"
                    selectedOptions={selectedOptions}
                    setSelectedOptions={(e, options) => setSelectedOptions(options)}
                    options={_options}
                    getOptionLabel="time"
                    width={200}
                />
            ))}
        </Stack>
    );
};
