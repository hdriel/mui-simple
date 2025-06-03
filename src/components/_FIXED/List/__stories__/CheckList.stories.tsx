import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import CheckList from '../CheckList';
import {
    Send as SendIcon,
    BeachAccess as BeachAccessIcon,
    Phone as PhoneIcon,
    Drafts as DraftsIcon,
    Inbox as InboxIcon,
    StarBorder as StarBorderIcon,
} from '@mui/icons-material';
import Button from '../../Button/Button';
import { Box } from '@mui/material';
import Checkbox from '../../Checkbox/Checkbox';

const meta: Meta<typeof CheckList> = {
    title: 'Data-Display/CheckList',
    component: CheckList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckList>;

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
        component: 'span',
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
        items: ['item 1', 'item 2', 'item 3', 'item 4'],
        dragAndDropItems: true,
        droppableId: 'test',
    },
    render: (args) => {
        const [items, setItems] = useState(args.items);
        return <CheckList {...args} items={items} onCheckListOrderChange={setItems} />;
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
                actions: [<Button key="a1" icon="Comment" />],
                items: [{ title: 'Hadriel Benjo', actions: [<Button key="a1" icon="Phone" />] }],
            },
            {
                title: 'Work',
                subtitle: 'Jan 7, 2014',
                avatar: { icon: 'Work' },
                actions: [<Button key="a1" icon="Send" />],
            },
            {
                title: 'Vacation',
                subtitle: 'July 20, 2014',
                avatar: { icon: <BeachAccessIcon /> },
                actions: [<Button key="a1" icon={<SendIcon />} />],
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
                actions: [<Button key="a1" icon="Phone" />, <Button key="a2" icon="Comment" />],
                divider: { variant: 'inset' },
            },
            {
                title: 'Summer BBQ',
                subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
                avatar: { image: '2.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: true,
            },
            {
                title: 'Oui Oui',
                subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?',
                avatar: { username: 'Sandra Adams', image: '3.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: {},
            },
        ],
    },
};

export const ActionsDraggableItems: Story = {
    args: {
        buttonItems: false,
        disablePaddingItems: false,
        alignItems: 'flex-start',
        dragAndDropItems: true,
        droppableId: 'test',
        items: [
            {
                title: 'Brunch this weekend?',
                subtitle: "Ali Connors — I'll be in your neighborhood doing errands this",
                avatar: { username: 'Ali Connors', image: '1.jpg' },
                actions: [<Button key="a1" icon="Phone" />, <Button key="a2" icon="Comment" />],
                divider: { variant: 'inset' },
            },
            {
                title: 'Summer BBQ',
                subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
                avatar: { image: '2.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: true,
            },
            {
                title: 'Oui Oui',
                subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?',
                avatar: { username: 'Sandra Adams', image: '3.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: {},
            },
        ],
    },
    render: (args) => {
        const [dragAndDropItems, setDragAndDropItems] = useState(args.dragAndDropItems);
        const [items, setItems] = useState(args.items);
        return (
            <Box>
                <Checkbox
                    checked={dragAndDropItems}
                    onChange={(event) => setDragAndDropItems(event.target.checked)}
                    label="Allow drag and drop"
                />
                <CheckList {...args} items={items} onListOrderChange={setItems} dragAndDropItems={dragAndDropItems} />
            </Box>
        );
    },
};

export const SelectedItems: Story = {
    args: {
        items: [{ title: 'Brunch this weekend?', selected: true }, { title: 'Summer BBQ' }, { title: 'Oui Oui' }],
    },
};

export const NestedCheckList = () => {
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
            component: 'div',
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

    return <CheckList title="Nested CheckList Items" items={items} />;
};

export const ControlTypeSwitch: Story = {
    args: {
        controlType: 'switch',
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
    },
};

export const ControlTypeCheckbox: Story = {
    args: {
        controlType: 'checkbox',
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
    },
};

export const alignCheckEndSwitch: Story = {
    args: {
        controlType: 'switch',
        alignCheck: 'end',
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
    },
};

export const alignCheckStartCheckbox: Story = {
    args: {
        controlType: 'checkbox',
        alignCheck: 'start',
        items: [
            { title: 'item 1', subtitle: 'subtitle 1' },
            { title: 'item 2', subtitle: 'subtitle 2' },
        ],
    },
};

export const NestedCheckbox: Story = {
    args: {
        controlType: 'checkbox',
        alignCheck: 'start',
        items: [
            {
                title: 'item 1',
                subtitle: 'subtitle 1',
                items: [{ title: 'sub item 1' }, { title: 'sub item 2' }],
                listItemsProps: { controlType: 'checkbox', alignCheck: 'start' },
            },
            {
                title: 'item 2',
                subtitle: 'subtitle 2',
                items: [{ title: 'sub item 1' }, { title: 'sub item 2' }],
                listItemsProps: { controlType: 'switch', alignCheck: 'end' },
            },
        ],
    },
};
