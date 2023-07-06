import React from 'react';
import { Stack } from '@mui/material';

import Link from '../Link';

export default {
    title: 'Navigation/Link',
    component: Link,
};

export const Default = () => {
    return <Link />;
};

export const Variant = () => {
    return (
        <Stack spacing={3}>
            <Link variant="text">text</Link>
            <Link variant="outlined">outlined</Link>
            <Link variant="contained">contained</Link>
        </Stack>
    );
};

export const ThemedAncColored = () => {
    return (
        <Stack spacing={3}>
            <Link color="primary">primary</Link>
            <Link color="secondary">secondary</Link>
            <Link>#10d0dd</Link>
            <Link color={'#10d0dd'}>Default</Link>
        </Stack>
    );
};

export const Underline = () => {
    return (
        <Stack spacing={3}>
            <Link underline="always">always</Link>
            <Link underline="hover">hover</Link>
            <Link underline="none">none</Link>
            <Link>Default</Link>
        </Stack>
    );
};

export const Size = () => {
    return (
        <Stack spacing={3}>
            <Link size={12}>size 12</Link>
            <Link size={22}>size 22</Link>
            <Link size={30}>size 30</Link>
            <Link>Default size</Link>
        </Stack>
    );
};

export const Url = () => {
    return (
        <Stack spacing={3}>
            <Link url={'#'}>url #</Link>
        </Stack>
    );
};
