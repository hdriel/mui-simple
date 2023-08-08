import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { VolumeUp as VolumeUpIcon } from '@mui/icons-material';

import Slider from '../Slider';

const meta: Meta<typeof Slider> = {
    title: 'Inputs/Slider',
    component: Slider,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {},
};

export const Color_ = () => (
    <Stack>
        {[
            '#10DDCC',
            'primary',
            'success.light',
            { track: '#D0CCC0', thumb: '#150CCC' },
            { track: 'success.dark', thumb: 'error' },
        ].map((color) => (
            <Slider key={JSON.stringify(color)} color={color} />
        ))}
    </Stack>
);

export const Disabled: Story = {
    args: {
        disabled: true,
        value: 35,
    },
};

export const DisablePadding: Story = {
    args: {
        disablePadding: true,
        label: 'disable padding',
    },
};

export const DisplayValue_ = () => (
    <Stack>
        {['on', 'off', 'auto'].map((displayValue) => (
            <Slider key={displayValue} displayValue={displayValue} label={displayValue} />
        ))}
    </Stack>
);

export const Icons: Story = {
    args: {
        color: 'secondary',
        endIcon: 'VolumeDown',
        startIcon: <VolumeUpIcon />,
    },
};

export const Label: Story = {
    args: {
        label: 'Slider Label',
    },
};

export const OrientationVertical: Story = {
    args: {
        label: 'Slider Vertical',
        orientation: 'vertical',
    },
};

export const Size_ = () => (
    <Stack>
        {['small', 'medium'].map((size) => (
            <Slider key={size} size={size} label={size} />
        ))}
    </Stack>
);

export const Styles_ = () => (
    <Stack>
        {['ios', 'pretto', 'tooltip', 'airbnb'].map((sliderStyle) => (
            <Slider key={sliderStyle} sliderStyle={sliderStyle} label={`'${sliderStyle}' styles`} />
        ))}
    </Stack>
);

export const OnChangeEvent: Story = {
    args: {
        label: 'Slider Vertical',
        orientation: 'vertical',
    },
    render: () => {
        const [value, setValue] = useState();
        return <Slider value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ValueLabelFormat: Story = {
    args: {
        label: 'Slider Vertical',
        orientation: 'vertical',
        valueLabelFormat: (n) => `HI: ${n}`,
    },
    render: () => {
        const [value, setValue] = useState();
        return <Slider value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const RemovePadding: Story = {
    args: {
        label: 'Slider Remove Padding',
        removePadding: true,
    },
};

export const TrackBarLinePosition_ = () => (
    <Stack>
        {['normal', 'none', 'inverted'].map((trackBarLinePosition) => (
            <Slider
                key={trackBarLinePosition}
                trackBarLinePosition={trackBarLinePosition}
                label={trackBarLinePosition}
            />
        ))}
    </Stack>
);

export const Range_ = () => (
    <Stack>
        {[
            [150, 200, 2.5, true],
            { min: 150, max: 200, step: 2.5, marks: true },
            {
                min: -10,
                max: 10,
                step: 2,
                marks: [
                    { label: '2L', value: 2 },
                    { label: '6L', value: 6 },
                    { label: '8M', value: 8 },
                ],
            },
        ].map((range) => (
            <Slider key={range} range={range} />
        ))}
    </Stack>
);

/*
chooseFromMarksList?: boolean;
inputCmp?: ReactNode;
marks?: boolean | Array<{ label: string; value: number }>;
range?: Range;
 */
