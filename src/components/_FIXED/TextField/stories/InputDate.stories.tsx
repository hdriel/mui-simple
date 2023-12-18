import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
    args: {
        variant: 'standard',
    },
};

export const Variant: Story = {
    args: {
        label: 'standard variant field',
        variant: 'standard',
    },
};

export const HelperText: Story = {
    args: {
        helperText: 'enter your birthdate',
    },
};

export const DateLimits: Story = {
    args: {
        minDate: dayjs().startOf('month').toDate(),
        maxDate: dayjs().endOf('month').toDate(),
    },
};

export const DisablePast: Story = {
    args: {
        disablePast: true,
    },
};

export const DisableFuture: Story = {
    args: {
        disableFuture: true,
    },
};
export const DisableOpenPicker: Story = {
    args: {
        disableOpenPicker: true,
    },
};

export const Required: Story = {
    args: {
        label: 'req',
        required: true,
    },
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
