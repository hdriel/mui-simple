import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';

import InputAutocompleteAsync from '../InputAutocompleteAsync';
import { countries, timeSlots, top100Films, top100FilmsWithFirstLetters } from './InputAutocomplete.mocks';

export default {
    title: 'Inputs/Inputs/InputAutocompleteAsync',
    component: InputAutocompleteAsync,
    decorators: [
        (Story) => (
            <div style={{ width: '450px', padding: '1em', border: '1px dashed black' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return <InputAutocompleteAsync />;
};

export const FilmOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteAsync
                    key={variant}
                    label="Movie"
                    selectedOption={selectedOption}
                    setSelectedOption={(e, option) => setSelectedOption(option)}
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
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant, index) => (
                <InputAutocompleteAsync
                    key={variant}
                    label="Choose a country"
                    selectedOption={selectedOption}
                    setSelectedOption={(e, option) => setSelectedOption(option)}
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
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteAsync
                    key={variant}
                    id="grouped-demo"
                    label="With categories"
                    selectedOption={selectedOption}
                    setSelectedOption={(e, option) => setSelectedOption(option)}
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
    const [selectedOption, setSelectedOption] = useState(null);

    const _options = timeSlots.slice(0).map((option, index) => ({ time: option, disabled: index % 4 === 0 }));

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteAsync
                    key={variant}
                    variant={variant}
                    id="grouped-demo"
                    label="Disabled options"
                    selectedOption={selectedOption}
                    setSelectedOption={(e, option) => setSelectedOption(option)}
                    fetchOptionsOnFocus
                    getOptionsPromise={async () => _options}
                    getOptionLabel={(option) => option.time}
                    width={200}
                />
            ))}
        </Stack>
    );
};
