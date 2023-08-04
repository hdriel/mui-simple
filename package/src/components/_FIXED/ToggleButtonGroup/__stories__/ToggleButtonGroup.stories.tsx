import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormatColorFill as FormatColorFillIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import ToggleButtonGroup from '../ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroup> = {
    title: 'Inputs/ToggleButtonGroup',
    component: ToggleButtonGroup,
    tags: ['autodocs'],
};

export default meta;

const data1 = [
    { value: 'left', component: 'FormatAlignLeft' },
    { value: 'center', component: 'FormatAlignCenter' },
    { value: 'right', component: 'FormatAlignRight' },
    { value: 'justify', component: 'FormatAlignJustify' },
];

const data2 = [
    { value: 'bold', component: 'FormatBold' },
    { value: 'italic', component: 'FormatItalic' },
    { value: 'underlined', component: 'FormatUnderlined' },
    {
        value: 'color',
        component: (
            <>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
            </>
        ),
        disabled: true,
    },
];

const data3 = [
    { value: 'web', component: 'Web ' },
    { value: 'android', component: 'Android ' },
    { value: 'ios', component: 'iOS ' },
];

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
    args: {
        data: data1,
    },
};

export const Color_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} color="warning" />
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} color={'#039287'} />
    </Box>
);

export const Orientation: Story = {
    args: {
        data: data1,
        orientation: 'vertical',
    },
};

export const Size_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} size="small" />
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} size="medium" />
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} size="large" />
    </Box>
);

export const Exclusive: Story = {
    args: {
        data: data1,
        value: data1[0].value,
        exclusive: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <ToggleButtonGroup {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const FullWidth: Story = {
    args: {
        data: data1,
        fullWidth: true,
    },
};

export const DisableRipple: Story = {
    args: {
        data: data1,
        value: data1[0].value,
        disableRipple: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <ToggleButtonGroup {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const EnforceValueSet: Story = {
    args: {
        data: data1,
        value: data1[0].value,
        enforceValueSet: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <ToggleButtonGroup {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const Data_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <ToggleButtonGroup {...args} data={data1} value={data1[0].value} />
        <ToggleButtonGroup {...args} data={data2} value={data2[0].value} />
        <ToggleButtonGroup {...args} data={data3} value={data3[0].value} />
    </Box>
);
