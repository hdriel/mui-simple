/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import InputText from '../InputText';
import { Stack } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const meta: Meta<typeof InputText> = {
    title: 'Inputs/Inputs/InputText',
    component: InputText,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
    args: {},
};

export const LimitIndicator: Story = {
    args: {
        limitIndicator: 20,
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ShowLimitIndicatorFrom: Story = {
    args: {
        showLimitIndicatorFrom: 5,
        limitIndicator: 20,
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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
    },
};

export const EndCmp = (): ReactElement => (
    <Stack spacing={3}>
        <InputText endCmp="Send" label="End Cmp" value="endCmp with mui icon name or mui icon element" />
        <InputText endCmp={<SendIcon />} label="End Cmp" value="endCmp with mui icon name or mui icon element" />
    </Stack>
);
export const EndCmp_ = (): ReactElement => <EndCmp />;

export const EndCmpExternal = (): ReactElement => (
    <Stack spacing={3}>
        <InputText
            endCmpExternal="Send"
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
        <InputText
            endCmpExternal={<SendIcon />}
            label="End Cmp External"
            value="endCmpExternal with mui icon name or mui icon element"
        />
    </Stack>
);
export const EndCmpExternal_ = (): ReactElement => <EndCmpExternal />;

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

export const HideStartActionsOnEmpty = (): ReactElement => (
    <Stack spacing={3}>
        <InputText hideStartActionsOnEmpty={true} startCmp="Send" label="Hide Start Actions OnEmpty" />
        <InputText hideStartActionsOnEmpty={false} startCmp="Send" label="Not Hide Start Actions OnEmpty" />
    </Stack>
);
export const HideStartActionsOnEmpty_ = (): ReactElement => <HideStartActionsOnEmpty />;

export const Label: Story = {
    args: {
        label: 'Some Label Input',
    },
};

export const Margin = (): ReactElement => (
    <Stack spacing={3}>
        <InputText margin="normal" label="Normal Margin" />
        <InputText margin="dense" label="Dense Margin" />
    </Stack>
);
export const Margin_ = (): ReactElement => <Margin />;

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
        return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('some text for show only');
        return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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

export const StartCmp = (): ReactElement => (
    <Stack spacing={3}>
        <InputText startCmp="Send" label="Start Cmp" value="with string mui icon name" />
        <InputText startCmp={<SendIcon />} label="Start Cmp" value="with mui icon element" />
    </Stack>
);
export const StartCmp_ = (): ReactElement => <StartCmp />;

export const StartCmpExternal = (): ReactElement => (
    <Stack spacing={3}>
        <InputText startCmpExternal="Send" label="Start Cmp External" value="with string mui icon name" />
        <InputText startCmpExternal={<SendIcon />} label="Start Cmp External" value="with mui icon element" />
    </Stack>
);
export const StartCmpExternal_ = (): ReactElement => <StartCmpExternal />;

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

export const Variant = (): ReactElement => (
    <Stack spacing={3}>
        <InputText variant="filled" label="filled variant" value="some text here" />
        <InputText variant="outlined" label="outlined variant" value="some text here" />
        <InputText variant="standard" label="standard variant" value="some text here" />
    </Stack>
);
export const Variant_ = (): ReactElement => <Variant />;
