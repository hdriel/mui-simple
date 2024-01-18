import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import Tabs from '../Tabs';
import Tab from '../Tab';

const meta: Meta<typeof Tabs> = {
    title: 'Navigation/Tabs',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs = (totalTabs = 12) =>
    [
        { value: '1', label: 'Item ' },
        { value: '2', label: 'Item ' },
        { value: '3', label: 'Item ' },
        { value: '4', label: 'Item ' },
        { value: '5', label: 'Item ' },
        { value: '6', label: 'Item ' },
        { value: '7', label: 'Item ' },
        { value: '8', label: 'Item ' },
        { value: '9', label: 'Item ' },
        { value: '10', label: 'Item ' },
        { value: '11', label: 'Item ' },
        { value: '12', label: 'Item ' },
        { value: '13', label: 'Item ' },
        { value: '14', label: 'Item ' },
        { value: '15', label: 'Item ' },
        { value: '16', label: 'Item ' },
        { value: '17', label: 'Item ' },
        { value: '18', label: 'Item ' },
        { value: '19', label: 'Item ' },
        { value: '20', label: 'Item ' },
    ]
        .slice(0, totalTabs)
        .map((tabProps, index) => (
            <Tab
                key={index}
                value={tabProps.value}
                label={tabProps.label + tabProps.value}
                sx={{ backgroundColor: 'red', padding: '1em' }}
            >
                Content {index + 1}
            </Tab>
        ));

const render = (args) => {
    const [value, setValue] = useState<string | number>(args.value ?? '2');
    return (
        <Tabs {...args} value={value} onChange={(tabId) => setValue(tabId as string)}>
            {args.children ?? tabs(5)}
        </Tabs>
    );
};

export const Default: Story = {
    args: {},
};

export const Centered: Story = {
    args: {
        centered: true,
        children: tabs(5),
    },
    render,
};

export const FillActiveTab: Story = {
    args: {
        fillActiveTab: true,
        value: '2',
        children: tabs(5),
    },
    render,
};

export const Color: Story = {
    args: {
        color: '#D10CC0',
        value: '2',
        children: tabs(5),
    },
    render,
};

export const OnChange: Story = {
    args: {
        children: tabs(5),
    },
    render,
};

export const OrientationVertical: Story = {
    args: {
        orientation: 'vertical',
        children: tabs(5),
    },
    render,
};

export const Wrap: Story = {
    args: {
        orientation: 'horizontal',
        children: tabs(19),
        wrap: true,
    },
    render,
};

export const Variant_ = (args) => {
    const [value, setValue] = useState<string | number>(args.value ?? '2');
    return (
        <Stack spacing={2}>
            <Tabs {...args} variant="fullWidth" value={value} onChange={(tabId) => setValue(tabId as string)}>
                {tabs()}
            </Tabs>
            <Tabs {...args} variant="scrollable" value={value} onChange={(tabId) => setValue(tabId as string)}>
                {tabs()}
            </Tabs>
            <Tabs {...args} variant="standard" value={value} onChange={(tabId) => setValue(tabId as string)}>
                {tabs()}
            </Tabs>
        </Stack>
    );
};

export const VisibleScrollbar: Story = {
    args: {
        visibleScrollbar: true,
        children: tabs(),
    },
    render,
};

export const visibleScrollButtons: Story = {
    args: {
        visibleScrollbar: true,
        children: tabs(),
    },
    render,
};

export const Swipeable: Story = {
    args: {
        swipeable: true,
        children: tabs(5),
    },
    render,
};

export const AutoNavigateByArrowKeyboard: Story = {
    args: {
        autoNavigateByArrowKeyboard: true,
        children: tabs(5),
    },
    render,
};

export const VerticalMaxFixedHeight: Story = {
    args: {
        orientation: 'vertical',
        verticalMaxFixedHeight: 400,
        children: tabs(5),
    },
    render,
};

export const VerticalTabWidth: Story = {
    args: {
        orientation: 'vertical',
        verticalTabWidth: 200,
        children: tabs(5),
    },
    render,
};

export const ReverseHorizontal: Story = {
    args: {
        reverse: true,
        children: tabs(5),
    },
    render,
};

export const ReverseVertical: Story = {
    args: {
        reverse: true,
        orientation: 'vertical',
        children: tabs(5),
    },
    render,
};
