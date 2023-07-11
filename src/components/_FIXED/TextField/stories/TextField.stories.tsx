/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import TextField from '../TextField';
import InputSearch from '../InputSearch';

const meta: Meta<typeof TextField> = {
    title: 'Inputs/TextField',
    component: TextField,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {},
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        multiline: true,
        label: 'Align Actions',
        value: 'text...\ntext...\ntext...',
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        multiline: true,
        label: 'Align Actions External',
        value: 'text...\ntext...\ntext...',
    },
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'email',
        name: 'email',
        label: 'Auto Complete',
    },
};

export const CmpSpacing: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        cmpSpacing: 6,
        label: 'Cmp Spacing',
        value: 'some text to see spacing...',
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 'color active with palette and custom color',
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 'color label with palette and custom color',
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 'color text with palette and custom color',
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 'disabled text',
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <TextField endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <TextField
            endCmpExternal={<SendIcon />}
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: 'some text with error',
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 'focused text',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 'text field is default with fullWidth',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 'some text...',
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <TextField
            hideStartActionsOnEmpty={false}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Not Hide Start Actions OnEmpty"
        />
    </Stack>
);

export const Label: Story = {
    args: {
        label: 'Some Label Input',
    },
};

export const Margin_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField margin="normal" label="Normal Margin" />
        <TextField margin="dense" label="Dense Margin" />
    </Stack>
);

export const maxRows: Story = {
    args: {
        maxRows: 3,
        label: 'MaxRows 3',
    },
};

export const Multiline: Story = {
    args: {
        multiline: true,
        label: 'Multiline field',
    },
};

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const DebounceDelay: Story = {
    args: {
        label: 'Debounce Delay',
        debounceDelay: 400,
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('some text for show only');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
    },
};

export const Rows: Story = {
    args: {
        rows: 3,
        label: 'Rows 3',
    },
};

export const StartCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <TextField startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <TextField startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
    </Stack>
);

export const Type: Story = {
    args: {
        type: 'password',
        label: 'Type Password',
        value: 'mui simple is the best library package forever',
    },
};

export const Value: Story = {
    args: {
        value: 'text value here',
    },
};

export const Variant_ = (args): ReactElement => (
    <Stack spacing={3}>
        <TextField variant="filled" label="filled variant" value="some text here" />
        <TextField variant="outlined" label="outlined variant" value="some text here" />
        <TextField variant="standard" label="standard variant" value="some text here" />
    </Stack>
);
