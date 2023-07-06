import React from 'react';
import { Stack } from '@mui/material';

import LinearProgress from '../LinearProgress';

export default {
    title: 'Feedback/LinearProgress',
    component: LinearProgress,
};

const actions = {};

export const Default = () => {
    return <LinearProgress {...actions} />;
};

export const Themed = () => {
    return (
        <Stack spacing={3}>
            <LinearProgress {...actions} color="primary" />
            <LinearProgress {...actions} color="secondary" />
            <LinearProgress {...actions} />
        </Stack>
    );
};

export const Colored = () => {
    return (
        <Stack spacing={4}>
            <LinearProgress {...actions} color={'#12bfb0'} />
            <LinearProgress {...actions} color={'error'} />
            <LinearProgress {...actions} color={'#d98f53'} />
        </Stack>
    );
};

export const Variant = () => {
    return (
        <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={4}>
                determinate
                <LinearProgress {...actions} variant="determinate" value={10} />
                <LinearProgress {...actions} variant="determinate" value={20} />
                <LinearProgress {...actions} variant="determinate" value={30} />
                <LinearProgress {...actions} variant="determinate" value={40} />
                <LinearProgress {...actions} variant="determinate" value={50} />
                <LinearProgress {...actions} variant="determinate" value={60} />
                <LinearProgress {...actions} variant="determinate" value={70} />
                <LinearProgress {...actions} variant="determinate" value={80} />
                <LinearProgress {...actions} variant="determinate" value={90} />
                <LinearProgress {...actions} variant="determinate" value={100} />
                <LinearProgress {...actions} variant="indeterminate" />
            </Stack>
            <Stack direction="column" spacing={4}>
                buffer
                <LinearProgress {...actions} muiColor={'primary'} variant="buffer" value={10} valueBuffer={20} />
                <LinearProgress {...actions} customColor={'#dd0000'} variant="buffer" value={20} valueBuffer={30} />
                <LinearProgress {...actions} variant="buffer" value={30} valueBuffer={40} />
                <LinearProgress {...actions} variant="buffer" value={40} valueBuffer={50} />
                <LinearProgress {...actions} variant="buffer" value={50} valueBuffer={60} />
                <LinearProgress {...actions} variant="buffer" value={60} valueBuffer={70} />
                <LinearProgress {...actions} variant="buffer" value={70} valueBuffer={80} />
                <LinearProgress {...actions} variant="buffer" value={80} valueBuffer={90} />
                <LinearProgress {...actions} variant="buffer" value={90} valueBuffer={100} />
                <LinearProgress {...actions} variant="buffer" value={100} valueBuffer={100} />
            </Stack>

            <Stack direction="column" spacing={4}>
                indeterminate
                <LinearProgress {...actions} variant="indeterminate" />
            </Stack>

            <Stack direction="column" spacing={4}>
                query
                <LinearProgress {...actions} variant="query" />
            </Stack>
        </Stack>
    );
};

export const Thickness = () => {
    return (
        <Stack spacing={4}>
            <LinearProgress {...actions} thickness={10} />
            <LinearProgress {...actions} thickness={20} />
            <LinearProgress {...actions} thickness={50} />
            <LinearProgress {...actions} />
        </Stack>
    );
};

export const ShowProgress = () => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack direction="column" spacing={4}>
            <p>showProgress=true</p>
            <Stack direction="column" spacing={4}>
                <LinearProgress value={progress} showProgress />
                <LinearProgress value={progress} showProgress variant="indeterminate" />
            </Stack>
            <p>showProgress=false</p>
            <Stack direction="column" spacing={4}>
                <LinearProgress value={progress} showProgress={false} />
                <LinearProgress value={progress} showProgress={false} variant="indeterminate" />
            </Stack>
        </Stack>
    );
};
