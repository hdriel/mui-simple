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
    args: {
        useLocalizationProvider: true,
    },
};

export const PickerVariant: Story = {
    args: { useLocalizationProvider: true },
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
