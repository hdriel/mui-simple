import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import RadioButtonsGroup from '../RadioButtonsGroup';

const meta: Meta<typeof RadioButtonsGroup> = {
    title: 'Inputs/RadioButtonsGroup',
    component: RadioButtonsGroup,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButtonsGroup>;

const data = [
    { label: 'Female', value: '0' },
    { label: 'Male', value: '1' },
    { label: 'Other', value: '2', disabled: true },
];

export const Default: Story = {
    args: {
        data,
    },
};

export const CheckedIcon: Story = {
    args: {
        checkedIcon: 'Send',
        data,
        value: data[0].value,
    },
};

export const Color: Story = {
    args: {
        color: '#00b69c',
        data,
        value: data[0].value,
    },
};

export const Data: Story = {
    args: {
        data: [
            { label: 'Javascript', value: 'javascript' },
            { label: 'C#', value: 'C#', disabled: false },
            { label: 'Pyhton', value: 'python' },
        ],
        value: 'javascript',
    },
};

export const DataString: Story = {
    args: {
        data: ['react', 'angular', 'vue'],
        value: 'react',
    },
};

export const DirectionRow: Story = {
    args: {
        data,
        direction: 'row',
    },
};

export const DisableRipple: Story = {
    args: {
        data,
        disableRipple: true,
    },
};

export const HelperText: Story = {
    args: {
        data,
        helperText: 'choose your gender',
    },
};

export const Icon: Story = {
    args: {
        data,
        icon: 'Fingerprint',
    },
};

export const IgnoreLabelColor: Story = {
    args: {
        data,
        color: 'secondary',
        value: data[0].value,
        ignoreLabelColor: true,
    },
};

export const Label: Story = {
    args: {
        data,
        label: 'Gender',
        color: 'warning',
        value: data[0].value,
    },
};

export const OnChange: Story = {
    args: {
        data,
    },
    render: (args) => {
        const [value, setValue] = useState(data[0].value);
        return <RadioButtonsGroup value={value} onChange={(e) => setValue(e.target.value)} {...args} />;
    },
};

const Size = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <RadioButtonsGroup data={data} direction="row" size="small" />
        <RadioButtonsGroup data={data} direction="row" size="medium" />
    </Box>
);
export const Size_ = <Size />;

const Variant = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <RadioButtonsGroup data={data} label="Gender" direction="row" />
        <RadioButtonsGroup data={data} label="Gender" direction="row" variant="outlined" />
    </Box>
);
export const Variant_ = <Variant />;
