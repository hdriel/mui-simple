// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
};

export const OnChange: Story = {
    args: {
        checked: true,
        children: 'on change event',
    },
    render: (args) => {
        const [value, onChange] = useState(args.checked);
        return <Checkbox {...args} value={value} onChange={(e, v) => onChange(v)} />;
    },
};
export const CheckedIcon: Story = {
    args: {
        checked: true,
        children: 'on change event',
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

const Color = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Checkbox checked color={'#00ab92'}>
                #00ab92
            </Checkbox>
            <Checkbox checked color={'primary'}>
                Primary
            </Checkbox>
            <Checkbox checked color={'secondary'}>
                Secondary
            </Checkbox>
        </Stack>
    );
};
export const Color_ = () => <Color />;

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'disabled checkbox',
    },
};

export const FontSize: Story = {
    args: {
        fontSize: 35,
        children: 'FontSize checkbox',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'some helper text here',
        children: 'checkbox with helper text',
    },
};

export const Icon: Story = {
    args: {
        icon: <FingerprintIcon />,
        checkedIcon: <SendIcon />,
        children: 'checkbox with icons',
    },
};

export const Label: Story = {
    args: {
        label: 'some label',
    },
};

const LabelPlacement = () => {
    return (
        <Stack direction="row" spacing={4}>
            <Checkbox labelPlacement="top">top label</Checkbox>
            <Checkbox labelPlacement="start">start label</Checkbox>
            <Checkbox labelPlacement="bottom">bottom label</Checkbox>
            <Checkbox labelPlacement="end">end label</Checkbox>
        </Stack>
    );
};
export const LabelPlacement_ = () => <LabelPlacement />;

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        checked: true,
        children: 'readOnly checkbox',
    },
};

export const Required: Story = {
    args: {
        required: true,
        children: 'required checkbox',
    },
};

const Size = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Checkbox size="small">small checkbox</Checkbox>
            <Checkbox size="medium">medium checkbox</Checkbox>
        </Stack>
    );
};
export const Size_ = () => <Size />;

export const TextColor: Story = {
    args: {
        textColor: '#FF0000',
        children: 'red text',
    },
};
