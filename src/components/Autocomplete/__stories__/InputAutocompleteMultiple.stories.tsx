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

const OPTIONS = [
    { title: 'The Shawshank Redemption', year: 1994, id: 0 },
    { title: 'The Godfather', year: 1972, id: 1 },
    { title: 'The Godfather: Part II', year: 1974, id: 2 },
    { title: 'The Dark Knight', year: 2008, id: 3 },
    { title: '12 Angry Men', year: 1957, id: 4 },
    { title: "Schindler's List", year: 1993, id: 5 },
    { title: 'Pulp Fiction', year: 1994, id: 6 },
];

const render = (args) => {
    const [selectedOptions, setSelectedOptions] = useState(args.value ?? []);

    return (
        <InputAutocompleteMultiple
            {...args}
            value={selectedOptions}
            onChange={(e, options) => setSelectedOptions(options.map((o) => o.id))}
        />
    );
};

export const IncludeInputInList: Story = {
    args: {
        label: 'Movie',
        includeInputInList: true,
        options: OPTIONS,
        getOptionLabel: 'title',
    },
    render,
};

export const OptionsStringList: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS.map((o) => o.title),
        value: OPTIONS.map((o) => o.title).filter((_, i) => i % 4 === 0),
    },
    render,
};

export const OptionsObjectList: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS,
        getOptionLabel: 'title',
    },
    render,
};

export const OptionsConverter: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const Placeholder: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS,
        placeholder: 'choose you movie name',
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const StartCmpExternal: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS,
        startCmpExternal: 'Tv',
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const Sort: Story = {
    args: {
        label: 'Movie',
        options: OPTIONS,
        sortBy: 'year',
        sortDir: -1,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
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
                    optionConverter={(film) => ({
                        id: film.title,
                        label: `${film.title} (${film.year})`,
                        year: film.year,
                    })}
                    options={top100Films}
                    value={selectedOption}
                    onChange={(e, option) => setSelectedOption(option)}
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
