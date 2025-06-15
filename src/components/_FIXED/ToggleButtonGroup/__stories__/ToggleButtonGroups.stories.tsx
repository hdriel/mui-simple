import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { FormatColorFill as FormatColorFillIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import ToggleButtonGroups from '../ToggleButtonGroups';
import ToggleButtonGroup from '../ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroups> = {
    title: 'Inputs/ToggleButtonGroups',
    component: ToggleButtonGroups,
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

type Story = StoryObj<typeof ToggleButtonGroups>;

const children = [
    <ToggleButtonGroup data={data1} value={data1[0].value} />,
    <ToggleButtonGroup data={data2} value={data2[1].value} />,
    <ToggleButtonGroup data={data3} value={data3[1].value} />,
];

export const Default: Story = {
    args: {
        children,
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children,
    },
};

export const DisableRipple: Story = {
    args: {
        disableRipple: true,
        children,
    },
};

export const JustifyContent_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <ToggleButtonGroups fullWidth justifyContent="space-around">
            {children}
        </ToggleButtonGroups>
        <ToggleButtonGroups fullWidth justifyContent="flex-end">
            {children}
        </ToggleButtonGroups>
        <ToggleButtonGroups fullWidth justifyContent="space-between">
            {children}
        </ToggleButtonGroups>
    </Box>
);
