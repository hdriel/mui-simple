import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box, Stack } from '@mui/material';
import { Mail as MainIcon } from '@mui/icons-material';

import Badge from '../Badge';

const meta: Meta<typeof Badge> = {
    title: 'Data-Display/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: <MainIcon />,
    },
};

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Badge color={'#00ab92'} content=" ">
            #00ab92
        </Badge>
        <Badge color={'primary'} content=" ">
            Primary
        </Badge>
        <Badge color={'secondary'} content=" ">
            Secondary
        </Badge>
    </Stack>
);
export const Variant_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Badge content={9} variant="dot">
            DOT
        </Badge>
        <Badge content={9}>DEFAULT</Badge>
    </Stack>
);

export const Content_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Badge content={2}>
            <MainIcon />
        </Badge>
        <Badge content="Hi">
            <MainIcon />
        </Badge>
        <Badge color="340">
            <MainIcon />
        </Badge>
    </Stack>
);

export const Hide: Story = {
    args: {
        hide: true,
        children: <MainIcon />,
    },
};

export const Max: Story = {
    args: {
        max: 5,
        content: 10,
        children: <MainIcon />,
    },
};
export const ShowZero: Story = {
    args: {
        showZero: true,
        content: 0,
        children: <MainIcon />,
    },
};

const rectangle = <Box component="span" sx={{ bgcolor: 'secondary.main', width: 40, height: 40 }} />;
const circle = <Box component="span" sx={{ bgcolor: 'secondary.main', width: 40, height: 40, borderRadius: '50%' }} />;
export const Overlap_ = (args) => (
    <Stack direction="row" spacing={3} alignItems={'center'}>
        <Badge content=" ">{rectangle}</Badge>
        <Badge content=" " variant="dot">
            {rectangle}
        </Badge>
        <Badge content=" " overlap={'circular'}>
            {circle}
        </Badge>
        <Badge content=" " overlap={'circular'} variant="dot">
            {circle}
        </Badge>
    </Stack>
);

export const AnchorPosition = (args) => (
    <Stack direction="column" spacing={3} alignItems={'center'}>
        <Stack direction="row" spacing={5} alignItems={'center'}>
            <Badge content={'T'} vertical="top">
                <MainIcon />
            </Badge>
            <Badge content={'B'} vertical="bottom">
                <MainIcon />
            </Badge>
            <Badge content={'R'} horizontal="right">
                <MainIcon />
            </Badge>
            <Badge content={'L'} horizontal="left">
                <MainIcon />
            </Badge>
        </Stack>
        <Stack direction="row" spacing={5} alignItems={'center'}>
            <Badge content={'TR'} vertical="top" horizontal="right">
                <MainIcon />
            </Badge>
            <Badge content={'TL'} vertical="top" horizontal="left">
                <MainIcon />
            </Badge>
            <Badge content={'BR'} vertical="bottom" horizontal="right">
                <MainIcon />
            </Badge>
            <Badge content={'BL'} vertical="bottom" horizontal="left">
                <MainIcon />
            </Badge>
        </Stack>
    </Stack>
);
