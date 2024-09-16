import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { VolumeUp as VolumeUpIcon } from '@mui/icons-material';

import RangeSlider from '../RangeSlider';
import { action } from '@storybook/addon-actions';
import TextField from '../../TextField/TextField';

const meta: Meta<typeof RangeSlider> = {
    title: 'Inputs/RangeSlider',
    component: RangeSlider,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
    args: {
        defaultValue: [10, 34],
    },
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
            <RangeSlider key={JSON.stringify(color)} color={color} defaultValue={[40, 40 + (index + 1) * 10]} />
        ))}
    </Stack>
);

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: [15, 35],
    },
};

export const DisablePadding: Story = {
    args: {
        disablePadding: true,
        label: 'disable padding',
        defaultValue: [15, 35],
    },
};

export const DisplayValue_ = (args) => (
    <Stack>
        {['on', 'off', 'auto'].map((displayValue) => (
            <RangeSlider key={displayValue} displayValue={displayValue} label={displayValue} defaultValue={[15, 35]} />
        ))}
    </Stack>
);

export const Icons: Story = {
    args: {
        color: 'secondary',
        endIcon: 'VolumeDown',
        startIcon: <VolumeUpIcon />,
        defaultValue: [15, 35],
    },
};

export const Label: Story = {
    args: {
        label: 'RangeSlider Label',
        defaultValue: [15, 35],
    },
};

export const OrientationVertical: Story = {
    args: {
        label: 'RangeSlider Vertical',
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
        defaultValue: [20, 37],
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
            <RangeSlider key={size} size={size} label={size} defaultValue={[15, 35]} />
        ))}
    </Stack>
);

export const Styles_ = (args) => (
    <Stack>
        {['ios', 'pretto', 'tooltip', 'airbnb'].map((sliderStyle, index) => (
            <RangeSlider
                key={sliderStyle}
                sliderStyle={sliderStyle}
                label={`'${sliderStyle}' styles`}
                defaultValue={[15, 35 + (index + 1) * 10]}
            />
        ))}
    </Stack>
);

export const OnChangeEvent: Story = {
    args: {
        value: [15, 35],
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <RangeSlider {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const onChangeCommitted: Story = {
    args: {
        label: 'on Change Committed',
        min: 0,
        max: 50,
        step: 2,
        defaultValue: [11, 23],
        onChangeCommitted: (e, newValue) => alert(JSON.stringify(newValue ?? [])),
    },
};

export const ValueLabelFormat: Story = {
    args: {
        label: 'Value Label Format',
        value: [15, 35],
        valueLabelFormat: (from, to) => `${from} <= x <= ${to}`,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <RangeSlider {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
    },
};

export const RemovePadding: Story = {
    args: {
        label: 'RangeSlider Remove Padding',
        removePadding: true,
        defaultValue: [15, 35],
    },
};

export const TrackBarLinePosition_ = (args) => (
    <Stack>
        {['normal', 'none', 'inverted'].map((trackBarLinePosition) => (
            <RangeSlider
                key={trackBarLinePosition}
                trackBarLinePosition={trackBarLinePosition}
                label={trackBarLinePosition}
                defaultValue={[15, 35]}
            />
        ))}
    </Stack>
);

export const Range_ = (args) => (
    <Stack>
        {[[150, 200], { min: 150, max: 200 }, [-10, 10, 2], { min: -10, max: 10, step: 2 }].map((range) => (
            <RangeSlider
                key={JSON.stringify(range)}
                range={range}
                defaultValue={[(range[0] ?? (range as any).min) + 2, (range[0] ?? (range as any).min) + 5]}
            />
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
            <RangeSlider
                key={JSON.stringify(range)}
                range={range}
                defaultValue={[(range[0] ?? (range as any).min) + 2, (range[0] ?? (range as any).min) + 5]}
            />
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
        defaultValue: [5, 10],
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
        defaultValue: [12, 16],
    },
};

export const InputCmp: Story = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState([30, 50]);
        const handleChange = (event, newValue) => {
            setValue(newValue);
            action('onChangeInput')(newValue);
        };
        const handleInputChange = (index) => (event) => {
            const v = event.target.value;
            setValue((value) => {
                const newValue = [...value];
                newValue[index] = v;
                return newValue;
            });
            action('onChangeInput')(v);
        };

        const handleBlur = () => {
            let min = value[0] < 0 ? 0 : value[0];
            let max = value[1] > 100 ? 100 : value[1];
            const v = [min, max];
            setValue(v);
            action('onChangeInput')(v);
        };

        return (
            <RangeSlider
                {...args}
                value={value}
                onChange={handleChange}
                startIcon={
                    <TextField
                        value={value[0]}
                        size="small"
                        onChange={handleInputChange(0)}
                        onBlur={handleBlur}
                        inputProps={{ step: 10, min: 0, max: 100, type: 'number' }}
                    />
                }
                endIcon={
                    <TextField
                        value={value[1]}
                        size="small"
                        onChange={handleInputChange(1)}
                        onBlur={handleBlur}
                        inputProps={{ step: 10, min: 0, max: 100, type: 'number' }}
                    />
                }
            />
        );
    },
};

function useValue(v1 = 0, v2 = 0) {
    const [fromValue, setFromValue] = React.useState(v1);
    const [toValue, setToValue] = React.useState(v2);
    const onChangeFromValue = (event, newValue) => setFromValue(newValue);
    const onChangeToValue = (event, newValue) => setToValue(newValue);

    return { fromValue, toValue, onChangeFromValue, onChangeToValue };
}

export const DisableSwap_ = () => {
    return (
        <Stack spacing={3}>
            <RangeSlider label="swap" {...useValue(30, 50)} minDistance={10} />
            <RangeSlider label="DisableSwap - locking" disableSwap="locking" {...useValue(30, 50)} minDistance={10} />
            <RangeSlider label="DisableSwap - trailing" disableSwap="trailing" {...useValue(30, 50)} minDistance={10} />
        </Stack>
    );
};

export const MinDistance: Story = {
    args: {
        label: 'Min Distance',
        minDistance: 10,
        max: 50,
    },
    render: (args) => <RangeSlider {...args} {...useValue(12, 26)} />,
};
