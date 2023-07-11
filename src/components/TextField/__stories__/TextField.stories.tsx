// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import TextField from '../TextField';

const meta: Meta<typeof TextField> = {
    title: 'Inputs/TextField',
    component: TextField,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {},
};

// alignActions: 'baseline',
// alignActionsExternal: 'baseline',
// autoComplete: 'off',
// cmpSpacing: 2,
// colorActive: undefined,
// colorLabel: undefined,
// colorText: undefined,
// disabled: undefined,
// endCmp: undefined,
// endCmpExternal: undefined,
// error: undefined,
// focused: undefined,
// fullWidth: true,
// helperText: undefined,
// hideStartActionsOnEmpty: true,
// id: undefined,
// label: undefined,
// margin: undefined,
// maxRows: undefined,
// multiline: undefined,
// name: undefined,
// onChange: undefined,
// readOnly: undefined,
// required: undefined,
// rows: undefined,
// startCmp: undefined,
// startCmpExternal: undefined,
// type: 'text',
// value: undefined,
// variant: 'outlined',

/*
export const Checked: Story = {
    args: {
        value: '',
    },
};

export const OnChange: Story = {
    args: {
        checked: true,
        children: 'on change event',
    },
    render: (args) => {
        const [value, onChange] = useState(args.checked);
        return <TextField {...args} value={value} onChange={(e, v) => onChange(v)} />;
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
            <TextField
                {...args}
                value={value}
                onChange={(e, v) => onChange(v)}
                checkedIcon="Favorite"
                icon="FavoriteBorder"
            />
        );
    },
};

const ColoredTextField = () => {
    return (
        <Stack direction="row" spacing={3}>
            <TextField checked color={'#00ab92'}>
                #00ab92
            </TextField>
            <TextField checked color={'primary'}>
                Primary
            </TextField>
            <TextField checked color={'secondary'}>
                Secondary
            </TextField>
        </Stack>
    );
};
export const ColoredTextField_ = () => <ColoredTextField />;

export const DisabledTextField: Story = {
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

export const IconTextField: Story = {
    args: {
        icon: <FingerprintIcon />,
        checkedIcon: <SendIcon />,
        children: 'checkbox with icons',
    },
};

export const LabelTextField: Story = {
    args: {
        label: 'some label',
    },
};

const LabelPlacementTextField = () => {
    return (
        <Stack direction="row" spacing={4}>
            <TextField labelPlacement="top">top label</TextField>
            <TextField labelPlacement="start">start label</TextField>
            <TextField labelPlacement="bottom">bottom label</TextField>
            <TextField labelPlacement="end">end label</TextField>
        </Stack>
    );
};
export const LabelPlacementTextField_ = () => <LabelPlacementTextField />;

export const ReadOnlyTextField: Story = {
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

const SizeTextField = () => {
    return (
        <Stack direction="row" spacing={3}>
            <TextField size="small">small checkbox</TextField>
            <TextField size="medium">medium checkbox</TextField>
        </Stack>
    );
};
export const SizeTextField_ = () => <SizeTextField />;

export const TextColorTextField: Story = {
    args: {
        textColor: '#FF0000',
        children: 'red text',
    },
};
*/
