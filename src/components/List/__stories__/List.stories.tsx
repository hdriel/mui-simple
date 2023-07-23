import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import List from '../List';

const meta: Meta<typeof List> = {
    title: 'Data-Display/List',
    component: List,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {},
};

export const AlignItems: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        alignItems: 'flex-start',
    },
};

export const ButtonItems: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        buttonItems: true,
    },
};

export const Component: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        component: 'p',
    },
};

export const Dense: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        dense: true,
    },
};

export const DisableGuttersItems: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        disableGuttersItems: true,
    },
};

export const DisablePadding: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        disablePadding: true,
    },
};

export const DisablePaddingItems: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        disablePaddingItems: true,
    },
};

export const DragAndDropItems: Story = {
    args: {
        items: [{ title: 'item 1' }, { title: 'item 2' }],
        dragAndDropItems: true,
        droppableId: 'test',
    },
    render: (args) => {
        const [items, setItems] = useState(args.items);
        return <List {...args} items={items} onListOrderChange={setItems} />;
    },
};

export const EnableSubtitle: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        enableSubtitle: true,
    },
};

export const FlexDirectionItems: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        flexDirectionItems: 'row',
    },
};

export const InsetItems: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        insetItems: true,
    },
};

export const Title: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        title: 'Title list',
    },
};

export const UseTransition: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        useTransition: false,
    },
};

export const Width: Story = {
    args: {
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
        width: '400px',
    },
};

export const ItemsString: Story = {
    args: {
        items: ['str item 1', 'str item 2', 'str item 3'],
    },
};

export const ItemsObject: Story = {
    args: {
        items: [{ title: 'item 1', subtitle: 'subtitle 1' }],
    },
};

export const SubItems: Story = {
    args: {
        items: [
            {
                title: 'item 1',
                subtitle: 'subtitle 1',
                items: [
                    { title: 'item 1.1', subtitle: 'subtitle 1.1' },
                    { title: 'item 1.1', subtitle: 'subtitle 1.2' },
                ],
            },
            {
                title: 'item 2',
                subtitle: 'subtitle 2',
            },
        ],
    },
};

// items?: Array<string | ListItemProps>;
