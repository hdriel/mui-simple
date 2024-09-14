import React from 'react';
import { Stack, Box } from '@mui/material';
import {
    Fastfood as FastfoodIcon,
    LaptopMac as LaptopMacIcon,
    Hotel as HotelIcon,
    Repeat as RepeatIcon,
} from '@mui/icons-material';

import Timeline, { TimeLineStepProps } from '../Timeline';
import type { TimeLineStepState } from '../Timeline';
import Typography from '../../_FIXED/Typography/Typography';
import Divider from '../../_FIXED/Divider/Divider';
import type { Meta, StoryObj } from '@storybook/react';

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

export const Variant = () => {
    return (
        <Stack direction="row" spacing={5}>
            {['filled', 'outlined'].map((variant: 'filled' | 'outlined') => (
                <Timeline key={variant} variant={variant} steps={['Eat', 'Code', 'Sleep', 'Repeat']} />
            ))}
        </Stack>
    );
};

export const ThemedAndColored = () => {
    return (
        <Stack spacing={5}>
            {['filled', 'outlined']
                .map((variant: 'filled' | 'outlined', index) => (
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
                                            variant={variant}
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

export const Icon = () => {
    const steps: TimeLineStepProps[] = [
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
            <Timeline steps={steps.map(({ icon, ...step }) => step)} />
            <Timeline steps={steps} />
        </Box>
    );
};

export const Connector = () => {
    const steps: TimeLineStepProps[] = [
        { title: 'Eat', icon: <FastfoodIcon /> },
        { title: 'Code', icon: <LaptopMacIcon />, color: 'primary' },
        {
            title: 'Sleep',
            icon: <HotelIcon />,
            color: 'primary',
            variant: 'outlined',
            connectorColor: 'info',
            connectorHeight: 50,
            connectorWidth: 8,
        },
        { title: 'Repeat', icon: <RepeatIcon />, color: 'secondary' },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Timeline steps={steps.map(({ icon, ...step }) => step)} connectorColor="error" connectorHeight={150} />
            <Timeline steps={steps} connectorHeight={150} />
        </Box>
    );
};

export const ZigZag = () => {
    const steps: TimeLineStepProps[] = [
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

export const Subtitle = () => {
    const steps = [
        {
            title: 'Eat',
            subtitle: 'Because you need strength',
            icon: <FastfoodIcon />,
            time: '09:30 am',
        },
        {
            title: 'Code',
            subtitle: "Because it's awesome!",
            icon: <LaptopMacIcon />,
            time: '10:00 am',
        },
        { title: 'Sleep', subtitle: 'Because you need rest', icon: <HotelIcon /> },
        {
            title: 'Repeat',
            subtitle: 'Because this is the life you love!',
            icon: <RepeatIcon />,
        },
    ];

    return (
        <Stack direction="row" spacing={5}>
            <Timeline steps={steps.map(({ icon, subtitle, ...step }) => step)} />
            <Timeline steps={steps.map(({ icon, ...step }) => step)} />
            <Timeline steps={steps} />
            <Timeline steps={steps.map(({ subtitle, ...step }) => step)} />
            <Timeline steps={steps} zigzag />
        </Stack>
    );
};

export const Aligned = () => {
    const steps = [
        {
            title: 'Eat',
            subtitle: 'Because you need strength',
            icon: <FastfoodIcon />,
            time: '09:30 am',
        },
        {
            title: 'Code',
            subtitle: "Because it's awesome!",
            icon: <LaptopMacIcon />,
            time: '10:00 am',
        },
        { title: 'Sleep', subtitle: 'Because you need rest', icon: <HotelIcon /> },
        {
            title: 'Repeat',
            subtitle: 'Because this is the life you love!',
            icon: <RepeatIcon />,
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Timeline steps={steps} align="left" />
            <Timeline steps={steps} />
            <Timeline steps={steps} align="right" />
        </Box>
    );
};
