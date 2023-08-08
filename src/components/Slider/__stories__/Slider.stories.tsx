import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { VolumeUp as VolumeUpIcon } from '@mui/icons-material';

import Slider from '../Slider';
import { action } from '@storybook/addon-actions';
import TextField from '../../_FIXED/TextField/TextField';

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

export const Color_ = (args) => (
    <Stack>
        {[
            '#10DDCC',
            'primary',
            'success.light',
            { track: '#D0CCC0', thumb: '#150CCC' },
            { track: 'success.dark', thumb: 'error' },
        ].map((color, index) => (
            <Slider key={JSON.stringify(color)} color={color} defaultValue={40 + index * 10} />
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

export const DisplayValue_ = (args) => (
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
        startIcon: 'AcUnit',
        endIcon: 'Whatshot',
        disablePadding: true,
        marks: [
            { value: 0, label: '0°C' },
            { value: 20, label: '20°C' },
            { value: 37, label: '37°C' },
            { value: 100, label: '100°C' },
        ],
    },
    decorators: [
        (Story) => (
            <Box sx={{ height: 300, px: 3 }}>
                <Story />
            </Box>
        ),
    ],
};

export const Size_ = (args) => (
    <Stack>
        {['small', 'medium'].map((size) => (
            <Slider key={size} size={size} label={size} />
        ))}
    </Stack>
);

export const Styles_ = (args) => (
    <Stack>
        {['ios', 'pretto', 'tooltip', 'airbnb'].map((sliderStyle) => (
            <Slider key={sliderStyle} sliderStyle={sliderStyle} label={`'${sliderStyle}' styles`} />
        ))}
    </Stack>
);

export const OnChangeEvent: Story = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState();
        return <Slider {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const ValueLabelFormat: Story = {
    args: {
        label: 'Value Label Format',
        valueLabelFormat: (n) => `score: ${n}`,
    },
    render: (args) => {
        const [value, setValue] = useState();
        return <Slider {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const RemovePadding: Story = {
    args: {
        label: 'Slider Remove Padding',
        removePadding: true,
    },
};

export const TrackBarLinePosition_ = (args) => (
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

export const Range_ = (args) => (
    <Stack>
        {[[150, 200], { min: 150, max: 200 }, [-10, 10, 2], { min: -10, max: 10, step: 2 }].map((range) => (
            <Slider key={range} range={range} />
        ))}
    </Stack>
);

export const RangeMarks_ = (args) => (
    <Stack>
        {[
            [undefined, undefined, 5],
            [150, 200, 2.5, true],
            { min: 150, max: 200, step: 2.5, marks: true },
            [
                -10,
                10,
                2,
                [
                    { label: '2L', value: 2 },
                    { label: '6L', value: 6 },
                    { label: '8M', value: 8 },
                ],
            ],
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

export const Marks: Story = {
    args: {
        label: 'Marks',
        range: [4, 20],
        step: 2,
        marks: [
            { label: '8L', value: 12 },
            { label: '12L', value: 16 },
            { label: '16M', value: 18 },
        ],
    },
};

export const ChooseFromMarksList: Story = {
    args: {
        label: 'ChooseFromMarksList',
        chooseFromMarksList: true,
        range: [5, 20],
        marks: [
            { label: '5L', value: 5 },
            { label: '8L', value: 12 },
            { label: '12L', value: 16 },
            { label: '16M', value: 18 },
            { label: '20L', value: 20 },
        ],
    },
};

export const InputCmp: Story = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState(30);
        const handleChange = (event, newValue) => {
            setValue(newValue);
            action('onChangeInput')(newValue);
        };
        const handleInputChange = (event) => {
            const v = event.target.value;
            setValue(v === '' ? 0 : Number(v));
            action('onChangeInput')(v);
        };

        const handleBlur = () => {
            if (value < 0) {
                setValue(0);
                action('onChangeInput')(0);
            } else if (value > 100) {
                setValue(100);
                action('onChangeInput')(100);
            }
        };

        const input = (
            <TextField
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{ step: 10, min: 0, max: 100, type: 'number' }}
            />
        );

        return (
            <Slider
                {...args}
                defaultValue={40}
                startIcon={input}
                value={value}
                onChange={handleChange}
                endIcon="VolumeUp"
            />
        );
    },
};
