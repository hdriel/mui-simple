import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box, Stack, Button } from '@mui/material';
import { fn } from '@storybook/test';

import TextEllipsis from '../TextEllipsis';
import { action } from 'storybook/actions';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';

const meta: Meta<typeof TextEllipsis> = {
    title: 'Data-Display/Typography/Ellipsis',
    component: TextEllipsis,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextEllipsis>;

const smallIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const largeIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr";

export const Default: Story = {
    args: {
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Border: Story = {
    args: {
        border: true,
        rows: 2,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const AutoWidth: Story = {
    args: {
        autoWidth: true,
        bgColor: '#dccc0c',
        children: smallIpsum,
        onEllipsisChange: fn(),
    },
};

export const Width100: Story = {
    args: {
        width: 100,
        bgColor: '#dccc0c',
        children: smallIpsum,
        onEllipsisChange: fn(),
    },
};

export const NoWrap: Story = {
    args: {
        noWrap: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Nested: Story = {
    args: {},
    render: (args) => (
        <Box>
            <TextEllipsis border width={'auto'}>
                Lorem Ipsum is simply dummy{' '}
                <TextEllipsis border noWrap bold>
                    text of the
                </TextEllipsis>
                printing and typesetting
            </TextEllipsis>
            <TextEllipsis border>
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </TextEllipsis>
        </Box>
    ),
};

export const OnEllipsisChange: Story = {
    args: {
        children: largeIpsum,
        rows: 3,
    },
    render: (args) => {
        const [ellipsisState, setEllipsisState] = useState(false);

        return (
            <>
                <TextEllipsis
                    {...args}
                    tooltip={ellipsisState ? 'is ellipsis text' : undefined}
                    bgColor={ellipsisState ? 'primary' : 'secondary'}
                    onEllipsisChange={(value) => {
                        action('onEllipsisChange')(value);
                        setEllipsisState(value);
                    }}
                />

                {ellipsisState ? (
                    <Button variant="contained">hover ellipsis text</Button>
                ) : (
                    <Button variant="outlined">is not ellipsis text</Button>
                )}
            </>
        );
    },
};

export const Rows: Story = {
    args: {
        tooltip: true,
        rows: 2,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const ShowTooltipOnEllipsis: Story = {
    args: {
        showTooltipOnEllipsis: false,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const size: Story = {
    args: {
        size: 30,
        children: smallIpsum,
        onEllipsisChange: fn(),
    },
};

export const Tooltip: Story = {
    args: {
        tooltip: 'Lorem Ipsum',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const TooltipPlacement: Story = {
    args: {
        tooltip: 'Lorem Ipsum',
        tooltipPlacement: 'right',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Width: Story = {
    args: {
        border: true,
        width: 250,
        children: smallIpsum,
        onEllipsisChange: fn(),
    },
};

export const Align: Story = {
    args: {
        align: 'center',
        rows: 3,
        children: largeIpsum,
        onEllipsisChange: fn(),
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
                <TextEllipsis {...args} align={align} />
            </Stack>
        );
    },
};

export const AlignCenter: Story = {
    args: {
        alignCenter: true,
        children: largeIpsum,
        rows: 3,
        onEllipsisChange: fn(),
    },
};

export const AlignJustify: Story = {
    args: {
        alignJustify: true,
        children: largeIpsum,
        rows: 3,
        onEllipsisChange: fn(),
    },
};

export const AlignLeft: Story = {
    args: {
        alignLeft: true,
        children: largeIpsum,
        rows: 3,
        onEllipsisChange: fn(),
    },
};

export const AlignRight: Story = {
    args: {
        alignRight: true,
        children: largeIpsum,
        rows: 3,
        onEllipsisChange: fn(),
    },
};

export const BgColor: Story = {
    args: {
        bgColor: 'warning',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Bold: Story = {
    args: {
        bold: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const CharsCase_ = (args) => (
    <Stack spacing={3}>
        <TextEllipsis charsCase="lower">lower: {largeIpsum}</TextEllipsis>
        <TextEllipsis charsCase="upper">upper: {largeIpsum}</TextEllipsis>
        <TextEllipsis charsCase="capital">capital: {largeIpsum}</TextEllipsis>
    </Stack>
);

export const Color: Story = {
    args: {
        color: '#10cca0',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Component: Story = {
    args: {
        component: 'h1',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const GutterBottom: Story = {
    args: {
        gutterBottom: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Italic: Story = {
    args: {
        italic: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const LineHeight: Story = {
    args: {
        lineHeight: '2em',
        bgColor: '#00ff58',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Link: Story = {
    args: {
        link: 'https://www.lipsum.com/',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Monospace: Story = {
    args: {
        monospace: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Paragraph: Story = {
    args: {
        paragraph: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Size: Story = {
    args: {
        size: 30,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Strike: Story = {
    args: {
        strike: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Sub: Story = {
    args: {
        sub: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Sup: Story = {
    args: {
        sup: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const Underline: Story = {
    args: {
        underline: true,
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};

export const ClassName: Story = {
    args: {
        className: 'mui-simple',
        children: largeIpsum,
        onEllipsisChange: fn(),
    },
};
