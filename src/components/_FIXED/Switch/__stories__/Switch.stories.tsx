import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import Switch from '../Switch';

const meta: Meta<typeof Switch> = {
    title: 'Inputs/Switch',
    component: Switch,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {},
};

export const Checked: Story = {
    args: {
        checked: true,
    },
};

export const Color: Story = {
    args: {
        color: '#FF0000',
    },
};

export const Disabled: Story = {
    args: {
        checked: true,
    },
};

export const Error: Story = {
    args: {
        error: true,
        helperText: 'some error occurred',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'Helper text here',
    },
};

export const IsOnOff: Story = {
    args: {
        isOnOff: true,
    },
};

export const OnOffLabels: Story = {
    args: {
        isOnOff: true,
        OFF_LABEL: 'DOWN',
        ON_LABEL: 'UP',
    },
};

export const OnOffLabelSide: Story = {
    args: {
        isOnOff: true,
        labelPlacement: 'top',
    },
    render: (args) => {
        const [value, setValue] = useState(true);

        return (
            <Stack spacing={3} alignItems="flex-start">
                {['left', 'right'].map((onOffLabelSide: 'left' | 'right') => (
                    <Switch
                        {...args}
                        checked={value}
                        onChange={(e) => setValue(e.target.checked)}
                        key={onOffLabelSide}
                        onOffLabelSide={onOffLabelSide}
                        label={`${onOffLabelSide} label on-off`}
                    />
                ))}
            </Stack>
        );
    },
};

export const Label: Story = {
    args: {
        label: 'switch label',
    },
};

export const LabelPadding: Story = {
    args: {
        label: 'label padding 1em',
        labelPadding: '1em',
    },
};

export const Required: Story = {
    args: {
        label: 'switch',
        required: true,
    },
};

export const LabelPlacement_ = () => (
    <Stack spacing={3} alignItems="flex-start">
        {['top', 'start', 'bottom', 'end'].map((labelPlacement: 'top' | 'start' | 'bottom' | 'end') => (
            <Switch key={labelPlacement} labelPlacement={labelPlacement} label={`${labelPlacement} label checkbox`} />
        ))}
    </Stack>
);

export const Scale: Story = {
    args: {
        label: 'Scale',
        scale: 2.5,
    },
};

export const Size_ = (args) => (
    <Stack direction="row" spacing={3}>
        {['small', 'medium'].map((size) => (
            <Switch key={size} size={size} label={`${size} size`} {...args} />
        ))}
    </Stack>
);

export const TextColor: Story = {
    args: {
        label: 'label text color',
        textColor: '#2e0480',
    },
};

export const SwitchStyle_ = () => (
    <Stack spacing={3}>
        {['ant', 'android12', 'ios', 'mui'].map((switchStyle: 'ant' | 'android12' | 'ios' | 'mui') => (
            <Switch key={switchStyle} switchStyle={switchStyle} label={`'${switchStyle}' styles`} />
        ))}
    </Stack>
);

export const OnChange: Story = {
    args: {
        label: 'label controlled',
        textColor: 'primary',
        value: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <Switch {...args} value={value} onChange={(e, checked) => setValue(checked)} />;
    },
};
