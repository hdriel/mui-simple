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

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <InputColor
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

export const Direction: Story = {
    args: {
        label: 'RTL Direction',
        direction: 'rtl',
        value: 'right to left direction',
    },
    render,
};

export const AlignActions: Story = {
    args: {
        alignActions: 'flex-start',
        startCmp: 'Email',
        endCmp: 'Fingerprint',
        label: 'Align Actions',
        value: '#F0F0F0',
    },
    render,
};

export const AlignActionsExternal: Story = {
    args: {
        alignActions: 'flex-start',
        startCmpExternal: 'Email',
        endCmpExternal: 'Fingerprint',
        label: 'Align Actions External',
        value: '#F0F0F0',
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
        value: '#F0F0F0',
    },
    render,
};

export const ColorActive: Story = {
    args: {
        colorActive: 'warning',
        label: 'Color Active',
        value: '#F0F0F0',
    },
    render,
};

export const ColorLabel: Story = {
    args: {
        colorLabel: 'success',
        label: 'Color Label',
        value: '#F0F0F0',
    },
    render,
};

export const ColorText: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Color Text',
        value: '#F0F0F0',
    },
    render,
};

export const Disabled: Story = {
    args: {
        colorText: '#D10DAA',
        label: 'Disabled',
        value: '#F0F0F0',
        disabled: true,
    },
    render,
};

export const EndCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputColor {...args} endCmp="Send" label="End Cmp" value={'#ff0f0f'} />
        <InputColor {...args} endCmp={<SendIcon />} label="End Cmp" value={'#ff0f0f'} />
    </Stack>
);

export const EndCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputColor {...args} endCmpExternal="Send" label="End Cmp External" value={'#ff0f0f'} />
        <InputColor {...args} endCmpExternal={<SendIcon />} label="End Cmp External" value={'#ff0f0f'} />
    </Stack>
);

export const Error: Story = {
    args: {
        error: true,
        label: 'With Error',
        value: '#F0F0F0',
    },
    render,
};

export const Focused: Story = {
    args: {
        focused: true,
        label: 'Focused',
        value: '#F0F0F0',
    },
    render,
};

export const FullWidth: Story = {
    args: {
        fullWidth: false,
        label: 'Not FullWidth',
        value: '#F0F0F0',
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helperText',
        label: 'HelperText',
        value: '#F0F0F0',
    },
    render,
};

export const HideStartActionsOnEmpty_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputColor
            {...args}
            hideStartActionsOnEmpty={true}
            startCmp="Send"
            endCmp="Fingerprint"
            label="Hide Start Actions OnEmpty"
        />
        <InputColor
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
        <InputColor {...args} label="None Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputColor {...args} margin="normal" label="Normal Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
        <InputColor {...args} margin="dense" label="Dense Margin" />
        <div style={{ backgroundColor: '#8d8773', textAlign: 'center' }}>some text for see the margin</div>
    </Stack>
);

export const maxRows: Story = {
    args: {
        maxRows: 3,
        label: 'MaxRows 3',
    },
    render,
};

export const OnChangeColor: Story = {
    args: {
        label: 'color field state',
        value: '',
    },
    render,
};

export const DebounceDelay: Story = {
    args: {
        label: 'Debounce Delay',
        debounceDelay: 400,
        value: 'warning.main',
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Read Only',
        value: 'secondary',
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

export const Rows: Story = {
    args: {
        rows: 3,
        label: 'Rows 3',
    },
    render,
};

export const StartCmp_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputColor {...args} startCmp="Send" label="Start Cmp" value={'#ff0f0f'} />
        <InputColor {...args} startCmp={<SendIcon />} label="Start Cmp" value={'#ff0f0f'} />
    </Stack>
);

export const StartCmpExternal_ = (args): ReactElement | React.ReactNode => (
    <Stack spacing={3}>
        <InputColor {...args} startCmpExternal="Send" label="Start Cmp External" value={'#ff0f0f'} />
        <InputColor {...args} startCmpExternal={<SendIcon />} label="Start Cmp External" value={'#ff0f0f'} />
    </Stack>
);

export const Value: Story = {
    args: {
        value: '#F0F0F0',
    },
    render,
};

export const Variant_ = (args): ReactElement | React.ReactNode => {
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
    render,
};

export const OpacityAction: Story = {
    args: {
        opacityAction: false,
    },
    render,
};

export const OpacityLabel: Story = {
    args: {
        opacityAction: true,
        opacityLabel: 'Change color opacity action',
    },
    render,
};
export const OpacityIcon: Story = {
    args: {
        opacityAction: true,
        opacityIcon: 'AcUnit',
    },
    render,
};

export const CopyAction: Story = {
    args: {
        copyAction: false,
        value: '',
    },
    render,
};

export const CopyIcon: Story = {
    args: {
        copyAction: true,
        copyIcon: 'ContentCut',
    },
    render,
};
