import React, { useState } from 'react';
import { filledIcons, outlinedIcons, roundedIcons, sharpIcons, twoToneIcons } from '../icon-names';
import { Stack, Grid, Box } from '@mui/material';

import SVGIcon from '../SVGIcon';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';
import Typography from '../../Typography/Typography';
import ToggleButtonGroups from '../../ToggleButtonGroup/ToggleButtonGroups';
import InputColor from '../../TextField/InputColor';
import Slider from '../../Slider/Slider';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SVGIcon> = {
    title: 'Data-Display/SVGIcon',
    component: SVGIcon,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SVGIcon>;

export const Default: Story = {
    args: {},
};

export const MuiIconNames_ = (args) => {
    const [iconType, setIconType] = useState('filled');
    const [columns, setColumns] = useState(2);
    const [color, setColor] = useState('black');

    const dataType = [
        { value: 'filled', component: 'FILLED' },
        { value: 'outlined', component: 'OUTLINED' },
        { value: 'rounded', component: 'ROUNDED' },
        { value: 'sharp', component: 'SHARP' },
        { value: 'twoTone', component: 'TWO-TONE' },
    ];

    const dataColumns = [
        { value: 12 / 1, component: '1' },
        { value: 12 / 2, component: '2' },
        { value: 12 / 3, component: '3' },
        { value: 12 / 4, component: '4' },
        { value: 12 / 5, component: '5' },
        { value: 12 / 6, component: '6' },
        { value: 12 / 7, component: '7' },
        { value: 12 / 8, component: '8' },
        { value: 12 / 9, component: '9' },
        { value: 12 / 10, component: '10' },
    ];

    return (
        <Stack spacing={3}>
            <ToggleButtonGroups fullWidth justifyContent="space-around">
                <ToggleButtonGroup
                    value={iconType}
                    exclusive
                    onChange={(event, value) => setIconType(value)}
                    data={dataType}
                />

                <ToggleButtonGroup
                    value={columns}
                    exclusive
                    onChange={(event, value) => setColumns(value)}
                    data={dataColumns}
                />
            </ToggleButtonGroups>
            <InputColor
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                debounceDelay={500}
            />
            <Grid container spacing={4}>
                {{
                    filled: filledIcons,
                    outlined: outlinedIcons,
                    rounded: roundedIcons,
                    sharp: sharpIcons,
                    twoTone: twoToneIcons,
                }[iconType]?.map((muiIconName) => (
                    <Grid key={muiIconName} item xs={columns} flex>
                        <Stack alignItems="center" spacing={2}>
                            <SVGIcon muiIconName={muiIconName} size={40} color={color} />
                            <Typography tooltip={false}>{muiIconName}</Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export const WidthAndHeight_ = (args) => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    return (
        <Grid container spacing={5} sx={{ width: 1200 }}>
            <Grid item xs={6}>
                <Grid item xs flex>
                    <Stack direction="row">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: 500,
                            }}
                        >
                            <Box sx={{ border: '1px dashed black' }}>
                                <SVGIcon muiIconName="Home" color={'red'} width={width} height={height} />
                            </Box>
                        </Box>
                        <Slider
                            orientation="vertical"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            min={100}
                            max={500}
                            sx={{ height: 500 }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Slider value={width} onChange={(e) => setWidth(e.target.value)} min={100} max={500} />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid item xs flex>
                    <Stack direction="row">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: 500,
                            }}
                        >
                            <Box sx={{ border: '1px dashed black' }}>
                                <SVGIcon iconSrc="hashtag-icon.svg" color={'red'} width={width} height={height} />
                            </Box>
                        </Box>
                        <Slider
                            orientation="vertical"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            min={100}
                            max={500}
                            sx={{ height: 500 }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Slider value={width} onChange={(e) => setWidth(e.target.value)} min={100} max={500} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export const Sized_ = (args) => {
    const [size, setSize] = useState(100);

    return (
        <Grid container spacing={3} sx={{ width: 500 }}>
            <Grid item xs flex>
                <Stack direction="row">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 500,
                        }}
                    >
                        <Box sx={{ border: '1px dashed black' }}>
                            <SVGIcon muiIconName="Home" color="red" size={size} />
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Slider value={size} onChange={(e) => setSize(e.target.value)} min={100} max={500} />
            </Grid>
        </Grid>
    );
};

export const SVGFile_ = (args) => {
    const [size, setSize] = useState(100);

    return (
        <Grid container spacing={3} sx={{ width: 500 }}>
            <Grid item xs flex>
                <Stack direction="row">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 500,
                        }}
                    >
                        <Box sx={{ border: '1px dashed black' }}>
                            <SVGIcon iconSrc="hashtag-icon.svg" color="green" size={size} />
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Slider value={size} onChange={(e) => setSize(e.target.value)} min={100} max={500} />
            </Grid>
        </Grid>
    );
};
