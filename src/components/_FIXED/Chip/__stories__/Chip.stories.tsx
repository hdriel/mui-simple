import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Stack } from '@mui/material';

import Chip from '../Chip';
import Avatar from '../../../Avatar/Avatar';

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

export const UseStyleBreadCrumb: Story = {
    args: {
        useStyleBreadCrumb: true,
        children: 'Bread Crumbs Style',
    },
};

export const AlignEndIconChip: Story = {
    args: {
        alignEndIcon: true,
        minWidth: 200,
        children: 'align end icon',
    },
};

export const AvatarChip: Story = {
    args: {
        avatar: <Avatar image="1.jpg" />,
        children: 'Avatar',
    },
};

const ColoredChip = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Chip color={'#00ab92'}>#00ab92</Chip>
            <Chip color={'primary'}>Primary</Chip>
            <Chip color={'secondary'}>Secondary</Chip>
        </Stack>
    );
};
export const ColoredChip_ = () => <ColoredChip />;

export const DisabledChip: Story = {
    args: {
        disabled: true,
        children: 'disabled chip',
    },
};

const EndIconChip = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Chip endIcon="Fingerprint">"Fingerprint" chip</Chip>
            <Chip endIcon={<FingerprintIcon />}>Fingerprint chip</Chip>
        </Stack>
    );
};
export const EndIconChip_ = () => <EndIconChip />;

export const LabelChip: Story = {
    args: {
        label: 'Label',
        children: 'Label chip',
    },
};

export const LinkChip: Story = {
    args: {
        link: 'http://google.com',
        children: 'google link',
    },
};

export const MinWidthChip: Story = {
    args: {
        minWidth: 300,
        children: 'min width chip',
    },
};

export const MultiLineChip: Story = {
    args: {
        multiLine: true,
        width: 100,
        children: `this is a multiline chip`,
    },
};

export const OnClickChip: Story = {
    args: {
        onClick: action('onClickChip'),
        children: `click me`,
    },
};

export const OnDeleteChip: Story = {
    args: {
        onDelete: action('onDeleteChip'),
        children: `delete me`,
    },
};

export const UnRoundedChip: Story = {
    args: {
        rounded: false,
        children: `rounded chip`,
    },
};

const SizeChip = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Chip size="small">small chip</Chip>
            <Chip size="medium">medium chip</Chip>
        </Stack>
    );
};
export const SizeChip_ = () => <SizeChip />;

const StartIconChip = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Chip startIcon="Send">"SendIcon" chip</Chip>
            <Chip startIcon={<SendIcon />}>SendIcon chip</Chip>
        </Stack>
    );
};
export const StartIconChip_ = () => <StartIconChip />;

export const TextColorChip: Story = {
    args: {
        textColor: '#FF0000',
        children: 'red text',
    },
};

export const WidthChip: Story = {
    args: {
        width: 150,
        children: 'width chip',
    },
};
