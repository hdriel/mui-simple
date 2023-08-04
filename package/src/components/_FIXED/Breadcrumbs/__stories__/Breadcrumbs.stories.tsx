import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Mail as MainIcon } from '@mui/icons-material';

import Breadcrumbs from '../Breadcrumbs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    args: {
        links: ['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts'],
    },
};

export const Color: Story = {
    args: {
        color: '#c208e1',
        links: [
            { label: 'primary', color: 'primary' },
            { label: 'root color: #c208e1' },
            { label: 'success.light', color: 'success.light' },
            { label: '#d0c00c', color: '#d0c00c' },
        ],
    },
};

export const MaxItems: Story = {
    args: {
        links: ['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts'],
        maxItems: 3,
    },
};

export const Separator: Story = {
    args: {
        links: ['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts'],
        separator: 'Send',
    },
};

export const Size: Story = {
    args: {
        links: ['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts'],
        size: 20,
    },
};

export const Links: Story = {
    args: {
        links: [
            { icon: 'Home' },
            { label: 'Catalog', icon: 'Category', size: 20, underline: 'always', color: 'error', url: '#' },
            'Accessories',
            'New Collection',
            'Belts',
        ],
    },
};

export const Chips: Story = {
    args: {
        chips: [
            { startIcon: 'Home' },
            { label: 'Catalog', startIcon: 'Category', color: 'error', url: '#' },
            { label: 'Accessories', startIcon: 'Whatshot', endIcon: 'Send', onDelete: action('onDeleteChip') },
            'New Collection',
            { label: 'Belts', onDelete: action('onDeleteChip') },
        ],
    },
};
