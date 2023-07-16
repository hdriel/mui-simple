import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
    Restore as RestoreIcon,
    Favorite as FavoriteIcon,
    LocationOn as LocationOnIcon,
    Folder as FolderIcon,
} from '@mui/icons-material';
import { Stack } from '@mui/material';

import BottomNavigation from '../BottomNavigation';

export default {
    title: 'Navigation/BottomNavigation',
    component: BottomNavigation,
};

const actions = {
    onClick: action('onClick'),
};

export const Default = () => {
    return <BottomNavigation {...actions} />;
};

export const ShowLabels = () => {
    const [value, setValue] = React.useState(0);
    const actions = [
        { label: 'Recents', icon: <RestoreIcon /> },
        { label: 'Favorites', icon: <FavoriteIcon /> },
        { label: 'Nearby', icon: <LocationOnIcon /> },
        { value: 'folder', label: 'Folder', icon: <FolderIcon />, showLabel: true },
    ];

    return (
        <Stack spacing={5}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                actions={actions}
            />
            <BottomNavigation value={value} onChange={(event, newValue) => setValue(newValue)} actions={actions} />
        </Stack>
    );
};

export const ActionValues = () => {
    const actions = [
        { value: 'recents', label: 'Recents', icon: <RestoreIcon /> },
        { value: 'favorites', label: 'Favorites', icon: <FavoriteIcon /> },
        { value: 'nearby', label: 'Nearby', icon: <LocationOnIcon /> },
        { value: 'folder', label: 'Folder', icon: <FolderIcon /> },
    ];
    const [value, setValue] = useState(actions[1].value);

    return (
        <Stack spacing={5}>
            <BottomNavigation
                width={500}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                actions={actions}
            />
        </Stack>
    );
};

export const ThemedAndColored = () => {
    const [value, setValue] = React.useState(0);

    const actions = [
        { label: 'Recents', icon: <RestoreIcon /> },
        { label: 'Favorites', icon: <FavoriteIcon /> },
        { label: 'Nearby', icon: <LocationOnIcon /> },
        { label: 'Folder', icon: <FolderIcon /> },
    ];

    return (
        <Stack spacing={3}>
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="primary.main"
            />
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="secondary.main"
            />
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="info"
            />
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="warning"
            />
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="error"
            />
            <BottomNavigation actions={actions} value={value} onChange={(event, newValue) => setValue(newValue)} />
            <BottomNavigation
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color={'#087489'}
            />
        </Stack>
    );
};

export const Fixed = () => {
    const [value, setValue] = React.useState(0);

    const actions = [
        { label: 'Recents', icon: <RestoreIcon /> },
        { label: 'Favorites', icon: <FavoriteIcon /> },
        { label: 'Nearby', icon: <LocationOnIcon /> },
        { label: 'Folder', icon: <FolderIcon /> },
    ];

    return (
        <div
            style={{
                position: 'relative',
                width: '600px',
                height: '600px',
                background: 'rgba(204,204,204,0.6)',
            }}
        >
            <BottomNavigation
                elevation={24}
                fixedToBottom
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="secondary"
            />

            <BottomNavigation
                position="absolute"
                fixedToTop
                showLabels
                actions={actions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                color="primary"
            />
        </div>
    );
};
