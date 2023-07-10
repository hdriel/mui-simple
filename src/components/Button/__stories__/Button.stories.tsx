import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Stack, Box } from '@mui/material';

import Button from '../Button';
import Avatar from '../../Avatar/Avatar';

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

const ColoredButton = () => {
    return (
        <Stack direction="row" spacing={3}>
            <Button color={'#00ab92'}>#00ab92</Button>
            <Button color={'primary'}>Primary</Button>
            <Button color={'secondary'}>Secondary</Button>
        </Stack>
    );
};
export const ColoredButton_ = () => <ColoredButton />;

export const DisabledButton: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};

export const DisableRippleButton: Story = {
    args: {
        disableRipple: true,
        children: 'disableRipple Button',
    },
};

const EndIconButton = () => {
    return (
        <Stack spacing={3}>
            <Button endIcon="Fingerprint">"Fingerprint" Button</Button>
            <Button endIcon={<FingerprintIcon />}>Fingerprint Button</Button>
        </Stack>
    );
};
export const EndIconButton_ = () => <EndIconButton />;

export const FullWidthButton: Story = {
    args: {
        fullWidth: true,
        children: 'fullWidth Button',
    },
};

const IconButton = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Button icon="Fingerprint">"Fingerprint" IconButton</Button>
            <Button icon={<FingerprintIcon />}>Fingerprint IconButton</Button>
        </Box>
    );
};
export const IconButton_ = () => <IconButton />;

export const IsLoadingButton: Story = {
    args: {
        isLoading: true,
        loadingLabel: 'Loading...',
        children: 'Label Button',
    },
};

export const LabelButton: Story = {
    args: {
        label: 'Label',
        children: 'Label Button',
    },
};

export const LinkButton: Story = {
    args: {
        link: 'https://google.com',
        children: 'Google Link Button',
    },
};

const LoadingIconPositionButton = () => {
    return (
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
};
export const LoadingIconPositionButton_ = () => <LoadingIconPositionButton />;

export const LoadingLabelButton: Story = {
    args: {
        isLoading: true,
        loadingLabel: 'is loading please wait',
        children: 'Button',
    },
};

export const MinWidthButton: Story = {
    args: {
        minWidth: 250,
        children: 'minWidth Button',
    },
};

export const OnClickButton: Story = {
    args: {
        onClick: action('onClick'),
        children: 'onClick Button',
    },
};

export const OnRightClickButton: Story = {
    args: {
        onRightClick: action('onRightClick'),
        children: 'onClick Button',
    },
};

const SizeButton = () => {
    return (
        <Stack spacing={3}>
            <Button size="small">small Button</Button>
            <Button size="medium">medium Button</Button>
            <Button size="large">large Button</Button>
            <Button size={35}>35px Button</Button>
        </Stack>
    );
};
export const SizeButton_ = () => <SizeButton />;

const StartIconButton = () => {
    return (
        <Stack spacing={3}>
            <Button startIcon="Send">small Button</Button>
            <Button startIcon={<SendIcon />}>medium Button</Button>
        </Stack>
    );
};
export const StartIconButton_ = () => <StartIconButton />;

export const TooltipPropsButton: Story = {
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

export const NonUppercaseButton: Story = {
    args: {
        uppercase: false,
        children: 'Non Uppercase Button',
    },
};

const VariantButton = () => {
    return (
        <Stack spacing={3}>
            <Button variant="contained">contained Button</Button>
            <Button variant="outlined">outlined Button</Button>
            <Button variant="text">text Button</Button>
        </Stack>
    );
};
export const VariantButton_ = () => <VariantButton />;
