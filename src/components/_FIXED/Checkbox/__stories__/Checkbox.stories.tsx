// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Checkbox from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const render = (args) => {
    const [value, onChange] = useState(args.checked);
    return (
        <Checkbox
            {...args}
            value={value}
            onChange={(e, v) => {
                args.onChange?.(e, v);
                onChange(v);
            }}
        />
    );
};

export const Default: Story = {
    args: {
        children: 'checkbox',
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        children: 'Checked',
    },
    render,
};

export const OnChange: Story = {
    args: {
        checked: true,
        children: 'on change event',
    },
    render,
};
export const CheckedIcon: Story = {
    args: {
        checked: true,
        label: 'on change event',
    },
    render: (args) => {
        const [value, onChange] = useState(args.checked);
        return (
            <Checkbox
                {...args}
                value={value}
                onChange={(e, v) => onChange(v)}
                checkedIcon="Favorite"
                icon="FavoriteBorder"
            />
        );
    },
};

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Checkbox {...args} checked color={'#00ab92'}>
            #00ab92
        </Checkbox>
        <Checkbox {...args} checked color="primary">
            Primary
        </Checkbox>
        <Checkbox {...args} checked color="secondary">
            Secondary
        </Checkbox>
    </Stack>
);

export const Margin_ = (args) => (
    <Stack direction="column" spacing={3}>
        <Checkbox {...args} checked label="margin 0" margin={0} wrapperStyle={{ border: '1px solid black' }}>
            #00ab92
        </Checkbox>
        <Checkbox {...args} checked label="margin 5px 10px" margin="5px 10px">
            Primary
        </Checkbox>
        <Checkbox {...args} checked label="margin default" wrapperStyle={{ border: '1px solid black' }}>
            Secondary
        </Checkbox>
    </Stack>
);

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'disabled checkbox',
    },
    render,
};

export const FontSize: Story = {
    args: {
        fontSize: 35,
        children: 'FontSize checkbox',
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'some helper text here',
        children: 'checkbox with helper text',
    },
    render,
};

export const Icon: Story = {
    args: {
        icon: <FingerprintIcon />,
        checkedIcon: <SendIcon />,
        children: 'checkbox with icons',
    },
    render,
};

export const Label: Story = {
    args: {
        label: 'some label',
    },
    render,
};

export const LabelPlacement_ = (args) => (
    <Stack direction="row" spacing={4}>
        <Checkbox {...args} labelPlacement="top">
            top label
        </Checkbox>
        <Checkbox {...args} labelPlacement="start">
            start label
        </Checkbox>
        <Checkbox {...args} labelPlacement="bottom">
            bottom label
        </Checkbox>
        <Checkbox {...args} labelPlacement="end">
            end label
        </Checkbox>
    </Stack>
);

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        checked: true,
        children: 'readOnly checkbox',
    },
    render,
};

export const Required: Story = {
    args: {
        required: true,
        children: 'required checkbox',
    },
    render,
};

export const Size_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Checkbox {...args} size="small">
            small checkbox
        </Checkbox>
        <Checkbox {...args} size="medium">
            medium checkbox
        </Checkbox>
    </Stack>
);

export const TextColor: Story = {
    args: {
        textColor: '#FF0000',
        children: 'red text',
    },
    render,
};
