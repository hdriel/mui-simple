import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';

import InputDate from '../InputDate';
import LocalizationProvider from '../LocalizationProvider';

const meta: Meta<typeof InputDate> = {
    title: 'Inputs/Inputs/Pickers/InputDate',
    component: InputDate,
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

type Story = StoryObj<typeof InputDate>;

const render = (args) => {
    const [value, setValue] = useState(args.value);
    return (
        <InputDate
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

export const DateLimits: Story = {
    args: {
        minDate: dayjs().startOf('month').toDate(),
        maxDate: dayjs().endOf('month').toDate(),
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
                <InputDate {...args} label="desktop picker" pickerVariant="desktop" />
                <InputDate {...args} label="mobile picker" pickerVariant="mobile" />
                <InputDate {...args} label="static picker" pickerVariant="static" />
            </Stack>
        );
    },
};

export const Value: Story = {
    args: {
        label: 'Date',
        value: new Date(),
    },
    render,
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        label: 'Date',
        value: new Date(),
    },
    render,
};
