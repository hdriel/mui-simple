import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

import InputDate from '../InputDate';
import LocalizationProvider from '../LocalizationProvider';

const meta: Meta<typeof InputDate> = {
    title: 'Inputs/Inputs/InputDate',
    component: InputDate,
    tags: ['autodocs'],
    decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof InputDate>;

export const Default: Story = {
    args: {},
};

export const ValueString: Story = {
    args: {
        label: 'Date',
        value: '2021-12-18',
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, onChange] = useState(args.value);
        return (
            <InputDate
                {...args}
                value={value}
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(typeof value, value);
                    onChange(value);
                }}
            />
        );
    },
};

export const ValueTimestamp: Story = {
    args: {
        label: 'Date',
        value: Date.now(),
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, onChange] = useState(args.value);
        return (
            <InputDate
                {...args}
                value={value}
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(typeof value, value);
                    onChange(value);
                }}
            />
        );
    },
};

export const ValueDate: Story = {
    args: {
        label: 'Date',
        value: new Date(),
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, onChange] = useState(args.value);
        return (
            <InputDate
                {...args}
                value={value}
                onChange={(e) => {
                    const value = e.target.value;
                    console.log(typeof value, value);
                    onChange(value);
                }}
            />
        );
    },
};

export const OnChange: Story = {
    args: {
        label: 'Date',
        value: new Date(),
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, onChange] = useState(args.value);
        return (
            <InputDate
                {...args}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        );
    },
};

export const TextAlign: Story = {
    args: {
        label: 'Text Align',
        textAlign: 'center',
        value: Date.now(),
    },
};

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: Date.now(),
    },
};

export const LetterSpacing: Story = {
    args: {
        label: 'Letter Spacing',
        letterSpacing: '5px',
        value: Date.now(),
    },
};

export const AlignActions: Story = {
    args: {
        alignActions: 'center',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        label: 'Align Actions',
        value: Date.now(),
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        label: 'Align Actions External',
        value: Date.now(),
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
        value: Date.now(),
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: Date.now(),
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: Date.now(),
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: Date.now(),
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: Date.now(),
        disabled: true,
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputDate endCmp="Send" label="End Cmp" value={Date.now()} />
        <InputDate endCmp={<SendIcon />} label="End Cmp" value={Date.now()} />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputDate endCmpExternal="Send" label="End Cmp External" value={Date.now()} />
        <InputDate endCmpExternal={<SendIcon />} label="End Cmp External" value={Date.now()} />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: Date.now(),
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: Date.now(),
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: Date.now(),
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: Date.now(),
    },
};

export const MinDate: Story = {
    args: {
        label: '-3 day as min Date',
        value: Date.now(),
        minDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    },
};

export const MaxDate: Story = {
    args: {
        label: '+3 day as max Date',
        value: Date.now(),
        maxDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    },
};

export const MinMaxDate: Story = {
    args: {
        label: '-3d,+3d as min-max Date',
        value: Date.now(),
        minDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        maxDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputDate
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputDate
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
};

export const Margin_ = (args): ReactElement => (
    <Stack>
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputDate {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputDate {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputDate {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const OnChangeText: Story = {
    args: {
        label: 'text field state',
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('');
        return <InputDate {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState(0);
        return <InputDate {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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
        <InputDate {...args} startCmp="Send" label="Start Cmp" value={Date.now()} />
        <InputDate {...args} startCmp={<SendIcon />} label="Start Cmp" value={Date.now()} />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputDate {...args} startCmpExternal="Send" label="Start Cmp External" value={Date.now()} />
        <InputDate {...args} startCmpExternal={<SendIcon />} label="Start Cmp External" value={Date.now()} />
    </Stack>
);

export const Variant_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputDate {...args} variant="filled" label="filled variant" value={Date.now()} />
        <InputDate {...args} variant="outlined" label="outlined variant" value={Date.now()} />
        <InputDate {...args} variant="standard" label="standard variant" value={Date.now()} />
    </Stack>
);
