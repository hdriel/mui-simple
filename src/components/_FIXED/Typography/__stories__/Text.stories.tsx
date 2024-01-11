import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import Text from '../Text';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';

const meta: Meta<typeof Text> = {
    title: 'Data-Display/Typography/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

const smallIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const largeIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr";

export const Default: Story = {
    args: {
        children: largeIpsum,
    },
};

export const Align: Story = {
    args: {
        align: 'center',
        children: largeIpsum,
    },
    render: (args) => {
        const [align, setAlign] = useState<'left' | 'center' | 'right' | 'justify' | 'inherit'>(undefined);

        return (
            <Stack spacing={3}>
                <ToggleButtonGroup
                    exclusive
                    onChange={(event, v) => {
                        event?.stopPropagation();
                        setAlign(v);
                    }}
                    value={align}
                    data={[
                        { value: 'left', component: 'FormatAlignLeft' },
                        { value: 'center', component: 'FormatAlignCenter' },
                        { value: 'right', component: 'FormatAlignRight' },
                        { value: 'justify', component: 'FormatAlignJustify' },
                        { value: 'inherit', component: 'Normal' },
                    ]}
                />
                <Text {...args} align={align} />
            </Stack>
        );
    },
};

export const AlignCenter: Story = {
    args: {
        alignCenter: true,
        children: largeIpsum,
    },
};

export const AlignJustify: Story = {
    args: {
        alignJustify: true,
        children: largeIpsum,
    },
};

export const AlignLeft: Story = {
    args: {
        alignLeft: true,
        children: largeIpsum,
    },
};

export const AlignRight: Story = {
    args: {
        alignRight: true,
        children: largeIpsum,
    },
};

export const AutoWidth: Story = {
    args: {
        autoWidth: true,
        bgColor: '#ffadad',
        children: smallIpsum,
    },
};

export const BgColor: Story = {
    args: {
        bgColor: 'warning',
        children: smallIpsum,
    },
};

export const Bold: Story = {
    args: {
        bold: true,
        children: smallIpsum,
    },
};

export const CharsCase_ = (args) => (
    <Stack spacing={3}>
        <Text charsCase="lower">lower: {largeIpsum}</Text>
        <Text charsCase="upper">upper: {largeIpsum}</Text>
        <Text charsCase="capital">capital: {largeIpsum}</Text>
    </Stack>
);

export const Color: Story = {
    args: {
        color: '#10cca0',
        children: smallIpsum,
    },
};

export const Component: Story = {
    args: {
        component: 'h1',
        children: smallIpsum,
    },
};

export const GutterBottom: Story = {
    args: {
        gutterBottom: true,
        children: smallIpsum,
    },
};

export const Italic: Story = {
    args: {
        italic: true,
        children: smallIpsum,
    },
};

export const LineHeight: Story = {
    args: {
        lineHeight: '2em',
        bgColor: '#00ff58',
        children: smallIpsum,
    },
};

export const Link: Story = {
    args: {
        link: 'https://www.lipsum.com/',
        children: smallIpsum,
    },
};

export const Monospace: Story = {
    args: {
        monospace: true,
        children: smallIpsum,
    },
};

export const NoWrap: Story = {
    args: {
        noWrap: true,
        children: largeIpsum,
    },
};

export const Nested: Story = {
    args: {},
    render: (args) => (
        <Box>
            <Text border width={'auto'}>
                Lorem Ipsum is simply dummy{' '}
                <Text border bold>
                    text of the
                </Text>
                printing and typesetting
            </Text>
            <Text border>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </Box>
    ),
};

export const Paragraph: Story = {
    args: {
        paragraph: true,
        children: smallIpsum,
    },
};

export const Size: Story = {
    args: {
        size: 30,
        children: smallIpsum,
    },
};

export const Strike: Story = {
    args: {
        strike: true,
        children: smallIpsum,
    },
};

export const Sub: Story = {
    args: {
        sub: true,
        children: smallIpsum,
    },
};

export const Sup: Story = {
    args: {
        sup: true,
        children: smallIpsum,
    },
};

export const Tooltip: Story = {
    args: {
        tooltip: largeIpsum,
        children: largeIpsum,
    },
};

export const TooltipPlacement: Story = {
    args: {
        tooltip: 'Lorem Ipsum',
        tooltipPlacement: 'right',
        children: largeIpsum,
    },
};

export const Underline: Story = {
    args: {
        underline: true,
        children: smallIpsum,
    },
};

export const HTML: Story = {
    args: {
        html: true,
        children: `hello <b>world</b><br>is html code`,
    },
};

export const Width: Story = {
    args: {
        width: 250,
        children: smallIpsum,
    },
};

export const ClassName: Story = {
    args: {
        className: 'mui-simple',
        children: largeIpsum,
    },
};
