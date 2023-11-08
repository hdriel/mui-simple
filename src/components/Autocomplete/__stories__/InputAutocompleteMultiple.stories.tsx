import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';

import InputAutocompleteMultiple from '../InputAutocompleteMultiple';
import { countries, timeSlots, top100Films, top100FilmsWithFirstLetters } from './InputAutocomplete.mocks';

const meta: Meta<typeof InputAutocompleteMultiple> = {
    title: 'Inputs/Inputs/InputAutocompleteMultiple',
    component: InputAutocompleteMultiple,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputAutocompleteMultiple>;

export const Default: Story = {
    args: {},
};

const render = (args) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    return (
        <InputAutocompleteMultiple
            {...args}
            selectedOptions={selectedOptions}
            setSelectedOptions={(e, options) => setSelectedOptions(options)}
        />
    );
};

export const IncludeInputInList: Story = {
    args: {
        label: 'Movie',
        includeInputInList: true,
        options: [
            { label: 'The Shawshank Redemption', year: 1994, id: 0 },
            { label: 'The Godfather', year: 1972, id: 1 },
            { label: 'The Godfather: Part II', year: 1974, id: 2 },
            { label: 'The Dark Knight', year: 2008, id: 3 },
            { label: '12 Angry Men', year: 1957, id: 4 },
            { label: "Schindler's List", year: 1993, id: 5 },
            { label: 'Pulp Fiction', year: 1994, id: 6 },
        ],
    },
    render,
};

export const OptionsStringList: Story = {
    args: {
        label: 'Movie',
        options: [
            'The Shawshank Redemption',
            'The Godfather',
            'The Godfather: Part II',
            'The Dark Knight',
            '12 Angry Men',
            "Schindler's List",
            'Pulp Fiction',
        ],
        selectedOption: ['The Dark Knight'],
    },
    render,
};

export const OptionsObjectList: Story = {
    args: {
        label: 'Movie',
        options: [
            { title: 'The Shawshank Redemption', year: 1994, id: 0 },
            { title: 'The Godfather', year: 1972, id: 1 },
            { title: 'The Godfather: Part II', year: 1974, id: 2 },
            { title: 'The Dark Knight', year: 2008, id: 3 },
            { title: '12 Angry Men', year: 1957, id: 4 },
            { title: "Schindler's List", year: 1993, id: 5 },
            { title: 'Pulp Fiction', year: 1994, id: 6 },
        ],
        getOptionLabel: 'title',
    },
    render,
};

export const OptionsConverter: Story = {
    args: {
        label: 'Movie',
        options: [
            { title: 'The Shawshank Redemption', year: 1994, id: 0 },
            { title: 'The Godfather', year: 1972, id: 1 },
            { title: 'The Godfather: Part II', year: 1974, id: 2 },
            { title: 'The Dark Knight', year: 2008, id: 3 },
            { title: '12 Angry Men', year: 1957, id: 4 },
            { title: "Schindler's List", year: 1993, id: 5 },
            { title: 'Pulp Fiction', year: 1990, id: 6 },
        ],
        optionConverter: (item) => ({ id: item.year, label: `${item.title} (${item.year})` }),
    },
    render,
};

export const Placeholder: Story = {
    args: {
        label: 'Movie',
        options: [
            { title: 'The Shawshank Redemption', year: 1994, id: 0 },
            { title: 'The Godfather', year: 1972, id: 1 },
            { title: 'The Godfather: Part II', year: 1974, id: 2 },
            { title: 'The Dark Knight', year: 2008, id: 3 },
            { title: '12 Angry Men', year: 1957, id: 4 },
            { title: "Schindler's List", year: 1993, id: 5 },
            { title: 'Pulp Fiction', year: 1990, id: 6 },
        ],
        placeholder: 'choose you movie name',
        optionConverter: (item) => ({ id: item.year, label: `${item.title} (${item.year})` }),
    },
    render,
};

export const StartCmpExternal: Story = {
    args: {
        label: 'Movie',
        options: [
            { title: 'The Shawshank Redemption', year: 1994, id: 0 },
            { title: 'The Godfather', year: 1972, id: 1 },
            { title: 'The Godfather: Part II', year: 1974, id: 2 },
            { title: 'The Dark Knight', year: 2008, id: 3 },
            { title: '12 Angry Men', year: 1957, id: 4 },
            { title: "Schindler's List", year: 1993, id: 5 },
            { title: 'Pulp Fiction', year: 1990, id: 6 },
        ],
        startCmpExternal: 'Tv',
        optionConverter: (item) => ({ id: item.year, label: `${item.title} (${item.year})` }),
    },
    render,
};

export const Sort: Story = {
    args: {
        label: 'Movie',
        options: [
            { title: 'The Shawshank Redemption', year: 1994, id: 0 },
            { title: 'The Godfather', year: 1972, id: 1 },
            { title: 'The Godfather: Part II', year: 1974, id: 2 },
            { title: 'The Dark Knight', year: 2008, id: 3 },
            { title: '12 Angry Men', year: 1957, id: 4 },
            { title: "Schindler's List", year: 1993, id: 5 },
            { title: 'Pulp Fiction', year: 1990, id: 6 },
        ],
        sortBy: 'year',
        sortDir: -1,
        optionConverter: (item) => ({ id: item.year, label: `${item.title} (${item.year})` }),
    },
    render,
};

export const FilmOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteMultiple
                    key={variant}
                    // getOptionLabel={(option) => option.title}
                    label="Movie"
                    optionConverter={(film) => ({ id: film.title, label: `${film.title} (${film.year})` })}
                    options={top100Films}
                    selectedOption={selectedOption}
                    setSelectedOption={(e, option) => setSelectedOption(option)}
                    variant={variant}
                />
            ))}
        </Stack>
    );
};

export const RenderOption: Story = {
    args: {
        id: 'grouped-demo',
        label: 'Choose a country',
        options: countries,
        autoHighlight: true,
        getOptionLabel: (option) => option.label,
        renderOption: (props, option) => (
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
        ),
    },
    render,
};

export const GroupBy: Story = {
    args: {
        id: 'grouped categories',
        label: 'Categories',
        options: top100FilmsWithFirstLetters,
        groupBy: (option) => option.firstLetter,
        sortBy: 'title',
        getOptionLabel: (option) => option.title,
        width: 400,
    },
    render,
};

export const OptionsWithDisabled: Story = {
    args: {
        id: 'grouped-demo',
        label: 'Disabled options',
        options: timeSlots.slice(0).map((option, index) => ({ time: option, disabled: index % 4 === 0 })),
        getOptionLabel: (option) => option.time,
        width: 200,
    },
    render,
};

/*
    openOnFocus: true,
    readOnly: undefined,
    selectOnFocus: false,
    size: undefined,
    variant: 'outlined',
*/
