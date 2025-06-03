import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';

import InputTime from '../InputTime';
import LocalizationProvider from '../LocalizationProvider';

const meta: Meta<typeof InputTime> = {
    title: 'Inputs/Inputs/Pickers/InputTime',
    component: InputTime,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <LocalizationProvider>
                <Story />
            </LocalizationProvider>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof InputTime>;

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <InputTime
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
    args: {
        variant: 'standard',
    },
    render,
};

export const Variant: Story = {
    args: {
        label: 'standard variant field',
        variant: 'standard',
    },
    render,
};

export const HelperText: Story = {
    args: {
        helperText: 'enter your birthdate',
    },
    render,
};

export const TimeLimits: Story = {
    args: {
        minTime: dayjs().startOf('day').add(2, 'hours').toDate(),
        maxTime: dayjs().endOf('day').subtract(2, 'hours').toDate(),
    },
    render,
};

export const DisablePast: Story = {
    args: {
        disablePast: true,
    },
    render,
};

export const DisableFuture: Story = {
    args: {
        disableFuture: true,
    },
    render,
};
export const DisableOpenPicker: Story = {
    args: {
        disableOpenPicker: true,
    },
    render,
};

export const Required: Story = {
    args: {
        label: 'req',
        required: true,
    },
    render,
};

export const PickerVariant: Story = {
    args: {},
    render: (args) => {
        return (
            <Stack spacing={2}>
                <InputTime {...args} label="desktop picker" pickerVariant="desktop" />
                <InputTime {...args} label="mobile picker" pickerVariant="mobile" />
                <InputTime {...args} label="static picker" pickerVariant="static" />
            </Stack>
        );
    },
};
