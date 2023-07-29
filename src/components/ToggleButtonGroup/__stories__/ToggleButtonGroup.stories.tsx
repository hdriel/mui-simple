import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    Send as SendIcon,
    Fingerprint as FingerprintIcon,
    FormatAlignLeft as FormatAlignLeftIcon,
    FormatAlignCenter as FormatAlignCenterIcon,
    FormatAlignRight as FormatAlignRightIcon,
    FormatAlignJustify as FormatAlignJustifyIcon,
    FormatBold as FormatBoldIcon,
    FormatItalic as FormatItalicIcon,
    FormatUnderlined as FormatUnderlinedIcon,
    FormatColorFill as FormatColorFillIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Stack } from '@mui/material';

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
    { value: 'web', component: 'Web' },
    { value: 'android', component: 'Android' },
    { value: 'ios', component: 'iOS' },
];

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
    args: {},
};
