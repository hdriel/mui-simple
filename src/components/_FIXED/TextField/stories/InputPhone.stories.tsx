/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import InputPhone from '../InputPhone';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof InputPhone> = {
    title: 'Inputs/Inputs/InputPhone',
    component: InputPhone,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

const value = '0512345678';

export const Default: Story = {
    args: {},
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value,
    },
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value,
    },
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value,
    },
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        multiline: true,
        label: 'Align Actions',
        value,
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Phone',
        endCmpExternal: 'Fingerprint',
        multiline: true,
        label: 'Align Actions External',
        value,
    },
};

export const AutoComplete: Story = {
    args: {
        autoComplete: 'phone',
        name: 'phone',
        label: 'Auto Complete',
    },
};

export const CmpSpacing: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Phone',
        endCmp: 'Fingerprint',
        cmpSpacing: 6,
        label: 'Cmp Spacing',
        value,
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value,
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value,
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value,
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        disabled: true,
        value,
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputPhone endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputPhone
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
        value,
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value,
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value,
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value,
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputPhone
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
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPhone margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <InputPhone
                {...args}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    action('onChange')(e.target.value);
                }}
            />
        );
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('some text for show only');
        return <InputPhone {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Required: Story = {
    args: {
        required: true,
        label: 'Required field',
    },
};

export const StartCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputPhone startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputPhone startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
    </Stack>
);

export const Value: Story = {
    args: {
        value: '0501234567',
    },
};

export const Variant_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputPhone variant="filled" label="filled variant" value="some text here" />
        <InputPhone variant="outlined" label="outlined variant" value="some text here" />
        <InputPhone variant="standard" label="standard variant" value="some text here" />
    </Stack>
);

export const CopyAction: Story = {
    args: {
        value: '0501234567',
        copyAction: true,
        copyMessage: 'COPIED!',
        copyTooltip: 'copy tooltip',
    },
};
