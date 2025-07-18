import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';

import InputMultipleSelect from '../InputMultipleSelect';

const meta: Meta<typeof InputMultipleSelect> = {
    title: 'Inputs/Inputs/InputMultipleSelect',
    component: InputMultipleSelect,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputMultipleSelect>;

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return <InputMultipleSelect {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default: Story = {
    args: {},
};

const options = ['javascript', 'python', 'C#', 'C++'];

export const AutoWidth: Story = {
    args: {},
    render,
};

export const Components: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        options,
        label: 'Align Actions',
        value: [options[0]],
        cmpSpacing: 3,
        nullable: true,
        hideStartActionsOnEmpty: true,
    },
    render,
};

export const ExternalComponents: Story = {
    args: {
        alignActionsExternal: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        options,
        label: 'Align Actions',
        value: [options[0]],
        cmpSpacing: 3,
    },
    render,
};

export const Colors: Story = {
    args: {
        options,
        label: 'colors',
        value: [options[0]],
        colorActive: '#D001D0',
        colorLabel: 'secondary',
        colorText: 'warning.dark',
    },
    render,
};

export const HelperText: Story = {
    args: {
        options,
        label: 'colors',
        value: [options[0]],
        helperText: 'choose you best language',
    },
    render,
};

export const Error: Story = {
    args: {
        options,
        label: 'Error',
        value: [options[0]],
        helperText: 'choose you best language',
        error: true,
    },
    render,
};

export const Disabled: Story = {
    args: {
        options,
        label: 'Disabled',
        value: [options[0]],
        disabled: true,
    },
    render,
};

export const DisabledItems: Story = {
    args: {
        options: options.map((item, i) => ({ value: item, label: item, disabled: !i })),
        label: 'Disabled Items',
        value: [options[0]],
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        options,
        label: 'ReadOnly',
        value: [options[0]],
        readOnly: true,
    },
    render,
};

export const Label: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Languages',
    },
    render,
};

export const fullWidth: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Full Width',
        fullWidth: true,
    },
    render,
};

export const Nullable: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Nullable',
        nullable: true,
    },
    render,
};
export const PlaceholderOption: Story = {
    args: {
        options,
        value: [undefined],
        label: 'Placeholder Option',
        placeholderOption: 'placeholder option here',
        nullable: true,
    },
    render,
};
export const Required: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Required',
        required: true,
    },
    render,
};

export const OnEvents: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Focused',
        focused: true,
        onBlur: (event) => console.log('onBlur', event),
        onChange: (event) => console.log('onChange', event),
        onFocus: (event) => console.log('onFocus', event),
    },
    render,
};

export const Margin: Story = {
    args: {
        options,
        value: [options[0]],
        label: 'Margin',
        margin: 'dense',
    },
    render,
};

export const Size_ = (args) => {
    const [value, setValue] = useState(args.value ?? []);
    return (
        <Stack spacing={3}>
            <InputMultipleSelect
                options={options}
                label="Small"
                size="small"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <InputMultipleSelect
                options={options}
                label="Medium"
                size="medium"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Stack>
    );
};

export const Variant_ = (args) => {
    const [value, setValue] = useState(args.value ?? []);

    return (
        <Stack spacing={3}>
            <InputMultipleSelect
                options={options}
                label="Filled"
                variant="filled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                nullable
            />
            <InputMultipleSelect
                options={options}
                label="Outlined"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                nullable
            />
            <InputMultipleSelect
                options={options}
                label="Standard"
                variant="standard"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                nullable
            />
        </Stack>
    );
};

export const Options: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Options',
    },
    render,
};
export const GroupBy: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Group By',
        groupBy: 'category',
    },
    render,
};

export const RenderValue: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Render Value',
        renderValue: (value) => value,
    },
    render,
};

export const MultiMax: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'MultiMax Label',
        max: 3,
        renderValue: (value) => value,
    },
    render,
};

export const SelectAll: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Select All Label',
        selectAll: true,
        selectAllOption: true,
        nullable: 'None Selection',
        placeholderOption: 'Choose from list:',
        renderValue: (value) => value,
    },
    render,
};

export const MultiCheckbox: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'MultiCheckbox Label',
        checkbox: true,
        selectAll: true,
        selectAllOption: true,
        renderValue: (value) => value,
    },
    render,
};

export const SelectedIndicator: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Not SelectedIndicator Label',
        selectAll: true,
        selectedIndicator: false,
        renderValue: (value) => value,
    },
    render,
};

export const Chips: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'Non Display as Chips Label',
        selectAll: true,
        chips: false,
        renderValue: (value) => value,
    },
    render,
};

export const CheckboxMarker: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'CheckboxMarker Label',
        checkbox: true,
        checkboxMarker: 'Send',
        selectAll: true,
        chips: false,
        renderValue: (value) => value,
    },
    render,
};

export const SquaredChips: Story = {
    args: {
        options: [
            { label: 'Test', category: 'coding', value: 't1' },
            { label: 'Figma', category: 'UI/UX', value: 'f1' },
            { label: 'Adobe', category: 'UI/UX', value: 'a1' },
            { label: 'React', category: 'coding', value: 'r1' },
            { label: 'Jira', category: 'management', value: 'j1' },
        ],
        value: ['t1'],
        label: 'CheckboxMarker Label',
        checkbox: true,
        checkboxMarker: true,
        selectAll: true,
        chips: true,
        squaredChips: false,
        renderValue: (value) => value,
    },
    render,
};

// SELECT_ALL_LABEL: string;
// HIDE_ALL_LABEL: string;
// SELECTED_ITEMS_LABEL: string;
