import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';

import Typography from '../Typography';
import { a } from '@react-spring/web';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Typography> = {
    title: 'Data-Display/Typography',
    component: Typography,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

const smallIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const largeIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr";

export const Default: Story = {
    args: {},
};

export const AlignCenter: Story = {
    args: {
        alignCenter: true,
        noWrap: true,
        children: largeIpsum,
    },
};

export const AlignJustify: Story = {
    args: {
        alignJustify: true,
        noWrap: true,
        children: largeIpsum,
    },
};

export const AlignLeft: Story = {
    args: {
        alignLeft: true,
        noWrap: true,
        children: largeIpsum,
    },
};

export const AlignRight: Story = {
    args: {
        alignRight: true,
        noWrap: true,
        children: largeIpsum,
    },
};

export const AutoWidth: Story = {
    args: {
        autoWidth: true,
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

export const Border: Story = {
    args: {
        border: true,
        children: smallIpsum,
    },
};

export const CharsCase_ = (args) => (
    <Stack spacing={3}>
        <Typography charsCase="lower">{largeIpsum}</Typography>
        <Typography charsCase="upper">{largeIpsum}</Typography>
        <Typography charsCase="capital">{largeIpsum}</Typography>
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
        lineHeight: 2,
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
            <Typography border width={'auto'}>
                Lorem Ipsum is simply dummy{' '}
                <Typography border noWrap bold>
                    text of the
                </Typography>
                printing and typesetting
            </Typography>
            <Typography border>
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
        </Box>
    ),
};

export const OnEllipsisChange: Story = {
    args: {},
    render: (args) => {
        const [ellipsisState, setEllipsisState] = useState(false);
        return (
            <Typography
                border
                width={'auto'}
                bgColor={ellipsisState ? 'primary' : 'secondary'}
                onEllipsisChange={(value) => {
                    action('onEllipsisChange')(value);
                    setEllipsisState(value);
                }}
            >
                {smallIpsum}
            </Typography>
        );
    },
};

export const Paragraph: Story = {
    args: {
        paragraph: true,
        children: smallIpsum,
    },
};

export const Rows: Story = {
    args: {
        wrap: true,
        tooltip: true,
        rows: 2,
        children: largeIpsum,
    },
};

export const ShowTooltipOnEllipsis: Story = {
    args: {
        showTooltipOnEllipsis: false,
        children: largeIpsum,
    },
};

export const size: Story = {
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
        wrap: true,
        tooltip: 'Lorem Ipsum',
        children: largeIpsum,
    },
};

export const TooltipPlacement: Story = {
    args: {
        wrap: true,
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

export const Width: Story = {
    args: {
        width: 250,
        children: smallIpsum,
    },
};

export const Wrap: Story = {
    args: {
        wrap: false,
        children: largeIpsum,
    },
};
