/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import InputPassword from '../InputPassword';
import { Stack } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const meta: Meta<typeof InputPassword> = {
    title: 'Inputs/Inputs/InputPassword',
    component: InputPassword,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
    args: {},
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: 'center text',
    },
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 'right to left direction',
    },
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: 'letter spacing',
    },
};

export const CopyAction: Story = {
    args: {
        copyAction: true,
        copyMessage: 'Copied!',
        copyTooltip: 'COPY PASS TO CLIPBOARD',
        copyCmp: 'CopyAll',
        showPasswordAction: true,
        generateRandomAction: false,
        label: 'Copy Action Props',
        value: 'mui-simple password',
    },
};

export const GenerateRandomAction: Story = {
    args: {
        generateRandomAction: true,
        generateRandom: { length: 6, lowercase: false, numbers: true, uppercase: true, symbol: false },
        generatePasswordTooltip: 'generate password',
        label: 'Generate Random Action Props',
        value: 'generate by click action icon',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ShowPasswordAction: Story = {
    args: {
        generateRandomAction: false,
        copyAction: false,
        showPasswordAction: true,
        showPasswordTooltip: 'show',
        label: 'Show Password Props',
        value: 'mui-simple password',
    },
};

export const HidePasswordOnClickAway: Story = {
    args: {
        generateRandomAction: false,
        copyAction: false,
        showPasswordAction: true,
        hidePasswordOnClickAway: false,
        label: 'Hide Password On Click Away',
        value: 'mui-simple password',
    },
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
        disabled: true,
    },
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputPassword endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputPassword
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

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword hideStartActionsOnEmpty={true} startCmp="Send" label="Hide Start Actions OnEmpty" />
        <InputPassword hideStartActionsOnEmpty={false} startCmp="Send" label="Not Hide Start Actions OnEmpty" />
    </Stack>
);

export const Label: Story = {
    args: {
        label: 'Some Label Input',
    },
};

export const Margin_ = (args): ReactElement | React.ReactNode => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPassword label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPassword margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputPassword margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
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
        return <InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('some text for show only');
        return <InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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

export const StartCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputPassword startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputPassword startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
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

export const Variant_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputPassword variant="filled" label="filled variant" value="some text here" />
        <InputPassword variant="outlined" label="outlined variant" value="some text here" />
        <InputPassword variant="standard" label="standard variant" value="some text here" />
    </Stack>
);
