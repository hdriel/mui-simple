/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Send as SendIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import InputSearch from '../InputSearch';

const meta: Meta<typeof InputSearch> = {
    title: 'Inputs/Inputs/InputSearch',
    component: InputSearch,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputSearch>;

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <InputSearch
            {...args}
            value={value}
            onChange={(e) => {
                args.onChange?.(e);
                setValue(e.target.value);
            }}
        />
    );
};

export const Default: Story = {
    args: {},
    render,
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: 'center text',
    },
    render,
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 'right to left direction',
    },
    render,
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: 'letter spacing',
    },
    render,
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
    render,
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
    render,
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'email',
        name: 'email',
        label: 'Auto Complete',
    },
    render,
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
    render,
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: 'color active with palette and custom color',
    },
    render,
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: 'color label with palette and custom color',
    },
    render,
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: 'color text with palette and custom color',
    },
    render,
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: 'disabled text',
        disabled: true,
    },
    render,
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch {...args} endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputSearch
            {...args}
            endCmp={<SendIcon />}
            label="End Cmp"
            value="endCmp with mui icon name or mui icon element"
        />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch
            {...args}
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputSearch
            {...args}
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
    render,
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: 'focused text',
    },
    render,
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: 'text field is default with fullWidth',
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: 'some text...',
    },
    render,
};

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputSearch
            {...args}
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
    render,
};

export const Margin_ = (args): ReactElement | React.ReactNode => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputSearch {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputSearch {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputSearch {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
        value: '',
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
        value: 'some text for show only',
    },
    render,
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
    },
    render,
};

export const StartCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputSearch startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputSearch startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
    </Stack>
);

export const Value: Story = {
    args: {
        value: 'text value here',
    },
    render,
};

export const Variant_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputSearch variant="filled" label="filled variant" value="some text here" />
        <InputSearch variant="outlined" label="outlined variant" value="some text here" />
        <InputSearch variant="standard" label="standard variant" value="some text here" />
    </Stack>
);
