import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import {
    Fastfood as FastfoodIcon,
    LaptopMac as LaptopMacIcon,
    Hotel as HotelIcon,
    Repeat as RepeatIcon,
} from '@mui/icons-material';

import Timeline from '../Timeline';
import Typography from '../../Typography/Typography';
import Divider from '../../Divider/Divider';

const meta: Meta<typeof Timeline> = {
    title: 'Lab/Timeline',
    component: Timeline,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
    args: {},
};

export const Variant_ = (args) => {
    return (
        <Stack direction="row" spacing={5}>
            <Timeline {...args} variant="filled" steps={['Eat', 'Code', 'Sleep', 'Repeat']} />
            <Timeline {...args} variant="outlined" steps={['Eat', 'Code', 'Sleep', 'Repeat']} />
        </Stack>
    );
};

export const ThemedAndColored = () => {
    return (
        <Stack spacing={5}>
            {['filled', 'outlined']
                .map((variant, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '2em' }}>
                        <Stack key={`${variant}-${index}`} direction="row" spacing={5}>
                            {[undefined, 'primary', 'secondary', 'info', 'success', 'error', '#df01fd'].map(
                                (color, cIndex) => (
                                    <Box
                                        key={`${variant}-${color}-${cIndex}`}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 3,
                                            width: 'max-content',
                                        }}
                                    >
                                        <Typography tooltip={false}>{color ?? 'default'}</Typography>
                                        <Timeline
                                            key={`${variant}-${color}`}
                                            variant={variant as any}
                                            color={color}
                                            steps={['Eat', 'Code', 'Sleep', 'Repeat']}
                                        />
                                    </Box>
                                )
                            )}
                        </Stack>
                        <Divider key={`d-${index}`} color="#000000" />
                    </Box>
                ))
                .flat()}
        </Stack>
    );
};

const steps = [
    { title: 'Eat', icon: <FastfoodIcon /> },
    { title: 'Code', icon: <LaptopMacIcon />, color: 'primary' },
    {
        title: 'Sleep',
        icon: <HotelIcon />,
        color: 'primary',
        variant: 'outlined',
    },
    { title: 'Repeat', icon: <RepeatIcon />, color: 'secondary' },
];

export const Icons: Story = {
    args: {
        steps: [
            { title: 'Eat', icon: 'Fastfood' },
            { title: 'Code', icon: 'LaptopMac', color: 'primary' },
            {
                title: 'Sleep',
                icon: <HotelIcon />,
                color: 'primary',
                variant: 'outlined',
            },
            { title: 'Repeat', icon: <RepeatIcon />, color: 'secondary' },
        ],
    },
};

export const WithoutIcons: Story = {
    args: {
        steps: [
            { title: 'Eat' },
            { title: 'Code', color: 'primary' },
            { title: 'Sleep', color: 'primary', variant: 'outlined' },
            { title: 'Repeat', color: 'secondary' },
        ],
    },
};

export const Connector: Story = {
    args: {
        connectorColor: 'error',
        steps: [
            { title: 'Eat', icon: 'Fastfood' },
            { title: 'Code', icon: 'LaptopMac', color: 'primary' },
            {
                title: 'Sleep',
                icon: 'Hotel',
                color: 'primary',
                variant: 'outlined',
                connectorColor: 'info',
                connectorHeight: 50,
                connectorWidth: 8,
            },
            { title: 'Repeat', icon: 'Repeat', color: 'secondary' },
        ],
    },
};

export const ZigZag = () => {
    const steps = [
        { title: 'Eat', icon: <FastfoodIcon /> },
        { title: 'Code', icon: <LaptopMacIcon />, color: 'primary' },
        {
            title: 'Sleep',
            icon: <HotelIcon />,
            color: 'primary',
            variant: 'outlined',
        },
        { title: 'Repeat', icon: <RepeatIcon />, color: 'secondary' },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            {['left', 'zigzag', 'right'].map((position) => (
                <Box
                    key={position}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        width: 'max-content',
                    }}
                >
                    <Typography tooltip={false}>{position ?? 'default'}</Typography>
                    <Timeline
                        steps={steps}
                        left={position === 'left'}
                        right={position === 'right'}
                        zigzag={position === 'zigzag'}
                    />
                </Box>
            ))}
        </Box>
    );
};

export const Subtitle: Story = {
    args: {
        zigzag: true,
        steps: [
            {
                title: 'Eat',
                subtitle: 'Because you need strength',
                icon: 'Fastfood',
                time: '09:30 am',
            },
            {
                title: 'Code',
                subtitle: "Because it's awesome!",
                icon: 'LaptopMac',
                time: '10:00 am',
            },
            {
                title: 'Sleep',
                subtitle: 'Because you need rest',
                icon: 'Hotel',
            },
            {
                title: 'Repeat',
                subtitle: 'Because this is the life you love!',
                icon: 'Repeat',
            },
        ],
    },
};

export const Aligned: Story = {
    args: {
        steps: [
            {
                title: 'Eat',
                subtitle: 'Because you need strength',
                icon: 'Fastfood',
                time: '09:30 am',
            },
            {
                title: 'Code',
                subtitle: "Because it's awesome!",
                icon: 'LaptopMac',
                time: '10:00 am',
            },
            {
                title: 'Sleep',
                subtitle: 'Because you need rest',
                icon: 'Hotel',
            },
            {
                title: 'Repeat',
                subtitle: 'Because this is the life you love!',
                icon: 'Repeat',
            },
        ],
    },
    render: (args) => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Timeline {...args} align="left" />
                <Timeline {...args} />
                <Timeline {...args} align="right" />
            </Box>
        );
    },
};
