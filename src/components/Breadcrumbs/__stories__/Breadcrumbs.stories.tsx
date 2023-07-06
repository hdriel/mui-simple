import React from 'react';
import { action } from '@storybook/addon-actions';

import { Send as SendIcon, Whatshot as WhatshotIcon, Home as HomeIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Breadcrumbs from '../Breadcrumbs';

export default {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumbs,
};

export const Default = () => {
    return <Breadcrumbs />;
};

export const Links = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs links={['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts']} />
            <Breadcrumbs
                links={[
                    { label: 'Home', url: '#' },
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    { label: 'Accessories', url: '#' },
                    { label: 'New Collection', url: '#' },
                    { label: 'Belts', url: '#' },
                ]}
            />
            <Breadcrumbs
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
        </Stack>
    );
};

export const ThemedAndColored = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                muiColor={'warning.main'}
                links={['Home', 'Catalog', 'Accessories', 'New Collection', 'Belts']}
            />
            <Breadcrumbs
                muiColor={'warning.main'}
                links={[
                    {
                        label: 'Home',
                        link: '#',
                        muiColor: 'info.main',
                    },
                    {
                        label: 'Catalog',
                        link: '#',
                    },
                    {
                        label: 'Accessories',
                        link: '#',
                        muiColor: 'info.main',
                    },
                    {
                        label: 'New Collection',
                        link: '#',
                    },
                    {
                        label: 'Belts',
                        link: '#',
                        muiColor: 'info.main',
                    },
                ]}
            />
            <Breadcrumbs
                links={[
                    {
                        label: 'Home',
                        link: '#',
                        muiColor: 'primary.main',
                    },
                    {
                        label: 'Catalog',
                        link: '#',
                        muiColor: 'secondary.main',
                    },
                    {
                        label: 'Accessories',
                        link: '#',
                        muiColor: 'info.main',
                    },
                    {
                        label: 'New Collection',
                        link: '#',
                        muiColor: 'error.main',
                    },
                    {
                        label: 'Belts',
                        link: '#',
                    },
                ]}
            />
            <Breadcrumbs
                customColor={'#720e78'}
                links={[
                    {
                        label: 'mui primary override #0e865f',
                        link: '#',
                        muiColor: 'primary.main',
                        customColor: '#0e865f',
                    },
                    {
                        label: '#783c0e',
                        link: '#',
                        customColor: '#783c0e',
                    },
                    {
                        label: 'Breadcrumbs customColor',
                        link: '#',
                    },
                ]}
            />
            <Breadcrumbs
                links={[
                    {
                        label: 'mui primary override #0e865f',
                        link: '#',
                        muiColor: 'primary.main',
                        customColor: '#0e865f',
                    },
                    {
                        label: '#783c0e',
                        link: '#',
                        customColor: '#783c0e',
                    },
                    {
                        label: 'Default',
                        link: '#',
                    },
                ]}
            />
        </Stack>
    );
};

export const Size = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
            <Breadcrumbs
                size={30}
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
        </Stack>
    );
};

export const Separators = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
            <Breadcrumbs
                size={30}
                separator={'$'}
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
            <Breadcrumbs
                separator={<SendIcon fontSize="small" />}
                links={[
                    'Home',
                    { label: 'Home', url: '#' },
                    { label: 'Catalog', url: '#' },
                    'Accessories',
                    { label: 'New Collection', url: '#' },
                    'Belts',
                ]}
            />
        </Stack>
    );
};

export const MaxItems = () => {
    const links = [
        'Home',
        { label: 'Home', url: '#' },
        { label: 'Catalog', url: '#' },
        'Accessories',
        { label: 'New Collection', url: '#' },
        'Belts',
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs maxItems={1} links={links} />
            <Breadcrumbs maxItems={2} links={links} />
            <Breadcrumbs maxItems={3} links={links} />
            <Breadcrumbs maxItems={4} links={links} />
            <Breadcrumbs maxItems={5} links={links} />
            <Breadcrumbs maxItems={6} links={links} />
        </Stack>
    );
};

export const Icons = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                chip={false}
                links={[
                    'Home',
                    {
                        label: 'Home',
                        url: '#',
                        icon: <SendIcon fontSize="small" />,
                        muiColor: 'secondary.main',
                    },
                    {
                        label: 'Catalog',
                        url: '#',
                        icon: <HomeIcon fontSize="small" />,
                        customColor: '#c3e529',
                    },
                    'Accessories',
                    {
                        label: 'New Collection',
                        url: '#',
                        icon: <WhatshotIcon fontSize="small" />,
                    },
                    'Belts',
                ]}
            />
        </Stack>
    );
};

export const Chips = () => {
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                chips={[
                    'Home',
                    {
                        label: 'Home',
                        startIcon: <SendIcon fontSize="small" />,
                        muiColor: 'secondary',
                        onClick: action('onClickChip'),
                    },
                    {
                        label: 'Catalog',
                        url: '#',
                        startIcon: <HomeIcon fontSize="small" />,
                        onDelete: action('onDeleteChip'),
                        customColor: '#c3e529',
                    },
                    'Accessories',
                    {
                        label: 'New Collection',
                        url: '#',
                        startIcon: <WhatshotIcon fontSize="small" />,
                        endIcon: <SendIcon fontSize="small" />,
                        onClick: action('onClickChip'),
                        onDelete: action('onDeleteChip'),
                    },
                    'Belts',
                ]}
            />
        </Stack>
    );
};
