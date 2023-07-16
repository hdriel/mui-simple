import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { LocationOn as LocationOnIcon, Folder as FolderIcon } from '@mui/icons-material';
import BottomNavigation from '../BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
    title: 'Navigation/BottomNavigation',
    component: BottomNavigation,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

const actions = [
    { label: 'Recents', icon: 'Restore' },
    { label: 'Favorites', icon: 'Favorite' },
    { label: 'Nearby', icon: <LocationOnIcon /> },
    { value: 'folder', label: 'Folder', icon: <FolderIcon />, showLabel: true },
];

export const Default: Story = {
    args: {
        actions,
    },
};

// export const Actions_: Story = (args) => (
//     <Stack direction="row" spacing={3}>
//         <BottomNavigation {...args} />
//     </Stack>
// );

// actions?: Array<{
//     icon?: ReactNode | string;
//     label?: string;
//     showLabel?: boolean;
//     value?: ReactNode;
//     [key: string]: any;
// }>;
// color?: string;
// elevation?: number; // assuming you want the values to be numbers
// fixedToBottom?: boolean;
// fixedToTop?: boolean;
// muiColor?: string;
// onChange?: (event: any, value: number | string) => void;
// position?: 'absolute' | 'fixed';
// showLabels?: boolean;
// value?: number | string;
// width?: number | string;

// export const Color_ = (args) => (
//     <Stack direction="row" spacing={3}>
//         <BottomNavigation color={'#00ab92'}>#00ab92</BottomNavigation>
//         <BottomNavigation color={'primary'}>Primary</BottomNavigation>
//         <BottomNavigation color={'secondary'}>Secondary</BottomNavigation>
//     </Stack>
// );
