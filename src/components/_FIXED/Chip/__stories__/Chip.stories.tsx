import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { action } from 'storybook/actions';
import { Stack } from '@mui/material';

import Chip from '../Chip';
import MuiAvatar from '../../Avatar/Avatar';

const meta: Meta<typeof Chip> = {
    title: 'Data-Display/Chip',
    component: Chip,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        children: 'chip',
    },
};

export const AlignEndIcon: Story = {
    args: {
        alignEndIcon: true,
        minWidth: 200,
        children: 'align end icon',
    },
};

export const Avatar: Story = {
    args: {
        avatar: <MuiAvatar image="1.jpg" />,
        children: 'Avatar',
    },
};

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Chip color={'#00ab92'}>#00ab92</Chip>
        <Chip color={'primary'}>Primary</Chip>
        <Chip color={'secondary'}>Secondary</Chip>
    </Stack>
);

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'disabled chip',
    },
};

export const EndIcon_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Chip endIcon="Fingerprint">"Fingerprint" chip</Chip>
        <Chip endIcon={<FingerprintIcon />}>Fingerprint chip</Chip>
    </Stack>
);

export const Label: Story = {
    args: {
        label: 'Label',
        children: 'Label chip',
    },
};

export const Link: Story = {
    args: {
        link: 'http://google.com',
        children: 'google link',
    },
};

export const MinWidth: Story = {
    args: {
        minWidth: 300,
        children: 'min width chip',
    },
};

export const MultiLine: Story = {
    args: {
        multiLine: true,
        width: 100,
        children: `this is a multiline chip`,
    },
};

export const OnClick: Story = {
    args: {
        onClick: action('onClickChip'),
        children: `click me`,
    },
};

export const OnDelete: Story = {
    args: {
        onDelete: action('onDeleteChip'),
        children: `delete me`,
    },
};

export const UnRounded: Story = {
    args: {
        rounded: false,
        children: `rounded chip`,
    },
};

export const Size_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Chip size="small">small chip</Chip>
        <Chip size="medium">medium chip</Chip>
    </Stack>
);

export const StartIcon_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Chip startIcon="Send">"SendIcon" chip</Chip>
        <Chip startIcon={<SendIcon />}>SendIcon chip</Chip>
    </Stack>
);

export const TextColor: Story = {
    args: {
        textColor: '#FF0000',
        children: 'red text',
    },
};

export const Width: Story = {
    args: {
        width: 150,
        children: 'width chip',
    },
};
