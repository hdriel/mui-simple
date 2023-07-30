/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import InputColor from '../InputColor';

const meta: Meta<typeof InputColor> = {
    title: 'Inputs/Inputs/InputColor',
    component: InputColor,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputColor>;

export const Default: Story = {
    args: {},
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        label: 'Align Actions',
        value: '#F0F0F0',
    },
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        label: 'Align Actions External',
        value: '#F0F0F0',
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
        value: '#F0F0F0',
    },
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: '#F0F0F0',
    },
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: '#F0F0F0',
    },
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: '#F0F0F0',
    },
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: '#F0F0F0',
        disabled: true,
    },
};

export const EndCmp_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputColor endCmp="Send" label="End Cmp" value={'#ff0f0f'} />
        <InputColor endCmp={<SendIcon />} label="End Cmp" value={'#ff0f0f'} />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputColor endCmpExternal="Send" label="End Cmp External" value={'#ff0f0f'} />
        <InputColor endCmpExternal={<SendIcon />} label="End Cmp External" value={'#ff0f0f'} />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: '#F0F0F0',
    },
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: '#F0F0F0',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: '#F0F0F0',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: '#F0F0F0',
    },
};

export const HideStartActionsOnEmpty_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputColor
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputColor
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
        <InputColor label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputColor margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputColor margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const maxRows: Story = {
    args: {
        maxRows: 3,
        label: 'MaxRows 3',
    },
};

export const OnChangeColor: Story = {
    args: {
        label: 'color field state',
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <InputColor {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const DebounceDelay: Story = {
    args: {
        label: 'Debounce Delay',
        debounceDelay: 400,
    },
    render: (args) => {
        const [value, setValue] = useState('warning.main');
        return <InputColor {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
    },
    render: (args) => {
        const [value, setValue] = useState('secondary');
        return <InputColor {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
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
        <InputColor startCmp="Send" label="Start Cmp" value={'#ff0f0f'} />
        <InputColor startCmp={<SendIcon />} label="Start Cmp" value={'#ff0f0f'} />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement => (
    <Stack spacing={3}>
        <InputColor startCmpExternal="Send" label="Start Cmp External" value={'#ff0f0f'} />
        <InputColor startCmpExternal={<SendIcon />} label="Start Cmp External" value={'#ff0f0f'} />
    </Stack>
);

export const Value: Story = {
    args: {
        value: '#F0F0F0',
    },
};

export const Variant_ = (args): ReactElement => {
    const [value, setValue] = useState('#ff0f0f');

    return (
        <Stack spacing={3}>
            {['filled', 'outlined', 'standard'].map((variant) => (
                <InputColor
                    {...args}
                    key={variant}
                    variant={variant}
                    label={`${variant} variant`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ))}
        </Stack>
    );
};

export const CopyMessage: Story = {
    args: {
        copyMessage: 'Hi copy you color to clipboard',
    },
};

export const OpacityAction: Story = {
    args: {
        opacityAction: false,
    },
};

export const OpacityLabel: Story = {
    args: {
        opacityAction: true,
        opacityLabel: 'Change color opacity action',
    },
};
export const OpacityIcon: Story = {
    args: {
        opacityAction: true,
        opacityIcon: 'AcUnit',
    },
};

export const CopyAction: Story = {
    args: {
        copyAction: false,
    },
    render: (args) => {
        const [value, setValue] = useState('');
        return <InputColor {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const CopyIcon: Story = {
    args: {
        copyAction: true,
        copyIcon: 'ContentCut',
    },
};
