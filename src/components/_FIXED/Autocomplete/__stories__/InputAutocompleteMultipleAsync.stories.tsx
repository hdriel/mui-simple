import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';

import InputAutocompleteMultipleAsync from '../InputAutocompleteMultipleAsync';
import { countries, timeSlots, top100Films, top100FilmsWithFirstLetters } from './InputAutocomplete.mocks';

const meta: Meta<typeof InputAutocompleteMultipleAsync> = {
    title: 'Inputs/Inputs/Autocomplete/InputAutocompleteMultipleAsync',
    component: InputAutocompleteMultipleAsync,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputAutocompleteMultipleAsync>;

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
    const [selectedOption, setSelectedOption] = useState(args.value ?? []);

    return (
        <InputAutocompleteMultipleAsync
            {...args}
            value={selectedOption}
            onChange={(e, option) => setSelectedOption(option)}
        />
    );
};

export const IncludeInputInList: Story = {
    args: {
        label: 'Movie',
        includeInputInList: false,
        sleep: 1e3,
        getOptionsPromise: async () => OPTIONS.map(({ title, ...item }) => ({ ...item, label: title })),
    },
    render,
};

export const OptionsStringList: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS.map((o) => o.title),
        sleep: 1e3,
        value: ['The Dark Knight'],
    },
    render,
};

export const OptionsObjectList: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS,
        sleep: 1e3,
        getOptionLabel: 'title',
    },
    render,
};

export const OptionsConverter: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS,
        sleep: 1e3,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const Placeholder: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS,
        placeholder: 'choose you movie name',
        sleep: 1e3,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const StartCmpExternal: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS,
        startCmpExternal: 'Tv',
        sleep: 1e3,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const Sort: Story = {
    args: {
        label: 'Movie',
        getOptionsPromise: async () => OPTIONS,
        sortBy: 'year',
        sortDir: -1,
        sleep: 1e3,
        optionConverter: (item, index) => ({ id: index, label: `${item.title} (${item.year})`, year: item.year }),
    },
    render,
};

export const FilmOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Stack spacing={4}>
            {['filled', 'standard', 'outlined'].map((variant) => (
                <InputAutocompleteMultipleAsync
                    key={variant}
                    label="Movie"
                    autoHighlight
                    optionConverter={(film, index) => ({ id: index, label: `${film.title} (${film.year})` })}
                    getOptionsPromise={async () => top100Films}
                    value={selectedOption}
                    onChange={(e, option) => setSelectedOption(option)}
                    variant={variant}
                    sleep={1e3}
                />
            ))}
        </Stack>
    );
};

export const RenderOption: Story = {
    args: {
        id: 'grouped-demo',
        label: 'Choose a country',
        getOptionsPromise: async () => countries,
        autoHighlight: true,
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
        getOptionsPromise: async () => top100FilmsWithFirstLetters,
        groupBy: (option) => option.firstLetter,
        sleep: 1e3,
        sortBy: 'title',
        getOptionLabel: 'title',
        width: 400,
    },
    render,
};

export const OptionsWithDisabled: Story = {
    args: {
        id: 'grouped-demo',
        label: 'Disabled options',
        fetchOptionsOnFocus: true,
        value: [1, 2],
        fieldId: 'id',
        sleep: 1e3,
        getOptionsPromise: async () =>
            timeSlots.slice(0).map((option, index) => ({ id: index, time: option, disabled: index % 4 === 0 })),
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

export const Keys = () => {
    const [selectedOption, setSelectedOption] = useState([]);

    return (
        <InputAutocompleteMultipleAsync
            id="grouped-demo"
            label="Keys"
            value={selectedOption}
            onChange={(e, option) => setSelectedOption(option)}
            fetchOptionsOnFocus
            getOptionsPromise={async () => [
                {
                    key: '37913a6c-5f35-4299-98dc-c1c31b837b30-1701175439414-156418 (1080p).mp4',
                    Key: 'videos/js-full-power/37913a6c-5f35-4299-98dc-c1c31b837b30-1701175439414-156418 (1080p).mp4',
                },
                {
                    key: 'ab8a3070-e675-43ea-a513-8af858b585d0-1701178267985-download_-_74710 (540p).mp4',
                    Key: 'videos/js-full-power/ab8a3070-e675-43ea-a513-8af858b585d0-1701178267985-download_-_74710 (540p).mp4',
                },
            ]}
            getOptionLabel="key"
            fieldId="Key"
        />
    );
};

export const GroupByCategories: Story = {
    args: {
        id: 'grouped-demo',
        label: 'With categories',
        fetchOptionsOnFocus: true,
        getOptionsPromise: async () => top100FilmsWithFirstLetters,
        groupBy: (option) => option.firstLetter,
        sortBy: 'title',
        getOptionLabel: (option) => option.title,
        width: 400,
    },
    render,
};
