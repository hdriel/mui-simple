import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import List from '../List';
import {
    Send as SendIcon,
    BeachAccess as BeachAccessIcon,
    Phone as PhoneIcon,
    Comment as CommentIcon,
    Drafts as DraftsIcon,
    Inbox as InboxIcon,
    StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import Button from '../../_FIXED/Button/Button';

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

export const AvatarItems: Story = {
    args: {
        items: [
            {
                title: 'Photos',
                subtitle: 'Jan 9, 2014',
                avatar: { icon: 'Image' },
                actions: [<Button icon="Comment" />],
                items: [{ title: 'Hadriel Benjo', actions: [<Button icon="Phone" />] }],
            },
            {
                title: 'Work',
                subtitle: 'Jan 7, 2014',
                avatar: { icon: 'Work' },
                actions: [<Button icon="Send" />],
            },
            {
                title: 'Vacation',
                subtitle: 'July 20, 2014',
                avatar: { icon: <BeachAccessIcon /> },
                actions: [<Button icon={<SendIcon />} />],
            },
        ],
    },
};

export const StartIconItems: Story = {
    args: {
        items: [
            {
                title: 'Inbox',
                startIcon: 'Inbox',
                items: [
                    { title: 'Hadriel Benjo', startIcon: 'Person' },
                    { title: 'inset item with startIcon', startIcon: 'AccessTime', inset: true },
                ],
            },
            { title: 'Drafts', startIcon: 'Drafts', divider: true },
            { title: 'Trash' },
            'Spam',
        ],
    },
};

export const DividerItems: Story = {
    args: {
        items: [
            {
                title: 'Inbox',
                startIcon: 'Inbox',
                divider: true,
                items: [
                    { title: 'Hadriel Benjo', startIcon: 'Person', divider: true },
                    { title: 'inset item with startIcon', startIcon: 'AccessTime', inset: true, divider: true },
                ],
            },
            { title: 'Drafts', startIcon: 'Drafts', divider: true },
            { title: 'Trash', divider: true },
            'Spam',
        ],
    },
};

export const LinkItems: Story = {
    args: {
        items: [
            {
                title: 'Google',
                startIcon: 'Google',
                link: 'https://google.com',
            },
            {
                title: 'YouTube',
                startIcon: 'YouTube',
                link: 'https://YouTube.com',
            },
        ],
    },
};

export const ActionsItems: Story = {
    args: {
        buttonItems: false,
        disablePaddingItems: false,
        alignItems: 'flex-start',
        items: [
            {
                title: 'Brunch this weekend?',
                subtitle: "Ali Connors — I'll be in your neighborhood doing errands this",
                avatar: { username: 'Ali Connors', image: '1.jpg' },
                actions: [<Button icon="Phone" />, <Button icon="Comment" />],
                divider: { variant: 'inset' },
            },
            {
                title: 'Summer BBQ',
                subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
                avatar: { image: '2.jpg' },
                actions: [<Button icon="Send" />],
                divider: true,
            },
            {
                title: 'Oui Oui',
                subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?',
                avatar: { username: 'Sandra Adams', image: '3.jpg' },
                actions: [<Button icon="Send" />],
                divider: {},
            },
        ],
    },
};

export const NestedList = () => {
    const items = [
        {
            startIcon: <SendIcon />,
            title: 'Sent mail',
        },
        {
            startIcon: <DraftsIcon />,
            title: 'Drafts',
        },
        {
            startIcon: <InboxIcon />,
            title: 'Inbox',
            items: [
                {
                    startIcon: <StarBorderIcon />,
                    title: 'Starred',
                    items: [
                        {
                            startIcon: 'LooksOne',
                            title: 'Mail One',
                            inset: true,
                        },
                        {
                            startIcon: 'LooksTwo',
                            title: 'Mail Two',
                            inset: true,
                        },
                        {
                            startIcon: 'Looks3',
                            title: 'Mail 3',
                            inset: true,
                            items: [
                                {
                                    startIcon: 'ThirtyFpsSelect',
                                    title: 'something',
                                    inset: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            startIcon: <PhoneIcon />,
            title: 'Recents',
        },
    ];

    return <List title="Nested List Items" items={items} />;
};
