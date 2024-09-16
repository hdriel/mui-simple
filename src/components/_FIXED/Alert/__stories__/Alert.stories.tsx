import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { action } from '@storybook/addon-actions';
import { Stack } from '@mui/material';

import Alert from '../Alert';

const meta: Meta<typeof Alert> = {
    title: 'Feedback/Alert',
    component: Alert,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {},
};

export const Actions_ = (args) => (
    <Stack spacing={3}>
        <Alert actions={<SendIcon />}>ReactNode Action</Alert>
        <Alert actions={{ icon: 'Send', onClick: action('onClick') }}>object icon Action</Alert>
        <Alert actions={{ label: 'Send', onClick: action('onClick') }}>object label Action</Alert>
        <Alert actions="Send">string Action</Alert>
        <Alert
            actions={[
                <SendIcon />,
                { tooltipProps: { title: 'Send tooltip' }, icon: 'Send', onClick: action('onClick') },
                { tooltipProps: { title: 'Send tooltip' }, label: 'Send', onClick: action('onClick') },
                'Send',
            ]}
        >
            Array Action
        </Alert>
    </Stack>
);

export const Color_ = (args) => (
    <Stack spacing={3}>
        <Alert color="primary">primary color</Alert>
        <Alert color="secondary">secondary color</Alert>
        <Alert color="info">info color</Alert>
        <Alert color="success">success color</Alert>
        <Alert color="error">error color</Alert>
        <Alert color="warning">warning color</Alert>
        <Alert color={'#10DDCC'}>#10DDCC color</Alert>
    </Stack>
);

export const Icon: Story = {
    args: {
        icon: 'Send',
        children: 'Send Icon',
    },
};

export const OnClose: Story = {
    args: {
        onClose: action('onClose'),
        children: 'onClose event',
    },
    render: (args) => {
        const [show, setShow] = useState(true);
        return (
            <Alert
                {...args}
                show={show}
                onClose={(event) => {
                    args.onClose(event);
                    setShow(false);
                }}
            />
        );
    },
};

export const Severity_ = (args) => (
    <Stack spacing={3}>
        <Alert severity="success">success severity</Alert>
        <Alert severity="info">info severity</Alert>
        <Alert severity="warning">warning severity</Alert>
        <Alert severity="error">error severity</Alert>
    </Stack>
);

export const Title: Story = {
    args: {
        title: 'Send',
    },
};

export const Variant_ = (args) => (
    <Stack spacing={3}>
        {['filled', 'outlined', 'standard'].map((variant: 'filled' | 'outlined' | 'standard') => (
            <>
                <Alert key={`${variant}-success`} variant={variant} severity="success">
                    success - {variant} Variant
                </Alert>
                <Alert key={`${variant}-info`} variant={variant} severity="info">
                    info - {variant} Variant
                </Alert>
                <Alert key={`${variant}-warning`} variant={variant} severity="warning">
                    warning - {variant} Variant
                </Alert>
                <Alert key={`${variant}-error`} variant={variant} severity="error">
                    error - {variant} Variant
                </Alert>
            </>
        ))}
    </Stack>
);

export const Width: Story = {
    args: {
        title: 'Width 150',
        width: 150,
    },
};
