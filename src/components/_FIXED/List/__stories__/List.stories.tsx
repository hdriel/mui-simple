import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box } from '@mui/material';
import List from '../List';
import { Send as SendIcon, BeachAccess as BeachAccessIcon } from '@mui/icons-material';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import { courseChapters, nestedList } from './List.mocks';

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
                <List {...args} items={items} onListOrderChange={setItems} dragAndDropItems={dragAndDropItems} />
            </Box>
        );
    },
};

export const SelectedItems: Story = {
    args: {
        items: [{ title: 'Brunch this weekend?', selected: true }, { title: 'Summer BBQ' }, { title: 'Oui Oui' }],
    },
};

export const NestedList = (args) => {
    return <List {...args} title="Nested List Items" items={nestedList} />;
};

export const DraggableNestedList = (args) => {
    const [items, setItems] = useState(nestedList);

    return (
        <List
            {...args}
            title="Draggable Nested List Items"
            items={items}
            onListOrderChange={(reorderedItems) => setItems(reorderedItems)}
            dragAndDropItems
            droppableId="root"
        />
    );
};

export const CourseChapters = (args) => {
    const [draggable, setDraggable] = useState(true);
    const [items, setItems] = useState(courseChapters);
    items.forEach((data) => {
        if (data?.listItemsProps?.dragAndDropItems !== undefined) {
            data.listItemsProps.dragAndDropItems = draggable;
        }
    });

    return (
        <>
            <Checkbox label="Draggable" value={draggable} onChange={(e, checked) => setDraggable(checked)} />
            <List
                {...args}
                title="Draggable Nested List Items"
                items={items}
                onListOrderChange={(reorderedItems: any) => setItems(reorderedItems)}
                dragAndDropItems={draggable}
                droppableId="root"
            />
        </>
    );
};

export const DefaultExpandedItem: Story = {
    args: {
        items: [
            {
                _id: '6403dc6f9575bec0486d3217',
                title: 'בסיס',
                order: 1,
                defaultExpanded: true,
                items: [
                    { _id: '6403dc6f9575bec0486d321a', title: 'משתנים', order: 1 },
                    { _id: '6403dc6f9575bec0486d321b', title: 'אובייקטים', order: 2 },
                    { _id: '6403dc6f9575bec0486d321c', title: 'פונקציות', order: 3 },
                    { _id: '6403dc6f9575bec0486d321d', title: 'מערכים', order: 4 },
                    { _id: '6403dc6f9575bec0486d321e', title: 'map array', order: 5 },
                ],
            },
            {
                _id: '6403dc6f9575bec0486d3216',
                title: 'מבוא',
                order: 2,
                items: [
                    { _id: '6403dc6f9575bec0486d3218', title: 'Hello JS', order: 1 },
                    { _id: '6403dc6f9575bec0486d3219', title: 'דוגמה', order: 2 },
                ],
            },
        ],
    },
};

export const ExpandedItem: Story = {
    args: {
        items: [
            {
                _id: '6403dc6f9575bec0486d3217',
                title: 'בסיס',
                order: 1,
                expanded: true,
                items: [
                    { _id: '6403dc6f9575bec0486d321a', title: 'משתנים', order: 1 },
                    { _id: '6403dc6f9575bec0486d321b', title: 'אובייקטים', order: 2 },
                    { _id: '6403dc6f9575bec0486d321c', title: 'פונקציות', order: 3 },
                    { _id: '6403dc6f9575bec0486d321d', title: 'מערכים', order: 4 },
                    { _id: '6403dc6f9575bec0486d321e', title: 'map array', order: 5 },
                ],
            },
            {
                _id: '6403dc6f9575bec0486d3216',
                title: 'מבוא',
                order: 2,
                items: [
                    { _id: '6403dc6f9575bec0486d3218', title: 'Hello JS', order: 1 },
                    { _id: '6403dc6f9575bec0486d3219', title: 'דוגמה', order: 2 },
                ],
            },
        ],
    },
};

export const ItemsStyles: Story = {
    args: {
        // sx: { width: '80%' },
        title: 'Custom styles',
        sxTitle: { fontSize: '20px', fontWeight: 'bold', color: '#dd6f00' },
        bgColor: 'primary.light',
        items: [
            {
                title: 'Brunch this weekend?',
                subtitle: "Ali Connors — I'll be in your neighborhood doing errands this",
                avatar: { username: 'Ali Connors', image: '1.jpg' },
                actions: [<Button key="a1" icon="Phone" />, <Button key="a2" icon="Comment" />],
                divider: { variant: 'inset' },
                titleStyle: { fontSize: '20px', fontWeight: 'bold' },
                subtitleStyle: { fontSize: '18px', fontWeight: 'bold', width: '80%' },
            },
            {
                title: 'Summer BBQ',
                subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
                avatar: { image: '2.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: true,
                style: { background: 'error.light' },
                titleStyle: { fontWeight: 'bold' },
                subtitleStyle: { fontWeight: 'bold', width: '80%' },
            },
            {
                title: 'Oui Oui',
                subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?',
                avatar: { username: 'Sandra Adams', image: '3.jpg' },
                actions: [<Button key="a1" icon="Send" />],
                divider: {},
                style: { background: '#10dd00' },
                titleStyle: { fontSize: '20px' },
                subtitleStyle: { fontSize: '18px', width: '80%' },
            },
        ],
    },
};

export const MouseEvents: Story = {
    args: {
        title: 'Custom styles',
        onMouseEnter: (event, item) => console.log('onMouseEnter', event, item),
        onMouseLeave: (event, item) => console.log('onMouseLeave', event, item),
        items: [
            {
                title: 'Brunch this weekend?',
                subtitle: "Ali Connors — I'll be in your neighborhood doing errands this",
                avatar: { username: 'Ali Connors', image: '1.jpg' },
                actions: [<Button key="a1" icon="Phone" />, <Button key="a2" icon="Comment" />],
            },
            {
                title: 'Summer BBQ',
                subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
                avatar: { image: '2.jpg' },
                actions: [<Button key="a1" icon="Send" />],
            },
            {
                title: 'Oui Oui',
                subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?',
                avatar: { username: 'Sandra Adams', image: '3.jpg' },
                actions: [<Button key="a1" icon="Send" />],
            },
        ],
    },
};
