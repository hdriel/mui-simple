import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Stack, Box } from '@mui/material';

import Button from '../Button';

const meta: Meta<typeof Button> = {
    title: 'Inputs/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Button color={'#00ab92'}>#00ab92</Button>
        <Button color={'primary'}>Primary</Button>
        <Button color={'secondary'}>Secondary</Button>
    </Stack>
);

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};

export const DisableRipple: Story = {
    args: {
        disableRipple: true,
        children: 'disableRipple Button',
    },
};

export const EndIcon_ = (args) => (
    <Stack spacing={3}>
        <Button endIcon="Fingerprint">"Fingerprint" Button</Button>
        <Button endIcon={<FingerprintIcon />}>Fingerprint Button</Button>
    </Stack>
);

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'fullWidth Button',
    },
};

export const Icon_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Button icon="Fingerprint">"Fingerprint" IconButton</Button>
        <Button icon={<FingerprintIcon />}>Fingerprint IconButton</Button>
    </Box>
);

export const IsLoading: Story = {
    args: {
        isLoading: true,
        loadingLabel: 'Loading...',
        children: 'Label Button',
    },
};

export const Label: Story = {
    args: {
        label: 'Label',
        children: 'Label Button',
    },
};

export const Link: Story = {
    args: {
        link: 'https://google.com',
        children: 'Google Link Button',
    },
};

export const LoadingIconPosition_ = (args) => (
    <Stack spacing={3}>
        <Button isLoading loadingLabel="Loading...">
            Loading Button
        </Button>
        <Button isLoading loadingLabel="Loading..." loadingIconPosition="start">
            Loading Button
        </Button>
        <Button isLoading loadingLabel="Loading..." loadingIconPosition="end">
            Loading Button
        </Button>
    </Stack>
);

export const LoadingCmp: Story = {
    args: {
        isLoading: true,
        loadingLabel: 'is loading please wait',
        loadingIconPosition: 'end',
        // @ts-ignore
        loadingCmp: <SendIcon size={15} />,
        children: 'Button',
    },
};

export const LoadingLabel: Story = {
    args: {
        isLoading: true,
        loadingLabel: 'is loading please wait',
        children: 'Button',
    },
};

export const MinWidth: Story = {
    args: {
        minWidth: 250,
        children: 'minWidth Button',
    },
};

export const OnClick: Story = {
    args: {
        onClick: action('onClick'),
        children: 'onClick Button',
    },
};

export const OnRightClick: Story = {
    args: {
        onRightClick: action('onRightClick'),
        children: 'onClick Button',
    },
};

export const Size_ = (args) => (
    <Stack spacing={3}>
        <Button size="small">small Button</Button>
        <Button size="medium">medium Button</Button>
        <Button size="large">large Button</Button>
        <Button size={35}>35px Button</Button>
    </Stack>
);

export const StartIcon_ = (args) => (
    <Stack spacing={3}>
        <Button startIcon="Send">small Button</Button>
        <Button startIcon={<SendIcon />}>medium Button</Button>
    </Stack>
);

export const TooltipProps: Story = {
    args: {
        tooltipProps: {
            bgColor: '#10D0DD',
            color: '#FF0000',
            followCursor: true,
            fontSize: 15,
            lineHeight: 2,
            placement: 'right',
            title: 'tooltip button',
        },
        children: 'Tooltip Button',
    },
};

export const Uppercase: Story = {
    args: {
        uppercase: false,
        children: 'Non Uppercase Button',
    },
};

export const Variant_ = (args) => (
    <Stack spacing={3}>
        <Button variant="contained">contained Button</Button>
        <Button variant="outlined">outlined Button</Button>
        <Button variant="text">text Button</Button>
    </Stack>
);
